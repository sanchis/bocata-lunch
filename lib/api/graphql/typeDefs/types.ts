import { gql } from 'apollo-server-micro'

export default gql`
    type Bocata {
        id: ID!
        name: String!
        price: Float
    }

    type Ingredient {
        id: ID!
        name: String!
    }
`
