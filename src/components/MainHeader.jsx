import React from 'react'
import { PlusIcon, ListChecksIcon} from 'lucide-react'

const MainHeader = ({ onToggleModal }) => {
  return (
    <header className='w-5/6 h-1/6 border-b-2 border-zinc-200 mx-auto mb-4'>
      <ul className='w-full h-full flex flex-row justify-between items-center'>
        <li className='text-white flex items-center gap-x-3'>
          <ListChecksIcon size={50}/>
          <h1 className='text-5xl font-bold tracking-widest'>React refreshing</h1>
        </li>
        <li className='flex items-center justify-center'>
          <button onClick={onToggleModal} className='w-full bg-zinc-300 text-zinc-800 font-semibold active:outline-none border-none flex items-center justify-center gap-x-2 hover:bg-zinc-400'>
            <PlusIcon size={20}/>
            <p>New post</p>
          </button>
        </li>
      </ul>
    </header>
  )
}

export default MainHeader
