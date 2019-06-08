import React from "react";

const UserOutput = props => {
  return (
    <div
      style={{
        border: "1px solid #eee",
        margin: "20px auto",
        width: "50%",
        boxShadow: "5px 10px 18px #888888"
      }}
    >
      <p onClick={props.click}>
        Username: {props.getname}, Age: {props.getage} years old
        <span> {props.children}</span>
      </p>
      <p>It works!!!, what next</p>
    </div>
  );
};

export default UserOutput;
