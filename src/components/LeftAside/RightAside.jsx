import React from 'react';
import SocialLogin from '../LatestNews/SocialLogin';
import FindUs from '../FindUs/FindUs';
import Qzeon from '../Qzone/Qzeon';

const RightAside = () => {
    return (
    <div className='space-y-8 '>
        <SocialLogin></SocialLogin>

<FindUs></FindUs>
<Qzeon></Qzeon>
    </div>
    );
};

export default RightAside;