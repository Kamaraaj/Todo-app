import React, { useState } from 'react';
import { model } from '../../models/models';
import './SingleTodo.css'
interface Props {
    todoItem:model;
    todos:model[];
    setTodos:React.Dispatch<React.SetStateAction<model[]>>
}
const SingleTodo:React.FC<Props> =({todoItem,todos,setTodos})=>{
    const [isEdit,setIsEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo]=useState<string>(todoItem.todo);
    const handleDelete = (id:number)=>{
        setTodos(todos.filter(item=>item.id !== id))
    }
    const handleDone = (id:number)=>{
        setTodos(todos.map(item=>item.id === id ? {...item,isDone:true}:item))
    }
    const handleEdit = (e:React.FormEvent,id:number)=>{
        e.preventDefault();
        
        let todoText = editTodo;
        todoText = editTodo.trim();
        if (todoText) {
            setTodos(todos.map(item=>item.id === id? {...item,todo:todoText} : item ))
        }
        setIsEdit(false)
    }
    return (
        <div className='single-todo-container'>
            {
                (isEdit)?(
                <form className='single-todo-form' onSubmit={(e)=>handleEdit(e,todoItem.id)}>
                    <input type='text' className='single-todo-desc-input' value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} />
                </form>):((todoItem.isDone)?(<s className='single-todo-desc'>{todoItem.todo}</s>):(<p className='single-todo-desc'>{todoItem.todo}</p>))
            }
            
            {
                !isEdit &&  <div className='single-todo-btn-grp'>
                {!todoItem.isDone && <button type='button' onClick={()=>{setIsEdit(true)}} >Edit</button>}
                <button type='button' onClick={()=>handleDelete(todoItem.id)} >Delete</button>
                {!todoItem.isDone && <button type='button' onClick={()=>handleDone(todoItem.id)} >Done</button>}
            </div>
            }
        </div>
    )
}
export default SingleTodo
