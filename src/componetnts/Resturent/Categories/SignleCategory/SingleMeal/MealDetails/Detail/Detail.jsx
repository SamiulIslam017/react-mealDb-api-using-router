import React from 'react';

const Detail = ({detail}) => {
    const {strMeal, strInstructions, strMealThumb, strArea, strCategory,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient16,strIngredient17,strIngredient18,strIngredient19,strIngredient20} = detail;
    return (
        <div className='w-full md:w-10/12 lg:w-2/3 mx-auto shadow-lg px-6 md:px-10 lg:px-16 py-6 md:py-8 lg:py-8 mt-10'>
            <img className='mx-auto rounded-xl w-full h-[15rem] md:h-[25rem] lg:h-[40rem] object-cover' src={strMealThumb}  />
            <h2 className='text-xl md:text-2xl lg:text-3xl font-bold my-4'>Dish Name{strMeal}</h2>
            <p className=' flex gap-6 mb-8'>
                <span className='font-normal'>Category: {strCategory}</span>
                <span className='font-normal'>Country: {strArea}</span>
            </p>
            <div className='flex justify-between'>
                <div className='flex-1'>
                <h4 className='text-lg md:text-xl lg:text-2xl font-bold mb-4'>Ingredient:</h4>
                    <ul>
                        <li>{strIngredient1 ? strIngredient1 : " "}</li>
                        <li>{strIngredient2 ? strIngredient2 : " "}</li>
                        <li>{strIngredient3 ? strIngredient3 : " "}</li>
                        <li>{strIngredient4 ? strIngredient4 : " "}</li>
                        <li>{strIngredient5 ? strIngredient5 : " "}</li>
                        <li>{strIngredient6 ? strIngredient6 : " "}</li>
                        <li>{strIngredient7 ? strIngredient7 : " "}</li>
                        <li>{strIngredient8 ? strIngredient8 : " "}</li>
                        <li>{strIngredient9 ? strIngredient9 : " "}</li>
                        <li>{strIngredient10 ? strIngredient10 : " "}</li>
                        <li>{strIngredient11 ? strIngredient11: " "}</li>
                        <li>{strIngredient12 ? strIngredient12 : " "}</li>
                        <li>{strIngredient13 ? strIngredient13 : " "}</li>
                        <li>{strIngredient14 ? strIngredient14 : " "}</li>
                        <li>{strIngredient15 ? strIngredient15 : " "}</li>
                        <li>{strIngredient16 ? strIngredient16 : " "}</li>
                        <li>{strIngredient17 ? strIngredient17 : " "}</li>
                        <li>{strIngredient18 ? strIngredient18 : " "}</li>
                        <li>{strIngredient19 ? strIngredient19 : " "}</li>
                        <li>{strIngredient20 ? strIngredient20 : " "}</li>
                    </ul>

                </div>
                <div className='flex-1'>
                    <h4 className='text-lg md:text-xl lg:text-2xl font-bold mb-4'>Instruction:</h4>
                    <p>{strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;