import {Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Todos from "./Todos";
import NotFound from "./NotFound";
import "./App.css"

function App(){
  return(
    <>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/todos" element={<Todos/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </>
  );



}
export default App;

