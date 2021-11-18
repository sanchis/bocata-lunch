import BocataRepository from '../repositories/Bocata'
import IngredientRepository from '../repositories/Ingredient'
import BocataSrv from './Bocata'
import IngredientSrv from './Ingredient'

export const BocataService = new BocataSrv(new BocataRepository())
export const IngredientService = new IngredientSrv(new IngredientRepository())
