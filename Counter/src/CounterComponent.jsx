import {useState} from "react";
function Counter(){
    const[num,setNum]=useState(0);
     
    const Number=()=>{
        return(
            setNum(num+1)
        )
    }
    return(
        <>
        <h1>{num}</h1>
        <button onClick={Number}>Click</button>
        </>
    )

}
export default Counter;