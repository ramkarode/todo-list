import React from 'react'

export default function TodoList(props) {
  return (
    <li className="list-item mx-1" >
        {props.item}
        <span className='icons'><i className="fa-solid fa-trash-can icon-delete " onClick={e=>{
            props.deleteListItem(props.index)
        }}></i></span>
    </li>
  )
}
