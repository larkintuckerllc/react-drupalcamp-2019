import React, { Fragment } from 'react';

const CounterView = ({ counter, onIncrement }) => (
  <Fragment>
    <h1>Counter</h1>
    <div>{counter}</div>
    <button onClick={onIncrement}>Increment</button>
  </Fragment>
);

export default CounterView;
