import React from 'react'
import '../css/Mainwrap.css'

function TodoItem  (props) {
    return (
        <div className="item">
            <input className="input" type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}/>
            <span>{props.item.text}</span>
        </div>
    )
}

export default TodoItem;