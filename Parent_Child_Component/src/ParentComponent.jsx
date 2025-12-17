
import UserInfo from "./ChildComponent";
function  UserProfile(){
    const name="Boska";
    const age=20;
    return(
        <div>
            <h1>UserProfile</h1>
            <UserInfo name={name} age={age}/>
        </div>

    );

}
export default UserProfile;