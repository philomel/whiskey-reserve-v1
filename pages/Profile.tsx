import React, { useState } from 'react';
import { Settings, Copy, Share2, Grid } from 'lucide-react';
import NFTCard from '../components/NFTCard';
import { NFT } from '../types';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('owned');

  const ownedNFTs: NFT[] = Array.from({ length: 4 }).map((_, i) => ({
    id: `p-${i}`,
    name: `My Cask Investment #${i+1}`,
    collection: 'Private Cellar',
    image: `https://picsum.photos/400/400?random=${100+i}`,
    price: 3.5,
    currency: 'ETH',
    likes: 10,
    status: 'buy_now',
    type: 'Cask'
  }));

  return (
    <div className="animate-fade-in pb-12">
      {/* Cover Image */}
      <div className="h-64 md:h-80 bg-whisky-dark relative overflow-hidden">
        <img src="https://picsum.photos/1920/400?grayscale" alt="cover" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-whisky-main to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="relative -mt-24 mb-12 flex flex-col items-center md:items-start md:flex-row gap-6">
            <div className="relative">
                <div className="w-40 h-40 rounded-full border-4 border-whisky-main overflow-hidden bg-whisky-card shadow-2xl">
                    <img src="https://picsum.photos/200/200?random=user" alt="avatar" className="w-full h-full object-cover" />
                </div>
            </div>
            
            <div className="pt-24 md:pt-28 flex-grow text-center md:text-left">
                <h1 className="text-3xl font-serif font-bold text-white mb-2">WhiskyConnoisseur</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
                    <button className="flex items-center gap-2 hover:text-whisky-gold bg-whisky-card/50 px-3 py-1 rounded-full border border-whisky-gold/10">
                        0x71C...9A23 <Copy className="w-3 h-3" />
                    </button>
                    <span>Joined December 2024</span>
                </div>
            </div>

            <div className="pt-0 md:pt-28 flex gap-3">
                <button className="p-2 border border-whisky-gold/20 rounded-lg hover:bg-whisky-gold/10 text-whisky-gold">
                    <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 border border-whisky-gold/20 rounded-lg hover:bg-whisky-gold/10 text-whisky-gold">
                    <Settings className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-whisky-gold/10 mb-8 overflow-x-auto">
            {['Owned', 'Created', 'Activity', 'Offers'].map((tab) => (
                <button 
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`pb-4 text-sm font-medium whitespace-nowrap transition-colors relative ${activeTab === tab.toLowerCase() ? 'text-whisky-gold' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    {tab}
                    {activeTab === tab.toLowerCase() && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-gold"></span>}
                </button>
            ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'owned' && (
            <div>
                <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-400 text-sm">4 items</p>
                    <div className="flex items-center gap-2 border border-whisky-gold/10 rounded-lg p-1">
                        <Grid className="w-4 h-4 text-whisky-gold" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ownedNFTs.map(nft => (
                        <NFTCard key={nft.id} nft={nft} />
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Profile;