import Avatar from "./avatar";
import Parent from "./parent";

function profile() {
  return (
    <Parent>
      <Avatar name="gladys" age={23} height={5.4} career="developer" />
      <Avatar name="james" age={25} height={5.8} career="designer" />
    </Parent>
  );
}

export default profile;
