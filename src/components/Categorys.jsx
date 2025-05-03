import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json").then(res=>res.json())
const Categorys = () => {

const categorys = use(categoryPromise);
// const btn = "py-2 px-4  text-black rounded hover:bg-blue-600 block text-left";




    return (
        <div>
        <h1 className='font-bold'>All Categories({categorys.length})</h1>
        <div className='grid grid-cols-1 mt-5 gap-5 rounded-full text-accent '>
           {
        categorys.map(category=><NavLink key={category.id} className={`btn bg-base-100 border-0 hover:bg-amber-200 font-semibold text-accent`}
           
           
            to={`/category/${category.id}`}
        
        >
            
            
            
            {category.name}</NavLink>)
           } 
        </div>
        </div>
    );
};

export default Categorys;
