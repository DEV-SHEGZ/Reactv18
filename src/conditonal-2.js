import React from "react";

/* 1st use case for conditional rendering 

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
}*/

/* 2nd Use Case using if statements */

function conditonal2({ name }) {
  let Age, Goals;
  if (name === "Ronlado") {
    Age = 40;
    Goals = 931;
  } else if (name === "Messi") {
    Age = 36;
    Goals = 800;
  }
  const newAge = Age;
  const newGoals = Goals;
  console.log(newAge, newGoals);
  return (
    <>
      <h1>{name}</h1>
      <ul>
        <li>{newAge} years of age </li>
        <li>{newGoals} number of goals</li>
      </ul>
    </>
  );
}

export default conditonal2;
