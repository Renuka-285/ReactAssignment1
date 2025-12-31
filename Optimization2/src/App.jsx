
import React, { useState, lazy, Suspense } from "react";

// Lazy loading the heavy component
const HeavyComponent = lazy(() => import("./HeavyComponent"));

const App = () => {
  const [count, setCount] = useState(0);

  console.log("🔄 Parent rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo & Lazy Loading Demo</h2>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default App;
