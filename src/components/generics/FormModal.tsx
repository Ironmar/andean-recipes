import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import AddIngredients from "./AddIngredients";
import { v4 as uuidv4 } from "uuid";

import addIcon from "../../assets/images/add_icon.svg";
import { IIngredient, IRecipe } from "../../interfaces/IRecipes";
import { RecipeContex } from "../../context/RecipeContex";
import { wordsRegx } from "../../constants/regExp";
import Error from "../generics/Error";

type Props = {
  setShowModal: (value: boolean) => void;
};

type inputElementType = React.ReactElement;
type eventChangeType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const FormModal: React.FC<Props> = ({ setShowModal }) => {
  const recipeContex = useContext(RecipeContex);
  const [inputElement, setInputElement] = useState<inputElementType[]>([]);

  const [ingredientsList, setIngredientsList] = useState<IIngredient[]>([]);
  const [formValue, setFormValue] = useState<IRecipe>({
    name: "",
    ingredients: [],
    instructions: "",
  });
  const [errorWords, setErrorWords] = useState<boolean>(false);

  const { name, instructions } = formValue;

  const addIngredent = (value: IIngredient) => {
    setIngredientsList([...ingredientsList, value]);
  };

  const handleChange = ({ target }: eventChangeType) => {
    setFormValue({ ...formValue, [target.name]: target.value });
    const validator = wordsRegx.test(target.value);
    setErrorWords(validator);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formValue.id = uuidv4();
    recipeContex?.setRecipes([
      ...recipeContex.recipes,
      { ...formValue, ingredients: ingredientsList },
    ]);
    setShowModal(false);
  };

  return (
    <div className="modal">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group-header">
          <label htmlFor="recipe">New Recipe</label>
          <input
            id="recipe"
            type="text"
            placeholder="Recipe Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <button
            type="button"
            className="close-modal"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>
        <div className="form-group">
          <h3>Ingredients</h3>
          {inputElement.map((element) => element)}
          <button
            className="modal-add-button"
            type="button"
            onClick={() =>
              setInputElement([
                ...inputElement,
                <AddIngredients key={uuidv4()} addIngredient={addIngredent} />,
              ])
            }
          >
            <img src={addIcon} alt="add_icon" />
          </button>
        </div>
        <div className="form-group">
          <h3>Instructions</h3>
          <textarea
            className="instructions"
            placeholder="Instructions"
            name="instructions"
            value={instructions}
            onChange={handleChange}
          ></textarea>
          {errorWords && <Error message="Incorrect word" />}
        </div>
        <button className="create-recipe " type="submit">
          ✓ Create
        </button>
      </form>
    </div>
  );
};
export default FormModal;
