
import { useState } from "react";
import "./ColorToggle.css";

function ConditionalStyle() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div className={isRed ? "redBox" : "blueBox"}>
        This div changes color
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Change Color
      </button>
    </div>
  );
}

export default ConditionalStyle;
