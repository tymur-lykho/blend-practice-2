import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addNewTodo = inputValue => {
    if (findTodo(inputValue)) return;
    const newTodo = {
      id: nanoid(),
      text: inputValue,
    };
    setTodos(todos => {
      return [...todos, newTodo];
    });
  };

  const deleteTodo = todoId => {
    setTodos(todos => todos.filter(({ id }) => id !== todoId));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const updateTodo = text => {
    if (findTodo(text)) return;
    setTodos(todos =>
      todos.map(todo =>
        currentTodo.id === todo.id ? { ...todo, text: text } : todo
      )
    );
    setCurrentTodo({});
    setIsEditing(false);
  };

  const cancelUpdate = () => {
    setCurrentTodo({});
    setIsEditing(false);
  };

  const handleEditTodo = todoId => {
    setIsEditing(true);
    setCurrentTodo(todos.find(todo => todo.id === todoId));
  };

  function findTodo(text) {
    return todos.some(todo => todo.text === text);
  }

  return (
    <>
      {!isEditing ? (
        <Form onSubmit={addNewTodo} />
      ) : (
        <EditForm
          onCancelUpdate={cancelUpdate}
          onSubmit={updateTodo}
          defaultValue={currentTodo.text}
        />
      )}

      <TodoList list={todos} onDelete={deleteTodo} onEdit={handleEditTodo} />
    </>
  );
};
export default Todos;
