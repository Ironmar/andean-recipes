import React, { useState } from "react";
import { IIngredient } from "../../interfaces/IRecipes";
type Props = {
  element: IIngredient;
};
const Ingredient: React.FC<Props> = ({ element }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const { ingredient, quantity } = element;

  const selected = checked ? "checked" : "";
  return (
    <div className="ingredient">
      <div
        className={`mark-ingredient ${selected}`}
        onClick={() => setChecked(!checked)}
      >
        {checked ? "✓" : ""}
      </div>
      <p>
        {quantity} {ingredient}
      </p>
    </div>
  );
};
export default Ingredient;
