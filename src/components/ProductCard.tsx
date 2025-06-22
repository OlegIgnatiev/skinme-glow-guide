
import { Star, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  compatibility: string;
  compatibilityColor: string;
  ingredients: string[];
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const compatibilityColorClasses = {
    green: "bg-green-100 text-green-700 border-green-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    red: "bg-red-100 text-red-700 border-red-200",
  };

  const compatibilityEmojis = {
    green: "💚",
    yellow: "💛",
    red: "❤️",
  };

  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg border-2 border-pink-100 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:border-pink-200 relative overflow-hidden">
      {/* Cute background decoration */}
      <div className="absolute top-2 right-2 opacity-10">
        <Sparkles size={24} className="text-pink-300" />
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-18 h-18 rounded-2xl object-cover border-2 border-pink-100 shadow-md"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200";
            }}
          />
          {/* Cute corner decoration */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-300 rounded-full flex items-center justify-center">
            <span className="text-xs">✨</span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-800 flex items-center">
              {product.name}
              <span className="ml-1 text-sm">🌸</span>
            </h3>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="transition-transform hover:scale-110"
            >
              <Heart 
                size={18} 
                className={`${isLiked ? 'text-pink-500 fill-current' : 'text-gray-300'} transition-colors`} 
              />
            </button>
          </div>
          
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium border-2 mb-3 ${
            compatibilityColorClasses[product.compatibilityColor as keyof typeof compatibilityColorClasses]
          }`}>
            <span className="mr-1">{compatibilityEmojis[product.compatibilityColor as keyof typeof compatibilityEmojis]}</span>
            {product.compatibility}
          </div>
          
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={12} 
                  className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
            <span className="text-xs text-pink-400">💫</span>
          </div>
          
          <div className="text-xs text-gray-500 bg-gray-50 rounded-xl px-3 py-2">
            <span className="font-medium text-purple-600">Cute ingredients:</span> {product.ingredients.slice(0, 2).join(", ")}
            {product.ingredients.length > 2 && "..."}
            <span className="ml-1">🧴</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
