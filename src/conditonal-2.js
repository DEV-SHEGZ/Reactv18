import React from "react";

const stats = {
  Ronaldo: {
    name: "Ronaldo",
    Age: 38,
    Goals: 931,
  },
  Messi: {
    name: "Messi",
    Age: 36,
    Goals: 800,
  },
};
function conditonal2({ name }) {
  const info = stats[name];
  return (
    <>
      <h1>{name}</h1>
      <ul>
        <li>{info.Age} years of age </li>
        <li>{info.Goals} number of goals</li>
      </ul>
    </>
  );
}

export default conditonal2;
