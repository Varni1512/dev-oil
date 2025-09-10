import React from 'react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function BlogDetails() {
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
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 pt-6 md:pt-10 bg-no-repeat bg-cover bg-center pb-20 md:pb-32"
      style={{ backgroundImage: "url(/backgroundLines.png)" }}>
      {/* Header */}
      <div className=" ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/blog" className="inline-flex items-center text-[#AE5D01] mb-2 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
            <div className="bg-yellow-200 text-[#AE5D01] px-3 py-1 rounded-full font-medium">
              Oil Processing
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              January 10, 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              4 min read
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <article className=" rounded-lg  overflow-hidden">
          {/* Article Header */}
          <div className="px-0 md:px-2 lg:px-4 pt-2 md:pt-4 pb-4 md:pb-6 bg-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              Wood-Pressed vs Cold-Pressed: Understanding the Difference
            </h1>
            <div className="flex items-center text-gray-600 text-sm mt-2">
              <User className="w-4 h-4 mr-2 text-gray-500" />
              <span>
                by <span className="font-semibold text-gray-800">Rajesh Kumar</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="">
            <div className="relative">
              <img
                src="/Blog2.png"
                alt="Various oils in small bowls with sunflower"
                className="w-full h-56 sm:h-80 md:h-[28rem] lg:h-[36rem] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="px-4 sm:px-6 lg:px-8 py-6 bg-white">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 font-medium text-base sm:text-lg">
                Learn about the traditional wood-pressing method and how it compares to cold-pressing for oil extraction.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8">
                When it comes to extracting oils from seeds and nuts, two traditional methods stand out: wood-pressing and cold-pressing. Both methods prioritize preserving the natural qualities of oils, but they differ in their approach and end results.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 mt-6 sm:mt-8">
                Wood-Pressed Oil Extraction
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                This method uses a traditional "ghani" method, a wooden pressing mill that slowly crushes seeds at the highest pressure.
              </p>

              <ul className="list-disc pl-5 sm:pl-6 mb-6 text-gray-700 space-y-2">
                <li>Creates small amounts of heat during extraction process</li>
                <li>Uses traditional wooden mechanical mill</li>
                <li>Natural fibrous rough creates in finished oils</li>
                <li>10-80% of chemicals in wooden machinery</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Benefits of Wood-Pressed Oils
              </h3>

              <ul className="list-disc pl-5 sm:pl-6 mb-6 text-gray-700 space-y-2">
                <li>"Traditional Extraction" following the time-tested methods used in generations</li>
                <li>"Rich in nutrients" containing essential fatty acids and vitamins that benefit health</li>
                <li>"Natural Properties" Retains naturally flavored and aroma</li>
                <li>"Enhanced Flavor" Offers profound nutritional and taste experience</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 mt-6 sm:mt-8">
                Our Commitment at Desi Natural Oils
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                We take both quality and cold-pressed/natural sourcess to believe in giving our customers these benefits delivered in safe non-enhanced form, and result in fresh comparative natural results.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Whether you choose wood-pressed for its traditional authenticity or cold-pressed for its nutritional benefits, you'll making a perfect choice for your family.
              </p>

              <hr className='text-gray-200' />

              {/* Tags */}
              <div className=" pt-4 sm:pt-4 mt-6 sm:mt-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-[#AE5D01] bg-[#FCE289] px-3 py-1 rounded-full text-sm font-medium">
                    Wood Pressed
                  </span>
                  <span className="text-[#AE5D01] bg-[#FCE289] px-3 py-1 rounded-full text-sm font-medium">
                    Cold Pressed
                  </span>
                  <span className="text-[#AE5D01] bg-[#FCE289] px-3 py-1 rounded-full text-sm font-medium">
                    Traditional Methods
                  </span>
                  <span className="text-[#AE5D01] bg-[#FCE289] px-3 py-1 rounded-full text-sm font-medium">
                    Oil Extraction
                  </span>
                </div>
              </div>
            </div>
          </div>

        </article>

      </div>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div ><h1 className='text-[#AE5D01] font-bold mb-6 sm:mb-10 text-xl sm:text-2xl'>Related Blogs</h1> </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              // MODIFIED: Updated card styling to match the reference image
              className="flex flex-col bg-[#FFFEF9] border border-[#FDE6A2] rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                // MODIFIED: Increased image height on desktop
                className="w-full h-56 sm:h-64 lg:h-80 object-cover"
              />

              {/* MODIFIED: Increased padding for more space */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Information */}
                <div className="flex justify-between items-center mb-4">
                  {/* MODIFIED: Adjusted category pill style */}
                  <span className="font-inter font-bold text-[16.54px] leading-[25px] tracking-[0px] align-middle px-4 py-1.5 rounded-full text-[#AE5D01] bg-[#FCE289]">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-1.5 font-montserrat font-normal text-[16.33px] leading-[23.33px] tracking-[0px] align-middle text-[#AE5D01]">
                    <Calendar size={16} className="text-[#AE5D01]" />
                    <span>{post.date}</span>
                  </div>

                </div>

                {/* Title */}
                {/* MODIFIED: Updated title typography */}
                <h3 className="font-inter font-bold text-[19.69px] leading-[30px] tracking-[0px] align-middle text-[#111827] mb-3 flex-grow">
                  {post.title}
                </h3>


                {/* Excerpt */}
                <p className="font-inter font-normal text-[16.54px] leading-[25px] tracking-[0px] align-middle text-[#4B5563] mb-6">
                  {post.excerpt}
                </p>


                {/* Read More Link */}
                <Link
                  to="/blog-details"
                  // MODIFIED: Adjusted "Read More" link style
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
  );
}