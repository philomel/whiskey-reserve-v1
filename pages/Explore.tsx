import React, { useState } from 'react';
import { Filter, ChevronDown, Grid, List } from 'lucide-react';
import NFTCard from '../components/NFTCard';
import { NFT, ViewMode } from '../types';

const Explore: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GRID);

  // Mock Data with real whisky brands
  const nfts: NFT[] = Array.from({ length: 8 }).map((_, i) => ({
    id: i.toString(),
    name: i % 2 === 0 ? `Macallan Sherry Hogshead 2015 #${i}` : `Glenfiddich 1973 #${i}`,
    collection: i % 2 === 0 ? 'Macallan' : 'Glenfiddich',
    image: `https://picsum.photos/400/400?random=${50+i}`,
    price: parseFloat((Math.random() * 10 + 2).toFixed(2)),
    currency: 'ETH',
    likes: Math.floor(Math.random() * 100),
    status: 'buy_now',
    type: i % 2 === 0 ? 'Cask' : 'Bottle'
  }));

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-whisky-card border border-whisky-gold/10 rounded-xl p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-6 text-whisky-gold">
              <Filter className="w-5 h-5" />
              <h3 className="font-serif font-bold text-lg">Filters</h3>
            </div>

            <div className="space-y-6">
               {/* Search */}
               <div>
                <input 
                  type="text" 
                  placeholder="Filter by name..." 
                  className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-sm focus:border-whisky-gold outline-none"
                />
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Price Range (ETH)</h4>
                <div className="flex gap-2">
                  <input type="number" placeholder="Min" className="w-1/2 bg-whisky-main border border-whisky-gold/20 rounded p-2 text-sm outline-none" />
                  <input type="number" placeholder="Max" className="w-1/2 bg-whisky-main border border-whisky-gold/20 rounded p-2 text-sm outline-none" />
                </div>
              </div>

              {/* Categories / Brands */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Category</h4>
                <div className="space-y-2">
                  {['Macallan', 'Glenfiddich', 'Glenlivet', 'Highland Park', 'Balvenie', 'Laphroaig'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-sm text-gray-400 hover:text-whisky-light cursor-pointer">
                      <input type="checkbox" className="rounded border-whisky-gold/30 bg-whisky-main text-whisky-gold focus:ring-0" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

               {/* Status */}
               <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Status</h4>
                <div className="space-y-2">
                  {['Buy Now', 'On Auction', 'New'].map((status) => (
                    <label key={status} className="flex items-center gap-2 text-sm text-gray-400 hover:text-whisky-light cursor-pointer">
                      <input type="checkbox" className="rounded border-whisky-gold/30 bg-whisky-main text-whisky-gold focus:ring-0" />
                      {status}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl font-serif font-bold text-whisky-light">Explore Market</h1>
            
            <div className="flex items-center gap-4">
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-whisky-gold bg-whisky-card px-4 py-2 rounded-lg border border-whisky-gold/10">
                  Sort by: Recently Listed <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex bg-whisky-card rounded-lg border border-whisky-gold/10 p-1">
                <button 
                  onClick={() => setViewMode(ViewMode.GRID)}
                  className={`p-2 rounded ${viewMode === ViewMode.GRID ? 'bg-whisky-gold text-whisky-dark' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode(ViewMode.LIST)}
                  className={`p-2 rounded ${viewMode === ViewMode.LIST ? 'bg-whisky-gold text-whisky-dark' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nfts.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 flex justify-center">
            <button className="px-8 py-3 border border-whisky-gold/30 text-whisky-gold hover:bg-whisky-gold/10 rounded-full transition-colors text-sm font-medium">
                Load More Assets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;