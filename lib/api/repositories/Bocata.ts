import { JSONFile } from 'lowdb'
import { Bocata, BocataPartial, BocataUnique } from '../models/Bocata'
import { LowDbRepository } from './LowDb'
import { v4 } from 'uuid'
import { Ingredient, IngredientPartial, IngredientUnique } from '../models/Ingredient'

export default class Repository extends LowDbRepository<Bocata, BocataPartial, BocataUnique> {
  constructor (private readonly ingredientRepo: LowDbRepository<Ingredient, IngredientPartial, IngredientUnique>) {
    super(new JSONFile('bocatas.json'))
  }

  async create (bocata: BocataPartial): Promise<Bocata> {
    const bocataCreate: Bocata = {
      ...bocata,
      id: v4()
    }
    const bocataCreated = await super.create(bocataCreate)
    bocataCreated.ingredients = await this.ingredientRepo.includeIds(bocataCreated.ingredients)
    return bocataCreate
  }

  async update (bocata: BocataPartial, bocataUnique: BocataUnique): Promise<Bocata> {
    const bocataUpdated = await super.update(bocata, bocataUnique)

    if (bocataUpdated.ingredients !== undefined && bocataUpdated.ingredients.length > 0) {
      bocataUpdated.ingredients = await this.ingredientRepo.includeIds(bocataUpdated.ingredients)
    } else {
      bocataUpdated.ingredients = []
    }
    return bocataUpdated
  }

  async getAll (): Promise<Bocata[]> {
    const data = await this.getData()
    const bocatas = data.map(async bocata => {
      if (bocata.ingredients !== undefined && bocata.ingredients.length > 0) {
        bocata.ingredients = await this.ingredientRepo.includeIds(bocata.ingredients)
      } else {
        bocata.ingredients = []
      }
      return bocata
    })
    return await Promise.all(bocatas)
  }
}
