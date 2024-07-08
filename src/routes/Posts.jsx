import { useEffect, useState } from "react"
import MainHeader from "../components/MainHeader"
import Modal from "../components/Modal"
import NewPost from "./NewPost"
import PostList from "../components/PostList"
import { Outlet } from "react-router-dom"

function Posts() {
  const [posts, setPosts] = useState([])

  const submitDataHandler = (newPost) =>{
    const newPosts = [newPost, ...posts]
    setPosts(newPosts)
    localStorage.setItem('posts', JSON.stringify(newPosts))
  }

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts'))
    if(posts) setPosts(posts)
  }, [])

  return (
    <div className="w-screen h-[80%] bg-zinc-700 mx-auto">
      <PostList posts={posts}/>
      <Outlet/>
    </div>
  )
}

export default Posts
