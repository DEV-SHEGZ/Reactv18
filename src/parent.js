import React from "react";
import "./App.css";

function Parent({ children }) {
  return <div className="parent">{children}</div>;
}

export default Parent;
