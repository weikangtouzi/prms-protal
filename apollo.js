import {ApolloClient, InMemoryCache, gql} from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'

const isServer = typeof window === 'undefined'
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState

let authorization = !isServer && localStorage.getItem('chenZaoZhaoKey')

let CLIENT

export function getApolloClient(forceNew) {
  if (!CLIENT || forceNew) {
    CLIENT = new ApolloClient({
      ssrMode: isServer,
      link: createUploadLink({
        uri: process.env.NEXT_PUBLIC_URI,
        credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
        headers: {
          authorization,
        },
      }),
      cache: new InMemoryCache().restore(windowApolloState || {}),

      /**
        // Default options to disable SSR for all queries.
        defaultOptions: {
          // Skip queries when server side rendering
          // https://www.apollographql.com/docs/react/data/queries/#ssr
          watchQuery: {
            ssr: false
          },
          query: {
            ssr: false
          }
          // Selectively enable specific queries like so:
          // `useQuery(QUERY, { ssr: true });`
        }
      */
    })
  }

  return CLIENT
}

export const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`
