import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
    return (
        <div className='Notifications'>
            <button style={{ position: "absolute",
                    top: 20,
                    right: 15,
                    border: "none",
                    background: "transparent"
                }}
            aria-label="Close"
            onClick={() => {console.log('Close button has been clicked');}}>
                <img src={closeIcon} alt='close-icon' width={"10px"}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;
