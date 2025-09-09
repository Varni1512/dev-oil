import React, { useState } from 'react';
import { Search, Star, Heart, ShoppingCart } from 'lucide-react';
import { BiSolidZap } from 'react-icons/bi';
import { Link } from 'react-router-dom';

// MODIFIED COMPONENT: Adjusted for better mobile responsiveness while maintaining a horizontal layout.
const SingleOilCard = ({ oil, renderStars }) => {
  const [selectedSize, setSelectedSize] = useState('1L');
  const [isFavorite, setIsFavorite] = useState(false);

  const sizes = [
    { value: '500ml', label: '500ml' },
    { value: '1L', label: '1L' },
    { value: '2L', label: '2L' },
    { value: 'more', label: '+ 2 more' }
  ];

  return (
    // The main container remains a horizontal flexbox.
    <div
      className="w-full bg-white border-2 border-[#D97706] shadow-xl flex flex-row rounded-2xl overflow-hidden relative"
    >
      {/* Banner */}
      <div className="absolute top-0 right-0 bg-[#AE5D01] text-white px-2 py-1 rounded-bl-lg text-xs font-medium flex items-center gap-1.5 z-10">
        <span>Wood pressed</span>
        <div className="border-l border-white/50 h-4"></div>
        <button onClick={() => setIsFavorite(!isFavorite)} className='cursor-pointer'>
          <Heart
            size={16}
            className={`transition-all duration-200 ${isFavorite ? 'fill-white text-white' : 'fill-none text-white'}`}
          />
        </button>
      </div>

      {/* LEFT SIDE: Image container width is adjusted to give more space to content on all screens. */}
      <div className="w-2/5 lg:w-1/2 flex-shrink-0">
        <img
          src={oil.image}
          alt={`${oil.name} Bottle`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='345' height='300' viewBox='0 0 345 300'%3E%3Crect width='345' height='300' fill='%23f3f4f6'/%3E%3Ctext x='172.5' y='150' text-anchor='middle' fill='%236b7280' font-size='16'%3EOil Bottle%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>

      {/* RIGHT SIDE: Content container takes up remaining space. Padding and spacing are reduced for mobile. */}
      <div className="bg-white w-3/5 p-2 sm:p-4 flex flex-col justify-center space-y-2 text-start">
        {/* Title and Rating: Responsive font sizes. */}
        <div>
          <h2 className="text-sm sm:text-base font-medium text-gray-800 mb-1">{oil.name}</h2>
          <div className="flex items-center gap-2 mb-1 sm:mb-2">
            <div className="flex gap-1">{renderStars(oil.rating)}</div>
            <span className="text-xs text-gray-600 font-medium">({oil.rating})</span>
          </div>
        </div>

        {/* Description: Truncated on mobile to maintain card height. */}
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
          {oil.description}
        </p>

        {/* Price: Responsive font sizes. */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-lg sm:text-xl font-bold text-gray-800">₹ {oil.price}</span>
          <span className="text-xs sm:text-sm text-gray-500 line-clamp-1 line-through">₹ {oil.originalPrice}</span>
          <span className="bg-[#048A04] text-white px-1 py-0 rounded text-xs sm:text-sm leading-[25px] font-bold font-inter">{oil.discount}</span>
        </div>

        {/* Available Sizes: Adjusted padding and font size. */}
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => setSelectedSize(size.value)}
              className={`px-1.5 py-0.5 sm:px-2 sm:py-1 cursor-pointer rounded border text-xs transition-colors duration-200 
                ${selectedSize === size.value
                  ? 'bg-[#AE5D01] text-white border-[#AE5D01]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#AE5D01] hover:text-[#AE5D01]'
                }`}
            >
              {size.label}
            </button>
          ))}
        </div>

        {/* Action Buttons: Adjusted padding and font size for mobile. */}
        <div className="space-y-2 pt-1">
          <button className="w-full text-xs sm:text-sm bg-[#703102] cursor-pointer text-white py-1.5 px-2 sm:py-2 sm:px-4 rounded-lg font-medium hover:bg-amber-800 transition-colors duration-200 flex items-center justify-center gap-2">
            <ShoppingCart size={16} />
            Add to Cart
          </button>
          <button className="w-full text-xs sm:text-sm border-2 text-[#703102] cursor-pointer hover:bg-orange-50 border-[#703102] py-1.5 px-2 sm:py-2 sm:px-4 rounded-lg font-medium flex items-center justify-center gap-2">
            <BiSolidZap size={16} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};


