import React from 'react';

const BC = ({children, name}) => {
    return (
        <div>
            <span>B 컴포넌트 {name}</span>
            {children}
        </div>
    )
}

export default BC;