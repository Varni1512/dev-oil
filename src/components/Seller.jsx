import React, { useState } from 'react';
import { Heart, ShoppingCart, Zap, TrendingUp } from 'lucide-react';

const BestSellers = () => {
    // State for managing favorite status of products
    const [favorites, setFavorites] = useState({});

    // Toggles the favorite status for a given product ID
    const toggleFavorite = (id) => {
        setFavorites(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Sample product data
    const products = [
        {
            id: 1,
            name: "Mustard Oil",
            rating: 4.0,
            description: "Pure cold-pressed mustard oil with natural pungency and authentic...",
            currentPrice: 120,
            originalPrice: 140,
            discount: "14% OFF",
            sizes: ["500ml", "1L", "2L", "+ 2 more"],
            image: "/oil.png"
        },
        {
            id: 2,
            name: "Mustard Oil",
            rating: 4.0,
            description: "Pure cold-pressed mustard oil with natural pungency and authentic...",
            currentPrice: 120,
            originalPrice: 140,
            discount: "14% OFF",
            sizes: ["500ml", "1L", "2L", "+ 2 more"],
            image: "/oil.png"
        },
        {
            id: 3,
            name: "Mustard Oil",
            rating: 4.0,
            description: "Pure cold-pressed mustard oil with natural pungency and authentic...",
            currentPrice: 120,
            originalPrice: 140,
            discount: "14% OFF",
            sizes: ["500ml", "1L", "2L", "+ 2 more"],
            image: "/oil.png"
        },
        {
            id: 4,
            name: "Mustard Oil",
            rating: 4.0,
            description: "Pure cold-pressed mustard oil with natural pungency and authentic...",
            currentPrice: 120,
            originalPrice: 140,
            discount: "14% OFF",
            sizes: ["500ml", "1L", "2L", "+ 2 more"],
            image: "/oil.png"
        }
    ];

    // Star rating sub-component
    const StarRating = ({ rating }) => (
        <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="2.48"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill={star <= rating ? '#FACC15' : 'white'}
                    stroke={star <= rating ? '#FACC15' : '#D1D5DB'}
                >
                    <path d="M10.3928 2.08716L12.9517 7.27119L18.674 8.10759L14.5334 12.1405L15.5106 17.838L10.3928 15.1466L5.27499 17.838L6.25217 12.1405L2.11157 8.10759L7.83388 7.27119L10.3928 2.08716Z" />
                </svg>
            ))}
            <span className="text-sm text-gray-600 ml-1">({rating})</span>
        </div>
    );

    // Main Product Card component with the updated design
    const ProductCard = ({ product }) => {
        // --- START: Added logic for size selection ---
        // State to track the selected size index for THIS card
        const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);
        // --- END: Added logic for size selection ---

        return (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-[1.24px] border-[#703102] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative bg-gray-50">
                    <div className="absolute top-0 right-0 bg-[#AE5D01] text-white px-3 py-1 rounded-bl-full text-sm font-medium flex items-center gap-2 z-10">
                        <span>Wood pressed</span>
                        <div className="border-l border-white/50 h-4"></div>
                        <button onClick={() => toggleFavorite(product.id)}>
                            <Heart
                                size={18}
                                className="transition-all duration-200"
                                // fill={favorites[product.id] ? 'white' : 'none'}
                            />
                        </button>
                    </div>
                    <div className="flex justify-center items-center h-full">
                        <div className="relative w-full h-full">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-[22px] leading-[35px] font-normal font-inter text-[#111827]">
                        {product.name}
                    </h3>
                    <StarRating rating={product.rating} />
                    <p className="text-[#4B5563] text-[16px] leading-[25px] font-normal font-inter mt-3 mb-4">
                        {product.description}
                    </p>
                    <div className="flex items-center space-x-2 mb-3">
                        <span className="text-[25px] leading-[35px] font-bold font-inter text-[#111827]">
                            ₹{product.currentPrice}
                        </span>
                        <span className="text-[17px] leading-[25px] font-normal font-inter text-[#6B7280] line-through">
                            ₹{product.originalPrice}
                        </span>
                        <span className="bg-[#048A04] text-white px-1 py-0 rounded text-[16px] leading-[25px] font-bold font-inter">
                            {product.discount}
                        </span>
                    </div>

                    <div className="mb-4">
                        <p className="text-[17px] leading-[25px] font-normal font-inter text-[#374151] mb-2">
                            Available sizes:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    // --- START: Added onClick handler ---
                                    onClick={() => setSelectedSizeIndex(index)}
                                    // --- END: Added onClick handler ---
                                    className={`px-2 py-1 rounded-lg text-[12px] leading-[20px] font-normal font-inter border cursor-pointer transition-colors ${
                                        // --- START: Changed condition to use state ---
                                        selectedSizeIndex === index
                                            ? 'bg-[#AE5D01] text-white border-[#AE5D01]'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#AE5D01] hover:text-[#AE5D01]'
                                        // --- END: Changed condition to use state ---
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full bg-[#703102] hover:bg-[#703102] cursor-pointer text-white py-3 px-6 rounded-lg font-normal text-[20px] leading-[30px] font-inter text-center transition-colors duration-200 flex items-center justify-center space-x-2">
                            <ShoppingCart size={18} />
                            <span>Add to Cart</span>
                        </button>
                        <button className="w-full text-[20px] leading-[30px] font-inter bg-white hover:bg-orange-50 text-[#703102] py-3 px-6 rounded-lg cursor-pointer font-normal border-2 border-[#703102] transition-all duration-200 flex items-center justify-center space-x-2">
                            <Zap size={18} />
                            <span>Buy Now</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-2"
            style={{
                backgroundImage: `url("/backgroundLines.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <TrendingUp size={16} className="mr-2" />
                        Most Popular
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Best Sellers</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our customers' favorite oils, loved for their exceptional quality and authentic taste
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;