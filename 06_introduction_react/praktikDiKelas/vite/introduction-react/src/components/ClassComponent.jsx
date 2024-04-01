import React, { Component } from "react";

class ClassComponent extends Component {
  // semua logic disini
  constructor(props) {
    console.log("constructor");
    super(props);
    this.count2 = 0;
    this.state = {
      count: 0,
    };
  }
  // arrow function bisa di ganti dengan method jika di class
  handleClick = () => {
    // Method: mengubah nilai count saat tombol diklik
    this.setState({ count: this.state.count + 1 });
    this.count2 = this.count2 + 1;
    console.log("handle click method state class = " + this.state.count);
    console.log("handle click method class = " + this.count2);
  };
  componentDidMount() {
    // untuk melakukan  feching API
    // authentification pada compoennt ini, jadi di cek dulu apakah usernya benar atau tidak
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a simple class component.</p>
        <button onClick={this.handleClick}>Increment</button>
        <p>Count: {this.state.count}</p>
        <p>Count: {this.count2}</p>
      </div>
    );
  }
}

export default ClassComponent;
