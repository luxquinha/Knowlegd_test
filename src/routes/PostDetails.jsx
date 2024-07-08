import React from 'react'
import Modal from '../components/Modal'
import { useLoaderData } from 'react-router-dom'

const PostDetails = () => {
  const post = useLoaderData()

  return (
    <Modal>
      <div className='w-2/5 h-1/4 bg-zinc-300 rounded-xl absolute top-48 left-[500px] z-10 flex flex-col p-5 justify-around gap-y-3 text-zinc-800 font-semibold text-lg tracking-wide'>
        <h2 className='text-3xl'>{post.name}</h2>
        <p>{post.body}</p>
        <div className='flex justify-between text-sm font-medium text-zinc-400'>
          <p>{post.hour}</p>
          <p>{post.date}</p>
        </div>
      </div>
    </Modal>
  )
}

export default PostDetails

export const loader = ({ params }) => {
  const posts = JSON.parse(localStorage.getItem('posts'))
  const post = posts.find(post => post.id === parseInt(params.id))
  return post
}
