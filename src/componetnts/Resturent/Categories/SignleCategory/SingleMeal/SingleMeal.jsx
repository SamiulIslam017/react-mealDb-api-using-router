import React from 'react';
import "./SingleMeal.css"
import { Link } from 'react-router-dom';

const SingleMeal = ({meal}) => {
    const {strMeal, strMealThumb,idMeal} = meal;
    return (
        
        <div className='custom-img p-6 shadow-lg  rounded-lg text-center'>
            <img className='rounded-lg' src={strMealThumb} />
            <h2 className='text-xl md:text-2xl lg:text-2xl font-semibold text-center mt-4 md:mt-6 lg:mt-6'>{strMeal}</h2>
            <button className='bg-orange-600 text-white px-4 py-2 rounded-md font-semibold my-6'><Link to={`/details/${idMeal}`}>Show Details</Link></button>
        </div>
      
    );
};

export default SingleMeal;