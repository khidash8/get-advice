import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState(
    "Click the button to get Today's Advice"
  );

  const [count, setCount] = useState(0);

  const getAdvise = async () => {
    const randNum = Math.floor(Math.random() * 200 + 1);
    const res = await fetch(`https://api.adviceslip.com/advice/${randNum}`);
    const data = await res.json();

    //? Set new ADVICE
    setAdvice(data.slip.advice);

    //?
    setCount((prev) => prev + 1);
  };

  //? set starting Advice
  useEffect(() => {
    getAdvise();
  }, []);

  //? JSX
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvise}>Click Me</button>
      <Message count={count} />
    </div>
  );
}

const Message = ({ count }) => {
  return (
    <p>
      You've Read <strong>{count}</strong> of Advices today!!
    </p>
  );
};

export default App;
