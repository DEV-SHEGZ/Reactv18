import React from "react";

function Avatar({ name, age, height, career }) {
  return (
    <>
      <h1> My name is {name} </h1>
      <p>I am {age} years old </p>
      <b> I am {height} feet tall </b>
      <h3> I am a {career} </h3>
    </>
  );
}
export default Avatar;
