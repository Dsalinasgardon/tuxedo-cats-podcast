import sanityClient from '@sanity/client'
const client = sanityClient({
  projectId: '7yydvelu',
  dataset: 'production',
  apiVersion: '2022-06-01', 
  useCdn: true
})

const episode = props => {
  return (
    <div>
      <img src = {props.episode.coverArt.url+"?w=200"} />  
      <h1>{props.episode.title}</h1>
      <h2>{props.episode.description}</h2>
      <p>{props.episode.summary}</p>
      <audio controls> 
       <source src = {props.episode.file.url} />
      </audio>

    </div>
    
  )
}
export async function getStaticPaths () {
  const pagedata = await client.fetch(`
    *[ _type == "episode"] {"slug": slug.current}

  `)
  const paths = pagedata.map(episode => ({ params: { slug: episode.slug } }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  const pagedata = await client.fetch(`
  *[ _type == "episode" && slug.current match $slug ] { 
    ..., 
    coverArt { "url": asset -> url },
    file { "url": asset -> url },
  } [0] 

  `, { slug }
  )

  if (!pagedata) {
    return { notFound: true }
  }

  return {
    props: {
      episode: pagedata
      
    }
  }
}

export default episode
