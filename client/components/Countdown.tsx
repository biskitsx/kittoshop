// import React from 'react'

// function Countdown() {
//     return (
//         <div className="grid grid-flow-col gap-5 text-center auto-cols-max ">
//             <div className="flex flex-col">
//                 <span className="countdown font-mono text-lg">
//                     <span style={{ "--value": 15 }}></span>
//                 </span>
//                 days
//             </div>
//             <div className="flex flex-col">
//                 <span className="countdown font-mono text-lg">
//                     <span style={{ "--value": 10 }}></span>
//                 </span>
//                 hours
//             </div>
//             <div className="flex flex-col">
//                 <span className="countdown font-mono text-lg">
//                     <span style={{ "--value": 24 }}></span>
//                 </span>
//                 min
//             </div>
//             <div className="flex flex-col">
//                 <span className="countdown font-mono text-lg">
//                     <span style={{ "--value": 48 }}></span>
//                 </span>
//                 sec
//             </div>
//         </div>
//     )
// }

// export default Countdown

import React, { useState, useEffect } from 'react';

function Countdown() {
    // Initialize state variables for days, hours, minutes, and seconds
    const [days, setDays] = useState(15);
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(48);

    // Function to update the countdown timer
    const updateCountdown = () => {
        const countdownDate = new Date('2023-12-31T23:59:59'); // Set your target date and time
        const currentDate = new Date();

        const timeDifference = countdownDate - currentDate;

        if (timeDifference > 0) {
            const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const remainingHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setDays(remainingDays);
            setHours(remainingHours);
            setMinutes(remainingMinutes);
            setSeconds(remainingSeconds);
        }
    };

    useEffect(() => {
        const interval = setInterval(updateCountdown, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
                <span className="countdown font-mono text-lg">
                    <span style={{ "--value": days }}></span>
                </span>
                days
            </div>
            <div className="flex flex-col">
                <span className="countdown font-mono text-lg">
                    <span style={{ "--value": hours }}></span>
                </span>
                hours
            </div>
            <div className="flex flex-col">
                <span className="countdown font-mono text-lg">
                    <span style={{ "--value": minutes }}></span>
                </span>
                min
            </div>
            <div className="flex flex-col">
                <span className="countdown font-mono text-lg">
                    <span style={{ "--value": seconds }}></span>
                </span>
                sec
            </div>
        </div>
    );
}

export default Countdown;
