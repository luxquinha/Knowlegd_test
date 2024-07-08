import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Posts, { loader as loaderPosts } from './routes/Posts.jsx'
import PostDetails, { loader as loaderPostDetails } from './routes/PostDetails.jsx'
import RootLayout from './routes/RootLayout.jsx'
import NewPost, {action as newPostAction} from './routes/NewPost.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Posts/>,
        loader: loaderPosts,
        children: [
          {
            path: '/create-post',
            element: <NewPost/>,
            action: newPostAction
          },
          {
            path: '/:id',
            element: <PostDetails/>,
            loader: loaderPostDetails
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
