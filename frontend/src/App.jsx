import { Link, Routes, Route } from "react-router-dom";
import Pagina1 from "./components/Pagina1";
import Scene from "./components/Scene";
function App() {
return(
  <>  
  <Link to="/container">contenido</Link>
  <Link to="/scene">Escena</Link>
  <Routes>
    <Route path="/container" element={<Pagina1/>}></Route>
    <Route path="/scene" element={<Scene/>}></Route>
  </Routes>
 
  </>
)
}
export default App
