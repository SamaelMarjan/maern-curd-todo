import React, { useEffect, useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'

const GetTodo = () => {
    const [getTodo, setGetTodo] = useState([])
    //get all todo
    const getAll = async() => {
        try {
            const {data} = await axios.get('https://mern-basic-todo.onrender.com/api/todo/get')
            console.log(data);
        } catch (error) {
            console.log(error);
            toast.error('Something wrong')
        }
    }
    useEffect(() => {
        getAll()
    })
  return (
    <div>
        <Toaster />
        <div className='card mb-5'>
            <table>
                <tr>
                    <th>Todos</th>
                </tr>
                <tr>
                    <td>Todos</td>
                </tr>
            </table>
        </div>
        <div className='card mb-5'>
            <table>
                <tr>
                    <th>Todos</th>
                </tr>
                <tr>
                    <td>Todos</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default GetTodo