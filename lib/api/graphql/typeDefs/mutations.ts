import { gql } from 'apollo-server-micro'

export default gql`
    type Mutation {
        createBocata(name: String!, price: Float, ingredients: [ID]): Bocata!
        updateBocata(name: String!, price: Float, id:ID!, ingredients: [ID]): Bocata!
        deleteBocata(id: ID!): Boolean
        createIngredient(name: String!): Ingredient!
        updateIngredient(id: ID!, name: String!): Ingredient!
        deleteIngredient(id: ID!): Boolean
    }
`
