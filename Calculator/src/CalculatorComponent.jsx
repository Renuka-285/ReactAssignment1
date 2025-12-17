
import {useState} from "react";
function CalculatorComponent(){
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState(" ");
    const[operation,setOperation]=useState("add");
    const[results,setResults]=useState([]);
    const calculate=()=>{
       const a=Number(num1);
       const b=Number(num2);
       let result;
       if(operation==="add"){
        result=a+b;
       }
       else if(operation==="subtract"){
        result=a-b;
       }
       else if(operation==="multiply"){
        result=a*b;
       }
       setResults([...results,result]);

    };
    return(
        <div>
            <h1>Calculator</h1>
            <input type="text" value={num1} onChange={(e)=>setNum1(e.target.value)}/><br/>
            <input type="text" value={num2} onChange={(e)=>setNum2(e.target.value)}/><br/>
            <select value={operation} onChange={(e)=>setOperation(e.target.value)}>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
            </select><br/>
            <button onClick={calculate}>Perform Action</button>
            <h3>Result</h3>
            <ul>{results.map((res,index)=>(
                <li key={index}>{res}</li>
            ))}
                
            </ul>
        </div>
    );
}
export default CalculatorComponent;