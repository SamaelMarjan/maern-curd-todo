import React, { useState } from 'react'
import {Modal} from 'antd'
import GetTodo from './GetTodo'
import TodoInput from './TodoInput'
const CreateTodo = () => {
    // const [todo, setTodo] = useState('')
    // const [getTodo, setGetTodo] = useState([])
    const [visible, setVisible] = useState(false)
    const showModal = () => {
        setVisible(true)
    }
    const hideModal = () => {
        setVisible(false)
    }
  return (
    <div className='container p-5'>
        <div>
            <button className='btn btn-success' onClick={showModal}>Create</button>
            <Modal open={visible} onCancel={hideModal} onOk={hideModal}>
                <TodoInput />
            </Modal>
        </div>
        <div className='mt-5'>
            <GetTodo />
        </div>
    </div>
  )
}

export default CreateTodo