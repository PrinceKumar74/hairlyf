import React, { useState } from 'react';

function NewPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New password submitted');
    // Add password reset logic here
  };

  return (
    <div className="flex w-full h-screen">
      {/* Form section - full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-16 flex flex-col">
        <div className="flex-grow flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-8">Company Name</h1>
          
          <div>
            <h2 className="text-lg font-medium">New Password</h2>
            <p className="text-sm text-gray-500 mb-4">Set the new password for your account so you can login and access all features.</p>
            
            <div>
              <div className="mb-4">
                <label className="block text-sm font-normal mb-1">Enter new Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-normal mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 text-white py-3 rounded"
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

export default NewPassword;