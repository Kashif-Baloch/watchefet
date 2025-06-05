import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { useCart } from '../../context/CartContext';

const brands = [
  { name: 'Rolex', href: '/rolex' },
  { name: 'Audemars Piguet', href: '/audemars-piguet' },
  { name: 'Patek Philippe', href: '/patek-philippe' },
  { name: 'Hublot', href: '/hublot' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Shop by Brand',
    href: '#',
    dropdown: brands
  },
  { name: "Women's Collection", href: '/womens-collection' },
  { name: 'Collections', href: '/collections' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const location = useLocation();
  const { getItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNavigation = (href: string) => {
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => handleNavigation('/')}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <button
                    className="flex items-center text-sm text-gray-300 hover:text-gold-500 uppercase tracking-wider transition-colors py-2"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center text-sm text-gray-300 hover:text-gold-500 uppercase tracking-wider transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-0 w-48 bg-black/95 border border-zinc-800 rounded-lg shadow-xl"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          onClick={() => handleNavigation(dropdownItem.href)}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-gold-500 hover:bg-zinc-800 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/request-model">
              <Button variant="outline" size="sm">
                Request a Model
              </Button>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-300 hover:text-gold-500 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[10px] text-black font-medium">
                {getItemCount()}
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300 hover:text-gold-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-zinc-800">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <button
                    className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-gold-500 uppercase tracking-wider transition-colors border-b border-zinc-800 w-full text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => {
                      handleNavigation(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-gold-500 uppercase tracking-wider transition-colors border-b border-zinc-800"
                  >
                    {item.name}
                  </Link>
                )}
                {item.dropdown && (
                  <div className="pl-6 bg-zinc-900/50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        onClick={() => {
                          handleNavigation(dropdownItem.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block px-3 py-3 text-sm text-gray-400 hover:text-gold-500 transition-colors border-b border-zinc-800/50"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="py-4 px-3">
              <Link to="/request-model" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" fullWidth>
                  Request a Model
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;