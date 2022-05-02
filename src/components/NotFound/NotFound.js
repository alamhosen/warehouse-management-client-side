import React from 'react';
import { useNavigate } from 'react-router-dom';
import funny_404 from '../../images/funny-404.jpg'

const NotFound = () => {
    const navigate = useNavigate();

    const goHome = () =>{
        navigate ('/home')
    }
    return (
        <div className='container text-center mt-4'>
            <div className=''>
            <h1>Oops!</h1>
            <h4>404-PAGE NOT FOUND</h4>
            <p>We can't seem to find the page you're looking for.</p>
            <div><img className='w-25' src={funny_404} alt="not found" /></div>
            <button onClick={goHome} className='btn btn-primary mt-2'>GO TO HOMEPAGE</button>
            </div>
        </div>
    );
};

export default NotFound;