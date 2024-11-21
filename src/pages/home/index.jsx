import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Home() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchCategories() {
            const req = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            const res = req.data.categories
            setCategories(res)

        }
        fetchCategories();
    }, [])

    return (
        <div>
            {categories.map((e, i) => (
                <div>
                    <Link to={`/categories/${e.strCategory}`}>{e.strCategory}</Link>
                </div>
            ))}
        </div>
    )
}

export default Home