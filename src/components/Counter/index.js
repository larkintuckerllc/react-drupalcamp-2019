import React, { Component } from 'react';
import CounterView from './CounterView';

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    const { counter } = this.state;
    return (
      <CounterView
        counter={counter}
        onIncrement={this.handleIncrement}
      />
    );
  }

  handleIncrement = () => this.setState(
    ({ counter }) => ({ counter: counter + 1 })
  );
}