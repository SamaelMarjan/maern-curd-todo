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
            const {data} = await axios.get('http://localhost:5000/api/todo/get')
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
            const {data} = await axios.post('http://localhost:5000/api/todo/create', input)
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
            const {data} = await axios.delete(`http://localhost:5000/api/todo/delete/${id}`)
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
            const {data} = await axios.put(`http://localhost:5000/api/todo/update/${selected._id}`, input)
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
            <button className='btn btn-success' onClick={showModal}>Create</button>
            <Modal open={visible} onCancel={hideModal} onOk={() => {selected ? handleEdit() : handleCreate()}}>
                <TodoInput input={input} setInput={setInput} passTo={handleChange} />
            </Modal>
        </div>
        <div>
        {
            getTodo?.map((task, id) => (
                <div className='card mb-5' key={id}>
                    <table>
                        <tr>
                            <th>{task.title}</th>
                        </tr>
                        <tr>
                            <td>{task.time}</td>
                        </tr>
                        <tr>
                            <td>{task.task}</td>
                            <button className='btn btn-warning me-2' onClick={() => {showModal(); setSelected(task); setInput(task)}}>Edit</button>
                            <button className='btn btn-danger' onClick={() => handleDelete(task._id)}>Delete</button>
                        </tr>
                    </table>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default CreateTodo