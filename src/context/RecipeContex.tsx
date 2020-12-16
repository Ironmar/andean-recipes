import React, { createContext, useEffect, useState } from "react";
import { IRecipe } from "../interfaces/IRecipes";

type RecipeContexType = {
  recipes: IRecipe[];
  setRecipes: Function;
};
type Props = {
  children: React.ReactNode;
};

export const RecipeContex = createContext<RecipeContexType | undefined>(
  undefined
);

const RecipeProvider = ({ children }: Props) => {
  let key: string = "recipes";
  let initialRecipes = JSON.parse(localStorage.getItem(key)!);
  if (!initialRecipes) {
    initialRecipes = [];
  }

  const [recipes, setRecipes] = useState<IRecipe[]>(initialRecipes);
  useEffect(() => {
    if (initialRecipes) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    } else {
      localStorage.setItem("recipes", JSON.stringify([]));
    }
  }, [initialRecipes, recipes]);

  return (
    <RecipeContex.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContex.Provider>
  );
};
export default RecipeProvider;
