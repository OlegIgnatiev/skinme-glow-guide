
import { Camera, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkinMeIcon from "./SkinMeIcon";

const ScanTab = () => {
  const handleScanProduct = () => {
    console.log("Opening camera to scan product...");
    // In a real app, this would open the camera
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8 relative overflow-hidden">
      {/* Floating cute decorations */}
      <div className="absolute top-8 left-6 w-6 h-6 bg-pink-200 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-16 right-8 w-4 h-4 bg-yellow-200 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute bottom-48 left-8 w-3 h-3 bg-purple-200 rounded-full animate-bounce delay-100 opacity-50"></div>
      <div className="absolute bottom-56 right-6 w-5 h-5 bg-green-200 rounded-full animate-pulse delay-200 opacity-60"></div>
      
      <div className="text-center mb-8 animate-fade-in">
        <div className="flex items-center justify-center mb-4">
          <SkinMeIcon size={40} />
        </div>
        <div className="flex items-center justify-center mb-3">
          <h1 className="text-2xl font-light text-gray-800">
            Welcome to <span className="font-semibold text-pink-600 relative">
              SkinMe
              <Sparkles size={16} className="absolute -top-1 -right-5 text-pink-400 animate-pulse" />
            </span>
          </h1>
          <Heart size={16} className="text-pink-400 ml-2 animate-pulse" />
        </div>
        <p className="text-gray-600 text-base leading-relaxed max-w-xs">
          Your adorable skincare buddy for ingredient magic and personalized love ✨
        </p>
      </div>

      <div className="relative mb-8">
        <div className="w-44 h-44 bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-100 rounded-full flex items-center justify-center shadow-xl animate-pulse border-4 border-white">
          <div className="w-36 h-36 bg-gradient-to-br from-pink-50 to-purple-50 rounded-full flex items-center justify-center">
            <Camera size={60} className="text-pink-500" />
          </div>
        </div>
        {/* Cute floating elements around the camera */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-300 rounded-full animate-bounce flex items-center justify-center">
          <span className="text-white text-xs">✨</span>
        </div>
        <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-yellow-300 rounded-full animate-bounce delay-75 flex items-center justify-center">
          <span className="text-white text-xs">💖</span>
        </div>
        <div className="absolute top-3 -left-4 w-4 h-4 bg-purple-300 rounded-full animate-bounce delay-150 flex items-center justify-center">
          <span className="text-white text-xs">🌸</span>
        </div>
        <div className="absolute -top-1 left-6 w-3 h-3 bg-green-300 rounded-full animate-bounce delay-200"></div>
      </div>

      <Button
        onClick={handleScanProduct}
        className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-6 rounded-3xl text-base font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white"
      >
        <Camera className="mr-3" size={24} />
        <span className="flex items-center">
          Scan Product 
          <Sparkles size={16} className="ml-2 animate-pulse" />
        </span>
      </Button>

      <p className="text-gray-500 text-sm mt-6 text-center max-w-xs leading-relaxed">
        Point your camera at any skincare product and let the magic happen! ✨💕
      </p>
    </div>
  );
};

export default ScanTab;
