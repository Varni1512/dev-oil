import React, { useState } from 'react';
import { Search } from 'lucide-react';
import FooterBanner from '../components/FooterBanner';

const TrackOrderPage = () => {
    const [searchType, setSearchType] = useState('orderId');
    const placeholderText = searchType === 'orderId'
        ? 'Enter Your Order ID/No'
        : 'Enter Your Tracking ID/AWB';

    return (
        <div
            className="min-h-screen bg-white bg-no-repeat bg-cover bg-center relative"
            style={{ backgroundImage: "url(/backgroundLines.png)" }}
        >
            <img
                src="/Rleaf.png"
                alt="Decorative leaf"
                className="hidden sm:block absolute -top-5 lg:-top-0 -right-10 sm:right-10 lg:right-54 w-[232px] sm:w-[289px] lg:w-[400px] lg:h-[350px] opacity-80"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18 sm:py-28">
                {/* Main Header */}
                <div className="text-center mb-10 sm:mb-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#703102] mb-3">
                        Track Order
                    </h1>

                    <p className="text-xl sm:text-lg text-[#595959]">
                        Track your order in real-time and never miss a delivery.
                    </p>
                </div>

                {/* Tracking Card */}
                <div className="max-w-lg mx-auto bg-white border-[2.34px] border-[#703102] rounded-lg shadow-md p-6 sm:p-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#5A3A22] mb-6">
                        Track Order
                    </h2>

                    {/* Search Options */}
                    <fieldset className="mb-5">
                        <legend className="block text-md font-medium text-gray-700 mb-3">
                            Search By:
                        </legend>
                        <div className="flex items-center gap-6">
                            {/* Order ID Radio Button */}
                            <div className="flex items-center">
                                <input
                                    id="orderId"
                                    name="search-type"
                                    type="radio"
                                    checked={searchType === 'orderId'}
                                    onChange={() => setSearchType('orderId')}
                                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="orderId" className="ml-2 block text-sm text-gray-900">
                                    Order ID/No
                                </label>
                            </div>
                            {/* Tracking ID Radio Button */}
                            <div className="flex items-center">
                                <input
                                    id="trackingId"
                                    name="search-type"
                                    type="radio"
                                    checked={searchType === 'trackingId'}
                                    onChange={() => setSearchType('trackingId')}
                                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="trackingId" className="ml-2 block text-sm text-gray-900">
                                    Tracking ID/AWB
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    {/* Input Field with Search Icon */}
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder={placeholderText}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AE5D01] focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Helper Text */}
                    <p className="text-sm text-gray-500">
                        Check current status of your shipment.
                    </p>
                </div>
            </div>
            <FooterBanner />
        </div>
    );
};

export default TrackOrderPage;
