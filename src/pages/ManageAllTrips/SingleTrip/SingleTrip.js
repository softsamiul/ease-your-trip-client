import React from 'react';
import './SingleTrip';

const SingleTrip = ({trip}) => {
    const {fullName, tripPackageName, status} = trip;
    console.log(trip)
    return (
        <tr className="border border-gray " style={{height:"40px", padding:"0px 20px"}}>
            
                <td>{fullName}</td>
                <td >{tripPackageName}</td>
                <td>{status}</td>
                <td className="flex items-center">
                    <button className="flex items-center bg-red-400 py-1 px-2 mr-2">
                        <i class="fas fa-window-close text-white mr-2"></i>
                        <span className="text-white">Cancel</span>
                    </button>
                    <button className="flex items-center bg-green-600 py-1 px-2">
                        <i class="fas fa-check-square mr-2 text-white"></i>
                        <span>Confirm</span>
                    </button>
                </td>
            
        </tr>
    );
};

export default SingleTrip;