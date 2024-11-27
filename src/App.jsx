import { Route, Routes } from "react-router-dom";
import Loggin from "./pages/loggin";
import Home from "./pages/home";
import Categorie from "./pages/categorie";
import 'bootstrap/dist/css/bootstrap.min.css';
import Desserts from "./pages/desserts";

function App() {
  return(
    <Routes>
      <Route path="/" element={ <Loggin />} />
      <Route path="/home" element={ <Home />}/>
      <Route path="/categories/:name" element={ <Categorie />} />
      <Route path="/desserts" element={<Desserts />} />
    </Routes>
  )
}

export default App  