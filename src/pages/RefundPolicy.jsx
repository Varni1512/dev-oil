import React from 'react';
import FooterBanner from '../components/FooterBanner';

const RefundPolicy = () => {
  return (
    <div>
      <div
        className="min-h-screen relative overflow-hidden bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(/backgroundLines.png)" }}
      >
        {/* Decorative leaves */}
        <img
          src="/Lleaf.png"
          alt="leaf"
          className="hidden sm:block pointer-events-none select-none absolute left-2 lg:left-42.5 -top-2 sm:-top-4 lg:top-0 w-[250px] sm:w-[300px] lg:w-[280px] h-auto opacity-80"
        />

        <img
          src="/Bleaf.png"
          alt="leaf"
          className="hidden sm:block pointer-events-none select-none absolute right-42 -bottom-6 sm:-bottom-8 lg:bottom-0 w-[250px] sm:w-[300px] lg:w-[280px] h-auto opacity-80"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10 bg-white rounded-xl shadow-sm mt-20 mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Return & Refund Policy
          </h1>
          <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mt-4">
            At Dev Natural Oils, we are committed to ensuring your satisfaction. We have a
            <span className="font-bold"> 7-day exchange/return policy</span>, which means you have 7 days
            after receiving your item to request a replacement or a return. For any requests, please
            contact our support team at <a href="mailto:info@devnaturaloils.com" className="text-light-orange underline">info@devnaturaloils.com</a>.
          </p>

          <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">
            Exchanges and Returns
          </h2>
          <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-4">
            To be eligible for an exchange or return, your item must be in the same condition that you
            received it: <span className="font-semibold">unused and in its original packaging</span>.
            The original invoice must be provided at the time of the return pickup. Once a product has
            been used, it becomes ineligible for exchange or return.
          </p>

          <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-4">
            Exchanges and returns are only permitted in the following unlikely scenarios:
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-xs lg:text-lg space-y-2 mb-6">
            <li>The product you received is damaged or is the wrong item.</li>
            <li>The product's seal was not intact or was tampered with at the time of delivery.</li>
            <li>The product has expired by the time of delivery.</li>
          </ul>

          <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-4">
            If your return request is accepted, we will arrange for the item to be picked up from the
            original delivery address. You will be notified of the expected pick-up date.
          </p>
          <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
            In the case of an exchange, the new product will be dispatched and delivered to you within
            5–7 business days after the returned item has been collected.
          </p>

          {/* Delivery Discrepancies box */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-md mb-8">
            <p className="text-gray-800 text-xs lg:text-lg">
              <span className="font-semibold">Delivery Discrepancies:</span> In case of any delivery-related
              issue (e.g., if the order is marked as "delivered" but you have not received it), please reach
              out to us within <span className="font-semibold">48 hours</span> so we can investigate the
              matter promptly.
            </p>
          </div>

          <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">
            Cancellations
          </h2>
          <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
            An order cancellation request will be accepted only if the product has <span className="font-semibold">not yet been shipped</span>
            from our facility.
          </p>
          <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
            If your cancellation request is approved before shipment, you are entitled to a full refund of the
            entire amount. Dev Natural Oils reserves the right to cancel or refuse any order due to various
            reasons, such as non-availability of stock, pricing errors, or issues identified with the payment
            details provided.
          </p>

          <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">
            Refunds
          </h2>
          <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
            Once your returned item is received and inspected by our team, we will send you a notification
            email. We will also inform you whether the refund has been approved or rejected based on the
            item's condition.
          </p>
          <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
            If approved, you will be automatically refunded to your <span className="font-semibold">original payment method</span>.
            Please remember that it can take approximately 5–7 business days for the refund to be processed
            by your bank or credit card company and reflect in your account.
          </p>

          <div className="mt-10 text-center">
            <p className="text-gray-700 text-xs lg:text-lg">
              For any other questions, please don’t hesitate to contact us at
              {" "}
              <a href="mailto:info@devnaturaloils.com" className="text-light-orange underline">info@devnaturaloils.com</a>
              {" "}
              or call us at <span className="font-semibold">+91 9876543210</span>.
            </p>
          </div>
        </div>
      </div>
      <FooterBanner />
    </div>
  );
};

export default RefundPolicy;



