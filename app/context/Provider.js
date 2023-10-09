"use client";

import React, { createContext, useEffect, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {

    const [data, setData] = useState({
        token: "",
        name: ""
    })

    const setLocalStorage = () => {

        const token = localStorage.getItem('jwt') ?? "";
        const name = localStorage.getItem('name') ?? "";

        setData({
            token,
            name
        })

    }

    return (
        <Context.Provider value={ {data, setLocalStorage} }>
            {children}
        </Context.Provider>
    );
}

// export default Provider;
export { Context , Provider}