import React, { useState } from "react";
// import Board from "./components/Board";

export default () => {
  let [name, setName] = useState("Mayank");



  return (
    <>
      {/* <Board name="mayank" age={23} /> */}
      {/* <hr style={{ border: '1px solid red' }} /> */}

      {name}

      <button onClick={()=>{setName("changed")}}>Click Change Name</button>

    </>
  );
};

// React.createElement(
//   "div",
//   {
//     className: "demo",
//     style: {
//       color: "red",
//     },
//   },
//   React.createElement("h1", {}, "Hello")
// );
