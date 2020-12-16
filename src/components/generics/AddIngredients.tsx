import React, { ChangeEvent, useEffect, useState } from "react";
import trash from "../../assets/images/trash_icon.svg";
import { wordsRegx } from "../../constants/regExp";
import { IIngredient } from "../../interfaces/IRecipes";
import Error from "../generics/Error";

type Props = {
  addIngredient: Function;
};

const AddIngredients: React.FC<Props> = ({ addIngredient }) => {
  const [inputValue, setInputValue] = useState<IIngredient>({
    ingredient: "",
    quantity: "",
  });

  const [errorWords, setErrorWords] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { ingredient, quantity } = inputValue;

  const checkQuatity = (value: number) => {
    if (value % 3 === 0 || value === 1) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(target.value);
    setInputValue({ ...inputValue, [target.name]: target.value });
    const validator = wordsRegx.test(target.value);
    if (isNaN(value)) {
      setErrorWords(validator);
    } else {
      checkQuatity(value);
    }
  };

  useEffect(() => {
    addIngredient(inputValue);
  }, [inputValue, addIngredient]);

  return (
    <>
      <div className="wrapper">
        <input
          className="input-text-form"
          type="text"
          placeholder="Ingredient"
          name="ingredient"
          value={ingredient}
          autoComplete={"off"}
          onChange={handleChange}
        />
        <input
          className="input-number-form"
          type="number"
          min="1"
          placeholder="0"
          name="quantity"
          value={quantity}
          autoComplete={"off"}
          onChange={handleChange}
        />
        <button className="trash-button" type="button">
          <img src={trash} alt="trash_icon" />
        </button>
      </div>
      <div className="error">
        {error ? <Error message="Incorrect Value" /> : null}
        {errorWords ? <Error message="Incorrect ingredient" /> : null}
      </div>
    </>
  );
};
export default AddIngredients;
