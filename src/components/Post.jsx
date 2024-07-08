import React from 'react'
import { Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Post = ({ postData }) => {
  return (
    <div className='w-1/5 h-44 rounded-xl bg-zinc-300 relative flex flex-col justify-between p-3 gap-y-3 shadow-lg'>
      <Link to={`/${postData.id}`} className=' text-zinc-700 hover:text-zinc-700'>
        <p className='font-bold uppercase tracking-wide'>{postData.name}</p>
        <p className='font-medium text-zinc-600'>{postData.body}</p>
      </Link>
      <div className='flex justify-between text-xs font-medium text-zinc-400'>
        <p>{postData.hour}</p>
        <p>{postData.date}</p>
      </div>
    </div>
  )
}

export default Post
