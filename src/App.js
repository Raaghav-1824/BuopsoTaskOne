import React from "react";
// import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [counterA, setCounterA] = React.useState(0);
  const [counterB, setCounterB] = React.useState(0);

  return (
    <div>
      <Counter name="Addition" value={counterA} />
      <Counter name="Substraction" value={counterB} />
      <button
        className="btn btn-primary"
        style={{ margin: "5px" }}
        onClick={() => {
          console.log("Click button");
          setCounterA(counterA + 2);
        }}
      >
        Increment counter A
      </button>

      <button
        style={{ margin: "5px" }}
        className="btn btn-primary"
        onClick={() => {
          console.log("Click button");
          setCounterB(counterB - 1);
        }}
      >
        Decreament counter B
      </button>
    </div>
  );
}

const Counter = React.memo(function Counter({ name, value }) {
  console.log(`Rendering counter ${name}`);
  return (
    <div>
      <label>
        <h1 style={{ margin: "5px" }}>
          {name} = {value}
        </h1>
      </label>
    </div>
  );
});

export default App;
