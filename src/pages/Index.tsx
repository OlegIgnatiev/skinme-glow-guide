
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-pink-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {renderActiveTab()}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white/80 backdrop-blur-lg border-t border-green-100 px-6 py-4">
        <nav className="flex justify-around items-center max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("scan")}
            className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all duration-300 ${
              activeTab === "scan"
                ? "bg-green-100 text-green-700 shadow-sm"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            <Camera size={24} className="transition-transform duration-200 hover:scale-110" />
            <span className="text-xs font-medium">Scan</span>
          </button>

          <button
            onClick={() => setActiveTab("products")}
            className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all duration-300 ${
              activeTab === "products"
                ? "bg-green-100 text-green-700 shadow-sm"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            <Package size={24} className="transition-transform duration-200 hover:scale-110" />
            <span className="text-xs font-medium">Products</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all duration-300 ${
              activeTab === "profile"
                ? "bg-green-100 text-green-700 shadow-sm"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            <User size={24} className="transition-transform duration-200 hover:scale-110" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Index;
