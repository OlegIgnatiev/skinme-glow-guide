
import { useState } from "react";
import { Camera, Package, User } from "lucide-react";
import ScanTab from "@/components/ScanTab";
import ProductsTab from "@/components/ProductsTab";
import ProfileTab from "@/components/ProfileTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("scan");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "scan":
        return <ScanTab />;
      case "products":
        return <ProductsTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return <ScanTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 flex flex-col relative overflow-hidden">
      {/* Cute background decorations */}
      <div className="absolute top-20 left-4 w-8 h-8 bg-pink-200 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute top-40 right-8 w-6 h-6 bg-yellow-200 rounded-full animate-bounce opacity-40"></div>
      <div className="absolute bottom-40 left-8 w-5 h-5 bg-purple-200 rounded-full animate-pulse opacity-35"></div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {renderActiveTab()}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white/90 backdrop-blur-lg border-t-2 border-pink-100 px-6 py-5 relative">
        {/* Cute top decoration */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-pink-200 rounded-full"></div>
        
        <nav className="flex justify-around items-center max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("scan")}
            className={`flex flex-col items-center space-y-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
              activeTab === "scan"
                ? "bg-pink-100 text-pink-600 shadow-lg scale-105 border-2 border-pink-200"
                : "text-gray-500 hover:text-pink-500 hover:bg-pink-50"
            }`}
          >
            <div className="relative">
              <Camera size={26} className="transition-transform duration-200 hover:scale-110" />
              {activeTab === "scan" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              )}
            </div>
            <span className="text-xs font-medium">Scan ✨</span>
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className={`flex flex-col items-center space-y-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
              activeTab === "products"
                ? "bg-pink-100 text-pink-600 shadow-lg scale-105 border-2 border-pink-200"
                : "text-gray-500 hover:text-pink-500 hover:bg-pink-50"
            }`}
          >
            <div className="relative">
              <Package size={26} className="transition-transform duration-200 hover:scale-110" />
              {activeTab === "products" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              )}
            </div>
            <span className="text-xs font-medium">Products 💄</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center space-y-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
              activeTab === "profile"
                ? "bg-pink-100 text-pink-600 shadow-lg scale-105 border-2 border-pink-200"
                : "text-gray-500 hover:text-pink-500 hover:bg-pink-50"
            }`}
          >
            <div className="relative">
              <User size={26} className="transition-transform duration-200 hover:scale-110" />
              {activeTab === "profile" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              )}
            </div>
            <span className="text-xs font-medium">Profile 👑</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Index;
