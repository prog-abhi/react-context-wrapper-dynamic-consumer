import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

export default function Match() {
  const { sign } = useContext(HoroscopeContext);
  console.log(sign);
  const [match, setMatch] = useState(false);

  return (
    <>
      <button onClick={() => setMatch((prev) => !prev)}>
        {!match ? "Show" : "Hide"} Match
      </button>
      {match && <div>Sign match: {sign.match}</div>}
    </>
  );
}
