import React from 'react';
import { model } from '../../models/models';
import SingleTodo from '../SingleTodo/SingleTodo';

interface Props {
    todos:model[];
    setTodos:React.Dispatch<React.SetStateAction<model[]>>
}

const TodoList:React.FC<Props>=({todos,setTodos})=>{
    return (
        <section>
            {
                (todos?.length > 0)?(<div>
                    {
                        todos.map(todoItem=><SingleTodo key={todoItem.id} todoItem={todoItem}  todos={todos} setTodos={setTodos} />)
                    }
                </div>):(
                    <p style={{textAlign:'center',margin:'10px',display:'flex',justifyContent:'center',alignItems:'center',minHeight:'50vh',fontWeight:600,fontSize:'24px'}}>No data found</p>
                )
            }
        </section>
    )
}
export default TodoList;