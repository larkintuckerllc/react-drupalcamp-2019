const URL = '';

export const fetchTodos = async () => {
  const response = await fetch(URL);
  const todos = await response.json();
  return todos;
};