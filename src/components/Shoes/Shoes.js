import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first=13;
    const second=11;
    const ans=multiply(first,second);
    const sum=add(first,second);
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>Total:{ans}</p>
            <p>sum:{sum}</p>
        </div>
    );
};

export default Shoes;