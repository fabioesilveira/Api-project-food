import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavHeader from "../../components/navHeader";
import Footer from "../../components/footer";
import "./meal.css"

function Meal() {

    const params = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            const data = req.data.meals
            setMeals(data)
        }

        fetchApi()
    }, [])

    function handleNavigate(id) {
        navigate(`/recipe/${id}`)
    }

    return (
        <div className="my-container">

            <header>
                <NavHeader />
            </header>

            <main>
                {meals.map((e) => (
                    <div onClick={() => handleNavigate(e.idMeal)}>
                       
                        <img className="img-meal" src={e.strMealThumb} />
                        

                        <h2 className="h2-meal">{e.strMeal}</h2>

                    </div>
                ))}

            </main>
            <Footer />
        </div>
    )
}

export default Meal;