import { Route, Routes } from "react-router-dom";
import Loggin from "./pages/loggin";
import Home from "./pages/home";
import Categorie from "./pages/categorie";
import 'bootstrap/dist/css/bootstrap.min.css';
import Desserts from "./pages/desserts";
import Meal from "./pages/meal";
import Recipe from "./pages/recipe";
import Profile from "./pages/profile";

function App() {
  return(
    <Routes>
      <Route path="/" element={ <Loggin />} />
      <Route path="/home" element={ <Home />}/>
      <Route path="/profile" element={ <Profile />}/>
      <Route path="/categories/:name" element={ <Categorie />} />
      <Route path="/meal/:name"  element={ <Meal />}/>
      <Route path="/desserts" element={<Desserts />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  )
}

export default App  