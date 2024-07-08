import { useState } from "react"
import PostList from "../components/PostList"
import { Outlet, useLoaderData } from "react-router-dom"

function Posts() {
  const posts = useLoaderData()
  
  return (
    <div className="w-screen h-[80%] bg-zinc-700 mx-auto">
      <PostList posts={posts}/>
      <Outlet/>
    </div>
  )
}
export default Posts

export const loader = () => {
  const posts = JSON.parse(localStorage.getItem('posts'))
  return posts
}