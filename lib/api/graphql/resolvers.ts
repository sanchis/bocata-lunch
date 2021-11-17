import { BocataService } from '../services'
import { BocataUnique } from '../models/Bocata'

const resolvers = {
  Query: {
    bocataList: async () => await BocataService.getBocataList(),
    bocata: async (parent: any, args: BocataUnique, context: any) => await BocataService.getBocata(args)
  }
}

export default resolvers
