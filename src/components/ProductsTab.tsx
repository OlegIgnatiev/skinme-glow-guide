
import { useState } from "react";
import ProductCard from "@/components/ProductCard";

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
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-light text-gray-800 mb-8 text-center">Your Products</h1>
      
      {/* Section Toggle */}
      <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
        <button
          onClick={() => setActiveSection("scanned")}
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
            activeSection === "scanned"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-600 hover:text-green-600"
          }`}
        >
          Scanned Products
        </button>
        <button
          onClick={() => setActiveSection("recommended")}
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
            activeSection === "recommended"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-600 hover:text-green-600"
          }`}
        >
          Recommended
        </button>
      </div>

      {/* Products Grid */}
      <div className="space-y-4">
        {activeSection === "scanned" && (
          <div className="animate-fade-in">
            {mockScannedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        {activeSection === "recommended" && (
          <div className="animate-fade-in">
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
