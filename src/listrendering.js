import { people } from "./Data";

function renderList() {
  const chemists = people.filter((person) => person.profession === "chemist");

  return (
    <ul>
      {chemists.map((person) => (
        <div key={person.id}>
          <h1> {person.name} </h1>
          <li> {person.accomplishment} </li>
        </div>
      ))}
      ;
    </ul>
  );
}

export default renderList;
