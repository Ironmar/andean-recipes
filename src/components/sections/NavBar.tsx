import React, { useState } from "react";
import tinkin from "../../assets/images/tinkin.png";
import add from "../../assets/images/add_icon.svg";
import FormModal from "../generics/FormModal";
const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {showModal && <FormModal setShowModal={setShowModal} />}
      <div className="nav">
        <button
          className="add-button"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <img src={add} alt="add_icon" />
          Add Recipe
        </button>
        <img className="logo" src={tinkin} alt="tinkin_logo" />
      </div>
    </>
  );
};
export default Navbar;
