import ReusableComponent from "./ResuableComponent"
function App(){

  return(
    <div >
      <ReusableComponent
        title="HTML"
        message="hyper text markup language"
      ></ReusableComponent>
      <ReusableComponent
        title="CSS"
        message="cascading styling sheets"
      />
      <ReusableComponent
        title="JAVASCRIPT"
        message="scripting language"
        />
      
      <ReusableComponent
        title="REACT"
        message="javascrip library"
        />
      

    </div>
  )
}
export default App
