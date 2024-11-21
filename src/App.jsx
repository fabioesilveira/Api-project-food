import { Route, Routes } from "react-router-dom";
import Loggin from "./pages/loggin";
import Home from "./pages/home";
import Categorie from "./pages/categorie";

function App() {
  return(
    <Routes>
      <Route path="/" element={ <Loggin />} />
      <Route path="/home" element={ <Home />}/>
      <Route path="/categories/:name" element={ <Categorie />} />
    </Routes>
  )
}

export default App