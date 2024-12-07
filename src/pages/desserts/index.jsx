import axios from "axios";
import { useEffect, useState } from "react";
import NavHeader from "../../components/navHeader";
import Footer from "../../components/footer";
import "./desserts.css"
import { useNavigate } from "react-router-dom";


function Desserts() {
    const [desserts, setDesserts] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
            const res = req.data.meals.slice(1, 16)
            setDesserts(res)
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
                {desserts.map((e) => (
                    <div onClick={() => handleNavigate(e.idMeal)}>
                        
                        <div className="div-img-desserts">
                            <img className="img-desserts" src={e.strMealThumb} />
                        </div>

                        <h2 className="h2-desserts">{e.strMeal}</h2>

                    </div>
                ))}

            </main>
            <Footer />
        </div>
    )
}

export default Desserts;