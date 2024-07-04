import { useState } from "react"
import MainHeader from "./components/MainHeader"
import Modal from "./components/Modal"
import NewPost from "./components/NewPost"
import PostList from "./components/PostList"

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [posts, setPosts] = useState([])

  const toggleModalHandler = () => {
    setOpenModal(!openModal)
  }

  const submitDataHandler = (newPost) =>{
    setPosts(posts => [newPost, ...posts])
  }

  return (
    <div className="w-screen h-screen bg-zinc-700 mx-auto">
      <MainHeader onToggleModal={toggleModalHandler}/>
      <PostList posts={posts}/>
      {openModal && 
      <Modal>
        <NewPost onToggleModal={toggleModalHandler} onSubmitData={submitDataHandler}/>
      </Modal>
      }
    </div>
  )
}

export default App
