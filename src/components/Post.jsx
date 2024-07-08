import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ name, body, id, date, hour }) => {
  return (
    <div className='w-1/5 h-44 rounded-xl bg-zinc-300 flex flex-col justify-between p-3 gap-y-3 shadow-lg'>
      <Link to={`/${id}`} className=' text-zinc-700 hover:text-zinc-700'>
        <p className='font-bold uppercase tracking-wide'>{name}</p>
        <p className='font-medium text-zinc-600'>{body}</p>
      </Link>
      <div className='flex justify-between text-sm font-medium text-zinc-400'>
        <p>{hour}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Post
