import React from "react";
import AsideImage from "./components/sections/AsideImage";
import MainContent from "./components/sections/MainContent";
import Navbar from "./components/sections/NavBar";
import RecipeProvider from "./context/RecipeContex";

const App: React.FC = () => {
  return (
    <RecipeProvider>
      <Navbar />
      <div className="container">
        <MainContent />
        <AsideImage />
      </div>
    </RecipeProvider>
  );
};
export default App;
