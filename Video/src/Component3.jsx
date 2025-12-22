
import Component4 from "./Component4";


function Component3(props) {
  return (
    <div>
      <h3>Component3</h3>
      <h4>This is prop a: {props.a}</h4>
      <h4>This is prop b: {props.b}</h4>

      <Component4 c={props.c} d={props.d} e={props.e} f={props.f} />
    </div>
  );
}
export default Component3;
