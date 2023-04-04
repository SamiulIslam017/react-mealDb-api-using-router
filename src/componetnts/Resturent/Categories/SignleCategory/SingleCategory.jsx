import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SingleMeal from './SingleMeal/SingleMeal';

const SingleCategory = () => {
    const single = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='px-8 md:px-16 lg:px-16'>
            <h1 className='text-2xl md:text-3xl lg:text-3xl font-bold text-center my-8 text-orange-600'>Total meal : {single.meals.length}</h1>
            <div className='text-center'>
                <p 
                onClick={()=>{
                    navigate(-1);
                }}
                className='cursor-pointer hover:text-orange-600 font-semibold text-center my-6'>
                
                    Back To Category Page
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'> 
                {
                    single.meals.map(meal => <SingleMeal key={meal.idMeal} meal={meal}></SingleMeal>)
                }
            </div>
        </div>
    );
};

export default SingleCategory;