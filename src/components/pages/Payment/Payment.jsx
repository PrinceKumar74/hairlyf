import React, { useState } from 'react';

// Placeholder icons - Replace with actual SVGs or icon components
// It's recommended to use a library like react-icons or import SVGs directly for better quality and control.

// === Web View Icons ===
// Updated to render img directly for better control in buttons
const UpiLargeIcon = () => <img src="/paymentLogos/upi.svg" alt="UPI" className="h-8 object-contain" />;
const PhonePeLargeIcon = () => <img src="/paymentLogos/phonepay.svg" alt="phonepe" className="h-8 object-contain" />;
const PaytmLargeIcon = () => <img src="/paymentLogos/paytm.svg" alt="Paytm" className="h-8 object-contain" />;
const GPayLargeIcon = () => <img src="/paymentLogos/gpay.svg" alt="Google Pay" className="h-8 object-contain" />;

const CreditCardDesktopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3M3.75 21h16.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0020.25 4.5H3.75A2.25 2.25 0 001.5 6.75v11.75c0 1.242 1.008 2.25 2.25 2.25z" />
  </svg>
);
const NetBankingDesktopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M3.75 12h16.5m-16.5 5.25H12M3.75 6.75H12m11.25-3H12m9 12.75H12m6.75 4.5H12M3.75 4.5v.001M3.75 9.75v.001M3.75 15v.001M1.5 4.5h.008v15h-.008v-15zm0 0c0-.966.784-1.75 1.75-1.75h16.5A1.75 1.75 0 0122.5 4.5v15a1.75 1.75 0 01-1.75 1.75H3.25A1.75 1.75 0 011.5 19.5v-15z" />
  </svg>
);
const WalletDesktopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m18 0v6.75A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V12m18 0v-6.75A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25V12m15-6.75h-6" />
  </svg>
);
const CashOnDeliveryDesktopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6A.75.75 0 012.25 5.25V4.5m0 13.5m0-13.5H21.75m0 0A2.25 2.25 0 0019.5 2.25H4.5A2.25 2.25 0 002.25 4.5m19.5 0v.75a.75.75 0 01-.75.75a.75.75 0 01-.75-.75V4.5m0 13.5m0-13.5h-.008v11.25h.008V4.5zM7.5 1.5L7.5 3M12 1.5L12 3m4.5-1.5L16.5 3M5.25 7.5H18.75" />
  </svg>
);


// === Mobile View Icons ===
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);
const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
);
const BackArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);
// Placeholder for actual small UPI, PhonePe, Bank logos for mobile view
const UpiSmallIcon = () => <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-700">UPI</div>;
const PhonePeSmallIcon = () => <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-xs text-purple-700">PP</div>;
const AxisBankIcon = () => <img src="/bankLogos/axisBank.svg" className="w-5 h-5 object-cotain"/>; 
const HDFCBankIcon = () => <img src="/bankLogos/hdfcBank.svg" className="w-5 h-5 object-cotain"/>; 
const SBIBankIcon = () => <img src="/bankLogos/sbiBank.svg" className="w-5 h-5 object-cotain"/>;
const ICICIBankIcon = () => <img src="/bankLogos/iciciBank.svg" className="w-5 h-5 object-cotain"/>;
const KotakBankIcon = () => <img src="/bankLogos/kotakBank.svg" className="w-5 h-5 object-cotain"/>;


