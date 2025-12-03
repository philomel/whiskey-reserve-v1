import React, { useState, useEffect } from 'react';
import { User, Shield, Bell, CreditCard, Lock, Plus, Copy, Check, ExternalLink, Link, Mail } from 'lucide-react';
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
                        <h2 className="text-xl font-bold text-whisky-dark">Connected Wallets</h2>
                        <button className="flex items-center gap-2 text-sm text-whisky-button border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                            <Plus className="w-4 h-4" /> Connect Another Wallet
                        </button>
                     </div>

                     {/* Primary Wallet */}
                     <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-500 mb-4">Primary Wallet</h3>
                        {wallets.filter(w => w.isPrimary).map(wallet => (
                            <div key={wallet.id} className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200">
                                        <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-whisky-dark">{wallet.name}</span>
                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded border border-green-200">Active</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                            <span className="font-mono">{wallet.address}</span>
                                            <Copy className="w-3 h-3 cursor-pointer hover:text-whisky-dark" />
                                            <ExternalLink className="w-3 h-3 cursor-pointer hover:text-whisky-dark" />
                                        </div>
                                        <p className="text-sm text-gray-700 mt-1">Balance: {wallet.balance} ETH</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="px-3 py-1 text-xs bg-gray-200 rounded text-gray-500 cursor-not-allowed">Set as Default</button>
                                    <button className="px-3 py-1 text-xs text-red-500 hover:bg-red-50 rounded border border-transparent hover:border-red-200">Disconnect</button>
                                </div>
                            </div>
                        ))}
                     </div>

                     {/* Other Wallets */}
                     <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-4">Other Connected Wallets</h3>
                        <div className="space-y-4">
                            {wallets.filter(w => !w.isPrimary).map(wallet => (
                                <div key={wallet.id} className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-center">
                                    <div className="flex items-center gap-4 w-full md:w-auto">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                                             <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                                        </div>
                                        <div>
                                            <span className="font-bold text-whisky-dark block">{wallet.name}</span>
                                            <span className="font-mono text-sm text-gray-500">{wallet.address}</span>
                                            <p className="text-xs text-gray-600 mt-1">Balance: {wallet.balance} ETH</p>
                                        </div>
                                    </div>
                                     <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                                        <button className="px-3 py-1 text-xs border border-gray-300 text-gray-600 hover:bg-gray-50 rounded">Set as Primary</button>
                                        <button className="px-3 py-1 text-xs text-red-500 hover:bg-red-50 rounded">Disconnect</button>
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
                     <h2 className="text-xl font-bold text-whisky-dark">Privacy Settings</h2>

                     <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-whisky-dark mb-4">Profile Visibility</h3>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="profile_vis" defaultChecked className="w-4 h-4 text-whisky-button bg-gray-100 border-gray-300 focus:ring-whisky-button" />
                                <span className="text-gray-600 group-hover:text-whisky-dark">Public - Anyone can view your profile</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="profile_vis" className="w-4 h-4 text-whisky-button bg-gray-100 border-gray-300 focus:ring-whisky-button" />
                                <span className="text-gray-600 group-hover:text-whisky-dark">Private - Only you can view your profile</span>
                            </label>
                        </div>
                     </div>

                     <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-whisky-dark mb-4">Activity Visibility</h3>
                         <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" defaultChecked className="rounded text-whisky-button bg-gray-100 border-gray-300 focus:ring-whisky-button" />
                                <span className="text-gray-600">Show my purchases in public activity feed</span>
                            </label>
                             <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" defaultChecked className="rounded text-whisky-button bg-gray-100 border-gray-300 focus:ring-whisky-button" />
                                <span className="text-gray-600">Show my sales in public activity feed</span>
                            </label>
                             <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="rounded text-whisky-button bg-gray-100 border-gray-300 focus:ring-whisky-button" />
                                <span className="text-gray-600">Show my offers in public activity feed</span>
                            </label>
                        </div>
                     </div>
                </div>
            );
        default:
             return (
                <div className="space-y-8">
                    <h2 className="text-xl font-bold text-whisky-dark mb-6">Profile Details</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-2">Display Name</label>
                            <input type="text" defaultValue="WhiskyConnoisseur" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-2">Bio</label>
                            <textarea rows={4} defaultValue="Collector of rare Speyside single malts." className="w-full bg-white border border-gray-300 rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none" />
                        </div>
                    </div>

                    {/* Bind External Email */}
                    <div className="pt-8 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-whisky-dark mb-4 flex items-center gap-2">
                            <Mail className="w-5 h-5" /> Contact Information
                        </h3>
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                            <label className="block text-sm font-medium text-gray-500 mb-2">Bind External Email</label>
                            <div className="flex gap-3">
                                <input type="email" placeholder="Enter your email" className="flex-grow bg-white border border-gray-300 rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none" />
                                <button className="px-6 py-2 bg-white border border-gray-300 text-whisky-dark hover:bg-gray-100 rounded-lg transition-colors font-medium">
                                    Verify
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">We will send a verification code to this email.</p>
                        </div>
                    </div>

                    {/* Social Connections */}
                    <div className="pt-8 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-whisky-dark mb-4 flex items-center gap-2">
                            <Link className="w-5 h-5" /> Social Connections
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                    </div>
                                    <span className="text-gray-700">Twitter</span>
                                </div>
                                <button className="text-sm text-whisky-button hover:underline">Connect</button>
                            </div>

                            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-400">
                                         <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                                    </div>
                                    <span className="text-gray-700">Telegram</span>
                                </div>
                                <button className="text-sm text-whisky-button hover:underline">Connect</button>
                            </div>

                            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>
                                    </div>
                                    <span className="text-gray-700">Discord</span>
                                </div>
                                <button className="text-sm text-whisky-button hover:underline">Connect</button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 flex justify-end gap-4">
                        <button className="px-6 py-2 text-sm text-gray-500 hover:text-whisky-dark">Cancel</button>
                        <button className="px-6 py-2 bg-whisky-button text-whisky-button-text font-bold rounded-lg hover:opacity-90 shadow-md">Save Changes</button>
                    </div>
                </div>
            );
      }
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
        <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-8">Settings</h1>

        <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <nav className="space-y-1">
                    {[
                        { id: 'profile', name: 'Profile', icon: User },
                        { id: 'wallets', name: 'Wallets', icon: CreditCard }, 
                        { id: 'notifications', name: 'Notifications', icon: Bell },
                        { id: 'privacy', name: 'Privacy', icon: Lock },
                    ].map((item) => (
                        <button 
                            key={item.id}
                            onClick={() => handleTabChange(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === item.id ? 'bg-whisky-button text-whisky-button-text shadow-sm' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-grow max-w-2xl bg-white border border-whisky-border rounded-xl p-8 min-h-[500px] shadow-lg">
                {renderContent()}
            </div>
        </div>
    </div>
  );
};

export default Settings;