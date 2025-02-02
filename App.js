import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
import './App.css';

export default function TODO() {
  const [listTodo, setListTodo] = useState([]);
  
  let addList = (inputText)=>{
    if(inputText!==' ')
     setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  }
  return (
   <div className="main-container">
    <div className="center-container">
      <TodoInput addList={addList}/>
      <h1 className="app-heading">TODO</h1>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return (
        <Todolist key={i} index={i} item={listItem} deleteListItem={deleteListItem}/>)
        
      })}
      
    </div>
   </div>
  )
}
