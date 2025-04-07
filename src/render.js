import React from "react";
import Conditional from "./conditional.js";

export default function Render() {
  return (
    <>
      <Conditional name="Tayo" isPacked={false} />
      <Conditional isPacked={true} />
    </>
  );
}
