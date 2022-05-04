import React from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/social/google.png'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    const from = location.state?.from?.pathname || "/";

    if (error ) {
         errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }

      if(user){
        navigate(from, { replace: true });
      }

    return (
        <div> 
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()}
                className='btn btn-primary w-75 d-block mx-auto my-2'>
                    <img style={{ height: "22px" }} src={google} alt="" />
                    <span className='px-2'>Sign In with Google</span></button>
            </div>
            <div className='d-flex align-items-center mb-3'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <div className='px-2'>OR</div>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
        </div>
    );
};

export default SocialLogin;