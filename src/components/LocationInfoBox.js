import React from 'react';

export const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info:</h2>
            <ul>
                <li><b>ID : </b>{ info.id }</li>
                <li><b>TITLE : </b>{ info.title }</li>
                {/* <li><b>DATE : </b>{ info.date }</li> */}

            </ul>
        </div>
        
    )
}
