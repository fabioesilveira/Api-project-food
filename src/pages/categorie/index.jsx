import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import NavHeader from "../../components/navHeader";
import Footer from "../../components/footer";
import "./categorie.css"

function Categories() {

    const params = useParams();
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json' // Garantir que espera JSON
                }
            });
            const data = req.data.meals.slice(1, 12)
            setCategories(data)
        }
        fetchApi()
    }, [])

    function HandleNavigate(id) {
        navigate (`/recipe/${id}`)
    }

    return (
        <div className="my-container">

            <header>
                <NavHeader />
            </header>

            <main>
                {categories.map((e) => (
                    <div onClick={() => HandleNavigate(e.idMeal)}>
                        <h2>{e.strMeal}</h2>
                        <img className="img-category" src={e.strMealThumb} />
                    </div>
                ))}
            </main>

            <Footer />
        </div>
    )
}

export default Categories;