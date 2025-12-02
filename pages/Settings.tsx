import React, { useState, useEffect } from 'react';
import { User, Shield, Bell, CreditCard, Lock, Plus, Copy, Check, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Wallet } from '../types';

interface SettingsProps {
    initialTab?: string;
}

const Settings: React.FC<SettingsProps> = ({ initialTab = 'profile' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Optional: Update URL without full reload if desired, or let App.tsx handle via props
    if (tab === 'wallets') navigate('/settings/wallets');
    else if (tab === 'privacy') navigate('/settings/privacy');
    else navigate('/settings');
  };

  const wallets: Wallet[] = [
    { id: '1', name: 'MetaMask', address: '0x1234...5678', type: 'metamask', balance: 5.42, isPrimary: true, network: 'Ethereum Mainnet' },
    { id: '2', name: 'OKX Wallet', address: '0xabcd...ef01', type: 'okx', balance: 2.15, isPrimary: false, network: 'Ethereum Mainnet' }
  ];

  const renderContent = () => {
      switch(activeTab) {
        case 'wallets':
            return (
                <div className="space-y-8">
                     <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-white">Connected Wallets</h2>
                        <button className="flex items-center gap-2 text-sm text-whisky-gold border border-whisky-gold/30 px-4 py-2 rounded-lg hover:bg-whisky-gold/10">
                            <Plus className="w-4 h-4" /> Connect Another Wallet
                        </button>
                     </div>

                     {/* Primary Wallet */}
                     <div className="bg-whisky-dark/30 rounded-xl p-4 border border-whisky-gold/20">
                        <h3 className="text-sm font-semibold text-gray-400 mb-4">Primary Wallet</h3>
                        {wallets.filter(w => w.isPrimary).map(wallet => (
                            <div key={wallet.id} className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                                        {/* Icon placeholder */}
                                        <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-white">{wallet.name}</span>
                                            <span className="text-xs bg-green-900/50 text-green-400 px-2 py-0.5 rounded border border-green-500/20">Active</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                                            <span className="font-mono">{wallet.address}</span>
                                            <Copy className="w-3 h-3 cursor-pointer hover:text-whisky-gold" />
                                            <ExternalLink className="w-3 h-3 cursor-pointer hover:text-whisky-gold" />
                                        </div>
                                        <p className="text-sm text-whisky-light mt-1">Balance: {wallet.balance} ETH</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="px-3 py-1 text-xs bg-gray-700/50 rounded text-gray-400 cursor-not-allowed">Set as Default</button>
                                    <button className="px-3 py-1 text-xs text-red-400 hover:bg-red-900/20 rounded border border-transparent hover:border-red-900/30">Disconnect</button>
                                </div>
                            </div>
                        ))}
                     </div>

                     {/* Other Wallets */}
                     <div>
                        <h3 className="text-sm font-semibold text-gray-400 mb-4">Other Connected Wallets</h3>
                        <div className="space-y-4">
                            {wallets.filter(w => !w.isPrimary).map(wallet => (
                                <div key={wallet.id} className="bg-whisky-main rounded-xl p-4 border border-whisky-gold/10 flex flex-col md:flex-row gap-4 justify-between items-center">
                                    <div className="flex items-center gap-4 w-full md:w-auto">
                                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                                             <div className="w-6 h-6 bg-white rounded-full"></div>
                                        </div>
                                        <div>
                                            <span className="font-bold text-white block">{wallet.name}</span>
                                            <span className="font-mono text-sm text-gray-400">{wallet.address}</span>
                                            <p className="text-xs text-gray-500 mt-1">Balance: {wallet.balance} ETH</p>
                                        </div>
                                    </div>
                                     <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                                        <button className="px-3 py-1 text-xs border border-whisky-gold/20 text-whisky-gold hover:bg-whisky-gold/10 rounded">Set as Primary</button>
                                        <button className="px-3 py-1 text-xs text-red-400 hover:bg-red-900/20 rounded">Disconnect</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                </div>
            );
        case 'privacy':
            return (
                <div className="space-y-8">
                     <h2 className="text-xl font-bold text-white">Privacy Settings</h2>

                     <div className="bg-whisky-main rounded-xl p-6 border border-whisky-gold/10">
                        <h3 className="text-lg font-semibold text-whisky-light mb-4">Profile Visibility</h3>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="profile_vis" defaultChecked className="w-4 h-4 text-whisky-gold bg-whisky-card border-gray-600 focus:ring-whisky-gold" />
                                <span className="text-gray-300 group-hover:text-white">Public - Anyone can view your profile</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="profile_vis" className="w-4 h-4 text-whisky-gold bg-whisky-card border-gray-600 focus:ring-whisky-gold" />
                                <span className="text-gray-300 group-hover:text-white">Private - Only you can view your profile</span>
                            </label>
                        </div>
                     </div>

                     <div className="bg-whisky-main rounded-xl p-6 border border-whisky-gold/10">
                        <h3 className="text-lg font-semibold text-whisky-light mb-4">Activity Visibility</h3>
                         <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" defaultChecked className="rounded text-whisky-gold bg-whisky-card border-gray-600 focus:ring-whisky-gold" />
                                <span className="text-gray-300">Show my purchases in public activity feed</span>
                            </label>
                             <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" defaultChecked className="rounded text-whisky-gold bg-whisky-card border-gray-600 focus:ring-whisky-gold" />
                                <span className="text-gray-300">Show my sales in public activity feed</span>
                            </label>
                             <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="rounded text-whisky-gold bg-whisky-card border-gray-600 focus:ring-whisky-gold" />
                                <span className="text-gray-300">Show my offers in public activity feed</span>
                            </label>
                        </div>
                     </div>
                </div>
            );
        default:
             return (
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-white mb-6">Profile Details</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Display Name</label>
                        <input type="text" defaultValue="WhiskyConnoisseur" className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-gray-200 focus:border-whisky-gold outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Bio</label>
                        <textarea rows={4} defaultValue="Collector of rare Speyside single malts." className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-gray-200 focus:border-whisky-gold outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                        <input type="email" defaultValue="user@example.com" className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-gray-200 focus:border-whisky-gold outline-none" />
                    </div>

                    <div className="pt-4 border-t border-whisky-gold/10 flex justify-end gap-4">
                        <button className="px-6 py-2 text-sm text-gray-400 hover:text-white">Cancel</button>
                        <button className="px-6 py-2 bg-whisky-gold text-whisky-dark font-bold rounded-lg hover:opacity-90">Save Changes</button>
                    </div>
                </div>
            );
      }
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
        <h1 className="text-3xl font-serif font-bold text-whisky-light mb-8">Settings</h1>

        <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <nav className="space-y-1">
                    {[
                        { id: 'profile', name: 'Profile', icon: User },
                        { id: 'wallets', name: 'Wallets', icon: CreditCard }, // Mapped to 6.11 logic
                        { id: 'notifications', name: 'Notifications', icon: Bell },
                        { id: 'privacy', name: 'Privacy', icon: Lock },
                    ].map((item) => (
                        <button 
                            key={item.id}
                            onClick={() => handleTabChange(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === item.id ? 'bg-whisky-gold text-whisky-dark' : 'text-gray-400 hover:bg-whisky-card hover:text-whisky-light'}`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-grow max-w-2xl bg-whisky-card border border-whisky-gold/10 rounded-xl p-8 min-h-[500px]">
                {renderContent()}
            </div>
        </div>
    </div>
  );
};

export default Settings;