import { gql, ApolloServer } from 'apollo-server-micro'
import { IncomingMessage, ServerResponse } from 'http'
import { BocataService } from '../services'

const typeDefs = gql`
    type Bocata {
        id: ID!
        name: String!
    }

    type Query {
        bocataList: [Bocata]!
    }
`

const resolvers = {
  Query: {
    bocataList: async () => await BocataService.getBocataList()
  }
}

export async function createApolloServer (req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method === 'OPTIONS') {
    res.end()
    return
  }
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })

  await apolloServer.start()
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res)
}
