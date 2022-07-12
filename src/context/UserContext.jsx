import React, { createContext } from 'react';

const initialState = {
    name: "",
    setName: (name) => {},
};

export const UserContext = createContext(initialState);


