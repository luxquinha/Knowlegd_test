import React from 'react'
import Post from './Post'

const PostList = ({ posts }) => {
  return (
    <div className='w-5/6 h-4/5 flex flex-row flex-wrap gap-6 mx-auto'>
      {posts?.map((post, index) => 
        <Post key={index} name={post.name} body={post.body} id={post.id} hour={post.hour} date={post.date}/>
      )}
    </div>
  )
}

export default PostList
