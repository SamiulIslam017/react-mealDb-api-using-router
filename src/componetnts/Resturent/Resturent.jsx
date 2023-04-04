import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories/Categories';

const Resturent = () => {
    const {categories} = useLoaderData();
    return (
        <div className='px-8 md:px-16 lg:px16 '>
            <h1 className='text-2xl md:text-3xl lg:text-3xl font-bold text-center my-8 text-orange-600'>All Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(categorie => <Categories key={categorie.idCategory} categorie={categorie}></Categories>)
                }
            </div>
        </div>
    );
};

export default Resturent;