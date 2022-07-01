import './App.css';
// import Form from './Form';
import React, {useState} from 'react'
// import AddTodo from './Form'
// import Todo from './Todo'
// import {todos} from './Form'





function Form(){
  const [mark, setMark] = useState([]);
  const [todos, setTodos] = useState([]);
  function handleSubmit(event){
    // console.log(event.target[0].value);
    event.preventDefault();
    if(event.target[0].value){
      setTodos([...todos, event.target[0].value]);
      console.log(todos);
      event.target[0].value = '';
      setMark([...mark, false])
    }
    
  }
  const removeTodo = key =>{
    const newTodos = [...todos];
    const marks2 = [...mark];
    newTodos.splice(key, 1);
    marks2.splice(key, 1);
    console.log(newTodos)
    setTodos(newTodos);
    setMark(marks2);
  }
  
  
  const markTodo = key =>{
    const marks = [...mark]
    if (marks[key] === false) {
      marks[key] = true;
    } else {
      marks[key] = false;
    }
    
    console.log(marks[key]);
    setMark(marks);
    console.log(mark);
    // setTodos(newTodos);
  }
  return(
      <div>
      <form className="taskform" onSubmit={handleSubmit}>
          <input className="taskinput" placeholder="Insert new task..." type="text"/>
          <input className="submitbtn" type="submit" value="Add"/>
      </form>
      <ul className="todolist">
        {todos.map((content, index) => (
          <div key={index} className="itemWrap">
            {/* {"listitem " + "mark"+mark[index]} */}
            <li className={"listitem mark"+mark[index]}>{index+1}. {content}</li>
            <button className="marktodo" onClick={() => markTodo(index)}>✓</button>
            <button className="deletetodo" onClick={() => removeTodo(index)}>X</button>
          </div>
          
        ))}
      </ul>
       
      </div>
      
  )
}

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1 className="logo">Taskr</h1>
      </div>
      <Form/>
    </div>
  );
}

export default App;
