import React from 'react';

const FC = ({children}) => {
    return (
        <div>
            <span>F 컴포넌트</span>
            {children}
        </div>
    )
}

export default FC;