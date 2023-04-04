import React from 'react';

const Error = () => {
    return (
        <div className='h-96 flex flex-col justify-center items-center'>
            <h1 className='text-red-600 text-4xl font-bold'>Ofs! Something wrong</h1>
            <p className='text-red-400 text-xl font-semibold'>This page not available. Input a valid url</p>
        </div>
    );
};

export default Error;