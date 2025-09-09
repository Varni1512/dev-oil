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

    const products = [
        {
            id: 1,
            name: "Mustard Oil",
            rating: 5,
            description: "Pure cold-pressed mustard oil with natural pungency.",
            currentPrice: 110,
            originalPrice: 140,
            discount: "14% OFF",
            sizes: ["500ml", "1L", "2L", "+ 2 more"],
            image: "/oil.png" // Make sure this path is correct
        },
        {
            id: 2,
            name: "Mustard Oil",
            rating: 5,
            description: "Pure cold-pressed mustard oil with natural pungency.",
            currentPrice: 110,
            originalPrice: 140,
            discount: "14% OFF",
            sizes: ["500ml", "1L", "2L", "+ 2 more"],
            image: "/oil.png"
        },
        {
            id: 3,
            name: "Mustard Oil",
            rating: 5,
            description: "Pure cold-pressed mustard oil with natural pungency.",
            currentPrice: 110,
            originalPrice: 140,
            discount: "14% OFF",
            sizes: ["500ml", "1L", "2L", "+ 2 more"],
            image: "/oil.png"
        },
        {
            id: 4,
            name: "Mustard Oil",
            rating: 5,
            description: "Pure cold-pressed mustard oil with natural pungency.",
            currentPrice: 110,
            originalPrice: 140,
            discount: "14% OFF",
            sizes: ["500ml", "1L", "2L", "+ 2 more"],
            image: "/oil.png"
        }
    ];

    const StarRating = ({ rating }) => (
        <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
            <span className="text-sm text-gray-600 ml-1">({rating})</span>
        </div>
    );

    const ProductCard = ({ product }) => {
        const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);

        // Extracted badge component to avoid repetition
        const Badge = () => (
            <div className="bg-[#AE5D01] text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-2">
                <span>Wood pressed</span>
                <button onClick={() => toggleFavorite(product.id)}>
                    <Heart
                        size={14}
                        className="transition-all duration-200"
                        fill={favorites[product.id] ? 'white' : 'none'}
                    />
                </button>
            </div>
        );

        return (
            <div className="flex sm:block bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                
                {/* --- DESKTOP BADGE (Visible on sm screens and up) --- */}
                <div className="hidden sm:flex absolute top-0 right-0 z-10">
                    <Badge />
                </div>

                <div className="w-2/5 sm:w-full">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-3/5 sm:w-full p-3 sm:p-5 flex flex-col relative">
                    {/* --- MOBILE BADGE (Hidden on sm screens and up) --- */}
                    <div className="sm:hidden absolute top-0 right-0 z-10">
                        <Badge />
                    </div>

                    <h3 className="text-base sm:text-2xl font-semibold font-inter text-gray-800 pr-20">
                        {product.name}
                    </h3>
                    <div className="mt-0 sm:mt-0">
                        <StarRating rating={product.rating} />
                    </div>
                    <p className="text-gray-500 text-xs sm:text-base font-normal mt-5  sm:mb-4 flex-grow">
                        {product.description}
                    </p>
                    
                    <div className="flex items-center flex-wrap gap-x-2 mb-3 lg:-mt-3">
                        <span className="text-lg sm:text-2xl font-bold text-gray-900">
                            ₹{product.currentPrice}
                        </span>
                        <span className="text-sm sm:text-base text-gray-500 line-through">
                            ₹{product.originalPrice}
                        </span>
                        <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs sm:text-sm font-bold">
                            {product.discount}
                        </span>
                    </div>

                    <div className="mb-4 mt-2">
                        <p className="hidden sm:block text-sm font-medium text-gray-700 mb-2">
                            Available sizes:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedSizeIndex(index)}
                                    className={`px-3 py-1 rounded-lg text-xs sm:text-sm border cursor-pointer transition-colors ${
                                        selectedSizeIndex === index
                                            ? 'bg-[#AE5D01] text-white border-[#AE5D01]'
                                            : 'bg-white text-gray-700 border-gray-400 hover:border-[#AE5D01] hover:text-[#AE5D01]'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto space-y-2">
                        <button className="w-full bg-[#703102] hover:bg-amber-800 text-white py-2 px-4 rounded-lg font-medium text-sm sm:text-base transition-colors flex items-center justify-center gap-2">
                            <ShoppingCart size={18} />
                            <span>Add to Cart</span>
                        </button>
                        <button className="w-full bg-white hover:bg-amber-50 text-[#703102] py-2 px-4 rounded-lg font-medium border-2 border-[#703102] transition-colors text-sm sm:text-base flex items-center justify-center gap-2">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
