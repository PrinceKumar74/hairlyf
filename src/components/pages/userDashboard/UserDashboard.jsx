import React from 'react';
// Make sure to install lucide-react: npm install lucide-react
import { ChevronRight, ShoppingBag, Lock, MapPin, LogOut } from 'lucide-react';


export default function UserDashboard() {
  // Placeholder user data - replace with actual data fetching logic
  const user = {
    name: 'User Name',
    email: 'abc@gmail.com',
    phone: '123456789',
    avatarUrl: '/hair/boyModel.png', // Placeholder image URL
  };   

  // Placeholder functions for actions - replace with actual logic
  const handleEditProfile = () => console.log('Edit Profile clicked');
  const handleViewOrders = () => console.log('View Orders clicked');
  const handleChangePassword = () => console.log('Change Password clicked');
  const handleManageAddresses = () => console.log('Manage Addresses clicked');
  const handleLogout = () => console.log('Logout clicked');

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 font-sans">
      {/* Use the renamed internal component */}
      <DashboardContent
        user={user}
        onEditProfile={handleEditProfile}
        onViewOrders={handleViewOrders}
        onChangePassword={handleChangePassword}
        onManageAddresses={handleManageAddresses}
        onLogout={handleLogout}
      />
    </div>
  );
}

// Renamed the internal component to DashboardContent to avoid conflict
function DashboardContent({
  user,
  onEditProfile,
  onViewOrders,
  onChangePassword,
  onManageAddresses,
  onLogout,
}) {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Greeting */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Hello, {user.name}
      </h1>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatarUrl}
            alt="User Avatar"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-200"
            onError={(e) => {
              // Fallback if image fails to load
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/60x60/E0E0E0/333?text=U';
            }}
          />
          <div>
            <p className="text-lg font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.phone}</p>
          </div>
        </div>
        <button
          onClick={onEditProfile}
          className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
        >
          Edit Profile
        </button>
      </div>

      {/* Action Links Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* View Orders */}
        <DashboardActionItem
          icon={<ShoppingBag size={20} className="text-gray-500" />}
          text="View Orders"
          onClick={onViewOrders}
        />

        {/* Change Password */}
        <DashboardActionItem
          icon={<Lock size={20} className="text-gray-500" />}
          text="Change Password"
          onClick={onChangePassword}
        />

        {/* Manage Addresses */}
        <DashboardActionItem
          icon={<MapPin size={20} className="text-gray-500" />}
          text="Manage Addresses"
          onClick={onManageAddresses}
        />

        {/* Logout */}
        <DashboardActionItem
          icon={<LogOut size={20} className="text-red-500" />}
          text="Logout"
          onClick={onLogout}
          isLogout={true} // Special styling for logout
          hideArrow={true} // Hide arrow for logout
        />
      </div>
    </div>
  );
}

// Reusable component for each action item in the dashboard list
function DashboardActionItem({ icon, text, onClick, isLogout = false, hideArrow = false }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-4 sm:p-5 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${isLogout ? 'text-red-600' : 'text-gray-700'}`}
    >
      <div className="flex items-center space-x-3 sm:space-x-4">
        {icon}
        <span className={`text-sm sm:text-base font-medium ${ isLogout ? 'text-red-600' : 'text-gray-800'}`}>{text}</span>
      </div>
      {!hideArrow && <ChevronRight size={18} className="text-gray-400" />}
    </button>
  );
}