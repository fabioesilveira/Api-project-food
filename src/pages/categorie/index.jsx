import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Categorie() {

    const params = useParams();
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json' // Garantir que espera JSON
                }
            });
            const data = req.data.meals
            setCategories(data)
        }
        fetchApi()
    }, [])

    return (
        <div>
            {categories.map((e) => (
                <div>
                    <h2>{e.strMeal}</h2>
                </div>
            ))}
        </div>
    )
}

export default Categorie;