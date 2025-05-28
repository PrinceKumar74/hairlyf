import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import Cart from '../Cart/Cart'; // Assuming Cart is not directly used in Checkout for rendering

// --- Icon Placeholders (from your original code) ---
const RadioIcon = ({ checked }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 shrink-0">
    <circle cx="10" cy="10" r="9.5" stroke={checked ? '#F97316' : '#D1D5DB'} strokeWidth="1"/>
    {checked && <circle cx="10" cy="10" r="5" fill="#F97316"/>}
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);

// --- Address Sidebar Component ---
// --- Address Sidebar Component ---
const AddressSidebar = ({ isOpen, onClose, onSubmit, addressData, setAddressData, isEditing }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addressData.name || !addressData.address || !addressData.statePin || !addressData.mobile) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit(addressData);
  };

  return (
    // This div is the full-screen container for positioning the sidebar.
    // - `bg-black bg-opacity-50` have been REMOVED to prevent page darkening.
    // - `pointer-events-none` is ADDED so clicks pass through this container to the page below.
    // - `z-[60]` ensures it's on top of other content.
    // - `flex justify-end` pushes the sidebar panel to the right.
    <div className="fixed inset-0 z-[60] flex justify-end pointer-events-none">
      {/* This div is the actual sidebar panel that slides in.
          - It has `bg-white` and `shadow-xl` for visibility.
          - `pointer-events-auto` is ADDED to make the sidebar itself interactive.
      */}
      <div className="w-full max-w-md bg-white h-full shadow-xl p-6 flex flex-col pointer-events-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">{isEditing ? "Edit Address" : "Add New Address"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl leading-none p-1 hover:bg-gray-100 rounded-full">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 flex-grow overflow-y-auto pr-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" id="name" value={addressData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address (Area, Street, Village)</label>
            <input type="text" name="address" id="address" value={addressData.address} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="statePin" className="block text-sm font-medium text-gray-700">State - Pincode</label>
            <input type="text" name="statePin" id="statePin" value={addressData.statePin} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input type="tel" name="mobile" id="mobile" value={addressData.mobile} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-md transition duration-150 mt-4">
            {isEditing ? "Save Changes" : "Save Address"}
          </button>
        </form>
      </div>
    </div>
  );
};
// Main Checkout Component
export default function Checkout() {
  const cartItems = useSelector(state => state.cart);
  console.log("Cart Items:", cartItems);

  // Initial Address Data
  const initialDefaultAddress = {
    id: 'default',
    name: 'User Name',
    address: '32743 Mehrotra Curve, Los Angeles',
    statePin: 'Andhra Pradesh - 386034',
    mobile: '5058431885',
    isDefault: true,
  };

  const initialOtherAddresses = [
    { id: 'other1', name: 'User Name1', address: '123 Other Street, City', statePin: 'State - 123456', mobile: '9876543210', isDefault: false },
    { id: 'other2', name: 'User Name2', address: '456 Another Ave, Town', statePin: 'Province - 654321', mobile: '1122334455', isDefault: false },
  ];

  // State for addresses
  const [defaultAddressDetails, setDefaultAddressDetails] = useState(initialDefaultAddress);
  const [otherUserAddresses, setOtherUserAddresses] = useState(initialOtherAddresses);
  const [selectedAddressId, setSelectedAddressId] = useState('default');
  const [selectedDelivery, setSelectedDelivery] = useState('express');

  // State for sidebar and form
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null); // null for new, address object for edit
  const emptyAddressForm = { id: '', name: '', address: '', statePin: '', mobile: '', isDefault: false };
  const [addressFormData, setAddressFormData] = useState(emptyAddressForm);

  const allAddresses = [defaultAddressDetails, ...otherUserAddresses];
  const selectedAddress = allAddresses.find(addr => addr.id === selectedAddressId) || defaultAddressDetails;

  // --- Address Management Functions ---
  const openAddAddressSidebar = () => {
    setEditingAddress(null);
    setAddressFormData(emptyAddressForm);
    setIsSidebarOpen(true);
  };

  const openEditAddressSidebar = (addressToEdit) => {
    setEditingAddress(addressToEdit);
    setAddressFormData({ ...addressToEdit });
    setIsSidebarOpen(true);
  };

  const handleAddressSubmit = (formData) => {
    if (editingAddress) { // Editing existing address
      if (editingAddress.id === defaultAddressDetails.id) {
        setDefaultAddressDetails({ ...defaultAddressDetails, ...formData, id: defaultAddressDetails.id, isDefault: true });
      } else {
        setOtherUserAddresses(prev =>
          prev.map(addr => addr.id === editingAddress.id ? { ...addr, ...formData, id: addr.id, isDefault: false } : addr)
        );
      }
    } else { // Adding new address
      const newAddress = { ...formData, id: `addr_${Date.now()}`, isDefault: false };
      setOtherUserAddresses(prev => [...prev, newAddress]);
      setSelectedAddressId(newAddress.id); // Optionally select the new address
    }
    setIsSidebarOpen(false);
    setEditingAddress(null);
  };

  const handleRemoveAddress = (addressIdToRemove) => {
    if (addressIdToRemove === defaultAddressDetails.id) {
      if (otherUserAddresses.length > 0) {
        const newDefault = otherUserAddresses[0];
        const remainingOthers = otherUserAddresses.slice(1);
        setDefaultAddressDetails({ ...newDefault, isDefault: true }); // Promote first other to default
        setOtherUserAddresses(remainingOthers);
        setSelectedAddressId(newDefault.id);
      } else {
        alert("Cannot remove the only address. Please edit it instead or add a new one.");
        return;
      }
    } else {
      setOtherUserAddresses(prev => prev.filter(addr => addr.id !== addressIdToRemove));
      if (selectedAddressId === addressIdToRemove) {
        setSelectedAddressId(defaultAddressDetails.id); // Fallback to default if removed selected
      }
    }
  };


  // Function to handle address change on mobile (cycles through addresses)
  const handleChangeAddressMobile = () => {
    const currentIndex = allAddresses.findIndex(addr => addr.id === selectedAddressId);
    const nextIndex = (currentIndex + 1) % allAddresses.length;
    setSelectedAddressId(allAddresses[nextIndex].id);
  };

  // --- Price Calculations ---
  const totalMRP = cartItems.reduce(
    (acc, item) => acc + (item.originalPrice || item.price || 0) * (item.quantity || 1),
    0
  );
  const currentTotal = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );
  const totalDiscount = totalMRP - currentTotal;

  const priceDetails = {
    totalMRP: totalMRP,
    discountMRP: totalDiscount,
    gstTax: currentTotal * 0.18, // Example GST
    couponDiscount: 50, // Mock coupon
    shippingFee: 20,
    expressFee: 80,
  };

  const calculateTotalAmount = () => {
    let total = priceDetails.totalMRP - priceDetails.discountMRP + priceDetails.gstTax - priceDetails.couponDiscount;
    if (selectedDelivery === 'express') {
      total += priceDetails.expressFee;
    } else {
      total += priceDetails.shippingFee;
    }
    return total;
  };
  const totalAmount = calculateTotalAmount();

  // --- Order Placement ---
  const handlePlaceOrder = () => {
    if (!selectedAddress) {
        alert("Please select a delivery address.");
        return;
    }
    const orderData = {
        selectedAddress,
        cartItems,
        priceDetails: {
            ...priceDetails,
            finalShippingFee: selectedDelivery === 'express' ? priceDetails.expressFee : priceDetails.shippingFee,
            totalAmount,
        },
        deliveryOption: selectedDelivery,
    };
    console.log("Placing Order with Data:", JSON.stringify(orderData, null, 2));
    alert(`Order placed!\nSelected Address: ${selectedAddress.name}, ${selectedAddress.address}\nTotal: ₹${totalAmount.toLocaleString()}`);
    // Here you would typically send orderData to your backend API
  };


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Mobile Header */}
      <div className="md:hidden p-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center space-x-4">
          <button onClick={() => console.log("Back button clicked")}>
            <ArrowLeftIcon />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">ADDRESS</h1>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Header / Progress Steps */}
          <div className="hidden md:flex justify-center items-center mb-8 md:mb-12 space-x-4 md:space-x-8">
            <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
              <span className="text-gray-400">CART</span>
              <span className="border-t border-gray-300 flex-grow mx-2"></span>
              <span className="font-semibold text-green-600 border-b-2 border-green-600 pb-1">ADDRESS</span>
              <span className="border-t border-gray-300 flex-grow mx-2"></span>
              <span className="text-gray-400">PAYMENT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section: Address */}
            <div className="lg:col-span-2">
              {/* Desktop Address Selection */}
              <div className="hidden md:block">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-xl md:text-2xl font-semibold text-gray-800">Select Delivery Address</h1>
                  <button
                    onClick={openAddAddressSidebar}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-orange-600 hover:bg-orange-50 transition duration-150"
                  >
                    ADD NEW ADDRESS
                  </button>
                </div>

                {/* Default Address */}
                <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 mb-6">
                  <h2 className="text-xs font-semibold text-gray-500 uppercase mb-4">DEFAULT ADDRESS</h2>
                  <div className="flex items-start">
                    <div onClick={() => setSelectedAddressId(defaultAddressDetails.id)} className="cursor-pointer flex-shrink-0">
                         <RadioIcon checked={selectedAddressId === defaultAddressDetails.id} />
                    </div>
                    <div className="flex-grow ml-0"> {/* Ensure radio icon takes its space and text doesn't shift */}
                      <p className="font-semibold text-gray-800">{defaultAddressDetails.name}</p>
                      <p className="text-sm text-gray-600 mt-1">{defaultAddressDetails.address}</p>
                      <p className="text-sm text-gray-600">{defaultAddressDetails.statePin}</p>
                      <p className="text-sm text-gray-600 mt-1">Mobile: <span className="font-medium">{defaultAddressDetails.mobile}</span></p>
                      <div className="mt-4 space-x-3">
                        <button
                          onClick={() => handleRemoveAddress(defaultAddressDetails.id)}
                          disabled={otherUserAddresses.length === 0 && defaultAddressDetails.isDefault} // Disable if it's the only address
                          className="px-5 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-150 disabled:opacity-50"
                        >
                          REMOVE
                        </button>
                        <button
                          onClick={() => openEditAddressSidebar(defaultAddressDetails)}
                          className="px-5 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-150"
                        >
                          EDIT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Addresses */}
                {otherUserAddresses.length > 0 && (
                  <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
                    <h2 className="text-xs font-semibold text-gray-500 uppercase mb-4">OTHER ADDRESSES</h2>
                    <div className="space-y-6">
                      {otherUserAddresses.map((address, index) => (
                        <div key={address.id} className={`pb-6 ${index !== otherUserAddresses.length - 1 ? 'border-b border-gray-200' : ''}`}>
                          <div className="flex items-start">
                            <div onClick={() => setSelectedAddressId(address.id)} className="cursor-pointer flex-shrink-0">
                                <RadioIcon checked={selectedAddressId === address.id} />
                            </div>
                            <div className="flex-grow ml-0">
                              <p className="font-semibold text-gray-800">{address.name}</p>
                              <p className="text-sm text-gray-600 mt-1">{address.address}</p>
                              <p className="text-sm text-gray-600">{address.statePin}</p>
                              <p className="text-sm text-gray-600 mt-1">Mobile: <span className="font-medium">{address.mobile}</span></p>
                              <div className="mt-4 space-x-3">
                                <button
                                  onClick={() => handleRemoveAddress(address.id)}
                                  className="px-5 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-150"
                                >
                                  REMOVE
                                </button>
                                <button
                                  onClick={() => openEditAddressSidebar(address)}
                                  className="px-5 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-150"
                                >
                                  EDIT
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile View Specific Sections */}
              <div className="md:hidden space-y-6">
                {/* Mobile Selected Address */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {selectedAddress.name}
                        {selectedAddress.isDefault && <span className="text-xs text-gray-500 ml-2">(Default)</span>}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{selectedAddress.address}</p>
                      <p className="text-sm text-gray-600">{selectedAddress.statePin}</p>
                      <p className="text-sm text-gray-600 mt-1">Mobile: <span className="font-medium">{selectedAddress.mobile}</span></p>
                    </div>
                    <button
                      onClick={handleChangeAddressMobile} // On mobile, "Change" cycles. To select from a list/add new, users can scroll to appropriate sections or we'd need a modal.
                                                          // For this iteration, ADD NEW is separate, change cycles.
                      className="text-sm font-medium text-orange-600 hover:text-orange-700 transition duration-150"
                    >
                      Change
                    </button>
                  </div>
                   <button
                    onClick={openAddAddressSidebar}
                    className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-orange-600 hover:bg-orange-50 transition duration-150"
                  >
                    ADD NEW ADDRESS
                  </button>
                </div>

                {/* Mobile Delivery Estimates */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h2 className="text-sm font-semibold text-gray-700 uppercase mb-3">DELIVERY ESTIMATES</h2>
                  <div className="space-y-3">
                    {cartItems.map((item,index) => (
                      <div key={item.id || `item-${index}`} className="flex items-center space-x-3">
                        <img
                          src={item.image || `https://placehold.co/40x40/e2e8f0/9ca3af?text=Img${index+1}`}
                          alt={item.name || `Product ${index+1}`}
                          className="w-10 h-10 rounded object-cover bg-gray-200"
                          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/40x40/cccccc/9ca3af?text=Error'; }}
                        />
                        <p className="text-xs text-gray-600">Est. Delivery <span className="font-semibold text-gray-800">11 May - 13 May</span></p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Delivery Options */}
                <div className={`bg-white p-4 rounded-lg border ${selectedDelivery === 'express' ? 'border-orange-500' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setSelectedDelivery(selectedDelivery === 'express' ? 'standard' : 'express') /* Simple toggle for demo */}>
                    <div>
                      <p className="font-medium text-sm text-gray-800">
                        {selectedDelivery === 'express' ? 'Express Delivery (1-2 days)' : 'Standard Delivery (3-5 days)'}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">Delivery between <span className="font-medium">11 May - 13 May</span></p>
                      <p className="text-xs font-medium text-gray-700 mt-0.5">
                        ₹ {selectedDelivery === 'express' ? priceDetails.expressFee.toFixed(2) : priceDetails.shippingFee.toFixed(2)} Delivery
                      </p>
                    </div>
                    <ChevronDownIcon />
                  </div>
                  {/* Could expand to show both options here, but keeping it simple per original UI */}
                </div>
              </div>
            </div>


            {/* Right Section: Order Summary & Delivery (Desktop) */}
            <div className="hidden lg:block lg:col-span-1 space-y-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-3">
                {cartItems.map((item,index) => (
                  <div key={item.id || `desktop-item-${index}`} className="flex items-center space-x-3">
                    <img
                      src={ item.image ||`https://placehold.co/50x60/e2e8f0/9ca3af?text=Img${index+1}`}
                      alt={item.name || `Product ${index+1}`}
                      className="w-[50px] h-[60px] rounded object-cover bg-gray-200"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/50x60/cccccc/9ca3af?text=Error'; }}
                    />
                    <p className="text-xs text-gray-600">Est. Delivery <span className="font-medium">11 May - 13 May</span></p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 space-y-4">
                <div className={`flex items-start cursor-pointer p-3 rounded-md hover:bg-gray-50 ${selectedDelivery === 'standard' ? 'border border-orange-500 bg-orange-50': ''}`} onClick={() => setSelectedDelivery('standard')}>
                    <RadioIcon checked={selectedDelivery === 'standard'} />
                  <div className="flex-grow">
                    <p className="font-medium text-sm text-gray-800">Standard Delivery (3-5 days)</p>
                    <p className="text-xs text-gray-500 mt-0.5">Delivery between <span className="font-medium">11 May - 13 May</span></p>
                    {/* <p className="text-xs font-medium text-green-600 mt-0.5">₹ {priceDetails.shippingFee.toFixed(2)}</p>  -- Standard is usually free or cheaper */}
                  </div>
                </div>
                <div className={`flex items-start cursor-pointer p-3 rounded-md hover:bg-gray-50 ${selectedDelivery === 'express' ? 'border border-orange-500 bg-orange-50': ''}`} onClick={() => setSelectedDelivery('express')}>
                    <RadioIcon checked={selectedDelivery === 'express'} />
                  <div className="flex-grow">
                    <p className="font-medium text-sm text-gray-800">Express Delivery (1-2 days)</p>
                    <p className="text-xs text-gray-500 mt-0.5">Delivery between <span className="font-medium">11 May - 13 May</span></p>
                    <p className="text-xs font-medium text-green-600 mt-0.5">₹ {priceDetails.expressFee.toFixed(2)} Delivery</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
                <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">PRICE DETAILS ({cartItems.length} Items)</h2>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Total MRP</span>
                    <span>₹{priceDetails.totalMRP.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount on MRP</span>
                    <span className="text-green-600">- ₹{priceDetails.discountMRP.toLocaleString()}</span>
                  </div>
                    <div className="flex justify-between">
                    <span>GST / Tax (18%)</span>
                    <span>₹{priceDetails.gstTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coupon Discount</span>
                    <span className="text-green-600">- ₹{priceDetails.couponDiscount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span>Shipping Fee</span>
                    <span>{selectedDelivery === 'express' ? `₹${priceDetails.expressFee.toFixed(2)}` : `₹${priceDetails.shippingFee.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-2 flex justify-between font-semibold text-gray-800 text-base">
                    <span>Total Amount</span>
                    <span>₹{totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-150"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-top z-40">
         <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Total:</span>
            <span className="text-lg font-bold text-gray-800">₹{totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-150 text-sm"
        >
          CONTINUE TO PAYMENT
        </button>
      </div>

      {/* Address Sidebar */}
      <AddressSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSubmit={handleAddressSubmit}
        addressData={addressFormData}
        setAddressData={setAddressFormData}
        isEditing={!!editingAddress}
      />
    </div>
  );
}