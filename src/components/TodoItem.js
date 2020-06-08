import React from 'react'
import '../css/Mainwrap.css'

function TodoItem  (props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="item">
            <input className="input" type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}/>
            <span style={props.item.completed ? completedStyle: null}>{props.item.text}</span>
            {/* как расшифровывается код строкой выше? и как это можно переписать в более понятный код с использованием if */}
        </div>
    )
}

export default TodoItem;