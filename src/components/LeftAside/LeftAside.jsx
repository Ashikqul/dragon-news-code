import React, { Suspense } from 'react';
import Categorys from '../Categorys';

const LeftAside = () => {
    return (
        <div className=''>
            <Suspense fallback= {<span className="loading loading-bars loading-xl"></span>
}>
            <Categorys></Categorys>
            </Suspense>
        </div>
    );
};

export default LeftAside;