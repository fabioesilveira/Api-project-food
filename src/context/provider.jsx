import Context from './context';
import { useState } from "react";

function Provider({ children }) {
    const [email, setEmail] = useState("");
    const [favRecipes, setFavRecipes] = useState([]);
    const [recipesDone, setRecipesDone] = useState([]);



    const contextValue = {
      email, setEmail,
      favRecipes, setFavRecipes,
      recipesDone, setRecipesDone
    };


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}


export default Provider;