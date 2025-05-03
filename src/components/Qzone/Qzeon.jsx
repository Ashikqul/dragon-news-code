import React from 'react';
import swimming from '../../assets/swimming.png'
import playground from '../../assets/playground.png'
import classImage from '../../assets/class.png'

const Qzeon = () => {
    return (
        <div className="bg-base-200 p-4">
            <h2 className="font-bold md-5">Q-Zone</h2>
            <div className="space-y-5">
<img src={swimming} alt="" />
<img src={playground} alt="" />
<img src={classImage} alt="" />

            </div>
        </div>
    );
};

export default Qzeon;