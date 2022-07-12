import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext"
const CC = ({children}) => {
    const context = useContext(UserContext);
    return (
        <div>
            <span>C 컴포넌트</span>
            {children}
            <input type="text" onChange={(e) => {
                context.setName(e.target.value);}}/>
        </div>
    )
}

export default CC;