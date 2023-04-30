import React, { useEffect, useState } from 'react'
import {Modal} from 'antd'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import TodoInput from './TodoInput'
const CreateTodo = () => {
    const [input, setInput] = useState({
        title:'',
        task:'',
        time:''
    })
    const [selected, setSelected] = useState(null)
    //forTodoinput
    const handleChange = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target
        setInput({...input, [name]:value})
    }
    
    const [getTodo, setGetTodo] = useState([])
    const [visible, setVisible] = useState(false)
    const showModal = () => {
        setVisible(true)
    }
    const hideModal = () => {
        setVisible(false)
    }
    //get all todo
    const getAll = async() => {
        try {
            const {data} = await axios.get('https://mern-basic-todo.onrender.com/api/todo/get')
            console.log(data);
            setGetTodo(data.todo)
            console.log(setGetTodo);
        } catch (error) {
            console.log(error);
            toast.error('Something wrong')
        }
    }
    useEffect(() => {
        getAll()
    },[])
    //create todo
    const handleCreate = async() => {
        try {
            const {data} = await axios.post('https://mern-basic-todo.onrender.com/api/todo/create', input)
            console.log(data);
            toast.success(data.message)
            getAll()
            hideModal()
            setInput({title:'', task:'', time:''})
        } catch (error) {
            toast.error('Something wrong')
        }
    }
    //delete
    const handleDelete = async(id) => {
        try {
            const {data} = await axios.delete(`https://mern-basic-todo.onrender.com/api/todo/delete/${id}`)
            toast.success(data.message)
            getAll()
        } catch (error) {
            console.log(error);
            toast.error('Something wrong')
        }
    }
    //edit
    const handleEdit = async() => {
        try {
            const {data} = await axios.put(`https://mern-basic-todo.onrender.com/api/todo/update/${selected._id}`, input)
            console.log(data);
            toast.success(data.message)
            getAll()
            setInput({title:'', task:'', time:''})
            setSelected(null)
            hideModal()
        } catch (error) {
            console.log(error);
            toast.error('Something wrong')
        }
    }
    
  return (
    <div>
        <Toaster />
        <div className='mb-5'>
            <div className='d-flex justify-content-between' style={{width: '59vw'}}>
                <h4>C_U_R_D</h4>
                <button className='btn btn-success' onClick={showModal}>Create</button>
            </div>
            <Modal open={visible} onCancel={hideModal} onOk={() => {selected ? handleEdit() : handleCreate()}}>
                <TodoInput input={input} setInput={setInput} passTo={handleChange} />
            </Modal>
        </div>
        <div>
        {
            getTodo?.map((task, id) => (
                <div className='card mb-5' key={id}>
                    <div className='d-flex data'>
                        <div className='task'>
                            <p>{task.task}</p>
                        </div>
                        <div className='button'>
                            <button className='btn btn-warning me-2' onClick={() => {showModal(); setSelected(task); setInput(task)}}>Edit</button>
                            <button className='btn btn-danger' onClick={() => handleDelete(task._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default CreateTodo