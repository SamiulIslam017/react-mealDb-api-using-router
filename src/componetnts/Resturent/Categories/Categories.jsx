import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categorie}) => {
    return (
        <div className='flex flex-col justify-between items-center gap-6 shadow-lg rounded-md p-6'>
            <img src={categorie.strCategoryThumb} />
            <div>
                <h2 className='text-xl md:text-2xl lg:text-2xl font-semibold mb-4'>Category: {categorie.strCategory}</h2>
                <p>{categorie.strCategoryDescription.slice(0, 100)}...</p>
                <div className='flex flex-col  justify-between mt-3'>
                    <Link to={`/categories/${categorie.strCategory}`} className='px-4 text-center py-2 text-white rounded-lg mb-2 bg-orange-600'>{categorie.strCategory} Meal</Link>
                    <button className='px-4 text-center py-2 text-white rounded-lg mb-2 bg-orange-600'><Link to={`/categories/${categorie.strCategory}`}>{categorie.strCategory} Meal</Link></button>
                </div>
            </div>
            
            
        </div>
    );
};

export default Categories;