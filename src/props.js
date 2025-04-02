import Avatar from "./avatar";

function profile() {
  const test = {
    preson: "male",
    name: "taye",
    age: 18,
  };
  return (
    <>
      <Avatar main={test} />
    </>
  );
}

export default profile;
