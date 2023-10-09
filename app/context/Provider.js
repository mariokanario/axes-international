"use client";

import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";
import { API } from "@/config";

const Context = createContext();

const Provider = ({ children }) => {

    /* const [data, setData] = useState({
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
 */
    const [wallet, setWallet] = useState()

    const getWallet = async () => {
        try {
            const response = await axios.get(`${API}/user/by/token`, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } });
            console.log(response);
            setWallet(response?.data?.data?.wallet?.value)
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <Context.Provider value={{ wallet, getWallet } }>
            {children}
        </Context.Provider>
    );
}

// export default Provider;
export { Context , Provider}