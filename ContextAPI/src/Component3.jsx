
import { useContext } from "react";
import AppContext from "./AppContext";
import Component4 from "./Component4";

function Component3() {
  const contextData = useContext(AppContext);

  return (
    <div>
      <h3>Component3</h3>
      <h4>This is prop a: {contextData.a}</h4>
      <h4>This is prop b: {contextData.b}</h4>

      <Component4 />
    </div>
  );
}

export default Component3;
