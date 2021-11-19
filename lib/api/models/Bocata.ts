import { Ingredient } from './Ingredient'

export interface Bocata extends BocataPartial, BocataUnique {

}

export interface BocataUnique{
  id: string
}

export interface BocataPartial{
  name: string
  price: number
  ingredients: Ingredient[]
}
