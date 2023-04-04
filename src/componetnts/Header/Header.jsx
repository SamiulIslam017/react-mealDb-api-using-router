import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header,.css";

const Header = () => {
    return (
        <div className='flex justify-between px-8 md:px-16 lg:px-16 py-8 shadow-md items-center mb-4'>
            <h1 className='text-xl font-bold text-orange-500'>Meal DB</h1>
            <nav className='flex justify-between gap-4'>
                <NavLink
                    // className='text-lg font-bold hover:text-orange-600 duration-100' 
                    to='/'
                    className={({ isActive}) =>
                    isActive
                        ? "active text-lg font-bold"
                        :  "text-lg font-bold hover:text-orange-300 duration-100 "
                    }
                    >
                        Home
                </NavLink>
                <NavLink
                    // className='text-lg font-bold hover:text-orange-600 duration-100' 
                    to='/restaurant'
                    className={({ isActive}) =>
                    isActive
                        ? "active text-lg font-bold"
                        :  "text-lg font-bold hover:text-orange-300 duration-100 "
                    }
                    >
                        Restaurant
                </NavLink>
                
            </nav>
        </div>
    );
};

export default Header;