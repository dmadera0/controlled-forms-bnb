import React from 'react'

export default function TodoItem(props){

    const handleClick = () =>{
        props.deleteTodo(props.todo)
    }
    
    
    return (
        <li>
            <h2>{props.todo.title}</h2>
            <p>{props.todo.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </li>
    )
}