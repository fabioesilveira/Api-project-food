import axios from "axios";
import { useEffect, useState } from "react";
import NavHeader from "../../components/navHeader";
import Footer from "../../components/footer";
import "./desserts.css"


function Desserts() {
    const [desserts, setDesserts] = useState([])


    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
            const res = req.data.meals.slice(1, 16)
            setDesserts(res)
        }
        fetchApi()

    }, [])

    return (
        <div className="my-container">

            <header>
                <NavHeader />
            </header>
            <main>
                {desserts.map((e) => (
                    <div>
                        <h2 className="h2-desserts">{e.strMeal}</h2>
                        <div className="div-img-desserts">
                            <img className="img-desserts" src={e.strMealThumb} />
                        </div>

                    </div>
                ))}

            </main>
            <Footer />
        </div>
    )
}

export default Desserts;