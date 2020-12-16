import React from "react";
import foodDish from "../../assets/images/food_dish.jpg";
const AsideImage: React.FC = () => {
  return (
    <div className="image-container">
      <img src={foodDish} alt="food_dish" />
    </div>
  );
};
export default AsideImage;
