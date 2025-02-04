import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css";
import UserAuthorContext from './Contexts/userAuthorContext.jsx';
import './index.css'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom' 
import App from './App.jsx'
import Root from './Components/Root.jsx'
import Home from './Components/common/Home.jsx'
import Signin from './Components/common/Signin.jsx'
import Signup from './Components/common/Signup.jsx'
import ArticleByID from './Components/common/ArticleByID.jsx'
import Articles from "./Components/common/Articles.jsx"
import UserProfile from './Components/user/UserProfile.jsx'
import AuthorProfile from './Components/author/AuthorProfile.jsx'
import PostArticle from './Components/author/PostArticle.jsx'




const browserRouterObj=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
         path:"",
         element:<Home/>
      },{
        path:"signup",
        element:<Signup/>
      },{
        path:"signin",
        element:<Signin/>
      },
      {
        path:"user-profile/:email",
        element:<UserProfile/>
        ,children:[
          {
            path:"articles",
            element:<Articles/>
          },
          {
            path:":articleId",
            element:<ArticleByID/>
          },
          {
            path:"",
            element:<Navigate to="articles"/>
          }
        ]
      },
      {
        path:"author-profile/:email",
        element:<AuthorProfile/>
        ,children:[
          {
            path:"articles",
            element:<Articles/>
          },
          {
            path:":articleId",
            element:<ArticleByID/>
          },
          {
            path:"",
            element:<Navigate to="articles"/>
          },
          {
            path:"PostArticle",
            element:<PostArticle/>
          }
        ]
      }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UserAuthorContext>
  <RouterProvider router={browserRouterObj}/>
  </UserAuthorContext>
  </StrictMode>
  ,
)
