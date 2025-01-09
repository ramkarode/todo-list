import React, { useState } from 'react'

export default function TodoInput(props) {
    const  [inputText, setInputText] = useState('');
    
    const handleEnterPress = (e)=>{
        if(e.KeyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="inputcontainer">
        <input type="text" 
        className="input-box-todo" 
        placeholder="enter your todo"
        value={inputText}
         onChange={e=>{setInputText(e.target.value)}}
         onKeyDown={handleEnterPress}/>
        <button className= 'add-btn'
        onClick={()=>{
            props.addList(inputText)
            setInputText(" ")
        }}>+</button>
        <div>{inputText}</div>
    </div>
  )
}
