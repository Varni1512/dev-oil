import { ArrowBigRightIcon, Calendar } from 'lucide-react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FooterBanner from '../components/FooterBanner';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/blogimg1.png",
      category: "Health & Wellness",
      date: "August 11, 2025",
      title: "The Golden Elixir: 5 Surprising Benefits of Cold-Pressed Mustard Oil",
      excerpt: "Discover why this pungent oil is more than just a cooking medium. From boosting heart health to fighting inflammation, learn how it can elevate your wellness journey.",
      categoryColor: "bg-yellow-200 text-yellow-800"
    },
    {
      id: 2,
      image: "/Blog2.png",
      category: "Know Your Oils",
      date: "August 11, 2025",
      title: "Cold-Pressed vs. Wood-Pressed: Which Oil is Right For You?",
      excerpt: "Both methods preserve nutrients, but they have subtle differences. We break down the processes and benefits to help you choose for your kitchen.",
      categoryColor: "bg-orange-200 text-orange-800"
    },
    {
      id: 3,
      image: "/Blog3.png",
      category: "Recipes",
      date: "August 11, 2025",
      title: "A Chef's Secret: Perfect Crispy Dosas with Wood-Pressed Groundnut Oil",
      excerpt: "Unlock the secret to flawlessly crispy dosas. Our recipe highlights how the high smoke point of wood-pressed groundnut oil makes all the difference.",
      categoryColor: "bg-green-200 text-green-800"
    },
    {
      id: 4,
      image: "/blogimg1.png",
      category: "Health & Wellness",
      date: "August 11, 2025",
      title: "The Golden Elixir: 5 Surprising Benefits of Cold-Pressed Mustard Oil",
      excerpt: "Discover why this pungent oil is more than just a cooking medium. From boosting heart health to fighting inflammation, learn how it can elevate your wellness journey.",
      categoryColor: "bg-yellow-200 text-yellow-800"
    },
    {
      id: 5,
      image: "/Blog2.png",
      category: "Know Your Oils",
      date: "August 11, 2025",
      title: "Cold-Pressed vs. Wood-Pressed: Which Oil is Right For You?",
      excerpt: "Both methods preserve nutrients, but they have subtle differences. We break down the processes and benefits to help you choose for your kitchen.",
      categoryColor: "bg-orange-200 text-orange-800"
    },
    {
      id: 6,
      image: "/Blog3.png",
      category: "Recipes",
      date: "August 11, 2025",
      title: "A Chef's Secret: Perfect Crispy Dosas with Wood-Pressed Groundnut Oil",
      excerpt: "Unlock the secret to flawlessly crispy dosas. Our recipe highlights how the high smoke point of wood-pressed groundnut oil makes all the difference.",
      categoryColor: "bg-green-200 text-green-800"
    }
  ];

  return (
    <div>
    <div
      className=" bg-no-repeat bg-cover bg-center pb-40"
      style={{ backgroundImage: "url(/backgroundLines.png)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-lg lg:text-6xl sm:text-4xl font-bold text-[#703102] mb-3 sm:mb-4">
             Our Blog
          </h2>
          <p className=" text-gray-600 text-xs  lg:text-2xl sm:text-lg  mx-auto leading-[100%] tracking-[0px] text-center px-4 ">
          Discover insights, tips, and stories about natural oils, traditional extraction, <br></br> and healthy living.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 px-5 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 mb-10 sm:mb-12">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className=" flex  flex-col gap-5 bg-white border-2 border-[#FCE289] rounded-xl shadow-md text-start overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[362px] lg:h-[500px] lg:w-[480px]"
              />
              
              <div className="px-3 lg:px-3 sm:p-5 md:p-6">
                {/* Meta Information */}
                <div className="flex justify-between items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs lg:text-base font-bold uppercase tracking-wide text-[#AE5D01] bg-[#FCE289]`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-[#AE5D01] text-xs lg:text-[16.33px] font-thin">
                  <Calendar/>
                    {post.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-xl lg:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-xs sm:text-base lg:text-[16.54px] leading-relaxed mb-4 sm:mb-5">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link to="/blog-details" className="text-[#AE5D01] cursor-pointer  font-medium text-xs lg:text-[16.54px]  sm:text-base hover:text-amber-700 transition-colors duration-200 gap-2 sm:gap-3 flex items-center group">
                  Read More 
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </div>

      <FooterBanner />
      </div>
  );
};

export default BlogPage;