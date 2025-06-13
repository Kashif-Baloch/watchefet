import React from 'react';
import Logo from '../common/Logo';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400 text-sm">
              Every Timeless Chrono watch is a masterpiece of precision engineering and timeless design.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-500 mr-3" />
                <span className="text-gray-400 text-sm">+66 97-990-1084</span>
              </li> */}
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-500 mr-3" />
                <span className="text-gray-400 text-sm">contact@timelesschrono.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6 uppercase tracking-wider">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Rolex', path: '/rolex' },
                { name: 'Audemars Piguet', path: '/audemars-piguet' },
                { name: 'Patek Philippe', path: '/patek-philippe' },
                { name: 'Hublot', path: '/hublot' },
                { name: 'Request a Model', path: '/request-model' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Timeless Chrono. All rights reserved.
          </p>
          <div>
            <Link to="/privacy" className="text-gray-500 hover:text-gold-500 text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;