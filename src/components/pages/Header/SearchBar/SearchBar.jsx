import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search action
  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // You can replace this with your desired search logic:
      // e.g., redirect to a search page or update state
      // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    } else {
      alert('Please enter a search query.');
    }
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="px-4 py-2 pr-10 w-full rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
      />

      {/* Search Icon */}
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2   transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
      >
        <FaSearch size={16} />
      </button>
    </div>
  );
};

export default SearchBar;