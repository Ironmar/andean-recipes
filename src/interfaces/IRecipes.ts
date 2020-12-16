export interface IIngredient {
  ingredient: string;
  quantity: string;
}

export interface IRecipe {
  id?: string;
  readed?: false | boolean;
  name: string;
  ingredients: IIngredient[];
  instructions: string;
}
