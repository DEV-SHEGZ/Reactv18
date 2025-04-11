import { people } from "./Data";

function renderList() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const other = people.filter((person) => person.profession !== "chemist");

  return (
    /*Still evaluating react v 18 list rendering */
    <>
      <div>
        <h1>Chemists</h1>
        {chemists.map((person) => (
          <div key={person.id}>
            <h3> {person.name} </h3>
            <ul>
              <li> {person.accomplishment} </li>
            </ul>
          </div>
        ))}
        ;
      </div>

      <div>
        <h1>Other</h1>
        {other.map((person) => (
          <div key={person.id}>
            <h3> {person.name} </h3>
            <ul>
              <li> {person.accomplishment} </li>
              <li> {person.profession} </li>
            </ul>
          </div>
        ))}
        ;
      </div>
    </>
  );
}

export default renderList;
