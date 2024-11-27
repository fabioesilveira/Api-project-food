import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./home.css"



function Home() {

    const [categories, setCategories] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [searchRecipe, setSearchRecipe] = useState("")
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchCategories() {
            const req = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            const res = req.data.categories
            setCategories(res)

        }
        fetchCategories();

        async function fetchIngredients() {
            const req = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
            const res = req.data.meals
            setIngredients(res)

        }
        fetchIngredients();
    }, [])

    function handleChange(event) {
        const value = event.target.value
        setSearchRecipe(value)
    }

    function handleChangeOption(event) {
        const value = event.target.value
        setSelectedOption(value)
    }

    function handleClick(event) {
        event.preventDefault()
        console.log(selectedOption)
        console.log(searchRecipe)
    }

    function handleClickNavigate() {
        navigate("/")
    }


    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search Recipe"
                    value={searchRecipe}
                    onChange={handleChange}
                />
                <label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="name"
                        checked={selectedOption === "name"}
                        onChange={handleChangeOption}
                    />
                    Name
                </label>
                <label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="firstLetter"
                        checked={selectedOption === "firstLetter"}
                        onChange={handleChangeOption}
                    />
                    First Letter
                </label>

                <button onClick={handleClick}>Search</button>
            </form>

            <div className="div-categories">
                {categories.map((e, i) => (
                    <Link className="btn-categories" to={`/categories/${e.strCategory}`}>{e.strCategory}</Link>
                ))}
            </div>
            <div className="div-ingredients">
                {ingredients.map((e) => (
                    <div className="card-ingredient" onClick={handleClickNavigate}>
                        <h2>{e.strIngredient}</h2>
                        <img src={`https://www.themealdb.com/images/ingredients/${e.strIngredient}-Small.png`} />
                    </div>
                )).slice(0, 30)}
            </div>
        </div>

    )
}

export default Home