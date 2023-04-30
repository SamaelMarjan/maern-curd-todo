import React, { useState } from 'react'

const TodoInput = ({passTo, input, setInput}) => {

  return (
    <div>
        <div>
            <form className='d-flex flex-column input'>
                <input placeholder='Title' value={input.title} name='title' onChange={passTo} />
                <input placeholder='Timing' value={input.time} name='time' onChange={passTo} />
                <textarea placeholder='Description' value={input.task} name='task' onChange={passTo} />
            </form>
        </div>
    </div>
  )
}

export default TodoInput