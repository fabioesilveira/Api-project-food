import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./recipe.css"

function Recipe() {

    const [recipe, setRecipe] = useState([])
    const params = useParams()

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            const res = req.data.meals
            setRecipe(res)
        }

        fetchApi()
    }, [])


    return (
        <div className="my-container">
            {recipe.map((e) => (
                <div>
                    <img src={e.strMealThumb} />
                    <div className="div-meal-icon">
                    <h2>{e.strMeal}</h2>
                    <i class="bi bi-heart-fill"></i>
                    </div>
                    <h4>{e.strCategory}</h4>
    
                    <h3>Ingredients</h3>
                    <ul>
                        <li>{e.strIngredient1}</li>
                        <li>{e.strIngredient2}</li>
                        <li>{e.strIngredient3}</li>
                        <li>{e.strIngredient4}</li>
                        <li>{e.strIngredient5}</li>
                    </ul>

                    <h3>Instructions</h3>
                    <p>{e.strInstructions}</p>

                    <iframe
                        width="560"
                        height="315"
                        src={e.strYoutube?.replace("watch?v=", "embed/")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>

                    <button>Start Recipe</button>


                </div>
            ))}

        </div>
    )
}

export default Recipe;