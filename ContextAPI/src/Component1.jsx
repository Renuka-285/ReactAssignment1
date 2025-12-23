
import AppContext from "./AppContext";
import Component2 from "./Component2";

function Component1() {
  const data = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f"
  };

  return (
    <AppContext.Provider value={data}>
      <h3>Component1</h3>
      <Component2 />
    </AppContext.Provider>
  );
}

export default Component1;
