import { gql } from 'apollo-server-micro'

export default gql`
    type Mutation {
        bocataList: [Bocata]!
        bocata(id: String!): Bocata
    }
`
