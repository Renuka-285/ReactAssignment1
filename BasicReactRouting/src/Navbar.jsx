
import {NavLink} from "react-router-dom";
function Navbar(){
    return(
        <>
        <nav>
            
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/aboutus">Aboutus</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        
        
        </nav>
        </>
    )

}
export default Navbar;