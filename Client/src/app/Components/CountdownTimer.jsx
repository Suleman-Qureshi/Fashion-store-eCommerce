'use client';

import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your offer end date here
  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 37); // 37 days from now

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerEndDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBox = (value, label) => (
    <div className="bg-white shadow-md rounded-xl px-4 py-2 text-center">
      <p className="text-2xl font-bold quaternary-color">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );

  return (
    <div className="text-black">
      <h2 className="text-lg secondary-color font-semibold mb-4">Offer ends in:</h2>
      <div className="flex gap-4 items-center text-white">
        {timeBox(timeLeft.days, 'Days')}:
        {timeBox(timeLeft.hours, 'Hours')}:
        {timeBox(timeLeft.minutes, 'Minutes')}:
        {timeBox(timeLeft.seconds, 'Seconds')}
      </div>
    </div>
  );
};

export default CountdownTimer;
