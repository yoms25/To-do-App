import {useState} from 'react';

export default function App(){
  const[todos, setTodos] = useState(['Buy groceries', 'walk the dog', 'do homework']);
  const[inputText, setInputText] = useState('');
  const addTask = () => {
    setTodos([...todos, inputText]);
    setInputText('');
  };
  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return(
    <div>
      <h1>To-Do List</h1>
      <p>You have {todos.length} tasks</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            {todo}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
        </ul>
        <input type="text" placeholder="Add a new task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
    </div>
  );
}