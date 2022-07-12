import React, {useState} from 'react';

export const useUserContext = () => {
    const [name, setName] = useState('');
    return {
        name,
        setName,
    };
};