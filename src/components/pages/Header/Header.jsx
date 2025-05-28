import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../../store/slice/cartSlice";
import { selectWishlistCount } from "../../../store/slice/wishlistSlice";
import {
  HomeIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  NewspaperIcon,
  LifebuoyIcon,
  UserIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import TopHeader from "./TopHeader/TopHeader";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // State for mobile menu and search overlay
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Redux integration to get total items from cart
  const totalItems = useSelector(selectTotalItems);
  console.log("totalItems: ", totalItems);

  // Redux integration to get total items from wishlist
  const wishlistCount = useSelector(selectWishlistCount);
  console.log("wishlistCount: ", wishlistCount);

  // Navigation configuration
  const navigationItems = [
    { label: "Home", icon: <HomeIcon className="w-5 h-5" />, to: "/" },
    {
      label: "Our Story",
      icon: <BookOpenIcon className="w-5 h-5" />,
      to: "/ourStory",
    },
    {
      label: "2d Try-On",
      icon: <CubeTransparentIcon className="w-5 h-5" />,
      to: "/tryOn",
    },
    {
      label: "Blogs",
      icon: <NewspaperIcon className="w-5 h-5" />,
      to: "/blogs",
    },
    { label: "Help", icon: <LifebuoyIcon className="w-5 h-5" />, to: "/help" },
  ];

  const searchOverlayRef = useRef(null);

  // Sync active page with current route
  useEffect(() => {
    const pathToLabel = {
      "/": "Home",
      "/ourStory": "Our Story",
      "/tryOn": "3D Try-On",
      "/blogs": "Blogs",
      "/help": "Help",
    };
    setActivePage(pathToLabel[location.pathname] || "");
  }, [location.pathname]);

  // Close search overlay when clicking outside (but not on the search button)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSearchOpen &&
        searchOverlayRef.current &&
        !searchOverlayRef.current.contains(event.target) &&
        !event.target.closest('[aria-label="Search"]')
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  // Handle clicking a NavItem: close mobile menu
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    } else {
      alert("Please enter a search query.");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <header className="relative font-archivo mb-6">
      <TopHeader />

      <div className="flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow-sm">
        {/* Logo */}
        <div className="font-bold text-xl md:text-2xl tracking-wider">
          <Link to="/" aria-label="Homepage">
            <img src="/logo.png" alt="company logo" className="w-12 md:w-16" />
          </Link>
        </div>

        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden md:flex space-x-6 lg:space-x-8 items-center"
        >
          {navigationItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              to={item.to}
              active={activePage === item.label}
              onClick={handleNavClick}
              mobile={false}
            />
          ))}
        </nav>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/profile" aria-label="Account" className="group">
            <UserIcon className="w-6 h-6 text-gray-800 group-hover:text-red-600 transition-colors duration-300" />
          </Link>
          <Link to="/wishlist" aria-label="Wishlist" className="group relative">
            <HeartIcon className="w-6 h-6 text-gray-800 group-hover:text-red-600 transition-colors duration-300" />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          <button
            aria-label="Search"
            aria-expanded={isSearchOpen}
            onClick={toggleSearch}
            className="group"
          >
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-800 group-hover:text-red-600 transition-colors duration-300 cursor-pointer" />
          </button>
          <Link to="/cart" aria-label="Cart" className="group relative">
            <ShoppingBagIcon className="w-6 h-6 text-gray-800 group-hover:text-red-600 transition-colors duration-300" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <div className="md:hidden flex space-x-4 items-center">
          <Link to="/wishlist" aria-label="Wishlist" className="group relative">
            <HeartIcon className="w-5 h-5 text-gray-800 group-hover:text-red-600 transition-colors duration-300" />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          <button
            aria-label="Search"
            aria-expanded={isSearchOpen}
            onClick={toggleSearch}
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-800 " />
          </button>
          <Link to="/cart" aria-label="Cart" className="relative">
            <ShoppingBagIcon className="w-5 h-5 text-gray-800" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="ml-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className="absolute top-full left-0 right-0 bg-white shadow-md z-10"
        >
          <nav className="flex flex-col">
            {navigationItems.map((item) => (
              <NavItem
                key={item.label}
                mobile
                label={item.label}
                icon={item.icon}
                to={item.to}
                active={activePage === item.label}
                onClick={handleNavClick}
              />
            ))}
            <div className="flex justify-start gap-8 px-6 py-4 border-t border-gray-100">
              <Link
                to="/profile"
                aria-label="Account"
                className="flex items-center gap-2"
              >
                <UserIcon className="w-5 h-5" />
                <span className="text-sm">Account</span>
              </Link>
            </div>
          </nav>
        </div>
      )}

      {isSearchOpen && (
        <div
          ref={searchOverlayRef}
          className="absolute top-full left-0 right-0 bg-white shadow-md p-4 z-20"
        >
          <form className="flex items-center" onSubmit={handleSearchSubmit}>
            <div className="relative flex-grow">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                autoFocus
              />
            </div>
            <button
              type="button"
              onClick={toggleSearch}
              className="ml-4 text-red-600 font-medium"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

function NavItem({ icon, label, active, to, onClick, mobile = false }) {
  return (
    <Link
      to={to}
      onClick={() => onClick(label)}
      className={`flex items-center gap-2 ${
        mobile ? "w-full py-3 px-6 hover:bg-gray-50" : ""
      }`}
      aria-current={active ? "page" : undefined}
    >
      {icon}
      <span
        className={`uppercase text-sm tracking-wide transition-colors duration-300 ${
          active
            ? "text-red-600 font-medium"
            : "text-gray-800 hover:text-red-600"
        } ${!mobile && active ? "border-b-2 border-red-600 pb-1" : ""}`}
      >
        {label}
      </span>
    </Link>
  );
}
