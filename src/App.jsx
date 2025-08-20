import {useState} from 'react';

export default function App(){
  const[todos, setTodos] = useState([
    { text: 'Buy groceries', completed: false },
    { text: 'Walk the dog', completed: false },
    { text: 'Do homework', completed: false }
  ]);
  const[inputText, setInputText] = useState('');
  const addTask = () => {
    setTodos([...todos, { text: inputText, completed:false }]);
    setInputText('');
  };
  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  const toggleTask = (index) => {
    const newTodos = todos.map((todo, i) => {
      if(i === index){
        return{ ...todo, completed: !todo.completed}
      }
      return todo;
    });
    setTodos(newTodos);
  }
  return(
    <div style={{
      backgroundColor: "lightpink",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "50px"
    }}>
      <h1
        style={{
          fontFamily: "Arial",
          color: "black",
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}
      >
        To-Do List
      </h1>

      <p
        style={{
          fontFamily: "Arial",
          color: "black",
          fontSize: "25px",
          marginBottom: "15px"
        }}
      >
        You have {todos.length} tasks
      </p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed}
            onChange={() => toggleTask(index)} />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'gray' : 'black'
            }}>
            {todo.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "6px 12px",
                fontSize: "14px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                marginLeft: "8px"
              }}
            >
             Delete
            </button>

          </li>
        ))}
        </ul>
        <input 
          type="text" 
          placeholder="Add a new task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "2px solid white",
            marginRight: "10px",
            width: "300px"
          }}
        />
        <button onClick={addTask}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          margin: "10px"
        }}>Add Task</button>
        <span>&nbsp;&nbsp;</span>
    </div>
  );
}