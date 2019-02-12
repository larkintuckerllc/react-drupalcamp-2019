import React, { Fragment } from 'react';
import styles from './styles.module.css';
import * as todosImage from './todos.jpg';

const TodosView = ({ todos }) => (
  <Fragment>
    <h1 id={styles.root}>Todos</h1>
    <img alt="todos" src={todosImage} />
    {todos.map(todo => <div key={todo.id}>{todo.name}</div>)}
  </Fragment>
);

export default TodosView;
