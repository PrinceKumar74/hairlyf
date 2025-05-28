import React from "react";
import { useState } from "react";

const PaymentStatus = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(true);

  const successImage = "/Status/success.png";
  const failedImage = "/Status/failed.png";

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 bg-gray-50">
      {/* Switch Button - For UI Testing (Web and Mobile styling preserved) */}
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-2 mb-8 border border-gray-400 rounded-lg shadow transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400"
        onClick={() => setPaymentSuccess(!paymentSuccess)}
      >
        Switch Status (Test)
      </button>

      {/* Main Content Card (Web and Mobile styling preserved for card itself) */}
      <div className="w-full max-w-sm sm:max-w-lg bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col items-center text-center p-6 sm:p-8">
        {paymentSuccess ? (
          // Success Section
          <>
            {/* --- Mobile Success View --- */}
            <h2 className="sm:hidden text-lg font-bold text-gray-900 mb-2"> {/* Darker, bolder, specific margin */}
              THANK YOU
            </h2>
            <img
              src={successImage}
              alt="Payment Successful"
              className="h-16 w-16 my-4 sm:h-20 sm:w-20 sm:my-5" /* Mobile: h-16 w-16 my-4 */
            />
            <h3 className="text-xl font-bold text-gray-900 mb-4 sm:text-2xl sm:mb-4"> {/* Mobile: text-xl, bolder, darker, specific margin */}
              Order successfully placed!
            </h3>
            <div className="sm:hidden text-sm text-gray-600 mb-6 text-center px-4"> {/* Mobile: specific text, color, margin, padding */}
              <p>Your order is placed successfully, please go to Order page to check the status.</p>
            </div>
            <button
              className="sm:hidden w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-300"
              onClick={() => alert("Navigate to Order Status - Mobile")}
            >
              View Order Status
            </button>

            {/* --- Web Success View (Preserved) --- */}
            <div className="hidden sm:block text-sm text-gray-500 mb-6 sm:mb-8 text-center">
              <p>Thank you. Now that your order is confirmed it will be ready to ship in 2 days.</p>
              <p>Please check your inbox in the future for your order updates.</p>
            </div>
            <button
              className="hidden sm:block w-auto text-base border-2 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white font-semibold px-10 py-2.5 rounded-lg transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-300"
              onClick={() => alert("Navigate to Order Status - Web")}
            >
              Back to Order Status
            </button>
          </>
        ) : (
          // Failed Section
          <>
            {/* --- Mobile Failure View --- */}
            <h2 className="sm:hidden text-lg font-bold text-gray-900 mb-2"> {/* Darker, bolder, specific margin */}
              SORRY!
            </h2>
            <img
              src={failedImage}
              alt="Payment Failed"
              className="h-16 w-16 my-4 sm:h-20 sm:w-20 sm:my-5" /* Mobile: h-16 w-16 my-4 */
            />
            <h3 className="text-xl font-bold text-gray-900 mb-4 sm:text-2xl sm:mb-4"> {/* Mobile: text-xl, bolder, darker, specific margin */}
              Payment Failed!
            </h3>
            <div className="sm:hidden text-sm text-gray-600 mb-6 text-center px-4"> {/* Mobile: specific text, color, margin, padding. Note: uses the contradictory text from your failure image. */}
              <p>Your order is placed successfully, please go to Order page to check the status.</p>
            </div>
            <button
              className="sm:hidden w-full text-base border-2 border-orange-500 text-orange-500 font-semibold px-8 py-3 rounded-lg hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-colors duration-150 ease-in-out"
              onClick={() => alert("Retry Payment - Mobile")}
            >
              Try Again
            </button>

            {/* --- Web Failure View (Preserved) --- */}
            <div className="hidden sm:block text-sm text-gray-500 mb-6 sm:mb-8 text-center">
              <p>Thank you. Now that your order is confirmed it will be ready to ship in 2 days.</p> {/* Note: contradictory text from image */}
              <p>Please check your inbox in the future for your order updates.</p>
            </div>
            <button
              className="hidden sm:block w-auto text-base border-2 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white font-semibold px-10 py-2.5 rounded-lg transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-300" // This was the shared button style from previous iteration, now explicitly for web
              onClick={() => alert("Retry Payment - Web")}
            >
              Try again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;