import Button from 'react-bootstrap/Button';
import Footer from '../../components/footer';
import NavHeader from '../../components/navHeader';
import { useContext, useState } from 'react';
import Context from '../../context/context';
import RecipesProfile from '../../components/recipesProfile';
import Main from '../../components/main';

function Profile() {

    const { email, favRecipes, recipesDone } = useContext(Context)
    const [show, setshow] = useState(true)

    return (
        <div className="my-container">
            <NavHeader />

            <header>
                <h2>{email}</h2>
            </header>
            <Main>
                <Button onClick={() => setshow(true)} variant="secondary" size="lg">
                    DONE RECIPES
                </Button>
                <Button onClick={() => setshow(false)} variant="secondary" size="lg">
                    FAVORITE RECIPES
                </Button>
                <Button variant="secondary" size="lg">
                    LOGOUT
                </Button>
                {show ? <RecipesProfile recipes={recipesDone} /> : <RecipesProfile recipes={favRecipes} />}

            </Main>
            <Footer />

        </div>
    )
}

export default Profile;