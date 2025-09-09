import React, { useState, useEffect } from 'react';

// --- Replace with your actual hero image paths ---
const slides = [
    { url: '/hero.png' },
    { url: '/hero.png' },
    { url: '/hero.png' },
    { url: '/hero.png' },
];

// Arrow Component (Unchanged)
const Arrow = ({ direction, onClick, className }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full transition-opacity duration-300 z-10 ${className}`}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
            />
        </svg>
    </button>
);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Auto-play (Unchanged)
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [currentIndex]); // The dependency is correct as is, it resets the timer on manual navigation.

    return (
        <div className="w-full overflow-hidden relative">
            {/* Slider Wrapper */}
            <div className="relative w-full h-[200px] lg:h-[680px]"> {/* <-- Responsive Height */}
                <div
                    className="w-full h-full flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.url})` }}
                        />
                    ))}
                </div>

                {/* --- MOBILE NAVIGATION --- */}
                {/* Overlay Arrows for mobile, hidden on large screens */}
                <div className="block lg:hidden">
                    <Arrow direction="left" onClick={prevSlide} className="left-4" />
                    <Arrow direction="right" onClick={nextSlide} className="right-4" />
                </div>
            </div>

            {/* --- DESKTOP NAVIGATION --- */}
            {/* Original navigation, hidden on mobile and shown on large screens */}
            <div className="flex justify-center items-center mt-5 lg:mt-10 space-x-4">
                {/* Left symbol */}
                <button
                    onClick={prevSlide}
                    className="text-xl font-bold text-gray-800 hover:text-gray-600 transition -mt-1"
                    aria-label="Previous Slide"
                >
                    &lt;
                </button>

                {/* Dots */}
                <div className="flex space-x-2">
                    {slides.map((_, slideIndex) => (
                        <button
                            key={slideIndex}
                            onClick={() => setCurrentIndex(slideIndex)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                currentIndex === slideIndex ? 'bg-gray-800' : 'bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${slideIndex + 1}`}
                        />
                    ))}
                </div>

                {/* Right symbol */}
                <button
                    onClick={nextSlide}
                    className="text-xl font-bold text-gray-800 hover:text-gray-600 transition -mt-1"
                    aria-label="Next Slide"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Hero;