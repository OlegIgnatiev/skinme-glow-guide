
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScanTab = () => {
  const handleScanProduct = () => {
    console.log("Opening camera to scan product...");
    // In a real app, this would open the camera
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-3xl font-light text-gray-800 mb-4">
          Welcome to <span className="font-semibold text-green-700">SkinMe</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
          Your smart skincare assistant for ingredient analysis and personalized recommendations
        </p>
      </div>

      <div className="relative mb-8">
        <div className="w-48 h-48 bg-gradient-to-br from-green-100 to-pink-100 rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <Camera size={64} className="text-green-600" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-green-300 rounded-full animate-bounce delay-75"></div>
      </div>

      <Button
        onClick={handleScanProduct}
        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 rounded-2xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <Camera className="mr-3" size={24} />
        Scan Product
      </Button>

      <p className="text-gray-500 text-sm mt-6 text-center max-w-xs">
        Point your camera at any skincare product to analyze its ingredients and compatibility
      </p>
    </div>
  );
};

export default ScanTab;
