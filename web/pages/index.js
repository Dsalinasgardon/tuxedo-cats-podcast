import Link from 'next/link'
import sanityClient from '@sanity/client'
const client = sanityClient({
  projectId: '7yydvelu',
  dataset: 'production',
  apiVersion: '2022-06-01',
  useCdn: true
})

const Index = ({ episodes, podcast }) => {
  return (
    <div>
      <h1>{podcast.title}</h1>
      <p>{podcast.description}</p>
      <img src= {podcast.coverArt.url+"?w=200"}/> 
      {episodes.length > 0 && episodes.map(
        ({ _id, title = '', slug = '', publishedAt = '2022-06-08' }) =>
          slug && (
            <li key={_id}>
              <Link href="/episodes/[slug]" as={`/episodes/${slug.current}`}>
                <a>{title}</a>
              </Link>{' '}
              ({new Date(publishedAt).toDateString()})
            </li>
          )
      )}
    </div>
  )
}

export async function getStaticProps() {
  const pagedata = await client.fetch(`{
    "podcast": *[_id == "697e74b0-6760-4235-95ef-55cec9db9466"] [0] {
    ...,
    coverArt {
     "url":asset->.url}},
     
     "episodes": *[_type == "episode" && schedule.publish  < now()] | order(schedule.publish desc) 
    }
    `)
  console.log(pagedata)
  return {
    props:
      pagedata
  }
}

export default Index