
import React from "react";

const HeavyComponent = () => {
  console.log("HeavyComponent rendered");

  // Simulating heavy computation
  let total = 0;
  for (let i = 0; i < 10000; i++) {
    total += i;
  }

  return (
    <div style={{ border: "2px solid black", padding: "10px", marginTop: "10px" }}>
      <h3>Heavy Component</h3>
      <p>Heavy calculation result: {total}</p>
    </div>
  );
};

export default React.memo(HeavyComponent);
