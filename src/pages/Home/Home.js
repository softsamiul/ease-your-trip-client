import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import PhotoCollage from '../../shared/PhotoCollage/PhotoCollage';
import Services from '../../shared/Services/Services';
import Banner from './BannerSlider/Banner';

const Home = () => {
    const {user, signInUsingGoogle, isLoading} = useAuth();

    const [preloader, setPreloader] = useState(true);
    
    return (
        <div>
            
            {/* Banner start */}
            <Banner></Banner>

            {/* Services */}
            <div className="" style={{marginBottom:"45px"}}>
            <h2 className=" text-4xl font-bold" style={{marginTop:"45px", paddingBottom:"10px"}}>Trending Tours Today</h2>
            <p className="w-2/5 border-b border-gray mx-auto" style={{marginBottom:"30px"}}></p>
                <Services></Services>
            </div>
            {/* Photo collage */}
            <PhotoCollage></PhotoCollage>



        </div>
    );
};

export default Home;