
import { useContext } from "react";
import AppContext from "./AppContext";

function Component6() {
  const contextData = useContext(AppContext);

  return (
    <div>
      <h3>Component6</h3>
      <h4>This is prop e: {contextData.e}</h4>
    </div>
  );
}

export default Component6;
