import {createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState ({
        token: undefined,
        username: undefined,
    });

    useEffect(() => {
        // Check for stored token in localStorage at startup
        const token = localStorage.getItem('auth-token');
        if (token) {
            setUserData(prev => ({...prev, token: token}));
        }

        const username = localStorage.getItem('username');
        if (username) {
            setUserData(prev => ({...prev, username: username}))
        }
        
    }, []);

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;