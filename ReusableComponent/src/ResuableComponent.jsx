
function ReusableComponent(Props)
{
    return(
        <div style={{
            border:"1px solid",
            margin:"10px",
            padding:"15px",
            width:"250px"
        }}>
            <h3>{Props.title}</h3>
            <p>{Props.message}</p>
        </div>
    );
}
export default ReusableComponent;