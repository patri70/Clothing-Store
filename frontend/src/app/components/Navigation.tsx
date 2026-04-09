import { Link, useNavigate } from "react-router";
import { ShoppingBag, BarChart3, LogIn, UserPlus, Presentation } from "lucide-react";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 text-white py-4 px-4 md:px-8 sticky top-0 z-50 shadow-lg">
      
      {/* 💡 RESPONSIVE: flex-col on mobile (Logo top, buttons bottom), flex-row on desktop */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="w-8 h-8 text-[#FF0808]" />
          <span className="text-2xl font-bold">
            <span className="text-white">Vanes</span>
            <span className="text-[#FF0808]">.com</span>
          </span>
        </Link>

        {/* 💡 RESPONSIVE: flex-wrap allows items to drop to the next line if they don't fit on mobile */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link
            to="/shop"
            className="hover:text-[#FF0808] transition-colors flex items-center gap-1 md:gap-2 text-sm md:text-base"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            Shop
          </Link>

          <Link
            to="/"
            className="hover:text-[#FF0808] transition-colors flex items-center gap-1 md:gap-2 text-sm md:text-base"
          >
            <Presentation className="w-4 h-4 md:w-5 md:h-5" />
            Home
          </Link>
          
          <Link
            to="/statistics"
            className="hover:text-[#FF0808] transition-colors flex items-center gap-1 md:gap-2 text-sm md:text-base"
          >
            <BarChart3 className="w-4 h-4 md:w-5 md:h-5" />
            Analytics
          </Link>

          {/* 💡 RESPONSIVE: Removed the margin (ml-4) that was pushing things weirdly on mobile and adjusted padding */}
          <div className="flex gap-2 md:gap-3">
            <button
              onClick={() => navigate("/login")}
              className="bg-white/10 hover:bg-[#FF0808] px-3 py-1.5 md:px-4 md:py-2 rounded-md transition-all flex items-center gap-1 md:gap-2 text-sm md:text-base"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-[#FF0808] hover:bg-[#dd0606] px-3 py-1.5 md:px-4 md:py-2 rounded-md transition-all flex items-center gap-1 md:gap-2 text-sm md:text-base"
            >
              <UserPlus className="w-4 h-4" />
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}