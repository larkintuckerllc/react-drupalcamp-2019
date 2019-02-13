import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const CounterView = ({ counter, onIncrement }) => (
  <Fragment>
    <h1>Counter</h1>
    <div>{counter}</div>
    <button onClick={onIncrement}>Increment</button>
  </Fragment>
);

CounterView.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
}

export default CounterView;
