import React, { Component } from 'react';
import { fetchTodos } from '../../apis/todos';
import TodosView from './TodosView';

class Todos extends Component {
  state = {
    loading: true,
    todos: [],
  };

  async componentDidMount() {
    const todos = await fetchTodos();
    this.setState({
      loading: false,
      todos,
    });
  }

  render() {
    const { loading, todos } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <TodosView todos={todos} />
    );
  }
}

export default Todos;
