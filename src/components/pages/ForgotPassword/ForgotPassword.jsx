import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
  };

  const handleBack = () => {
    console.log('Going back');
    // Add navigation logic here
  };

  return (
    <div className="flex w-full h-screen">
      {/* Form section - full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-16 flex flex-col">
        {/* Back button - only visible on mobile */}
        <button 
          onClick={handleBack}
          className="text-gray-800 mb-6 flex items-center md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        
        <div className="flex-grow flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-15">Company Name</h1>
          
          <div>
            <h2 className="text-lg font-medium">Forgot Password</h2>
            <p className="text-sm text-gray-500 mb-4">Enter your registered email</p>
            
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
              />
             
              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 text-white py-3 rounded mb-6"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image section - hidden on mobile, visible on desktop */}
      <div className="hidden md:block md:w-1/2 relative  ">
        <img 
          src="/ForgotPassword/ForgotPassword.jpg" 
          alt="Palm leaf shadows" 
          className="w-full h-full object-fit-cover rounded-4xl "
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-30 px-16 text-white">
          <h2 className="text-5xl font-medium mb-2">Easy-to-Use hair-styles for Managing Your day.</h2>
          <p className="text-md font-semibold opacity-75 text-orange-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, mattis aliquam feugiat ut nullam neque viverra.</p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;