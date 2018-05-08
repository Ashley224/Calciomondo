import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.startit();
    }
  
    stopit = () => {
      clearInterval(this.timerID);
    }
    startit = () => {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick= {this.stopit} >Stop the clock</button>
          <button onClick= {this.startit}>Start it Again</button>
        </div>
      );
    }
  }
  
