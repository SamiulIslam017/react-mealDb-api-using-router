import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Detail from './Detail/Detail';

const MealDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='px-8 md:px-16 lg:px-16'>
            <div className=''>
                <p 
                onClick={() => {
                    navigate(-1);
                }}
                className='cursor-pointer hover:text-orange-600 font-semibold text-center my-6'>
                    Back To Single Category Meals Page
                </p>
            </div>
            <div>
            {
                details.meals.map(detail => <Detail key={detail.idMeal} detail={detail}></Detail>)
            }
            </div>
        </div>
    );
};

export default MealDetails;