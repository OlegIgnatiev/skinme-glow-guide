
import { Edit2, Settings, HelpCircle, Heart, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfileTab = () => {
  return (
    <div className="p-5 h-full overflow-y-auto relative">
      {/* Cute floating decorations */}
      <div className="absolute top-4 right-4 w-6 h-6 bg-pink-200 rounded-full animate-bounce opacity-50"></div>
      <div className="absolute top-12 left-6 w-4 h-4 bg-yellow-200 rounded-full animate-pulse opacity-60"></div>
      
      <div className="text-center mb-8">
        <div className="relative w-28 h-28 bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white shadow-xl">
          <span className="text-3xl font-light text-gray-700">A</span>
          <div className="absolute -top-1 -right-1 w-7 h-7 bg-yellow-300 rounded-full flex items-center justify-center border-2 border-white">
            <Crown size={16} className="text-yellow-600" />
          </div>
          <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-pink-300 rounded-full flex items-center justify-center">
            <span className="text-sm">✨</span>
          </div>
        </div>
        <h1 className="text-xl font-medium text-gray-800 flex items-center justify-center">
          Anna Smith
          <Heart size={18} className="ml-3 text-pink-400" />
        </h1>
        <p className="text-gray-500 text-base flex items-center justify-center mt-2">
          <span className="mr-2 text-lg">🌸</span>
          Dry, sensitive skin princess
          <span className="ml-2 text-lg">🌸</span>
        </p>
      </div>

      {/* Skin Profile Card */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-5 shadow-lg border-2 border-pink-100 mb-5 relative overflow-hidden">
        <div className="absolute top-3 right-3 opacity-10">
          <Sparkles size={28} className="text-pink-300" />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium text-gray-800 flex items-center text-base">
            <span className="mr-3 text-lg">💄</span>
            Skin Profile
          </h2>
          <Button variant="ghost" size="sm" className="text-pink-500 hover:text-pink-600 hover:bg-pink-100 rounded-full p-2">
            <Edit2 size={16} />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-white rounded-xl p-4 border border-pink-100">
            <span className="text-gray-600 flex items-center text-base">
              <span className="mr-3 text-lg">🧴</span>
              Skin Type
            </span>
            <span className="text-gray-800 font-medium text-base">Dry & Sensitive 🌸</span>
          </div>
          <div className="flex justify-between items-center bg-white rounded-xl p-4 border border-pink-100">
            <span className="text-gray-600 flex items-center text-base">
              <span className="mr-3 text-lg">💫</span>
              Main Concerns
            </span>
            <span className="text-gray-800 font-medium text-base">Hydration, Redness 💧</span>
          </div>
          <div className="flex justify-between items-center bg-white rounded-xl p-4 border border-pink-100">
            <span className="text-gray-600 flex items-center text-base">
              <span className="mr-3 text-lg">⚠️</span>
              Allergies
            </span>
            <span className="text-gray-800 font-medium text-base">Fragrance, Sulfates 🚫</span>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 rounded-2xl p-5 mb-5 border-2 border-pink-100 relative overflow-hidden">
        <div className="absolute bottom-3 right-3 opacity-10">
          <Heart size={28} className="text-pink-300" />
        </div>
        <h2 className="font-medium text-gray-800 mb-4 flex items-center text-base">
          <span className="mr-3 text-lg">📊</span>
          Your Progress
          <Sparkles size={16} className="ml-3 text-purple-400 animate-pulse" />
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center bg-white rounded-xl p-4 border border-pink-100">
            <div className="text-3xl font-light text-pink-600 mb-2 flex items-center justify-center">
              12 <span className="ml-2 text-lg">📱</span>
            </div>
            <div className="text-sm text-gray-600">Products Scanned</div>
          </div>
          <div className="text-center bg-white rounded-xl p-4 border border-pink-100">
            <div className="text-3xl font-light text-purple-600 mb-2 flex items-center justify-center">
              8 <span className="ml-2 text-lg">⭐</span>
            </div>
            <div className="text-sm text-gray-600">Reviews Written</div>
          </div>
        </div>
      </div>

      {/* Menu Options */}
      <div className="space-y-4">
        <button className="w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-pink-100 hover:bg-pink-50 hover:border-pink-200 transition-all duration-300 shadow-md hover:shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
              <Heart size={20} className="text-pink-500" />
            </div>
            <span className="text-gray-700 font-medium text-base">Favorite Products</span>
          </div>
          <span className="text-pink-400 text-lg">💕</span>
        </button>
        
        <button className="w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-pink-100 hover:bg-pink-50 hover:border-pink-200 transition-all duration-300 shadow-md hover:shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Settings size={20} className="text-purple-500" />
            </div>
            <span className="text-gray-700 font-medium text-base">Settings</span>
          </div>
          <span className="text-purple-400 text-lg">⚙️</span>
        </button>
        
        <button className="w-full flex items-center justify-between p-5 bg-white rounded-xl border-2 border-pink-100 hover:bg-pink-50 hover:border-pink-200 transition-all duration-300 shadow-md hover:shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <HelpCircle size={20} className="text-yellow-600" />
            </div>
            <span className="text-gray-700 font-medium text-base">Help & Support</span>
          </div>
          <span className="text-yellow-400 text-lg">💭</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;
