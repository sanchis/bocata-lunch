import { BocataService, IngredientService } from '../services'
import { Bocata, BocataPartial, BocataUnique } from '../models/Bocata'
import { Ingredient, IngredientPartial, IngredientUnique } from '../models/Ingredient'

const resolvers = {
  Query: {
    bocataList: async () => await BocataService.getBocataList(),
    bocata: async (parent: any, args: BocataUnique, context: any) => await BocataService.getBocata(args),
    ingredientList: async () => await IngredientService.getIngredientList(),
    ingredient: async (parent: any, args: IngredientUnique, context: any) => await IngredientService.getIngredient(args)
  },
  Mutation: {
    createBocata: async (parent: any, args: BocataPartial, context: any) => await BocataService.createBocata(args),
    updateBocata: async (parent: any, args: Bocata, context: any) => {
      const { id, ...obj } = args
      return await BocataService.updateBocata(obj, { id })
    },
    deleteBocata: async (parent: any, args: BocataUnique, context: any) => await BocataService.deleteBocata(args),
    createIngredient: async (parent: any, args: IngredientPartial, context: any) => await IngredientService.createIngredient(args),
    updateIngredient: async (parent: any, args: Ingredient, context: any) => {
      const { id, ...obj } = args
      return await IngredientService.updateIngredient(obj, { id })
    },
    deleteIngredient: async (parent: any, args: IngredientUnique, context: any) => await IngredientService.deleteIngredient(args)

  }
}

export default resolvers
