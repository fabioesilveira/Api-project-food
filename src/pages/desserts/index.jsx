import axios from "axios";
import { useEffect, useState } from "react";


function Desserts() {
    const [desserts, setDesserts] = useState([])


    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
            const res = req.data.meals
            setDesserts(res)
        }
        fetchApi()

    }, [])

    return (
        <div>
            {desserts.map((e) => (
                <div>
                    <h2>{e.strMeal}</h2>
                    <img src={e.strMealThumb}/>
                </div>
            ))}
        </div>
    )
}

export default Desserts;