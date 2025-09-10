import { Calendar } from 'lucide-react';
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
      title: "Cold-Pressed vs. Wood-Pressed: Which Oil is Right For You?",
      excerpt: "Discover why this pungent oil is more than just a cooking medium. From boosting heart health to fighting inflammation, learn how it can elevate your wellness journey.",
    },
    {
      id: 2,
      image: "/Blog2.png",
      category: "Know Your Oils",
      date: "August 11, 2025",
      title: "Cold-Pressed vs. Wood-Pressed: Which Oil is Right For You?",
      excerpt: "Both methods preserve nutrients, but they have subtle differences. We break down the processes and benefits to help you choose for your kitchen.",
    },
    {
      id: 3,
      image: "/Blog3.png",
      category: "Recipes",
      date: "August 11, 2025",
      title: "Cold-Pressed vs. Wood-Pressed: Which Oil is Right For You?",
      excerpt: "Unlock the secret to flawlessly crispy dosas. Our recipe highlights how the high smoke point of wood-pressed groundnut oil makes all the difference.",
    },
    {
      id: 4,
      image: "/blogimg1.png",
      category: "Health & Wellness",
      date: "August 11, 2025",
      title: "The Golden Elixir: 5 Surprising Benefits of Cold-Pressed Mustard Oil",
      excerpt: "Discover why this pungent oil is more than just a cooking medium. From boosting heart health to fighting inflammation, learn how it can elevate your wellness journey.",
    },
    {
      id: 5,
      image: "/Blog2.png",
      category: "Know Your Oils",
      date: "August 11, 2025",
      title: "A Chef's Secret: Perfect Crispy Dosas with Wood-Pressed Groundnut Oil",
      excerpt: "Both methods preserve nutrients, but they have subtle differences. We break down the processes and benefits to help you choose for your kitchen.",
    },
    {
      id: 6,
      image: "/Blog3.png",
      category: "Recipes",
      date: "August 11, 2025",
      title: "A Chef's Secret: Perfect Crispy Dosas with Wood-Pressed Groundnut Oil",
      excerpt: "Unlock the secret to flawlessly crispy dosas. Our recipe highlights how the high smoke point of wood-pressed groundnut oil makes all the difference.",
    }
  ];

  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center pb-16 sm:pb-24 lg:pb-28"
        style={{ backgroundImage: "url(/backgroundLines.png)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center pt-10 sm:pt-10 lg:pt-10 mb-10 sm:mb-16">
            <h2 className="font-inter font-bold text-[42px] sm:text-[48px] lg:text-[73.62px] leading-[100%] tracking-[0px] text-center uppercase text-[#703102] mb-4">
              Our Blog
            </h2>

            <p className="font-inter font-medium text-[18px] sm:text-[20px] lg:text-[24px] leading-[100%] tracking-[0px] text-center text-[#595959] max-w-4xl mx-auto">
              Discover insights, tips, and stories about natural oils, traditional extraction,<br /> and healthy living.
            </p>

          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col bg-[#FFFEF9] border border-[#FDE6A2] rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 sm:h-64 lg:h-80 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-inter font-bold text-[16.54px] leading-[25px] tracking-[0px] align-middle px-4 py-1.5 rounded-full text-[#AE5D01] bg-[#FCE289]">
                      {post.category}
                    </span>

                    <div className="flex items-center gap-1.5 font-montserrat font-normal text-[16.33px] leading-[23.33px] tracking-[0px] align-middle text-[#AE5D01]">
                      <Calendar size={16} className="text-[#AE5D01]" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="font-inter font-bold text-[19.69px] leading-[30px] tracking-[0px] align-middle text-[#111827] mb-3 flex-grow">
                    {post.title}
                  </h3>
                  <p className="font-inter font-normal text-[16.54px] leading-[25px] tracking-[0px] align-middle text-[#4B5563] mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog-details"
                    className="text-[#AE5D01] cursor-pointer font-bold text-sm sm:text-base hover:text-amber-700 transition-colors duration-200 gap-2 flex items-center group mt-auto"
                  >
                    Read More
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
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