// --- This component remains unchanged ---
const MustardOilCard = ({ oils, renderStars }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 px-4 md:px-8">
      {oils.map((oil) => (
        <SingleOilCard key={oil.id} oil={oil} renderStars={renderStars} />
      ))}
    </div>
  );
};

// --- The rest of your PremiumOilsStore component remains the same ---
const PremiumOilsStore = () => {
  const [sortBy, setSortBy] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  const oils = [
    { id: 1, name: 'Mustard Oil', rating: 5.0, reviews: 31, description: 'Pure cold-pressed mustard oil with natural pungency.', price: 110, originalPrice: 140, discount: '14% OFF', image: '/img2.png' },
    { id: 2, name: 'Groundnut Oil', rating: 4.0, reviews: 24, description: 'Premium groundnut oil perfect for deep frying.', price: 120, originalPrice: 140, discount: '14% OFF', image: '/img2.png'},
    { id: 3, name: 'Sunflower Oil', rating: 4.8, reviews: 67, description: 'Light and healthy sunflower oil rich in vitamin E.', price: 120, originalPrice: 140, discount: '14% OFF', image: '/img1.png' },
    { id: 4, name: 'Coconut Oil', rating: 4.8, reviews: 45, description: 'Virgin coconut oil with natural aroma for cooking.', price: 230, originalPrice: 140, discount: '14% OFF', image: '/img1.png' },
    { id: 5, name: 'Safflower Oil', rating: 5.0, reviews: 23, description: 'Premium safflower oil with a high smoke point.', price: 120, originalPrice: 140, discount: '14% OFF', image: '/img2.png' },
    { id: 6, name: 'Sesame Oil (White)', rating: 4.0, reviews: 18, description: 'Pure white sesame oil with mild flavor for tempering.', price: 120, originalPrice: 140, discount: '14% OFF', image: '/img3.png' },
    { id: 7, name: 'Safflower Oil', rating: 5.0, reviews: 23, description: 'Premium safflower oil with a high smoke point.', price: 120, originalPrice: 140, discount: '14% OFF', image: '/img3.png' },
    { id: 8, name: 'Sesame Oil (White)', rating: 4.0, reviews: 18, description: 'Pure white sesame oil with mild flavor for tempering.', price: 120, originalPrice: 140, discount: '14% OFF', image: '/img4.png' }
  ];

  const sortOptions = ['Featured', 'Price: High to Low', 'Price: Low to High', 'Name: A to Z'];

  const getSortedOils = () => {
    let filtered = oils.filter(oil =>
      oil.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      oil.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortBy) {
      case 'Price: High to Low': return filtered.sort((a, b) => b.price - a.price);
      case 'Price: Low to High': return filtered.sort((a, b) => a.price - b.price);
      case 'Name: A to Z': return filtered.sort((a, b) => a.name.localeCompare(b.name));
      default: return filtered;
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
    ));
  };

  const sortedOils = getSortedOils();

  return (
    <div className="relative min-h-screen px-3 lg:px-44 py-18">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/backgroundLines.png)' }}></div>
      <div className="relative z-10 ">
        <div className="relative mb-6 lg:mx-[2%] lg:px-2 md:px-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="Search Oils..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full text-xl h-14 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#703102]" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mb-6 lg:mx-[2%] lg:px-2 md:px-0">
          <h1 className="lg:text-2xl text-lg font-semibold text-gray-800">
            Discover All Premium Oils ({sortedOils.length})
          </h1>
          <div className="relative w-full md:w-auto">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none h-12 lg:h-[50px] w-full md:w-auto bg-white border text-base lg:text-lg border-gray-300 rounded-lg px-4 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-[#703102] cursor-pointer">
              {sortOptions.map((option) => (<option key={option} value={option}>Sort by: {option}</option>))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>

        <MustardOilCard oils={sortedOils} renderStars={renderStars} />

        {sortedOils.length > 0 && (
          <div className="flex justify-center pt-20">
            <button className="px-6 py-2 border-2 border-[#703102] text-[#703102] cursor-pointer hover:bg-orange-50  font-semibold rounded-md">
              View All Products
            </button>
          </div>
        )}

        {sortedOils.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No oils found matching your search.</p>
            <button onClick={() => setSearchQuery('')} className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumOilsStore;
