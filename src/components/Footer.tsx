import { Leaf, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">FreshHarvest</h3>
                <p className="text-xs text-green-400">100% Organic</p>
              </div>
            </div>
            <p className="text-sm">
              Your trusted source for fresh, certified organic produce delivered
              straight from our farms to your home.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Our Farms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Delivery Info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Fresh Fruits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Vegetables
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Grains & Cereals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Dairy Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 FreshHarvest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
