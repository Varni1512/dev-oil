import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

const VideoTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Expanded to 12 testimonials with unique image URLs
  const videoTestimonials = [
    { id: 1, name: 'Priya Sharma', location: 'Mumbai, Maharashtra', rating: 5, videoId: 'y0sF5xhGreA', image: '/v1.png' },
    { id: 2, name: 'Rajesh Kumar', location: 'Delhi, NCR', rating: 5, videoId: 'QFk9-bLV_t8', image: '/v2.png' },
    { id: 3, name: 'Meera Patel', location: 'Ahmedabad, Gujarat', rating: 5, videoId: 'IV-4gC-bxA8', image: '/v3.png' },
    { id: 4, name: 'Amit Singh', location: 'Bangalore, Karnataka', rating: 5, videoId: '8h-b5f7wBEs', image: '/v1.png' },
    { id: 5, name: 'Sunita Reddy', location: 'Hyderabad, Telangana', rating: 5, videoId: 'cc-0-82-4-A', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face' },
    { id: 6, name: 'Vikram Gupta', location: 'Pune, Maharashtra', rating: 5, videoId: 'PQSagzssv_Q', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=300&fit=crop&crop=face' },
    { id: 7, name: 'Anjali Verma', location: 'Kolkata, West Bengal', rating: 5, videoId: 'video7', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop&crop=face' },
    { id: 8, name: 'Sandeep Nair', location: 'Chennai, Tamil Nadu', rating: 5, videoId: 'video8', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=300&fit=crop&crop=face' },
    { id: 9, name: 'Pooja Desai', location: 'Jaipur, Rajasthan', rating: 5, videoId: 'video9', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=300&fit=crop&crop=face' },
    { id: 10, name: 'Rohan Mehta', location: 'Lucknow, Uttar Pradesh', rating: 5, videoId: 'video10', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=face' },
    { id: 11, name: 'Kavita Joshi', location: 'Bhopal, Madhya Pradesh', rating: 5, videoId: 'video11', image: 'https://images.unsplash.com/photo-1488426862026-39b33529b2af?w=400&h=300&fit=crop&crop=face' },
    { id: 12, name: 'Imran Khan', location: 'Indore, Madhya Pradesh', rating: 5, videoId: 'video12', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=300&fit=crop&crop=face' },
  ];

  // Calculate slides for responsive display
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
      return 1; // sm screens
    }
    return 3; // default for server-side rendering
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const totalSlides = Math.ceil(videoTestimonials.length / itemsPerSlide);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentSlide(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         if (playingVideoId === null) { // Pause auto-slide when a video is playing
  //             nextSlide();
  //         }
  //     }, 5000); // Change slide every 5 seconds

  //     return () => clearInterval(interval);
  // }, [currentSlide, playingVideoId, totalSlides]);


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const handlePlayVideo = (videoId) => {
    setPlayingVideoId(videoId);
  };

  return (
    <div className="w-full -mt-30 lg:mt-0">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-inter font-bold text-[40px] lg:text-[40px] leading-[50px] text-[#AE5D01] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 lg:text-lg text-xs max-w-3xl mx-auto">
            Experience the stories firsthand – watch inspiring video testimonials from people whose lives have been positively impacted by Dev Natural Oils across India.
          </p>
        </div>

        {/* Video Testimonials Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={totalSlides <= 1}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 w-10 hover:bg-orange-50 cursor-pointer h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 border border-orange-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#AE5D01]" />
          </button>
          <button
            onClick={nextSlide}
            disabled={totalSlides <= 1}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 w-10 hover:bg-orange-50 cursor-pointer h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 border border-orange-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#AE5D01]" />
          </button>

          {/* Video Cards Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-2">
                    {videoTestimonials.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-2xl overflow-hidden w-full max-w-[360px] mx-auto border-2 border-yellow-200 shadow-lg"
                      >
                        {/* Video Thumbnail Area */}
                        <div className="relative w-full h-72 sm:h-80 bg-gray-100">
                          {playingVideoId === testimonial.videoId ? (
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`}
                              title={`${testimonial.name} testimonial`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            ></iframe>
                          ) : (
                            <>
                              <img
                                src={testimonial.image}
                                alt={`${testimonial.name} testimonial`}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = 'https://placehold.co/400x300/f97316/white?text=Image+Error'; }}
                              />
                              <div className="absolute inset-0 flex items-center justify-center  bg-opacity-20 hover:bg-opacity-30 transition-all duration-200">
                                <button
                                  onClick={() => handlePlayVideo(testimonial.videoId)}
                                  className="w-16 h-16 bg-yellow-200 border-2 cursor-pointer border-orange-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
                                >
                                  <Play className="w-6 h-6 text-orange-600 ml-1" fill="currentColor" />
                                </button>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Customer Info */}
                        <div className="p-4 text-start">
                          <h4 className="text-lg lg:text-xl font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{testimonial.location}</p>
                          <div className="flex gap-1 mb-2">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${i === currentSlide ? 'bg-[#AE5D01] scale-125' : 'bg-[#FCE289] hover:bg-orange-300'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;

