/**
 * module.js
 */
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// export const createObject = o => ({ ...o, anotherOption: 'Hi!' });
 import React from 'react';
// const abc = function() {
//     return (
//         <div>Hello!</div>
//     )
// }
//Functional Component
export const Abc = (props) => {return (<div>Hello, {props.name}</div>); };
// import React, { Component } from 'react';

// class MyComponent extends Component {
//   clickedOnce = false;
  
//   handleClick = () => {
//     if (!this.clickedOnce) {
//       console.log('Clicked');
//     }
//     this.clickedOnce = true;
//   }
//   componentDidUpdate() {
//     console.log('Updated!');
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     );
//   }
// }
// export default MyComponent;
// class MyComponent extends Component {
//     state = {
//       clickedOnce: false,
//     };
//     handleClick = () => {
//       if (!this.state.clickedOnce) {
//         console.log('Clicked');
//       }
//       this.setState({
//         clickedOnce: true,
//       });
//     }
//     componentDidUpdate() {
//       console.log('Updated!');
//     }
//     render() {
//       return (
//         <div>
//           <button onClick={this.handleClick}>Click me</button>
//         </div>
//       );
//     }
//   }
//   export default MyComponent;
  