import { useEffect, useState, useMemo, useCallback } from 'react';
import './TodoList.css';
import Deadline from '../../components/Deadline/Deadline';
import TodoItem from '../../components/TodoItem/TodoItem'
import axios from 'axios'
import AddTodo from '../../components/AddTodo/AddTodo';
import Title from '../../components/Title/Title';



const todoListData = [
  {
    id: 1,
    title: 'Python',
    content: 'Men her gun Python oyrene bilmirem'
  },
  {
    id: 2,
    title: 'JavaScript',
    content: 'Men her gun JavaScript oyrenirem'
  },  
  {  
    id: 3,
    title: 'React',
    content: 'Men her gun React oyrenirem'
  },
  {
    id: 4,
    title: 'NodeJS',
    content: 'Men her gun NodeJS oyrenirem'
  }
]




function TodoList() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTimeout(() => {
        setTodos(todoListData)
    }, 2000);
    // axios.get('bura api link verilmelidir')
    // .then(response => {
    //      setTodos(response.data)
    // })
}, [])
  const addTodoHandler = useCallback((todo) => {
    setTodos(prew => [ todo, ...prew] )
  }, [])
  
  const deleteTodo = (id) => {
    const new_todos = todos.filter(e => e.id !==id)
  setTodos(new_todos)
  }

  const todolistContent = useMemo(()=> {
    // console.log('Content hazirlandim');
    if (todos.length){
          return todos.map((todo, i) => (
          <TodoItem
            key={todo.id} 
            index={i + 1} 
            title={todo.title} 
            content={todo.content} 
            clicked={() => {deleteTodo(todo.id)}}
          /> 
      ))
    }
    else {
      return null 
    }
  }, [todos]);



  return (
  <div className='TodoList'>
    <div className="container">
       {/* <Deadline/> */}
       <Title text={title}/>
       <input type="text" onChange={e => setTitle(e.target.value)} style={{
        marginBottom : 15,
        color: 'red'
       }} />
      <AddTodo addTodoHandler={addTodoHandler} />
      <div>
          {todolistContent}
      </div>
      {/* <div>
        <TodoItem index={1} title="Python"/>
        <TodoItem index={2} title="JS"/>
        <TodoItem index={3} title="React"/>
        <TodoItem index={4} title="NodeJS"/>
      </div> */}

      {/* <div>{[
        <TodoItem index={1} title="Python"/>,
        <TodoItem index={2} title="JS"/>,
        <TodoItem index={3} title="React"/>,
        <TodoItem index={4} title="NodeJS"/>,
          ]}
      </div> */}
    </div>
  </div>
  );
}

export default TodoList;
