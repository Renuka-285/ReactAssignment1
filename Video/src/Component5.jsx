import Component6 from "./Component6";
function Component5(props) {
  return (
    <div>
      <h3>Component5</h3>
      <h4>This is prop f: {props.f}</h4>

      <Component6 e={props.e} />
    </div>
  );
}
export default Component5;

