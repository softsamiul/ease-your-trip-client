import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';

const About = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>About</h2>
        </div>
    );
};

export default About;