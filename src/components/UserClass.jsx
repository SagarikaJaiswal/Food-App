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
    //console.log(this.props.name + " Child componentDidMount");
    this.timer = setInterval(() => console.log("Namaste React"), 1000);
  }
  componentDidUpdate() {
    console.log("The compnent has been updated");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component unmounted");
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
