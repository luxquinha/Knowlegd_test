import React from 'react'
import { PlusIcon, ListChecksIcon} from 'lucide-react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <header className='w-5/6 h-1/6 border-b-2 border-zinc-200 mx-auto mb-4'>
      <ul className='w-full h-full flex flex-row justify-between items-center'>
        <li className='text-white flex items-center gap-x-3'>
          <ListChecksIcon size={50}/>
          <h1 className='text-5xl font-bold tracking-widest'>React refreshing</h1>
        </li>
        <li className='flex items-center justify-center'>
          <Link to={'create-post'} className='w-28 h-8 bg-zinc-300 text-zinc-800 font-semibold active:outline-none border-none flex items-center justify-center gap-x-2 rounded-sm hover:bg-zinc-400'>
            <PlusIcon size={20}/>
            <p>New post</p>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default MainHeader
