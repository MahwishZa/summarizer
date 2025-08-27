import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { navigation } from '../assets/content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (href) => location.pathname === href;

  return (
    <nav className='mb-4'>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center md:items-end h-16">
          {/* Logo */}
          <Link to='/' className="logo text-2xl font-bold">Scribe</Link>
          {/* Links */}
          <div className="hidden md:flex md:items-end space-x-8">
            {navigation.map((item) => (
              <Link key={item.label} to={item.href} className={`text-base ${isActive(item.href) ? 'font-semibold' : ''}`}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Dropdown */}
          <div className="md:hidden">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-2xl font-bold">Scribe</h2>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </Link>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-base ${isActive(item.href) ? 'font-semibold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-zinc-900 opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  )
}

export default Navbar