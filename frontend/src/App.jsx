import { Link, Routes, Route } from "react-router-dom";
import Pagina1 from "./components/Pagina1";

function App() {
return(
  <>  
  <Link to="/container">contenido</Link>
  <Routes>
    <Route path="/container" element={<Pagina1/>}></Route>
  </Routes>
 
  </>
)
}
export default App
