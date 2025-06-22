
import { Star } from "lucide-react";

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
  const compatibilityColorClasses = {
    green: "bg-green-100 text-green-700 border-green-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    red: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.02]">
      <div className="flex items-start space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 rounded-xl object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200";
          }}
        />
        
        <div className="flex-1">
          <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
          
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mb-3 ${
            compatibilityColorClasses[product.compatibilityColor as keyof typeof compatibilityColorClasses]
          }`}>
            {product.compatibility}
          </div>
          
          <div className="flex items-center space-x-1 mb-2">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
          
          <div className="text-xs text-gray-500">
            Key ingredients: {product.ingredients.slice(0, 2).join(", ")}
            {product.ingredients.length > 2 && "..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
