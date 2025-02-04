import React, { useContext, useEffect } from 'react';
import { UserAuthorContextObj } from '../../Contexts/userAuthorContext';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { currentUser, setCurrentUser } = useContext(UserAuthorContextObj);
  const { isSignedIn, user, isLoaded } = useUser(); //return obj
  const navi=useNavigate();

  useEffect(() => {
    if (isLoaded && user) {
      setCurrentUser({
        ...currentUser,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.emailAddresses?.[0]?.emailAddress || '',
        profileImageUrl: user.imageUrl || '',
        role: ''
      });
    }
  }, [isLoaded, user]);
  console.log(currentUser)

  return (
  <div>
    {
      isSignedIn===true?
      <div>
      <div className='d-flex justify-content-center gap-4 align-items-center p-3'>
        <img src={user.imageUrl} width="100px" className='rounded-circle' alt="" /> 
        <p className='display-6'>{user.firstName}</p>
      </div>
       <div
       className="d-flex role-radio py-3 gap-4 justify-content-center">
        <p className='btn'>Author</p>
        <p className='btn'>Admin</p>
        <p className='btn'>User</p>
       </div>
      </div>
      : 
      <div>
        <h2 className='mt-4'>Publish your passions, your way</h2>
        <h6 className='mt-3'>Create a unique and beautiful blog easily.</h6>
        <p className='lead mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor sequi corporis libero in reiciendis iure perspiciatis dolores aperiam consequatur omnis eius esse, eum reprehenderit sit unde ipsa consequuntur qui blanditiis alias, quam enim culpa repellat. </p>      
       <p className="lead mt-2">Repellat quidem in placeat numquam at, aperiam quod suscipit maiores asperiores quaerat provident officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est repellat expedita! Harum sit, nemo voluptatem provident, beatae accusantium eveniet ratione modi unde assumenda rem ullam! Amet nobis quibusdam nulla odit, qui ullam repellendus iure maiores, vel quas eum debitis dolore delectus ex perspiciatis sint quisquam nostrum ratione? Esse aliquam veritatis laboriosam corrupti est ab possimus! Dolorum veniam a voluptates est rerum accusantium repudiandae voluptas incidunt aliquid dignissimos quis quia numquam sunt deleniti aperiam eaque perspiciatis velit eligendi iste eum, expedita, natus nisi nostrum. Consequuntur corporis sed velit molestias iusto consequatur, atque explicabo reiciendis eveniet nostrum eum, sit, nemo provident.</p>
      <button className='btn btn-outline-primary m-4' onClick={()=>{navi('/signup')}}>Create your Blog</button>
      </div>
    }
  </div>
)}

export default Home;
