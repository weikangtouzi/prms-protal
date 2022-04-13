import {ApolloClient, InMemoryCache, ApolloLink, gql, concat} from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'

const isServer = typeof window === 'undefined'
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState

let CLIENT

const link = createUploadLink({
  uri: process.env.NEXT_PUBLIC_URI,
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const authorization = !isServer && localStorage.getItem('chenZaoZhaoKey')

  operation.setContext(({headers = {}}) => ({
    headers: authorization ? {
      ...headers,
      authorization,
    }: headers,
  }))

  return forward(operation)
})

export function getApolloClient(forceNew) {
  if (!CLIENT || forceNew) {
    CLIENT = new ApolloClient({
      ssrMode: isServer,
      link: concat(authMiddleware, link),
      cache: new InMemoryCache().restore(windowApolloState || {}),
    })
  }

  return CLIENT
}
