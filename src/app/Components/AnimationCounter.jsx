'use client';
import React from 'react';
export default function AnimationCounter({targetNumber=282,duration=2000,className}){
    const [count, setCount] = React.useState(0);
    const counterRef = React.useRef(null);
    const hasCounted = React.useRef(false);
    React.useEffect(() => {
     const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !hasCounted.current){
            hasCounted.current=true;
            animateCount(0,targetNumber,duration);
            if (counterRef.current) observer.unobserve(counterRef.current)
        }
     }
     , {
        threshold: 0.6
     });
     if (counterRef.current) observer.observe(counterRef.current);
     return ()=>observer.disconnect();

    },[targetNumber,duration]);
    const animateCount=(start, end, duration) => {
        let startTimestamp = null;
        const step =(timestamp)=>{
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress *(end - start) + start);
            setCount(value);
            if (progress < 1) requestAnimationFrame(step);  
        };
        requestAnimationFrame(step);
    }
    return (
        <div ref={counterRef} className={className}>
            {count}
        </div>
    )
}