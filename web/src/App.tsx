import { useState } from "react";
import { Widget } from "./components/Widget";

// type

interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? "Default"}</button>;
}

export function App() { 
  // const [count, setCount] = useState(0);

  // tempo de aula 1:38

  return (
    <Widget/>
  );
}

// export default App;
