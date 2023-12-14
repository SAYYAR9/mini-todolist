import './AddTodo.css'
import React from "react"


function AddTodo(props) {

    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')

    const titleInputRef = React.useRef(null)

    const titleChangeHandler = (e) =>{
        setTitle(e.target.value)
    }

    const contentChangeHandler = (e) => {
        setContent(e.target.value)
    }
    const submitHandler = () => {
            const newTodo = {
                id : Math.random(),
                title: title,
                content: content  
            }
            props.addTodoHandler(newTodo)
            setTitle('')
            setContent('')
    }
    const pressHandler = (e) => {
        if (e.key == 'Enter') {
            if (title && content) {
                submitHandler()
            }
            else alert('Bos buraxma')
        }
    }

    return (
        <div className="add-todo">
            <input 
             value={title}
             onChange={titleChangeHandler} 
             type="text" placeholder="Basliq" 
             onKeyDown={pressHandler} ref={titleInputRef}
              />
            <input 
             value={content} 
             onChange={contentChangeHandler} 
             type="text" placeholder="Aciqlama"
             onKeyDown={pressHandler} 
            />
            <button onClick={submitHandler}>Add</button>
        </div>
    )
}

export default React.memo(AddTodo)