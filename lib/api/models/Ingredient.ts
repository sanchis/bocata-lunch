export interface Ingredient extends IngredientPartial, IngredientUnique {

}

export interface IngredientUnique{
  id: string
}

export interface IngredientPartial{
  name: string
}
