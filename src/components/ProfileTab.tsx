
import { Edit2, Settings, HelpCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfileTab = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-light text-gray-700">A</span>
        </div>
        <h1 className="text-xl font-medium text-gray-800">Anna Smith</h1>
        <p className="text-gray-500 text-sm">Dry, sensitive skin</p>
      </div>

      {/* Skin Profile Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium text-gray-800">Skin Profile</h2>
          <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
            <Edit2 size={16} />
          </Button>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Skin Type</span>
            <span className="text-gray-800 font-medium">Dry & Sensitive</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Main Concerns</span>
            <span className="text-gray-800 font-medium">Hydration, Redness</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Allergies</span>
            <span className="text-gray-800 font-medium">Fragrance, Sulfates</span>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-gradient-to-r from-green-50 to-pink-50 rounded-2xl p-6 mb-6">
        <h2 className="font-medium text-gray-800 mb-4">Your Progress</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-light text-green-700 mb-1">12</div>
            <div className="text-xs text-gray-600">Products Scanned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-pink-700 mb-1">8</div>
            <div className="text-xs text-gray-600">Reviews Written</div>
          </div>
        </div>
      </div>

      {/* Menu Options */}
      <div className="space-y-2">
        <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-3">
            <Heart size={20} className="text-pink-500" />
            <span className="text-gray-700">Favorite Products</span>
          </div>
        </button>
        
        <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-3">
            <Settings size={20} className="text-gray-500" />
            <span className="text-gray-700">Settings</span>
          </div>
        </button>
        
        <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-3">
            <HelpCircle size={20} className="text-gray-500" />
            <span className="text-gray-700">Help & Support</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;
