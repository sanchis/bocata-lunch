import { v4 } from 'uuid'
import { UpdateElementNotFound } from '../errors'
import { Ingredient, IngredientPartial, IngredientUnique } from '../models/Ingredient'
import { Repository } from '../models/Repository'

export default class BocataService {
  constructor (private readonly repository: Repository<Ingredient, IngredientPartial, IngredientUnique>) { }

  async getIngredientList (): Promise<Ingredient[]> {
    return await this.repository.getAll()
  }

  async createIngredient (ingredient: IngredientPartial): Promise<Ingredient> {
    return await this.repository.create({ ...ingredient, id: v4() }) // :😕
  }

  async getIngredient (obj: IngredientUnique): Promise<Ingredient| null | undefined> {
    return await this.repository.getOneUnique(obj)
  }

  async deleteIngredient (obj: IngredientUnique): Promise<void> {
    return await this.repository.delete(obj)
  }

  async updateIngredient (obj: IngredientPartial, objFind: IngredientUnique): Promise<Ingredient> {
    const existElementToUpdate = await this.repository.exist(objFind)
    if (!existElementToUpdate) {
      throw new UpdateElementNotFound()
    }
    return await this.repository.update(obj, objFind)
  }
}
