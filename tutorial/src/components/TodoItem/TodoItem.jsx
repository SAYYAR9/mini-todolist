import { useState } from 'react';
import { useEffect } from 'react';
import './TodoItem.css'

function TodoItem(props) {
    console.log('Add todo rendered');

    const [duration, setDuration] = useState(10) 
    // useEffect(() => {
    //     return newFunction();

    //     function newFunction() {
    //         const interval = setInterval(() => {
    //             setDuration(prew => {
    //                 const new_value = prew - 1;
    //                 if (new_value === 0) {
    //                     clearInterval(interval);
    //                 }
    //                 return new_value;
    //             });
    //         }, 1000);
    //         return () => {
    //             clearInterval(interval);
    //         };
    //     }
    //     console.log('yarandi');

    //     return (() => {
    //         console.log('silindi');
    //     })
    // }, [])

    return (
        <div className="todo-item" onClick={props.clicked}>
            <div className="todo-index">{props.index}</div>
            <div className='todo-text'>
                <div className="todo-title">{props.title}</div>
                <div className="todo-content">{props.content}</div>
            </div>
            <div className='todo-duration'>{duration}</div>
        </div>
    )
}


export default TodoItem
 