const URL = 'http://my-json-server.typicode.com/larkintuckerllc/react-drupalcamp-2019/todos';

export const fetchTodos = async () => {
  const response = await fetch(URL);
  const todos = await response.json();
  return todos;
};
