
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Sparkles, Package } from "lucide-react";

const mockScannedProducts = [
  {
    id: 1,
    name: "Gentle Cleanser",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200",
    compatibility: "Perfect match",
    compatibilityColor: "green",
    ingredients: ["Water", "Glycerin", "Sodium Cocoyl Isethionate"],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Vitamin C Serum",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200",
    compatibility: "Caution: Contains fragrance",
    compatibilityColor: "yellow",
    ingredients: ["Ascorbic Acid", "Water", "Fragrance"],
    rating: 4.2,
  },
];

const mockRecommendedProducts = [
  {
    id: 3,
    name: "Hydrating Moisturizer",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200",
    compatibility: "Excellent for dry skin",
    compatibilityColor: "green",
    ingredients: ["Hyaluronic Acid", "Ceramides", "Niacinamide"],
    rating: 4.8,
  },
  {
    id: 4,
    name: "Gentle Exfoliant",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200",
    compatibility: "Good match",
    compatibilityColor: "green",
    ingredients: ["Salicylic Acid", "Aloe Vera", "Glycolic Acid"],
    rating: 4.3,
  },
];

const ProductsTab = () => {
  const [activeSection, setActiveSection] = useState("scanned");

  return (
    <div className="p-5 h-full overflow-y-auto relative">
      {/* Cute floating decorations */}
      <div className="absolute top-4 right-6 w-6 h-6 bg-pink-200 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute top-10 left-4 w-4 h-4 bg-yellow-200 rounded-full animate-bounce opacity-60"></div>
      
      <div className="text-center mb-8">
        <h1 className="text-2xl font-light text-gray-800 flex items-center justify-center">
          Your Products
          <Package size={24} className="ml-3 text-pink-500" />
          <Sparkles size={20} className="ml-2 text-purple-400 animate-pulse" />
        </h1>
        <p className="text-base text-gray-500 mt-2">Your beauty collection ✨💕</p>
      </div>
      
      {/* Section Toggle */}
      <div className="flex bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-1 mb-8 border-2 border-pink-100">
        <button
          onClick={() => setActiveSection("scanned")}
          className={`flex-1 py-4 px-4 rounded-xl text-base font-medium transition-all duration-300 flex items-center justify-center ${
            activeSection === "scanned"
              ? "bg-white text-pink-600 shadow-md border-2 border-pink-200"
              : "text-gray-600 hover:text-pink-500"
          }`}
        >
          <span className="mr-2 text-lg">📱</span>
          Scanned
        </button>
        <button
          onClick={() => setActiveSection("recommended")}
          className={`flex-1 py-4 px-4 rounded-xl text-base font-medium transition-all duration-300 flex items-center justify-center ${
            activeSection === "recommended"
              ? "bg-white text-pink-600 shadow-md border-2 border-pink-200"
              : "text-gray-600 hover:text-pink-500"
          }`}
        >
          <span className="mr-2 text-lg">💝</span>
          Recommended
        </button>
      </div>

      {/* Products Grid */}
      <div className="space-y-5">
        {activeSection === "scanned" && (
          <div className="animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-base font-medium text-gray-600">Recently scanned</span>
              <span className="ml-3 text-pink-400 text-lg">🔍✨</span>
            </div>
            {mockScannedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        {activeSection === "recommended" && (
          <div className="animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="text-base font-medium text-gray-600">Perfect for you</span>
              <span className="ml-3 text-purple-400 text-lg">💖🌟</span>
            </div>
            {mockRecommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsTab;
