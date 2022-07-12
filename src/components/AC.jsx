import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext"
const AC = ({children, name}) => {
    const context = useContext(UserContext);
    return (
        <div>
            <span>A 컴포넌트 {context.name}</span>
            {children}
        </div>
    )
}

export default AC;