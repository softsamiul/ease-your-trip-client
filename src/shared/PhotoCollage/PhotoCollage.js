import React from 'react';
import './PhotoCollage';
const PhotoCollage = () => {

    return (
        <div className="mb-12">
            <h2 className="text-3xl font-bold pb-3">Destination Areas View</h2>
            <hr className="w-1/4 mx-auto mb-5" />
            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-8">
                    <div className=" bg-1 md:col-span-2 col-span-1">
                        <img style={{height:"100%"}} src="https://i.ibb.co/9YYz8kq/howrah-bridge.jpg" alt="" />
                    </div>
                    <div className=" bg-1 col-span-2">
                        <img style={{height:"100%"}} className="img-fluid" src="https://i.ibb.co/myD2QQ6/gangtok.jpg" alt="" />
                    </div>
                    <div className=" bg-1 row-span-2 col-span-2">
                        <img style={{height:"100%"}} src="https://i.ibb.co/Y7fxFJy/hill.jpg" alt="" />
                    </div>
                    <div className=" bg-1 col-span-2">
                        <img style={{height:"100%"}} src="https://i.ibb.co/Bz1RGVC/unnamed.jpg" alt="" />
                    </div>
                    <div className=" bg-1 col-span-2">
                        <img style={{height:"100%"}} src="https://i.ibb.co/hBhn3RR/5621259188-e74d63cb05-b-20180302140149.jpg" alt="" />
                    </div>
                    <div className=" bg-1 col-span-2">
                        <img style={{height:"100%"}} src="https://i.ibb.co/4SFWJ9B/tech-city.jpg" alt="" />
                    </div>
                    <div className=" bg-1 col-span-2">
                        <img style={{height:"100%"}} src="https://i.ibb.co/PNFWwWS/forest.jpg" alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PhotoCollage;