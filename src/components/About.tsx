import { Leaf, Heart, Award, Users, Truck, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <Leaf className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About FreshHarvest
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted source for premium organic products, delivered fresh from farm to your table.
          We're committed to bringing you the finest quality organic foods while supporting sustainable farming practices.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 md:p-12 mb-12 shadow-sm border border-green-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            At FreshHarvest, we believe that everyone deserves access to fresh, organic, and nutritious food.
            Our mission is to connect you with the best organic products while supporting local farmers and
            sustainable agriculture. We carefully source each product to ensure it meets our high standards
            for quality, freshness, and organic certification.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">100% Organic</h3>
          <p className="text-gray-600">
            Every product is certified organic, ensuring you get the purest, most natural foods without harmful pesticides or chemicals.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
          <p className="text-gray-600">
            We work directly with trusted farmers and suppliers to bring you only the highest quality products, hand-selected for freshness and flavor.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Supporting Farmers</h3>
          <p className="text-gray-600">
            By choosing FreshHarvest, you're supporting local and organic farmers who are committed to sustainable and ethical farming practices.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Truck className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Delivery</h3>
          <p className="text-gray-600">
            Our products are carefully handled and delivered fresh, maintaining their nutritional value and natural flavors from farm to your door.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Safe</h3>
          <p className="text-gray-600">
            All our products undergo rigorous quality checks and are certified organic by recognized certification bodies.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly</h3>
          <p className="text-gray-600">
            We're committed to environmental sustainability, using eco-friendly packaging and supporting farming methods that protect our planet.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>
            FreshHarvest was born from a simple belief: food should be fresh, natural, and good for both you and the planet.
            Founded by a team passionate about organic living and sustainable agriculture, we set out to make premium organic
            products accessible to everyone.
          </p>
          <p>
            What started as a small initiative to support local organic farmers has grown into a trusted platform where
            thousands of customers discover and enjoy the finest organic produce, grains, and dairy products. We've built
            strong relationships with certified organic farms and suppliers who share our commitment to quality and sustainability.
          </p>
          <p>
            Today, FreshHarvest continues to expand our product range while maintaining our core values: quality, freshness,
            sustainability, and customer satisfaction. Every product in our catalog is carefully selected, ensuring it meets
            our strict organic standards and delivers exceptional taste and nutritional value.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose FreshHarvest?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Wide Selection</h3>
              <p className="text-green-50">
                From fresh fruits and vegetables to organic grains and dairy, we offer a comprehensive range of certified organic products.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Health & Wellness</h3>
              <p className="text-green-50">
                Our organic products are free from synthetic pesticides, GMOs, and harmful chemicals, supporting your health and well-being.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Trusted Quality</h3>
              <p className="text-green-50">
                Every product is verified organic and quality-checked to ensure you receive the best possible items for your family.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Community Impact</h3>
              <p className="text-green-50">
                Your purchases directly support organic farmers and contribute to a more sustainable food system for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

