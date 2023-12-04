import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { OnboardingContext } from '../../context/Onboarding';

const BrandingCard = () => {

    const {userName} = useContext(OnboardingContext);

    const name = localStorage.getItem("userName")

    const navigate = useNavigate();
    const handleOnClick = () =>{
        navigate("/workout")
    }

    return (
        <div className='d-flex branding p-5 m-5'>
            <div className='p-3 my-5 mx-3'>
                <h2>Hello <span className='color-primary my-5 fw-bold'>{userName || name}</span>,
                    Are you ready to be a <span className='color-primary fw-bold'>Gym Rat</span>? We are here to motivate you.</h2>
                <p className='my-4'>Embrace the challenge, {userName || name}! Transform into a Gym Enthusiast and let every drop of sweat be a testament to your dedication. We're here to inspire and support you on your fitness journey. Remember, every workout brings you closer to your best self. Let's crush those goals together!</p>
                <p className='my-2'>We have created a personalized workout planner for you. Are you ready?</p>
                <button onClick={handleOnClick} className='my-4 primary-btn'>My workout</button>
            </div>
            <img width={580} src='https://img.freepik.com/free-vector/woman-lifting-weight-gym-scene_603843-3612.jpg?w=1800&t=st=1701573254~exp=1701573854~hmac=4396f786b163f05ed14d0c719692010e763bd90841db61be5df9422d9218fce1' />
        </div>
    )
}

export default BrandingCard