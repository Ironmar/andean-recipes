import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { RecipeContex } from "../../context/RecipeContex";
import trashIcon from "../../assets/images/trash_icon.svg";
import { v4 as uuidv4 } from "uuid";
import Ingredient from "../generics/Ingredient";
import { IRecipe } from "../../interfaces/IRecipes";
import { papasCuero } from "../../fixtures/recipe";
const MainContent: React.FC = () => {
  const { recipes, setRecipes } = useContext(RecipeContex)!;
  const [recipe, setRecipe] = useState<IRecipe>(papasCuero);

  const { id, readed, name, ingredients, instructions } = recipe!;

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const getRecipe = recipes.find((element) => element.id === target.value);
    setRecipe(getRecipe!);
  };

  const deleteRecipe = () => {
    const getElements = recipes.filter((item) => item.id !== id);
    setRecipes(getElements);
  };

  const markRead = () => {
    setRecipe({ ...recipe, readed: true });
  };

  useEffect(() => {
    if (recipes === undefined || recipes.length === 0) {
      setRecipe(papasCuero);
      return;
    }
    setRecipe(recipes[0]);
  }, [recipes, setRecipes]);

  const read = readed ? "Readed" : "Not Read";
  const select = readed ? "green" : "";
  return (
    <div className="main-content">
      <div className="head">
        <h2>Kitchen Recipes</h2>
        <div className="select">
          <select className="select-recipe" onChange={handleChange}>
            <option className="opt" value="" hidden>
              Select a Recipe
            </option>
            {recipes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="container-recipe">
        <div className="bar">
          <div>
            <p className="title-recipe">{name}</p>
            <span>|</span>
            <p className={`readed-text ${select}`}>{read}</p>
          </div>
          <button type="button" onClick={deleteRecipe}>
            <img src={trashIcon} alt="trash_icon" />
          </button>
        </div>
        <div className="wrap-recipe">
          <div className="recipe-content">
            <h3>Ingredients</h3>
            <div className="ingredients">
              {ingredients.map((ingredient) => (
                <Ingredient key={uuidv4()} element={ingredient} />
              ))}
            </div>
            <h3>Instructions</h3>
            <div className="instructions">{instructions}</div>
          </div>
        </div>
        <button className="button-read" onClick={markRead}>
          ✓ Mark as Read
        </button>
      </div>
    </div>
  );
};
export default MainContent;
