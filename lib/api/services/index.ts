import BocataRepository from '../repositories/Bocata'
import IngredientRepository from '../repositories/Ingredient'
import BocataSrv from './Bocata'
import IngredientSrv from './Ingredient'

const ingredientRepository = new IngredientRepository()
export const BocataService = new BocataSrv(new BocataRepository(ingredientRepository))
export const IngredientService = new IngredientSrv(ingredientRepository)
