import Avatar from "./avatar";

function profile() {
  let test = {
    preson: "male",
    name: "taye",
    age: 18,
  };
  return (
    <>
      <Avatar main={test} />
      <Avatar
        main={
          (test = {
            name: "doyin",
          })
        }
      />
    </>
  );
}

export default profile;
