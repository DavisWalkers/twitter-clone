import { useState } from "react";

export function App() {
  const [descr, setDescr] = useState('');

  return (
    <div>
      <h1>Twitter Clone</h1>
      <p>{descr}</p>
    </div>
  );
}