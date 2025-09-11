import React from 'react';

export default function MeetTheFounder() {
    return (
        <div className="-mt-20 lg:mt-0 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-left mb-12">
                    <h1 className="font-inter font-bold text-[20px] lg:text-[40px] leading-[50px] text-[#AE5D01] mb-4">
                        Meet the Founder
                    </h1>
                    <hr className="border-t-2 border-[#AE5D01] w-full my-4" />

                </div>

                {/* First Founder Section */}
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-6">
                        {/* Image */}
                        <div className="w-full lg:w-1/3 flex-shrink-0">
                            <div className="aspect-square bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg  overflow-hidden">
                                <img
                                    src="/v1.png"
                                    alt="Dev Sharma - Founder of Dev Natural Oils"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-2/3 pt-2 lg:pt-10">
                            <h2 className="font-inter font-bold text-[36px] leading-[50px] text-[#AE5D01] mb-1">
                                Founder's name
                            </h2>

                            <p className="font-inter font-normal italic text-[18px] leading-[35px] text-[#4B5563] mb-1 lg:mb-6">
                                Visionary, Entrepreneur, and Founder of Dev Natural Oils
                            </p>


                            <div className="space-y-4 font-inter font-medium text-[18px] leading-[25px] text-gray-700">
                                <p className="text-justify">
                                    Dev Natural Oils was born from the vision of Mr. Dev Sharma, a passionate
                                    advocate for traditional food practices and holistic health. With a deep
                                    understanding of India's culinary heritage, he embarked on a journey to find a
                                    better way to produce cooking oils. Frustrated by the chemical-laden options in
                                    the market, he sought to combine the wisdom of ancient techniques with
                                    modern quality standards.
                                </p>

                                <p className="text-justify">
                                    Mr. Sharma's unwavering commitment to providing an authentic, healthy, and
                                    premium product has been the driving force behind the company. His
                                    dedication ensures that every bottle we produce stands apart, delivering purity
                                    and natural flavor with every drop.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Second Founder Section */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-6">
                        {/* Image */}
                        <div className="w-full lg:w-1/3 flex-shrink-0">
                            <div className="aspect-square bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg overflow-hidden">
                                <img
                                    src="/v2.png"
                                    alt="Dev Sharma - Founder of Dev Natural Oils"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-2/3 pt-2 lg:pt-10">
                            <h2 className="font-inter font-bold text-[36px] leading-[50px] text-[#AE5D01] mb-1">
                                Founder's name
                            </h2>

                            <p className="font-inter font-normal italic text-[18px] leading-[35px] text-[#4B5563] mb-1 lg:mb-6">
                                Visionary, Entrepreneur, and Founder of Dev Natural Oils
                            </p>


                            <div className="space-y-4 font-inter font-medium text-[18px] leading-[25px] text-gray-700">
                                <p className="text-justify">
                                    Dev Natural Oils was born from the vision of Mr. Dev Sharma, a passionate
                                    advocate for traditional food practices and holistic health. With a deep
                                    understanding of India's culinary heritage, he embarked on a journey to find a
                                    better way to produce cooking oils. Frustrated by the chemical-laden options in
                                    the market, he sought to combine the wisdom of ancient techniques with
                                    modern quality standards.
                                </p>

                                <p className="text-justify">
                                    Mr. Sharma's unwavering commitment to providing an authentic, healthy, and
                                    premium product has been the driving force behind the company. His
                                    dedication ensures that every bottle we produce stands apart, delivering purity
                                    and natural flavor with every drop.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}