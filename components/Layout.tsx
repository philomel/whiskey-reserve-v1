import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Search, Bell, Wallet, Menu, User, Home, Compass, PlusCircle, Repeat, X, LogOut, Grid, List, Heart, Settings as SettingsIcon, Vote } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-whisky-main text-whisky-dark relative transition-colors duration-300">
      {/* Top Navigation (Desktop & Mobile Header) */}
      <header className="sticky top-0 z-50 w-full border-b border-whisky-border bg-whisky-main/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-whisky-button flex items-center justify-center shadow-lg text-whisky-button-text">
              <span className="font-serif text-xl font-bold">R</span>
            </div>
            <span className="font-serif text-2xl font-bold text-whisky-dark tracking-wide group-hover:text-whisky-gold transition-colors">
              The Whisky Reserve
            </span>
          </Link>

          {/* Desktop Nav - REORDERED */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/otc" className={`text-sm font-medium hover:text-whisky-gold transition-colors ${isActive('/otc') ? 'text-whisky-gold font-bold' : 'text-gray-600'}`}>
              OTC Deals
            </Link>
            <Link to="/explore" className={`text-sm font-medium hover:text-whisky-gold transition-colors ${isActive('/explore') ? 'text-whisky-gold font-bold' : 'text-gray-600'}`}>
              NFT Market
            </Link>
            <Link to="/dao" className={`text-sm font-medium hover:text-whisky-gold transition-colors ${isActive('/dao') ? 'text-whisky-gold font-bold' : 'text-gray-600'}`}>
              DAO
            </Link>
            <Link to="/activity" className={`text-sm font-medium hover:text-whisky-gold transition-colors ${isActive('/activity') ? 'text-whisky-gold font-bold' : 'text-gray-600'}`}>
              Activity
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search cask, bottles..." 
                className="bg-white border border-whisky-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-whisky-button w-64 text-whisky-dark placeholder-gray-400 transition-all focus:ring-1 focus:ring-whisky-button"
              />
            </div>

            <Link to="/notifications" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
              <Bell className="w-5 h-5 text-gray-600 group-hover:text-whisky-gold" />
              <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </Link>

            {/* User Dropdown */}
            <div className="relative hidden md:block">
              <button onClick={toggleUserMenu} className="flex p-2 hover:bg-gray-100 rounded-full transition-colors group border border-transparent hover:border-gray-200">
                <User className={`w-5 h-5 group-hover:text-whisky-gold ${isActive('/profile') ? 'text-whisky-gold' : 'text-gray-600'}`} />
              </button>
              
              {isUserMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsUserMenuOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-64 bg-white border border-whisky-border rounded-xl shadow-xl z-20 py-2 animate-fade-in">
                    <div className="px-4 py-3 border-b border-whisky-border bg-gray-50">
                      <p className="font-bold text-whisky-dark">@WhiskyConnoisseur</p>
                      <p className="text-xs text-gray-500 font-mono">0x1234...5678</p>
                    </div>
                    <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-whisky-gold transition-colors">
                      <User className="w-4 h-4" /> My Profile
                    </Link>
                    <Link to="/profile/my-nfts" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-whisky-gold transition-colors">
                      <Grid className="w-4 h-4" /> My NFTs
                    </Link>
                    <Link to="/profile/favorites" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-whisky-gold transition-colors">
                      <Heart className="w-4 h-4" /> Favorites
                    </Link>
                    <Link to="/profile/my-listings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-whisky-gold transition-colors">
                      <List className="w-4 h-4" /> Listed for Sale
                    </Link>
                    <Link to="/profile/offers-received" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-whisky-gold transition-colors">
                      <Repeat className="w-4 h-4" /> Offers Received
                    </Link>
                     <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-whisky-gold transition-colors">
                      <SettingsIcon className="w-4 h-4" /> Settings
                    </Link>
                    <div className="border-t border-whisky-border mt-2 pt-2">
                       <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors text-left">
                        <LogOut className="w-4 h-4" /> Disconnect Wallet
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button className="hidden md:flex items-center gap-2 bg-whisky-button text-whisky-button-text px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-md">
              <Wallet className="w-4 h-4" />
              <span>Connect</span>
            </button>
            
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6 text-whisky-dark" /> : <Menu className="w-6 h-6 text-whisky-dark" />}
            </button>
          </div>
        </div>

        {/* Mobile Search (Below header) */}
        <div className="md:hidden px-4 pb-4 border-b border-whisky-border bg-whisky-main">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white border border-whisky-border rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-whisky-button text-whisky-dark"
              />
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>

      {/* Footer (Desktop) */}
      <footer className="hidden md:block bg-white border-t border-whisky-border pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-whisky-button flex items-center justify-center text-whisky-button-text">
                  <span className="font-serif text-lg font-bold">R</span>
                </div>
                <span className="font-serif text-xl font-bold text-whisky-dark">The Whisky Reserve</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The premier marketplace for fine spirit NFTs and OTC deals. Liquid assets on the blockchain, verified and secure.
              </p>
            </div>
            
            <div>
              <h4 className="text-whisky-dark font-serif font-bold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/explore" className="hover:text-whisky-gold">All NFTs</Link></li>
                <li><Link to="/explore?sort=new" className="hover:text-whisky-gold">New Arrivals</Link></li>
                <li><Link to="/otc" className="hover:text-whisky-gold">OTC Deals</Link></li>
              </ul>
            </div>

             <div>
              <h4 className="text-whisky-dark font-serif font-bold mb-4">My Account</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/profile" className="hover:text-whisky-gold">Profile</Link></li>
                <li><Link to="/profile/my-nfts" className="hover:text-whisky-gold">My NFTs</Link></li>
                <li><Link to="/profile/favorites" className="hover:text-whisky-gold">Favorites</Link></li>
                <li><Link to="/settings" className="hover:text-whisky-gold">Settings</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-whisky-dark font-serif font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/dao" className="hover:text-whisky-gold">DAO Governance</Link></li>
                <li><a href="#" className="hover:text-whisky-gold">Help Center</a></li>
                <li><a href="#" className="hover:text-whisky-gold">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-whisky-border pt-8 flex justify-between items-center text-xs text-gray-500">
            <p>© 2025 The Whisky Reserve. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-whisky-dark">Privacy Policy</a>
              <a href="#" className="hover:text-whisky-dark">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-whisky-border md:hidden z-50 pb-safe shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-5 h-16 items-center">
          <Link to="/otc" className={`flex flex-col items-center justify-center gap-1 ${isActive('/otc') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <Repeat className="w-5 h-5" />
            <span className="text-[10px] font-medium">OTC</span>
          </Link>
          <Link to="/explore" className={`flex flex-col items-center justify-center gap-1 ${isActive('/explore') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <Compass className="w-5 h-5" />
            <span className="text-[10px] font-medium">Market</span>
          </Link>
          <Link to="/" className={`flex flex-col items-center justify-center gap-1 ${isActive('/') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium">Home</span>
          </Link>
           <Link to="/dao" className={`flex flex-col items-center justify-center gap-1 ${isActive('/dao') ? 'text-whisky-gold' : 'text-gray-400'}`}>
             <Vote className="w-5 h-5" />
             <span className="text-[10px] font-medium">DAO</span>
          </Link>
          <Link to="/activity" className={`flex flex-col items-center justify-center gap-1 ${isActive('/activity') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <List className="w-5 h-5" />
            <span className="text-[10px] font-medium">Activity</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Layout;