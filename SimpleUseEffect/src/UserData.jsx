
import { useEffect,useState} from "react";
function UserData(){
    const[user,setUsers]=useState();
    const[loading,setLoading]=useState(true);
    useEffect(() => {
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  }

  fetchData();
}, []); 
if(loading){
    return <h2>Loading....</h2>
}
return(
    <div>
        <h2>User Details</h2>
        <p><b>Name:{user.Name}</b></p>
        <p><b>Email:{user.email}</b></p>
        <p><b>Phone:{user.phone}</b></p>

    </div>
)


}
export default UserData;