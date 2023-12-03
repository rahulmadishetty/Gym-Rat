import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { HOME, PROFILE, SIGN_IN, MY_WORKOUTS } from '../../constants/routes';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        navigate(SIGN_IN.INDEX)
    };

    return (
        <section className='d-flex align-items-center'>
            <div className="navbar px-3">
                <NavLink to={HOME.INDEX}>
                    Home
                </NavLink>
                <NavLink to={MY_WORKOUTS.INDEX}>
                    Workouts
                </NavLink>
                <NavLink to={PROFILE.INDEX}>
                    Profile
                </NavLink>
            </div>
            <div className='p-2 m-3 cursor-pointer' onClick={handleLogout}>
                Logout
            </div>
        </section>

    );
};

export default Navbar;
