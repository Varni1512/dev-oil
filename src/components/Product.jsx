import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';

const ProductOfTheDay = () => {
    const [selectedSize, setSelectedSize] = useState('1L');
    const [isFavorite, setIsFavorite] = useState(false);

    const sizes = [
        { value: '500ml', label: '500ml' },
        { value: '1L', label: '1L' },
        { value: '2L', label: '2L' },
        { value: 'more', label: '+ 2 more' }
    ];

    const benefits = [
        'Virgin Quality',
        'Natural Aroma',
        'Multi-purpose Use'
    ];

    const ClockIcon = (props) => (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M7.35807 12.5953C10.3496 12.5953 12.7747 10.1702 12.7747 7.17863C12.7747 4.18709 10.3496 1.76196 7.35807 1.76196C4.36653 1.76196 1.94141 4.18709 1.94141 7.17863C1.94141 10.1702 4.36653 12.5953 7.35807 12.5953Z"
                stroke="#D97706"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.35938 3.92859V7.17859L9.52604 8.26192"
                stroke="#D97706"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <section className="w-full relative h-[45rem] lg:h-[55rem] lg:min-h-screen overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url("/ProductBackground.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.2
                }}
            ></div>

            <div className="absolute left-18 h-54 lg:left-[73rem] w-[350px] lg:w-[350px] lg:h-96 opacity-100 mt-30 lg:mt-0">
                <img
                    src="/right.png"
                    alt="Oil Press"
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="absolute -left-85 lg:-left-65 bottom-0 w-[1000px] h-64 lg:h-96 opacity-100">
                <img
                    src="/bottom.png"
                    alt="Oil Press"
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 lg:py-12">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-amber-100 text-[#D97706] px-4 py-1 rounded-full text-sm lg:text-sm font-bold ">
                        <ClockIcon className="mr-1" />   Limited Time Offer
                    </div>
                    <h1 className="lg:text-4xl text-[18px] font-bold text-gray-800 ">Product of the Day</h1>
                    <p className="text-gray-600 text-xs lg:text-lg">Special pricing on our premium selection - Today only!</p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mt-40 lg:mt-0">
                    <div className="flex">

                        <div className="w-1/2 relative bg-gray-100">
                            <div className="absolute h-5 w-11 lg:h-10 lg:w-24 top-4 left-4 bg-[#EF4444] text-white px-1.5 lg:px-3.5 py-1 lg:py-3 rounded-full text-[7px] lg:text-sm font-bold z-10">
                                14% OFF
                            </div>

                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className="absolute top-1 right-1 lg:top-6 lg:right-6 p-2 lg:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
                            >
                                <Heart
                                    size={
                                        typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 20
                                    }
                                    className={`${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'} transition-colors duration-200 cursor-pointer`}
                                />
                            </button>

                            <div className="flex justify-center items-center h-full">
                                <img
                                    src="/product.png"
                                    alt="Coconut Oil Bottle"
                                    className="w-full h-full object-cover "
                                />

                            </div>
                        </div>

                        <div className="w-1/2 p-4 py-5 lg:p-10 relative ">
                            <div className="absolute top-0 right-0 bg-[#AE5D01] text-white px-1 py-0 lg:px-3 rounded-bl-lg text-xs lg:text-sm lg:font-medium flex items-center gap-1 lg:gap-2 z-10">
                                <span>Wood pressed</span>
                                <div className="border-l border-white/50 h-3 lg:h-4 "></div>
                                <button onClick={() => setIsFavorite(!isFavorite)} className='cursor-pointer'>
                                    <Heart
                                        size={typeof window !== 'undefined' && window.innerWidth < 768 ? 14 : 18}
                                        className={`transition-all duration-200 ${isFavorite ? 'fill-white text-white' : 'fill-none text-white'}`}
                                    />
                                </button>
                            </div>

                            <div className='flex flex-col w-full'>
                                <div className='flex items-center mb-2'>
                                    <div className="inline-flex items-center bg-green-100 text-green-700 px-1.5 lg:px-4 py-[1.5px] lg:py-2 rounded-full text-[5.3px] lg:text-sm font-medium mr-3">
                                        Wood Pressed
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="lg:w-4 lg:h-4 h-1.5 w-1.5 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <h2 className="lg:text-2xl text-xs font-bold text-[#4B5563] mb-1 lg:mb-3">Coconut Oil</h2>

                                <p className="text-[#4B5563] text-[6px] lg:text-sm leading-2.5 lg:leading-relaxed mb-1 lg:mb-4">
                                    Virgin cold-pressed coconut oil with natural aroma and multiple health benefits. Perfect for cooking and skin care.
                                </p>

                                <div className="flex items-baseline gap-2 mb-1 lg:mb-4">
                                    <span className="lg:text-xl text-xs font-bold text-gray-900">₹180</span>
                                    <span className="lg:text-xl text-[8px] text-gray-500 line-through">₹210</span>
                                    <span className="lg:text-xl text-[8px] text-gray-500 font-medium">(14% OFF)</span>
                                </div>

                                <p className="lg:text-sm text-[6px] text-gray-500 mb-1 lg:mb-3">Starting from 250ml • Free shipping included</p>

                                {/*-- MODIFIED SECTION: Interactive Size Options --*/}
                                <div className="flex items-center gap-2 mb-1 lg:mb-4">
                                    {sizes.map((size) => (
                                        <button
                                            key={size.value}
                                            onClick={() => setSelectedSize(size.value)}
                                            className={`px-[5.72px] lg:px-3 py-[2.3px] lg:py-2 cursor-pointer rounded text-[6px] lg:text-sm transition-colors duration-200
                                                ${selectedSize === size.value
                                                    ? 'bg-[#AE5D01] text-white border-2 border-transparent'
                                                    : 'border-2 border-gray-300 text-[#374151] hover:border-[#AE5D01] hover:text-[#AE5D01]'
                                                }`}
                                        >
                                            {size.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 text-[6.3px] lg:text-sm mb-2">Key Benefits:</h4>
                                    <ul className="space-y-1">
                                        {benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-center gap-2 text-[5.3px] lg:text-sm text-gray-600">
                                                <span className="w-[3.2px] h-[3.2px] lg:w-2 lg:h-2 bg-yellow-500 rounded-full inline-block"></span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 bg-[#703102] lg:h-12 h-7 min-w-16 cursor-pointer text-white rounded font-bold transition-colors flex items-center justify-center gap-1 lg:text-sm text-[6px]">
                                        <ShoppingCart className="w-3 h-3 font-bold" />
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 border text-[#703102] border-[#703102] cursor-pointer lg:h-12 h-7 min-w-16 hover:bg-orange-50 bg-white rounded font-bold transition-colors flex items-center justify-center gap-1 text-[6px] lg:text-sm">
                                        <Eye className="w-3 h-3 font-bold" />
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductOfTheDay;