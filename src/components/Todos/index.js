import React, { Component, Fragment } from 'react';
import { fetchTodos } from '../../apis/todos';
import styles from './styles.module.css';
import todos from './todos.jpg';

class Todos extends Component {
  async componentDidMount() {
    const todos = await fetchTodos();
    console.log(todos);
  }

  render() {
    return (
      <Fragment>
        <h1 id={styles.root}>Todos</h1>
        <img alt="todos" src={todos} />
      </Fragment>
    );
  }
}

export default Todos;
