import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import Services from '../../shared/Services/Services';

const Home = () => {
    const {user, signInUsingGoogle} = useAuth();
    return (
        <div>
            
            {/* <button className="my-5" onClick={signInUsingGoogle}>Google sign in</button> */}

            {/* Services */}
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;