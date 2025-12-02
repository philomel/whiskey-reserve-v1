import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Search, Bell, Wallet, Menu, User, Home, Compass, PlusCircle, Repeat, X, LogOut, Grid, List, Heart, Settings as SettingsIcon } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col bg-whisky-main text-white relative">
      {/* Top Navigation (Desktop & Mobile Header) */}
      <header className="sticky top-0 z-50 w-full border-b border-whisky-gold/10 bg-whisky-main/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-whisky-gold to-whisky-card flex items-center justify-center border border-whisky-gold/30">
              <span className="font-serif text-xl font-bold text-whisky-dark">W</span>
            </div>
            <span className="font-serif text-2xl font-bold text-whisky-light tracking-wide group-hover:text-whisky-gold transition-colors">
              WHISKY CASK
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/explore" className={`text-sm font-medium hover:text-whisky-gold transition-colors ${isActive('/explore') ? 'text-whisky-gold' : 'text-gray-300'}`}>
              Explore
            </Link>
            <Link to="/otc" className={`text-sm font-medium hover:text-whisky-gold transition-colors ${isActive('/otc') ? 'text-whisky-gold' : 'text-gray-300'}`}>
              OTC Deals
            </Link>
            <Link to="/activity" className={`text-sm font-medium hover:text-whisky-gold transition-colors ${isActive('/activity') ? 'text-whisky-gold' : 'text-gray-300'}`}>
              Activity
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search cask, bottles..." 
                className="bg-whisky-card/50 border border-whisky-gold/20 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-whisky-gold/50 w-64 text-gray-200 placeholder-gray-600 transition-all"
              />
            </div>

            <Link to="/notifications" className="relative p-2 hover:bg-whisky-card rounded-full transition-colors group">
              <Bell className="w-5 h-5 text-gray-300 group-hover:text-whisky-gold" />
              <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border border-whisky-main"></span>
            </Link>

            {/* User Dropdown */}
            <div className="relative hidden md:block">
              <button onClick={toggleUserMenu} className="flex p-2 hover:bg-whisky-card rounded-full transition-colors group">
                <User className={`w-5 h-5 group-hover:text-whisky-gold ${isActive('/profile') ? 'text-whisky-gold' : 'text-gray-300'}`} />
              </button>
              
              {isUserMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsUserMenuOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-64 bg-whisky-card border border-whisky-gold/20 rounded-xl shadow-2xl z-20 py-2 animate-fade-in">
                    <div className="px-4 py-3 border-b border-whisky-gold/10">
                      <p className="font-bold text-white">@WhiskyConnoisseur</p>
                      <p className="text-xs text-gray-400 font-mono">0x1234...5678</p>
                    </div>
                    <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-whisky-main hover:text-whisky-gold transition-colors">
                      <User className="w-4 h-4" /> My Profile
                    </Link>
                    <Link to="/profile/my-nfts" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-whisky-main hover:text-whisky-gold transition-colors">
                      <Grid className="w-4 h-4" /> My NFTs
                    </Link>
                    <Link to="/profile/favorites" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-whisky-main hover:text-whisky-gold transition-colors">
                      <Heart className="w-4 h-4" /> Favorites
                    </Link>
                    <Link to="/profile/my-listings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-whisky-main hover:text-whisky-gold transition-colors">
                      <List className="w-4 h-4" /> Listed for Sale
                    </Link>
                    <Link to="/profile/offers-received" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-whisky-main hover:text-whisky-gold transition-colors">
                      <Repeat className="w-4 h-4" /> Offers Received
                    </Link>
                     <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-whisky-main hover:text-whisky-gold transition-colors">
                      <SettingsIcon className="w-4 h-4" /> Settings
                    </Link>
                    <div className="border-t border-whisky-gold/10 mt-2 pt-2">
                       <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-whisky-main transition-colors text-left">
                        <LogOut className="w-4 h-4" /> Disconnect Wallet
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-whisky-gold to-whisky-light text-whisky-dark px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(212,165,116,0.3)]">
              <Wallet className="w-4 h-4" />
              <span>Connect</span>
            </button>
            
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6 text-whisky-gold" /> : <Menu className="w-6 h-6 text-whisky-gold" />}
            </button>
          </div>
        </div>

        {/* Mobile Search (Below header) */}
        <div className="md:hidden px-4 pb-4 border-b border-whisky-card bg-whisky-main">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-whisky-card border border-whisky-gold/20 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-whisky-gold/50 text-gray-200"
              />
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>

      {/* Footer (Desktop) */}
      <footer className="hidden md:block bg-whisky-dark border-t border-whisky-gold/10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-whisky-gold/20 flex items-center justify-center border border-whisky-gold/30">
                  <span className="font-serif text-lg font-bold text-whisky-gold">W</span>
                </div>
                <span className="font-serif text-xl font-bold text-whisky-light">WHISKY CASK</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The premier marketplace for fine spirit NFTs and OTC deals. Liquid assets on the blockchain, verified and secure.
              </p>
            </div>
            
            <div>
              <h4 className="text-whisky-gold font-serif mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/explore" className="hover:text-whisky-light">All NFTs</Link></li>
                <li><Link to="/explore?sort=new" className="hover:text-whisky-light">New Arrivals</Link></li>
                <li><Link to="/otc" className="hover:text-whisky-light">OTC Deals</Link></li>
              </ul>
            </div>

             <div>
              <h4 className="text-whisky-gold font-serif mb-4">My Account</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/profile" className="hover:text-whisky-light">Profile</Link></li>
                <li><Link to="/profile/my-nfts" className="hover:text-whisky-light">My NFTs</Link></li>
                <li><Link to="/profile/favorites" className="hover:text-whisky-light">Favorites</Link></li>
                <li><Link to="/settings" className="hover:text-whisky-light">Settings</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-whisky-gold font-serif mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-whisky-light">About Us</a></li>
                <li><a href="#" className="hover:text-whisky-light">Help Center</a></li>
                <li><a href="#" className="hover:text-whisky-light">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-whisky-card pt-8 flex justify-between items-center text-xs text-gray-600">
            <p>© 2025 Whisky Cask Marketplace. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-whisky-gold">Privacy Policy</a>
              <a href="#" className="hover:text-whisky-gold">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-whisky-card/95 backdrop-blur-lg border-t border-whisky-gold/20 md:hidden z-50 pb-safe">
        <div className="grid grid-cols-5 h-16 items-center">
          <Link to="/" className={`flex flex-col items-center justify-center gap-1 ${isActive('/') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <Home className="w-5 h-5" />
            <span className="text-[10px]">Home</span>
          </Link>
          <Link to="/explore" className={`flex flex-col items-center justify-center gap-1 ${isActive('/explore') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <Compass className="w-5 h-5" />
            <span className="text-[10px]">Explore</span>
          </Link>
          <Link to="/create" className={`flex flex-col items-center justify-center gap-1 ${isActive('/create') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <div className="w-10 h-10 bg-whisky-gold rounded-full flex items-center justify-center -mt-4 border-4 border-whisky-card shadow-lg">
              <PlusCircle className="w-6 h-6 text-whisky-dark" />
            </div>
            <span className="text-[10px] mt-1">Create</span>
          </Link>
          <Link to="/otc" className={`flex flex-col items-center justify-center gap-1 ${isActive('/otc') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <Repeat className="w-5 h-5" />
            <span className="text-[10px]">OTC</span>
          </Link>
          <Link to="/profile" className={`flex flex-col items-center justify-center gap-1 ${isActive('/profile') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <User className="w-5 h-5" />
            <span className="text-[10px]">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Layout;