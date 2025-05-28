import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './TopHeader.css';

const TopHeader = () => {
  const headerItems = [
    { icon: <LocalShippingIcon fontSize="small" />, text: "Free Domestic Shipping" },
    { icon: <LocalOfferIcon fontSize="small" />, text: "Cash on Delivery Available" },
    { icon: <KeyboardReturnIcon fontSize="small" />, text: "6 Days Easy Exchange" },
    { icon: <LocationOnIcon fontSize="small" />, text: "Call Option Available" },
  ];

  return (
    <div className="scrolling-header">
      <div className="marquee-container">
        <div className="marquee-content">
          {/* Render 3 copies to ensure seamless looping */}
          {[...headerItems, ...headerItems, ...headerItems].map((item, index) => (
            <div key={`item-${index}`} className="header-item">
              <span className="header-icon">{item.icon}</span>
              <span className="header-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;