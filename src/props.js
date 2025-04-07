import Avatar from "./avatar";
import Parent from "./parent";

function profile() {
  return (
    <Parent>
      <Avatar
        props={{
          name: "albert",
          age: 23,
          height: `7 inches`,
          career: "Engineer",
        }}
      />
    </Parent>
  );
}

export default profile;
