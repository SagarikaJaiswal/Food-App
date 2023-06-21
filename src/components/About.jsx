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

    this.state = {
      count1: 0,
      count2: 0,
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.count1}</h1>
        <button
          onClick={() =>
            this.setState({
              count1: this.state.count1 + 1,
            })
          }
        >
          Increase
        </button>
      </>
    );
  }
}

export default About;
