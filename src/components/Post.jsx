import React from 'react'

const Post = ({ name, body }) => {
  return (
    <div className='w-1/5 h-44 rounded-xl bg-zinc-300 flex flex-col p-3 gap-y-3 text-zinc-700 shadow-lg'>
      <p className='font-bold uppercase tracking-wide'>{name}</p>
      <p className='font-medium text-zinc-600'>{body}</p>
    </div>
  )
}

export default Post
