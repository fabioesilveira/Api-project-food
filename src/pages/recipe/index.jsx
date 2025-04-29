import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./recipe.css"
import NavHeader from "../../components/navHeader";
import Footer from "../../components/footer";
import Button from 'react-bootstrap/Button';
import Context from "../../context/context";

function Recipe() {

    const [recipe, setRecipe] = useState([])
    const params = useParams()
    const {favRecipes, setFavRecipes, recipesDone, setRecipesDone} = useContext(Context)

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            const res = req.data.meals
            setRecipe(res)
        }

        fetchApi()
    }, [])

    function handleClickFav(recipe) {
        setFavRecipes([...favRecipes, recipe])
    }

    function handleClickStart(recipe) {
        setRecipesDone([...recipesDone, recipe])
    }


    return (
        <div className="my-container">
            <header>
                <NavHeader />
            </header>

            <main>
                {recipe.map((e) => (
                    <div>
                        <div className="div-img">
                            <img className="img-recipe" src={e.strMealThumb} />
                        </div>
                        <div className="div-meal-icon">
                            <h2 className="h2-recipe-title">{e.strMeal}</h2>
                            <svg onClick={() => handleClickFav(e)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>
                        </div>
                        <h4 className="h4-category-recipe">{e.strCategory}</h4>

                        <h3 className="h3-ingredients">Ingredients:</h3>
                        <ul>
                            <li>{e.strIngredient1} - {e.strMeasure1}</li>
                            <li>{e.strIngredient2} - {e.strMeasure2}</li>
                            <li>{e.strIngredient3} - {e.strMeasure3}</li>
                            <li>{e.strIngredient4} - {e.strMeasure4}</li>
                            <li>{e.strIngredient5} - {e.strMeasure5}</li>
                            <li>{e.strIngredient6} - {e.strMeasure6}</li>
                            <li>{e.strIngredient7} - {e.strMeasure7}</li>
                            <li>{e.strIngredient8} - {e.strMeasure8}</li>
                            <li>{e.strIngredient9} - {e.strMeasure9}</li>
                            <li>{e.strIngredient10} - {e.strMeasure10}</li>
                            <li>{e.strIngredient11} - {e.strMeasure11}</li>
                            <li>{e.strIngredient12} - {e.strMeasure12}</li>
                            <li>{e.strIngredient13} - {e.strMeasure13}</li>
                            <li>{e.strIngredient14} - {e.strMeasure14}</li>
                            <li>{e.strIngredient15} - {e.strMeasure15}</li>
                            <li>{e.strIngredient16} - {e.strMeasure16}</li>
                            <li>{e.strIngredient17} - {e.strMeasure17}</li>
                            <li>{e.strIngredient18} - {e.strMeasure18}</li>
                            <li>{e.strIngredient19} - {e.strMeasure19}</li>
                            <li>{e.strIngredient20} - {e.strMeasure20}</li>

                        </ul>

                        <h3 className="h3-instructions">Instructions:</h3>
                        <p className="p-instructions">{e.strInstructions}</p>


                        <div className="video-instructions">
                            <iframe
                                width="400"
                                height="290"
                                src={e.strYoutube?.replace("watch?v=", "embed/")}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>

                        </div>

                        <div className="btn-recipe">

                        <Button onClick={() => handleClickStart(e)} variant="secondary" size="lg">
                            START RECIPE
                        </Button>
                        </div>

                    </div>
                ))
                }
            </main>
            <Footer />
        </div >
    )
}

export default Recipe;