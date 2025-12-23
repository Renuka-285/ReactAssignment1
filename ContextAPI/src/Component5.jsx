
import { useContext } from "react";
import AppContext from "./AppContext";
import Component6 from "./Component6";

function Component5() {
  const contextData = useContext(AppContext);

  return (
    <div>
      <h3>Component5</h3>
      <h4>This is prop f: {contextData.f}</h4>

      <Component6 />
    </div>
  );
}

export default Component5;
