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
    price: parseFloat((Math.random() * 5000 + 2000).toFixed(0)),
    currency: 'USDC',
    likes: Math.floor(Math.random() * 100),
    status: 'buy_now',
    type: i % 2 === 0 ? 'Cask' : 'Bottle'
  }));

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white border border-whisky-border rounded-xl p-6 sticky top-24 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-whisky-dark">
              <Filter className="w-5 h-5" />
              <h3 className="font-serif font-bold text-lg">Filters</h3>
            </div>

            <div className="space-y-6">
               {/* Search */}
               <div>
                <input 
                  type="text" 
                  placeholder="Filter by name..." 
                  className="w-full bg-gray-50 border border-whisky-border rounded-lg p-3 text-sm focus:border-whisky-dark outline-none text-whisky-dark"
                />
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3">Price Range (USDC)</h4>
                <div className="flex gap-2">
                  <input type="number" placeholder="Min" className="w-1/2 bg-gray-50 border border-whisky-border rounded p-2 text-sm outline-none text-whisky-dark" />
                  <input type="number" placeholder="Max" className="w-1/2 bg-gray-50 border border-whisky-border rounded p-2 text-sm outline-none text-whisky-dark" />
                </div>
              </div>

              {/* Categories / Brands */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3">Category</h4>
                <div className="space-y-2">
                  {['Macallan', 'Glenfiddich', 'Glenlivet', 'Highland Park', 'Balvenie', 'Laphroaig'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-sm text-gray-600 hover:text-whisky-dark cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-whisky-dark focus:ring-0 focus:ring-offset-0" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

               {/* Status */}
               <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3">Status</h4>
                <div className="space-y-2">
                  {['Listed', 'Unlisted', 'Sold Out'].map((status) => (
                    <label key={status} className="flex items-center gap-2 text-sm text-gray-600 hover:text-whisky-dark cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-whisky-dark focus:ring-0 focus:ring-offset-0" />
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
            <h1 className="text-2xl font-serif font-bold text-whisky-dark">NFT Market</h1>
            
            <div className="flex items-center gap-4">
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-whisky-dark bg-white px-4 py-2 rounded-lg border border-whisky-border shadow-sm">
                  Sort by: Recently Listed <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex bg-white rounded-lg border border-whisky-border p-1 shadow-sm">
                <button 
                  onClick={() => setViewMode(ViewMode.GRID)}
                  className={`p-2 rounded ${viewMode === ViewMode.GRID ? 'bg-whisky-button text-whisky-button-text' : 'text-gray-400 hover:text-whisky-dark'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode(ViewMode.LIST)}
                  className={`p-2 rounded ${viewMode === ViewMode.LIST ? 'bg-whisky-button text-whisky-button-text' : 'text-gray-400 hover:text-whisky-dark'}`}
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
            <button className="px-8 py-3 border border-gray-300 text-gray-600 hover:bg-gray-100 rounded-full transition-colors text-sm font-medium">
                Load More Assets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;