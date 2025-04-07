import React from "react";

/* using the  ternary operator
function item({ name, isPacked }) {
  return isPacked ? (
    <li>{name} is packed</li>
  ) : (
    <li>{name} is not packed ✅</li>
  );
}
*/

/* using the && operator for conditional rendering

function item({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked && "✅"}{" "}
    </li>
  );
}*/

function item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name} is packed ✅</del>;
  }
  return <>{itemContent}</>;
}

export default item;
