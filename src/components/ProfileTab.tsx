
import { Edit2, Settings, HelpCircle, Heart, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfileTab = () => {
  return (
    <div className="p-6 max-w-md mx-auto relative">
      {/* Cute floating decorations */}
      <div className="absolute top-4 right-4 w-6 h-6 bg-pink-200 rounded-full animate-bounce opacity-50"></div>
      <div className="absolute top-16 left-8 w-4 h-4 bg-yellow-200 rounded-full animate-pulse opacity-60"></div>
      
      <div className="text-center mb-8">
        <div className="relative w-28 h-28 bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white shadow-xl">
          <span className="text-3xl font-light text-gray-700">A</span>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center border-2 border-white">
            <Crown size={16} className="text-yellow-600" />
          </div>
          <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-pink-300 rounded-full flex items-center justify-center">
            <span className="text-xs">✨</span>
          </div>
        </div>
        <h1 className="text-xl font-medium text-gray-800 flex items-center justify-center">
          Anna Smith
          <Heart size={16} className="ml-2 text-pink-400" />
        </h1>
        <p className="text-gray-500 text-sm flex items-center justify-center mt-1">
          <span className="mr-2">🌸</span>
          Dry, sensitive skin princess
          <span className="ml-2">🌸</span>
        </p>
      </div>

      {/* Skin Profile Card */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-6 shadow-lg border-2 border-pink-100 mb-6 relative overflow-hidden">
        <div className="absolute top-2 right-2 opacity-10">
          <Sparkles size={32} className="text-pink-300" />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium text-gray-800 flex items-center">
            <span className="mr-2">💄</span>
            Skin Profile
          </h2>
          <Button variant="ghost" size="sm" className="text-pink-500 hover:text-pink-600 hover:bg-pink-100 rounded-full">
            <Edit2 size={16} />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-white rounded-2xl p-3 border border-pink-100">
            <span className="text-gray-600 flex items-center">
              <span className="mr-2">🧴</span>
              Skin Type
            </span>
            <span className="text-gray-800 font-medium">Dry & Sensitive 🌸</span>
          </div>
          <div className="flex justify-between items-center bg-white rounded-2xl p-3 border border-pink-100">
            <span className="text-gray-600 flex items-center">
              <span className="mr-2">💫</span>
              Main Concerns
            </span>
            <span className="text-gray-800 font-medium">Hydration, Redness 💧</span>
          </div>
          <div className="flex justify-between items-center bg-white rounded-2xl p-3 border border-pink-100">
            <span className="text-gray-600 flex items-center">
              <span className="mr-2">⚠️</span>
              Allergies
            </span>
            <span className="text-gray-800 font-medium">Fragrance, Sulfates 🚫</span>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 rounded-3xl p-6 mb-6 border-2 border-pink-100 relative overflow-hidden">
        <div className="absolute bottom-2 right-2 opacity-10">
          <Heart size={32} className="text-pink-300" />
        </div>
        <h2 className="font-medium text-gray-800 mb-4 flex items-center">
          <span className="mr-2">📊</span>
          Your Progress
          <Sparkles size={16} className="ml-2 text-purple-400 animate-pulse" />
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center bg-white rounded-2xl p-4 border border-pink-100">
            <div className="text-3xl font-light text-pink-600 mb-1 flex items-center justify-center">
              12 <span className="ml-1 text-lg">📱</span>
            </div>
            <div className="text-xs text-gray-600">Products Scanned</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-4 border border-pink-100">
            <div className="text-3xl font-light text-purple-600 mb-1 flex items-center justify-center">
              8 <span className="ml-1 text-lg">⭐</span>
            </div>
            <div className="text-xs text-gray-600">Reviews Written</div>
          </div>
        </div>
      </div>

      {/* Menu Options */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-pink-100 hover:bg-pink-50 hover:border-pink-200 transition-all duration-300 shadow-md hover:shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
              <Heart size={20} className="text-pink-500" />
            </div>
            <span className="text-gray-700 font-medium">Favorite Products</span>
          </div>
          <span className="text-pink-400">💕</span>
        </button>
        
        <button className="w-full flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-pink-100 hover:bg-pink-50 hover:border-pink-200 transition-all duration-300 shadow-md hover:shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Settings size={20} className="text-purple-500" />
            </div>
            <span className="text-gray-700 font-medium">Settings</span>
          </div>
          <span className="text-purple-400">⚙️</span>
        </button>
        
        <button className="w-full flex items-center justify-between p-5 bg-white rounded-2xl border-2 border-pink-100 hover:bg-pink-50 hover:border-pink-200 transition-all duration-300 shadow-md hover:shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <HelpCircle size={20} className="text-yellow-600" />
            </div>
            <span className="text-gray-700 font-medium">Help & Support</span>
          </div>
          <span className="text-yellow-400">💭</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;
