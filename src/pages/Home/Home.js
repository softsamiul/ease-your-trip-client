import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';

const Home = () => {
    const {user, signInUsingGoogle} = useAuth();
    return (
        <div>
            
            <button className="my-5" onClick={signInUsingGoogle}>Google sign in</button>
        </div>
    );
};

export default Home;