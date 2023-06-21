import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className="user-class">
        <h2>Name: {this.props.name}</h2>
        <h2>Title: SDE-1</h2>
      </div>
    );
  }
}

export default UserClass;
