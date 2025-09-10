import React from 'react';
import FooterBanner from '../components/FooterBanner';

const PrivacyPolicy = () => {
  return (
    <div>
      <div
        className="min-h-screen  relative overflow-hidden bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(/backgroundLines.png)" }}
      >
        {/* Decorative leaves */}
        <img
          src="/Lleaf.png"
          alt="leaf"
          className="hidden sm:block pointer-events-none select-none absolute left-2 lg:left-42 -top-2 sm:-top-4 lg:-top-1 w-[250px] sm:w-[300px] lg:w-[280px] h-auto opacity-80"
        />

        <img
          src="/Bleaf.png"
          alt="leaf"
          className="hidden sm:block pointer-events-none select-none absolute right-40 -bottom-6 sm:-bottom-8 lg:bottom-1 w-[250px] sm:w-[300px] lg:w-[280px] h-auto opacity-80"
        />


        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10 bg-white rounded-xl shadow-sm mt-20 mb-20">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center"

          >
            Privacy Policy
          </h1>
          <p className="text-center text-xs lg:text-lg text-gray-500 mt-2">
            Last updated: August 29, 2025
          </p>

          <div className="mt-8 md:mt-10 bg-white backdrop-blur-sm  p-5 sm:p-7 md:p-10">
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
              This Privacy Policy describes how your personal information is collected, used, and shared when
              you visit or make a purchase from www.devnaturaloils.com (the "Site").
            </p>

            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">Personal Information We Collect</h2>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-4">
              When you visit the Site, we automatically collect certain information about your device,
              including information about your web browser, IP address, time zone, and some of the cookies that
              are installed on your device. Additionally, as you browse the Site, we collect information about
              the individual web pages or products that you view, what websites or search terms referred you to
              the Site, and information about how you interact with the Site. We refer to this
              automatically-collected information as "Device Information".
            </p>

            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">Technologies We Use</h2>
            <ul className="list-disc pl-5 text-gray-700 text-xs lg:text-lg space-y-2 mb-6">
              <li>
                <span className="font-semibold">"Cookies"</span> data files placed on your device or computer that often include an
                anonymous unique identifier. Learn more and how to disable cookies at
                {" "}
                <a href="#" target="_blank" rel="noreferrer" className="text-light-orange underline">allaboutcookies.org</a>.
              </li>
              <li>
                <span className="font-semibold">"Log files"</span> track actions occurring on the Site and collect data including your IP
                address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
              </li>
              <li>
                <span className="font-semibold">"Web beacons", "tags", </span> and    <span className="font-semibold">"pixels"</span>electronic files used to record information about how
                you browse the Site.
              </li>
            </ul>

            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
              Additionally, when you make or attempt to make a purchase through the Site, we collect certain
              information from you, including your name, billing address, shipping address, payment information
              (including credit card numbers), email address, and phone number. We refer to this information as
              "Order Information". When we talk about "Personal Information" in this Privacy Policy, we are
              talking both about Device Information and Order Information.
            </p>

            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">How Do We Use Your Personal Information?</h2>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-4">
              We use the Order Information that we collect generally to fulfill any orders placed through the
              Site (including processing your payment information, arranging for shipping, and providing you
              with invoices and/or order confirmations). Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-xs lg:text-lg space-y-2 mb-6">
              <li>Communicate with you.</li>
              <li>Screen our orders for potential risk or fraud.</li>
              <li>
                When in line with the preferences you have shared with us, provide you with information or
                advertising relating to our products or services.
              </li>
            </ul>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
              We use the Device Information that we collect to help us screen for potential risk and fraud (in
              particular, your IP address), and more generally to improve and optimize our Site (for example, by
              generating analytics about how our customers browse and interact with the Site, and to assess the
              success of our marketing and advertising campaigns).
            </p>

            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">Sharing Your Personal Information</h2>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
              We share your Personal Information with third parties to help us use your Personal Information, as
              described above. For example, we use third‑party e‑commerce platforms to power our online store.
              We also use Google Analytics to help us understand how our customers use the Site. You can read
              more about how Google uses your Personal Information at
              {" "}
              <a href="https://www.google.com/intl/en/policies/privacy" target="_blank" rel="noreferrer" className="text-light-orange underline">google.com/policies/privacy</a>.
              You can opt‑out of Google Analytics here:
              {" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" className="text-light-orange underline">tools.google.com/dlpage/gaoptout</a>.
            </p>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
              Finally, we may also share your Personal Information to comply with applicable laws and
              regulations, to respond to a subpoena, search warrant or other lawful request for information we
              receive, or to otherwise protect our rights.
            </p>

            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">Behavioural Advertising</h2>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-4">
              As described above, we use your Personal Information to provide you with targeted advertisements
              or marketing communications we believe may be of interest to you. For more information about how
              targeted advertising works, visit the Network Advertising Initiative ("NAI") educational page at
              {" "}
              <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" target="_blank" rel="noreferrer" className="text-light-orange underline">networkadvertising.org</a>.
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-xs lg:text-lg space-y-2 mb-6">
              <li>
                Facebook: {" "}
                <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noreferrer" className="text-light-orange underline">facebook.com/settings/?tab=ads</a>
              </li>
              <li>
                Google: {" "}
                <a href="https://www.google.com/settings/ads/anonymous" target="_blank" rel="noreferrer" className="text-light-orange underline">google.com/settings/ads/anonymous</a>
              </li>
              <li>
                Bing: {" "}
                <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" target="_blank" rel="noreferrer" className="text-light-orange underline">advertise.bingads.microsoft.com/.../personalized-ads</a>
              </li>
            </ul>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
              Additionally, you can opt out of some of these services by visiting the Digital Advertising
              Alliance's opt‑out portal at
              {" "}
              <a href="http://optout.aboutads.info" target="_blank" rel="noreferrer" className="text-light-orange underline">optout.aboutads.info</a>.
            </p>

            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">Do Not Track</h2>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
              Please note that we do not alter our Site's data collection and use practices when we see a Do
              Not Track signal from your browser.
            </p>

            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">Your Rights</h2>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-4">
              If you are a European resident, you have the right to access personal information we hold about
              you and to ask that your personal information be corrected, updated, or deleted. If you would
              like to exercise this right, please contact us through the contact information below.
            </p>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
              Additionally, if you are a European resident we note that we are processing your information in
              order to fulfill contracts we might have with you (for example if you make an order through the
              Site), or otherwise to pursue our legitimate business interests listed above. Additionally,
              please note that your information will be transferred outside of Europe, including to Canada and
              the United States.
            </p>

            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">Data Retention</h2>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
              When you place an order through the Site, we will maintain your Order Information for our records
              unless and until you ask us to delete this information.
            </p>

            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">Changes</h2>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mb-6">
              We may update this privacy policy from time to time in order to reflect, for example, changes to
              our practices or for other operational, legal or regulatory reasons.
            </p>

            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mt-10 mb-6 pb-3 border-b border-gray-200">Contact Us</h2>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed">
              For more information about our privacy practices, if you have questions, or if you would like to
              make a complaint, please contact us by e‑mail at
              {" "}
              <a href="mailto:info@devnaturaloils.com" className="text-light-orange underline">info@devnaturaloils.com</a>
              {" "}
              or by mail using the details provided below.
            </p>
            <p className="text-gray-700 text-xs lg:text-lg leading-relaxed mt-4">
              Dev Natural Oils, 123 Oil Mill Street, Mumbai, Maharashtra 400001, India
            </p>
          </div>
        </div>
      </div>
      <FooterBanner />
    </div>
  );
};

export default PrivacyPolicy;


