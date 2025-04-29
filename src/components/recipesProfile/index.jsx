

function RecipesProfile({recipes}) {
    
    return(
        <div>
            {recipes.map((e) => (
                    <div>
                        <h3>{e.strMeal}</h3>
                    </div>
                ))}
        </div>
    )
}

export default RecipesProfile;