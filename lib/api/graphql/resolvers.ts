import { BocataService } from '../services'
import { Bocata, BocataPartial, BocataUnique } from '../models/Bocata'

const resolvers = {
  Query: {
    bocataList: async () => await BocataService.getBocataList(),
    bocata: async (parent: any, args: BocataUnique, context: any) => await BocataService.getBocata(args)
  },
  Mutation: {
    createBocata: async (parent: any, args: BocataPartial, context: any) => await BocataService.createBocata(args),
    updateBocata: async (parent: any, args: Bocata, context: any) => {
      const { id, ...obj } = args
      return await BocataService.updateBocata(obj, { id })
    },
    deleteBocata: async (parent: any, args: BocataUnique, context: any) => await BocataService.deleteBocata(args)
  }
}

export default resolvers
