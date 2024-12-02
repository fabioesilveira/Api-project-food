import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Meal() {

    const params = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            const data = req.data.meals
            setMeals(data)
        }

        fetchApi()
    }, [])

    return (
        <div>
            {meals.map((e) => (
                <div>
                    <h2>{e.strMeal}</h2>
                </div>
            ))}
        </div>
    )
}

export default Meal;