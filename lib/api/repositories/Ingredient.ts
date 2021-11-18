import { JSONFile } from 'lowdb'
import { LowDbRepository } from './LowDb'
import { Ingredient, IngredientPartial, IngredientUnique } from '../models/Ingredient'

export default class Repository extends LowDbRepository<Ingredient, IngredientPartial, IngredientUnique> {
  constructor () {
    super(new JSONFile('ingredients.json'))
  }
}
