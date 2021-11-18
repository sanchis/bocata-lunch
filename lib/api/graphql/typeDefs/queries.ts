import { gql } from 'apollo-server-micro'

export default gql`
    type Query {
        bocataList: [Bocata]!
        bocata(id: ID!): Bocata
        ingredientList: [Ingredient]!
        ingredient(id: ID!): Ingredient
    }
`
