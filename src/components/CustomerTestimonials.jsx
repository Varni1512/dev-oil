import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, QuoteIcon, Star } from 'lucide-react';

const CustomerTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const calculateItems = () => {
      const w = window.innerWidth;
      if (w < 768) setItemsPerSlide(1);
      else if (w < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
      setCurrentSlide(0);
    };
    calculateItems();
    window.addEventListener('resize', calculateItems);
    return () => window.removeEventListener('resize', calculateItems);
  }, []);

  const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    review: '"The mustard oil from Dev Natural Oils has that authentic taste I remember from my childhood. The quality is exceptional and you can really taste the difference!"',
    avatar: 'priya.png'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi, NCR',
    rating: 5,
    review: '"I have been using their coconut oil for cooking and it\'s amazing. Pure, natural, and the aroma is just perfect. Highly recommended for health-conscious families."',
    avatar: 'rajesh.png'
  },
  {
    id: 3,
    name: 'Anjali Desai',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    review: '"The groundnut oil is excellent for deep frying. It gives food a wonderful taste. Great quality at reasonable prices."',
    avatar: 'meera.jpg' // Using your third local image
  },
  {
    id: 4,
    name: 'Vikram Iyer',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    review: '"Best sesame oil I\'ve ever used. The traditional wood-pressed method really makes a difference in taste and nutritional value."',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'Sunita Reddy',
    location: 'Hyderabad, Telangana',
    rating: 5,
    review: '"Their sunflower oil is perfect for everyday cooking. Light, healthy, and maintains the natural flavor of food. Highly satisfied!"',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 6,
    name: 'Sandeep Singh',
    location: 'Chandigarh, Punjab',
    rating: 4,
    review: '"The pungency of the mustard oil is just right. It adds a great kick to pickles and curries. Will definitely buy again."',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 7,
    name: 'Kavita Rao',
    location: 'Pune, Maharashtra',
    rating: 5,
    review: '"I use their almond oil for my hair and skin, and the quality is top-notch. It\'s pure and feels very nourishing."',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 8,
    name: 'Rohan Gupta',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    review: '"The quality of the groundnut oil is consistent and pure. It makes the best snacks for festive occasions. A staple in my kitchen now."',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 9,
    name: 'Deepa Nair',
    location: 'Kochi, Kerala',
    rating: 5,
    review: '"As someone who uses coconut oil for everything, I can say this is one of the purest I have found. The fragrance is so natural!"',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 10,
    name: 'Arjun Verma',
    location: 'Lucknow, Uttar Pradesh',
    rating: 4,
    review: '"Good quality sunflower oil. It\'s light and doesn\'t have any overpowering smell, which is great for everyday cooking."',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 11,
    name: 'Fatima Khan',
    location: 'Kolkata, West Bengal',
    rating: 5,
    review: '"I was looking for authentic wood-pressed mustard oil, and I found it here. It makes the fish curries taste just like home."',
    avatar: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 12,
    name: 'Nikhil Joshi',
    location: 'Indore, Madhya Pradesh',
    rating: 5,
    review: '"The sesame oil has a rich, nutty flavor that is perfect for my cooking. You can tell it\'s made with great care."',
    avatar: 'https://images.unsplash.com/photo-1624561172888-ac93c690e8ac?w=150&h=150&fit=crop&crop=face' // <-- Corrected Image URL
  },
];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'lg:w-4 lg:h-4 h-2.5 w-2.5 fill-yellow-400 text-yellow-400' : 'lg:w-4 lg:h-4 h-2.5 w-2.5 text-gray-300'}
      />
    ));
  };

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <div className="w-full  bg-[url('/backgroundLines.png')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-7xl mx-auto p-6">
        {/* Section Header */}
        <div className="text-center mb-12 mt-12">
          <h2 className="lg:text-3xl text-lg md:text-4xl font-bold text-[#AE5D01] mb-1 lg:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 lg:text-lg text-xs ">
            Don't just take our word for it - hear from thousands of satisfied customers<br />
            across India
          </p>
        </div>

        {/* Testimonials Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-[80px] lg:top-[124px] cursor-pointer transform -translate-y-1/2 z-10 w-10 l-10 hover:bg-orange-50 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow border border-[#AE5D01]"
          >
            <ChevronLeft className="w-6 h-6 text-[#AE5D01]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-[80px] lg:top-[124px] cursor-pointer transform -translate-y-1/2 z-10 w-10 l-10 hover:bg-orange-50 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow border border-[#AE5D01]"
          >
            <ChevronRight className="w-6 h-6 text-[#AE5D01]" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
            {getVisibleTestimonials().map((testimonial) => (
              <div key={testimonial.id} className=" rounded-2xl bg-white p-4 lg:p-6 shadow-md border-2 border-[#FCE289] relative">
                {/* Quote Icon */}
                <div className="h-10 w-10 lg:h-4 lg:w-4 absolute top-1 lg:top-4 right-0 lg:right-4 text-4xl text-[#FDE68A] font-serif">
                  <QuoteIcon />
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-4 mb-1  lg:mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="lg:w-14 lg:h-14 w-8 h-8  rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[10px] lg:text-xl  text-gray-800">{testimonial.name}</h4>
                    <p className="lg:text-sm text-[9.77px] text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex  gap-1 mb-1 lg:mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed lg:text-sm text-[9.77px] italic">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 px-2">
            {Array.from({ length: totalSlides }, (_, i) => (
              <span
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full transition-colors flex-shrink-0 ${i === currentSlide ? 'bg-[#AE5D01]' : 'bg-[#FCE289]'
                  }`}
              />
            ))}
          </div>

        </div>
        {/* Rating Summary Pill */}
        <div className="w-full flex justify-center mt-10 lg:mt-20">
          <div className="bg-[#FFEFC4] flex items-center gap-2 sm:gap-3 rounded-full shadow-sm
            w-[245.1616px] h-[37.798px] px-3 py-[9.9px]
            lg:w-[440px] lg:h-[50px] lg:px-[40px] lg:py-[10px]">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
              <Star className="w-3.5 h-3 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
              <Star className="w-3.5 h-3 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
              <Star className="w-3.5 h-3 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
              <Star className="w-3.5 h-3 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="text-[9.4px] lg:text-xl font-semibold text-gray-800">4.9/5</span>
            <span className="text-[9.4px] lg:text-base text-gray-600">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;