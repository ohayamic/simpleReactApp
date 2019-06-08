import React from "react";

const UserButton = props => {
  return (
    <div style={{ marginBottom: "10" }}>
      <button onClick={props.click}> Click Here</button>
    </div>
  );
};

export default UserButton;
