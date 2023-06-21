import React from "react";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <>
//       <h1>About us Page</h1>
//       <p>This is the about us page for the swiggy website clone!!!!!</p>
//       <UserClass name={"Sagarika Jaiswal"} />
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <h1>About Us</h1>
        <UserClass name={"First"} title={"SDE"} />
        <UserClass name={"Second"} title={"SDE"} />
      </>
    );
  }
}

export default About;
