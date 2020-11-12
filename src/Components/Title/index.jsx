import React from 'react';
import './index.css'

const SIZE_BIG = 'bigText';
const SIZE_SMALL = 'smallText';

const Title = ({size = SIZE_SMALL, text}) => {

    return (
        <div className={size}>
            {text}
        </div>
    );
};

export {
    SIZE_BIG,
    SIZE_SMALL
}
export default Title;
