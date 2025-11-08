import { ShoppingCart, Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onNavigate: (view: 'home' | 'about' | 'contact') => void;
  currentView: 'home' | 'about' | 'contact';
}

export default function Header({ cartItemsCount, onCartClick, onNavigate, currentView }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (view: 'home' | 'about' | 'contact') => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="bg-green-600 p-2 rounded-lg group-hover:bg-green-700 transition-colors">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-gray-900">FreshHarvest</h1>
              <p className="text-xs text-green-600">100% Organic</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentView === 'home'
                  ? 'text-green-600'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`text-sm font-medium transition-colors ${
                currentView === 'about'
                  ? 'text-green-600'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className={`text-sm font-medium transition-colors ${
                currentView === 'contact'
                  ? 'text-green-600'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right side: Cart and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigate('home')}
                className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'home'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'about'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'contact'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
