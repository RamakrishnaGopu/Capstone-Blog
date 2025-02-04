import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useClerk ,useUser} from '@clerk/clerk-react'
import { UserAuthorContextObj } from '../../Contexts/userAuthorContext';
// import {Blogger} from '../../assets/Blogger-Logo.jpg'

function Header() {
  const {currentUser,setCurrentUser}=useContext(UserAuthorContextObj);
  const {signOut}=useClerk();
  const {isSignedIn}=useUser();
  const navi=useNavigate();
  // function to signout
  async function handleSignOut(){
      await signOut();
      setCurrentUser(null)
      navi('/')
  }

  return (
    <div className='header'>
      <nav className=' d-flex justify-content-between align-items-center'>
      <div>
        <Link to="/"><h2>BLOGG</h2></Link>
      </div>
        {
          !isSignedIn?
          <ul className='d-flex list-unstyled text-dark gap-5'>
        <li>
         <Link to={""}>Home</Link>
       </li>
       <li>
         <Link to={"signin"}>signin</Link>
       </li>
       <li>
         <Link to={"signup"}>signup</Link>
       </li>
       </ul>
          :
          <div className='d-flex justify-content-center align-items-center gap-5'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img src={currentUser.profileImageUrl}  width={"40px"} height={"40px"} className='rounded-circle' alt="" />
              {/* <p className='mb-0 user-name'>{currentUser?.firstName}</p> */}
            </div>
          <button className='btn btn-outline-danger' onClick={handleSignOut}>SignOut</button>
          </div>
        }
     </nav>
     < hr className='m-0' />
    </div>
  )
}

export default Header