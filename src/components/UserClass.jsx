import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + " Child Constructor");
  }
  componentDidMount() {
    console.log(this.props.name + " Child componentDidMount");
  }
  render() {
    console.log(this.props.name + " Child Render");
    return (
      <div className="user-class">
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <h2>Name: {this.props.name}</h2>
        <h2>Title: SDE-1</h2>
      </div>
    );
  }
}

export default UserClass;
