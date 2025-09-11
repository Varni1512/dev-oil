import React from 'react';
import VideoTestimonials from '../components/VideoTestimonials';
import MeetTheFounder from '../components/Founder';
import ProcessProducts from '../components/Process';

// Data for the core values section
const coreValues = [
    {
        title: 'Authenticity',
        description: 'We believe in staying true to our roots, using traditional methods to extract oils that retain their natural essence and flavor.',
    },
    {
        title: 'Purity',
        description: 'Our commitment to 100% pure and natural oils means no chemicals, no additives, and no compromises on quality.',
    },
    {
        title: 'Quality',
        description: 'From the finest farms to our careful processing, every batch is tested for purity to ensure you get a product of superior quality.',
    },
    {
        title: 'Health Focused',
        description: 'By retaining natural nutrients, our oils promote better health, making us a brand you can trust for your family’s well-being.',
    },
    {
        title: 'Commitment',
        description: 'We are dedicated to fast delivery, excellent packaging, and reliable customer service to ensure a seamless experience.',
    },
    {
        title: 'Trust',
        description: 'Our goal is to build long-term relationships with our customers by consistently delivering on our promise of purity and quality.',
    },
];

// Data for the statistics section
const stats = [
    {
        value: '100%',
        label: 'Pure & Natural',
    },
    {
        value: '8+',
        label: 'Premium Varieties',
    },
    {
        value: '2,500+',
        label: 'Satisfied Customers',
    },
];


const About = () => {
    return (
        <div
            className="bg-white font-sans py-12 md:py-20"
            style={{
                backgroundImage: "url('/backgroundLines.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <div className="container  px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#6d4c41]">
                        Experience the Purity <br /> of Tradition
                    </h1>
                    <p className="mt-4 max-w-4xl mx-auto text-[#595959] text-base md:text-lg">
                        At Dev Natural Oils, we're committed to providing the finest quality cold-pressed and wood-pressed oils. Our mission is to preserve traditional methods while ensuring premium nutrition and authentic flavors, bringing a taste of purity to your kitchen.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="mt-12 flex flex-col md:flex-row justify-around text-center max-w-3xl mx-auto ">
                    {stats.map((stat, index) => (
                        <div key={index} className='mt-5 lg:mt-0'>
                            <p className="text-5xl md:text-6xl font-bold text-[#6d4c41]">{stat.value}</p>
                            <p className="mt-2 text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Core Values Section */}
                <div className="mt-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Core Values</h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 text-left rounded-lg bg-white p-4 border-1 border-[#FCE289]">
                        {coreValues.map((value, index) => (
                            <div key={index}>
                                <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                                <p className="mt-2 text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-20'>
                    <VideoTestimonials />
                </div>
                <div>
                    <MeetTheFounder />
                </div>
                <div>
                    <ProcessProducts />
                </div>
            </div>
        </div>
    );
};

export default About;
