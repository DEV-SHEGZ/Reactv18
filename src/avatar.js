import React from "react";

function Avatar({ props }) {
  return (
    <>
      <h1> My name is {props.name} </h1>
      <p>I am {props.age} years old </p>
      <b> I am {props.height} feet tall </b>
      <h3> I am a {props.career} </h3>
    </>
  );
}
export default Avatar;
