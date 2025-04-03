import Avatar from "./avatar";
import Parent from "./parent";

function profile() {
  let test = {
    person: "male",
    name: "taye",
    age: 18,
  };
  return (
    <Parent>
      <Avatar main={test} />
      <Avatar main={{ name: "doyin" }} />
    </Parent>
  );
}

export default profile;
