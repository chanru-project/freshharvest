import { Leaf, Truck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-green-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Fresh Organic Food
          </h2>
          <p className="text-xl md:text-2xl text-green-50 mb-8 max-w-2xl mx-auto">
            Farm-fresh, certified organic produce delivered to your doorstep
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">100% Organic</div>
                <div className="text-sm text-green-50">Certified produce</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Truck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Free Delivery</div>
                <div className="text-sm text-green-50">Orders over $50</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Quality First</div>
                <div className="text-sm text-green-50">Fresh guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
