import React from 'react'
import {SignIn} from '@clerk/clerk-react'

function Signin() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <SignIn/>
    </div>
  )
}

export default Signin