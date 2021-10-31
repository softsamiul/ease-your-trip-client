import React from 'react';
import Faq from '../../shared/Faq/Faq';

const About = () => {
    return (
        <div className="py-8 w-11/12 mx-auto">
            <h2 className="text-3xl font-medium pb-3">About Us</h2>
            <hr className="w-1/5 mx-auto mb-4" />
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/4 w-full">
                    <div className="md:w-3/5 w-full mx-auto mt-6 md:mt-0">
                        <img src="https://i.ibb.co/MgYyyPq/login.png" alt="" />
                    </div>
                </div>
                {/* About Ease My Trip start */}
                <div className="md:w-2/4 w-full text-left">
                    <h2 className="text-2xl font-medium">Ease Your Trip</h2>
                    <p className="text-gray-700">Ese My Trip is an Indian online travel company founded in 2021. Headquartered in Newtown, Kolkata. The company provides online travel services including flight tickets, domestic and international holiday packages, hotel reservations, rail, and bus tickets.</p>
                    {/* FAQ Added*/}
                    <div className="mt-6">
                        <Faq></Faq>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;