const Payment = () => {
  // For Web view
  const [selectedDesktopPaymentMethod, setSelectedDesktopPaymentMethod] = useState('card'); // 'card', 'netbanking', 'wallet', 'cod'
  const [selectedDesktopPopularBank, setSelectedDesktopPopularBank] = useState(null); // For desktop net banking popular bank selection

  // For Mobile view
  const [openAccordion, setOpenAccordion] = useState(null); // 'upi', 'card', 'netbanking', 'wallet', 'cod'
  const [selectedUpiOption, setSelectedUpiOption] = useState(null); // 'phonepe', 'enter_upi'
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedWalletMobile, setSelectedWalletMobile] = useState(null); // Placeholder for mobile wallet selection

  const desktopPaymentOptions = [
    { id: 'card', label: 'Credit Card/Debit Card', icon: <CreditCardDesktopIcon /> },
    { id: 'netbanking', label: 'Net Banking', icon: <NetBankingDesktopIcon /> },
    { id: 'wallet', label: 'Wallets', icon: <WalletDesktopIcon /> },
    { id: 'cod', label: 'Cash on Delivery', icon: <CashOnDeliveryDesktopIcon /> },
  ];

  const banks = [ // Used for mobile and desktop net banking dropdown
    { id: 'axis', name: 'Axis Bank', icon: <AxisBankIcon /> },
    { id: 'hdfc', name: 'HDFC Bank', icon: <HDFCBankIcon /> },
    { id: 'sbi', name: 'SBI Bank', icon: <SBIBankIcon /> },
    { id: 'icici', name: 'ICICI Bank', icon: <ICICIBankIcon /> },
    { id: 'kotak', name: 'Kotak Mahindra Bank', icon: <KotakBankIcon /> },
    { id: 'pnb', name: 'Punjab National Bank', icon: <div className="w-5 h-5 bg-yellow-200 flex items-center justify-center text-xs text-yellow-700 rounded-sm">PN</div> }, // Example other bank
    { id: 'bob', name: 'Bank of Baroda', icon: <div className="w-5 h-5 bg-orange-300 flex items-center justify-center text-xs text-orange-800 rounded-sm">BOB</div> }, // Example other bank
  ];

  const popularBanksDesktop = [ // Define popular banks for desktop explicitly
    { id: 'axis', name: 'Axis Bank', icon: <AxisBankIcon /> },
    { id: 'hdfc', name: 'HDFC Bank', icon: <HDFCBankIcon /> },
    { id: 'icici', name: 'ICICI Bank', icon: <ICICIBankIcon /> },
    { id: 'sbi', name: 'SBI Bank', icon: <SBIBankIcon /> },
    { id: 'kotak', name: 'Kotak Mahindra Bank', icon: <KotakBankIcon /> },
  ];


  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };


  const renderDesktopView = () => (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header - Centered Navigation */}
        <header className="hidden lg:flex justify-center items-center mb-10 pb-4 border-b border-gray-200">
          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-700 transition-colors">CART</a>
            <span className="text-gray-300">••••••••</span>
            <a href="#" className="font-semibold text-green-600 hover:text-green-700 transition-colors">ADDRESS</a>
            <span className="text-gray-300">••••••••</span>
            <span className="font-semibold text-green-600 border-b-2 border-green-600 pb-1">PAYMENT</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Payment Methods */}
          <div className="lg:col-span-2 space-y-6">
            {/* Express Checkout */}
            <section>
              <h2 className="text-sm font-semibold text-gray-800 mb-3">Choose Express Checkout</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button className="flex items-center justify-center p-3 h-14 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-400">
                  <UpiLargeIcon />
                </button>
                <button className="flex items-center justify-center p-3 h-14 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-400">
                  <PhonePeLargeIcon />
                </button>
                <button className="flex items-center justify-center p-3 h-14 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-400">
                  <PaytmLargeIcon />
                </button>
                <button className="flex items-center justify-center p-3 h-14 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-400">
                  <GPayLargeIcon />
                </button>
              </div>
            </section>

            {/* Other Payment Methods */}
            <section>
              <h2 className="text-sm font-semibold text-gray-800 mb-3">OTHER PAYMENT METHOD</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {desktopPaymentOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                        setSelectedDesktopPaymentMethod(option.id);
                        if (option.id !== 'netbanking') setSelectedDesktopPopularBank(null); // Reset bank selection if not netbanking
                    }}
                    className={`flex items-center  px-4 py-15 bg-white border rounded-md shadow-sm hover:shadow-lg transition-all duration-200 focus:outline-none
                                      ${selectedDesktopPaymentMethod === option.id ? 'border-orange-500 ring-1 ring-orange-500 bg-orange-50' : 'border-gray-300'}`}
                  >
                    {option.icon}
                    <span className={`ml-3 text-sm font-medium ${selectedDesktopPaymentMethod === option.id ? 'text-orange-600' : 'text-gray-700'}`}>{option.label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Credit Card/Debit Card Form */}
            {selectedDesktopPaymentMethod === 'card' && (
              <section className="bg-white p-6 rounded-md shadow-sm border border-gray-300">
                <h3 className="text-sm font-semibold text-orange-600 mb-1">CREDIT CARD/DEBIT CARD</h3>
                <p className="text-xs text-gray-500 mb-5">Please ensure your card can be used for online transactions.</p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="cardNumberDesktop" className="sr-only">Card Number</label>
                    <input
                      type="text"
                      name="cardNumberDesktop"
                      id="cardNumberDesktop"
                      placeholder="Card Number"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="cardNameDesktop" className="sr-only">Name on Card</label>
                    <input
                      type="text"
                      name="cardNameDesktop"
                      id="cardNameDesktop"
                      placeholder="Name on Card"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label htmlFor="expiryDateDesktop" className="sr-only">Valid thru (MM/YY)</label>
                      <input
                        type="text"
                        name="expiryDateDesktop"
                        id="expiryDateDesktop"
                        placeholder="Valid thru (MM/YY)"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
                      />
                    </div>
                    <div className="w-1/3"> {/* Adjusted width for CVV to match image */}
                      <label htmlFor="cvvDesktop" className="sr-only">CVV</label>
                      <input
                        type="text"
                        name="cvvDesktop"
                        id="cvvDesktop"
                        placeholder="CVV"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
                      />
                    </div>
                  </div>
                </form>
              </section>
            )}
            
            {/* Net Banking Section - Desktop */}
            {selectedDesktopPaymentMethod === 'netbanking' && (
              <section className="bg-white p-6 rounded-md shadow-sm border border-gray-300">
                <h3 className="text-base font-semibold text-gray-800 mb-2">Pay using Net Banking</h3>
                <p className="text-xs text-gray-500 mb-5">Select your bank from the popular banks or search from the list.</p>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Popular Banks</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {popularBanksDesktop.map((bank) => (
                      <label
                        key={bank.id}
                        className={`flex items-center p-3 py-3.5 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors
                                    ${selectedDesktopPopularBank === bank.id ? 'border-orange-500 ring-1 ring-orange-500 bg-orange-50' : 'border-gray-300'}`}
                      >
                        <input
                          type="radio"
                          name="desktopPopularBank"
                          value={bank.id}
                          checked={selectedDesktopPopularBank === bank.id}
                          onChange={() => setSelectedDesktopPopularBank(bank.id)}
                          className="form-radio h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500 mr-3"
                        />
                        <span className="mr-2">{bank.icon}</span> 
                        <span className="text-sm text-gray-700 font-medium">{bank.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Or Select from the following</h4>
                  <div className="relative">
                    <select
                      id="allIndianBanksSelect"
                      className="block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-gray-700 bg-white appearance-none pr-8"
                      onChange={(e) => {
                        if (e.target.value) setSelectedDesktopPopularBank(null); // Clear popular bank if regular bank selected
                        // Handle selection of bank from dropdown if needed
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>All Indian Banks</option>
                      {banks.filter(b => !popularBanksDesktop.find(pb => pb.id === b.id)).map(bank => (
                         <option key={bank.id} value={bank.id}>{bank.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75">
                  PAY NOW
                </button>
              </section>
            )}

            {selectedDesktopPaymentMethod === 'wallet' && (
              <section className="bg-white p-6 rounded-md shadow-sm border border-gray-300">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">WALLETS</h3>
                  <p className="text-xs text-gray-500 mb-5">Select Wallet to pay</p>
                 <input type="radio" name="wallet" className='form-radio h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500 mr-3' /><label >Hairlife Wallet</label>
              </section>
            )}
            {selectedDesktopPaymentMethod === 'cod' && (
              <section className="bg-white p-6 rounded-md shadow-sm border border-gray-300">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">CASH ON DELIVERY</h3>
                  <input type='radio' name="cod" className='form-radio h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500 mr-3' /><label >Cash on Delivery</label>
              </section>
            )}
          </div>

          {/* Right Column: Price Details */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200 sticky top-8">
              <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">Price Details (2 Items)</h2>
              <div className="space-y-1.5 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Total MRP</span>
                  <span>₹2290</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount on MRP</span>
                  <span className="text-red-600">-₹1010</span>
                </div>
                <div className="flex justify-between">
                  <span>GST/Tax</span>
                  <span>₹50</span>
                </div>
                <div className="flex justify-between">
                  <span>Coupon Discount</span>
                  <span>₹50</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span className="text-gray-800">₹20</span>
                </div>
              </div>
              <hr className="my-4 border-gray-200" />
              <div className="flex justify-between font-semibold text-base text-gray-800">
                <span>Total Amount</span>
                <span>₹2290</span>
              </div>
              <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75">
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileView = () => (
    <div className="min-h-screen bg-gray-50 font-sans">
        {/* Mobile Header */}
        <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-10">
            <button onClick={() => console.log("Back button clicked")} className="mr-3">
                <BackArrowIcon />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">PAYMENT</h1>
        </header>

        <main className="p-4 space-y-3">
            <h2 className="text-sm font-semibold text-gray-700 my-2">Payment Methods</h2>

            {/* UPI Accordion */}
            <div className="bg-white rounded-lg shadow-sm">
                <button
                    onClick={() => toggleAccordion('upi')}
                    className="w-full flex justify-between items-center p-4 focus:outline-none"
                >
                    <div className="flex items-center">
                        <UpiSmallIcon />
                        <span className="ml-3 text-sm font-medium text-gray-800">UPI (Pay via Any App)</span>
                    </div>
                    {openAccordion === 'upi' ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
                {openAccordion === 'upi' && (
                    <div className="px-4 pb-4 space-y-3 border-t border-gray-200 pt-3">
                        <label className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <input
                                type="radio"
                                name="upiOption"
                                value="phonepe"
                                checked={selectedUpiOption === 'phonepe'}
                                onChange={() => setSelectedUpiOption('phonepe')}
                                className="form-radio h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                            />
                            <PhonePeSmallIcon />
                            <span className="text-sm text-gray-700">PhonePe</span>
                        </label>
                        <label className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                            <input
                                type="radio"
                                name="upiOption"
                                value="enter_upi"
                                checked={selectedUpiOption === 'enter_upi'}
                                onChange={() => setSelectedUpiOption('enter_upi')}
                                className="form-radio h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                            />
                             <UpiSmallIcon /> {/* Generic UPI icon */}
                            <span className="text-sm text-gray-700">Enter UPI ID</span>
                        </label>
                         {selectedUpiOption === 'enter_upi' && (
                            <input
                                type="text"
                                placeholder="Enter UPI ID"
                                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400"
                            />
                        )}
                        <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md text-sm">
                            CONTINUE
                        </button>
                    </div>
                )}
            </div>

            {/* Credit/Debit Card Accordion */}
            <div className="bg-white rounded-lg shadow-sm">
                <button
                    onClick={() => toggleAccordion('card')}
                    className="w-full flex justify-between items-center p-4 focus:outline-none"
                >
                    <div className="flex items-center">
                        <CreditCardDesktopIcon /> {/* Reusing desktop icon for mobile list */}
                        <span className="ml-3 text-sm font-medium text-gray-800">Credit/Debit Card</span>
                    </div>
                    {openAccordion === 'card' ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
                {openAccordion === 'card' && (
                    <div className="p-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-4">Please ensure your card can be used for online transactions.</p>
                        <form className="space-y-3">
                            <input type="text" placeholder="Card Number" className="block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400" />
                            <input type="text" placeholder="Name on Card" className="block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400" />
                            <div className="flex space-x-3">
                                <input type="text" placeholder="Valid thru (MM/YY)" className="block w-2/3 px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400" />
                                <input type="text" placeholder="CVV" className="block w-1/3 px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm placeholder-gray-400" />
                            </div>
                            <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md text-sm">
                                PAY NOW
                            </button>
                        </form>
                    </div>
                )}
            </div>

            {/* Net Banking Accordion */}
            <div className="bg-white rounded-lg shadow-sm">
                <button
                    onClick={() => toggleAccordion('netbanking')}
                    className="w-full flex justify-between items-center p-4 focus:outline-none"
                >
                    <div className="flex items-center">
                        <NetBankingDesktopIcon />
                        <span className="ml-3 text-sm font-medium text-gray-800">Net Banking</span>
                    </div>
                    {openAccordion === 'netbanking' ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
                {openAccordion === 'netbanking' && (
                    <div className="px-4 pb-4 space-y-2 border-t border-gray-200 pt-3">
                        {banks.map(bank => (
                            <label key={bank.id} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                                <input
                                    type="radio"
                                    name="bankOption"
                                    value={bank.id}
                                    checked={selectedBank === bank.id}
                                    onChange={() => setSelectedBank(bank.id)}
                                    className="form-radio h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                                />
                                {bank.icon}
                                <span className="text-sm text-gray-700">{bank.name}</span>
                            </label>
                        ))}
                        <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md text-sm">
                            CONTINUE
                        </button>
                    </div>
                )}
            </div>

            {/* Wallets Accordion */}
             <div className="bg-white rounded-lg shadow-sm">
                <button
                    onClick={() => toggleAccordion('wallet')}
                    className="w-full flex justify-between items-center p-4 focus:outline-none"
                >
                    <div className="flex items-center">
                        <WalletDesktopIcon />
                        <span className="ml-3 text-sm font-medium text-gray-800">Wallets</span>
                    </div>
                    {openAccordion === 'wallet' ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
                {openAccordion === 'wallet' && (
                    <div className="px-4 pb-4 border-t border-gray-200 pt-3">
                        <p className="text-sm text-gray-600 mb-3">Select your preferred wallet.</p>
                        {/* Placeholder: Add wallet options (e.g., Paytm, Amazon Pay) similar to bank list */}
                        <div className="text-sm text-gray-500">Placeholder: Mobile Wallet Options</div>
                        <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md text-sm">
                            CONTINUE
                        </button>
                    </div>
                )}
            </div>

            {/* Cash on Delivery Accordion */}
            <div className="bg-white rounded-lg shadow-sm">
                <button
                    onClick={() => toggleAccordion('cod')}
                    className="w-full flex justify-between items-center p-4 focus:outline-none"
                >
                    <div className="flex items-center">
                        <CashOnDeliveryDesktopIcon />
                        <span className="ml-3 text-sm font-medium text-gray-800">Cash on Delivery</span>
                    </div>
                    {openAccordion === 'cod' ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
                {openAccordion === 'cod' && (
                    <div className="p-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">You can pay in cash when your order is delivered.</p>
                        <label className="flex items-center mt-3 cursor-pointer">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500" />
                            <span className="ml-2 text-sm text-gray-700">I confirm that I will pay on delivery.</span>
                        </label>
                        <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md text-sm">
                            CONTINUE
                        </button>
                    </div>
                )}
            </div>
        </main>

         {/* Mobile Price Summary & Continue Button - Fixed at bottom */}
        <footer className="sticky bottom-0 bg-white p-4 border-t border-gray-200 shadow-top-md lg:hidden">
            <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-gray-800">₹2290</span> {/* Total Amount */}
                <a href="#" className="text-sm font-semibold text-orange-500 hover:text-orange-600">VIEW DETAILS</a>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md text-base">
                CONTINUE {/* Or PAY NOW depending on context */}
            </button>
        </footer>
    </div>
  );


  return (
    <>
      {/* Render Desktop View for lg screens and above */}
      <div className="hidden lg:block">
        {renderDesktopView()}
      </div>
      {/* Render Mobile View for screens smaller than lg */}
      <div className="block lg:hidden">
        {renderMobileView()}
      </div>
    </>
  );
};

export default Payment;