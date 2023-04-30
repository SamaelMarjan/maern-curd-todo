import React, { useEffect, useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'
import CreateTodo from './CreateTodo'

const GetTodo = () => {
    
  return (
    <div>
        <Toaster />
        <div className='mb-5'>
            <CreateTodo getAll={getAll} />
        </div>
        
    </div>
  )
}

export default GetTodo