import { useState, useEffect } from "react";
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';


const images = [
    hero1,
    hero2,
    hero3,
]




const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        console.log('previous clicked')
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        console.log('next clicked')
    }
    return (
        <div className="relative overflow-hidden">
            <div className="relative">
                <img src={images[currentIndex]}
                    className="w-full"
                />
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-lg bg-gray-800 text-white p-2 z-10 hover:bg-slate-600"
                    onClick={goToPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-lg bg-gray-800 text-white p-2 z-10 hover:bg-slate-600"
                    onClick={goToNext}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                <div className="absolute inset-0 flex items-center justify-center mt-55">
                    <button className="bg-red-500 text-white px-4 py-2 mx-2 rounded-md transition-transform transform hover:translate-y-1">ORDER NOW</button>
                    <button className="bg-red-500 text-white px-4 py-2 mx-2 rounded-md transition-transform transform hover:translate-y-1 ">JOIN REWARDS</button>
                </div>
            </div>
        </div>
    )
}

export default Hero; 
