import React from 'react'

const NewPost = ({ onToggleModal, onSubmitData }) => {

  const submitHandler = (event) =>{
    event.preventDefault()
    let postData = {
      name: event.target[0].value,
      body: event.target[1].value
    }
    onToggleModal()
    onSubmitData(postData)
  }

  return (
    <div className='w-2/5 h-2/4 bg-zinc-400 rounded-xl absolute top-48 left-[500px] z-10'>
      <form onSubmit={submitHandler} className='flex flex-col p-5 justify-center gap-y-3 text-zinc-800 font-semibold text-lg tracking-wide'>
        <label htmlFor="name">What's your name?</label>
        <input type="text" placeholder='Type your name' name='name' className='w-full h-8 bg-white rounded-sm text-base px-1'/>
        <label htmlFor="body">Type your post:</label>
        <textarea name="body" placeholder='Type your post here...' id="body" className='w-full h-48 border bg-white rounded-sm text-base px-1'></textarea>
        <div className='flex flex-row gap-x-4 w-full justify-end text-base'>
          <button type="button" onClick={onToggleModal} className='text-white bg-zinc-500 w-24 h-8 rounded-md flex items-center justify-center border-none active:outline-none'>Cancel</button>
          <button className='text-white bg-green-600 w-24 h-8 rounded-md flex items-center justify-center active:outline-none border-none'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NewPost
