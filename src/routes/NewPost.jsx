import React from 'react'
import Modal from '../components/Modal'
import { Link, Form, redirect } from 'react-router-dom'

const NewPost = () => {
  return (
    <Modal>
      <Form method='POST' className='w-2/5 h-2/4 bg-zinc-400 rounded-xl absolute top-48 left-[500px] z-10 flex flex-col p-5 justify-center gap-y-3 text-zinc-800 font-semibold text-lg tracking-wide'>
        <label htmlFor="name">What's your name?</label>
        <input type="text" placeholder='Type your name' name='name' className='w-full h-8 bg-white rounded-sm text-base px-1'/>
        <label htmlFor="body">Type your post:</label>
        <textarea name="body" placeholder='Type your post here...' id="body" className='w-full h-48 border bg-white rounded-sm text-base px-1'></textarea>
        <div className='flex flex-row gap-x-4 w-full justify-end text-base'>
          <Link to={'/'} className='text-white bg-zinc-500 w-24 h-8 rounded-md flex items-center justify-center border-none active:outline-none'>Cancel</Link>
          <button className='text-white bg-green-600 w-24 h-8 rounded-md flex items-center justify-center active:outline-none border-none'>Submit</button>
        </div>
      </Form>
    </Modal>
  )
}

export default NewPost

export const action = async ({ request }) =>{
  const posts = JSON.parse(localStorage.getItem('posts')) || []
  const formData = await request.formData()
  let postData = Object.fromEntries(formData)
  postData = { ...postData, id: posts.length + 1, ...dataAtualFormatada() }
  const newPosts = [ postData, ...posts]
  localStorage.setItem('posts', JSON.stringify(newPosts))

  return redirect('/')
}

function dataAtualFormatada(){
  let date = new Date().toLocaleString('pt-BR').split(',')[0] 
  let hour = new Date().toLocaleString('pt-BR').split(',')[1]
  hour = hour.trim().split(':')

  return { date: date, hour: `${hour[0]}:${hour[1]}`}
}
