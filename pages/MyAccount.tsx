import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, Filter, ChevronDown, CheckSquare, Plus, ExternalLink, RefreshCw, Download, AlertTriangle } from 'lucide-react';
import NFTCard from '../components/NFTCard';
import { NFT, Offer, ActivityItem } from '../types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface MyAccountProps {
  section: 'my-nfts' | 'listings' | 'offers-received' | 'my-offers' | 'favorites' | 'created' | 'royalties' | 'transactions';
}

const MyAccount: React.FC<MyAccountProps> = ({ section }) => {
  const [viewMode, setViewMode] = useState<'GRID' | 'LIST'>('GRID');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  // Mock Data
  const myNFTs: NFT[] = Array.from({ length: 6 }).map((_, i) => ({
    id: i.toString(),
    name: `Cask #${100+i}`,
    collection: 'Speyside Rare',
    image: `https://picsum.photos/400/400?random=${200+i}`,
    price: 3.5,
    currency: 'ETH',
    likes: 12,
    status: i % 2 === 0 ? 'buy_now' : 'new',
    type: 'Cask',
    isListed: i % 2 === 0
  }));

  const offers: Offer[] = [
    { id: '1', nftId: '1', nftName: 'Macallan #123', nftImage: 'https://picsum.photos/50/50?random=1', from: '@buyer123', price: 1.8, currency: 'ETH', date: '2 hours ago', expiry: '22 hours', status: 'pending' },
    { id: '2', nftId: '2', nftName: 'Yamazaki 18yo', nftImage: 'https://picsum.photos/50/50?random=2', from: '@collector', price: 4.5, currency: 'ETH', date: '1 day ago', expiry: '5 days', status: 'pending' },
  ];

  const royaltyData = [
    { name: 'Week 1', amount: 0.5 },
    { name: 'Week 2', amount: 1.2 },
    { name: 'Week 3', amount: 0.8 },
    { name: 'Week 4', amount: 1.5 },
  ];

  const toggleSelect = (id: string) => {
    if (selectedItems.includes(id)) {
        setSelectedItems(selectedItems.filter(i => i !== id));
    } else {
        setSelectedItems([...selectedItems, id]);
    }
  };

  const renderHeader = (title: string, subtitle?: string) => (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
            <h1 className="text-3xl font-serif font-bold text-whisky-dark">{title}</h1>
            {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
        
        {/* Common Tools */}
        <div className="flex items-center gap-3">
             {section === 'my-nfts' && (
                <div className="flex bg-white rounded-lg border border-whisky-border p-1 shadow-sm">
                    <button onClick={() => setViewMode('GRID')} className={`p-2 rounded ${viewMode === 'GRID' ? 'bg-whisky-button text-whisky-button-text' : 'text-gray-400 hover:text-whisky-dark'}`}><Grid className="w-4 h-4" /></button>
                    <button onClick={() => setViewMode('LIST')} className={`p-2 rounded ${viewMode === 'LIST' ? 'bg-whisky-button text-whisky-button-text' : 'text-gray-400 hover:text-whisky-dark'}`}><List className="w-4 h-4" /></button>
                </div>
             )}
             {section === 'created' && (
                 <Link to="/create" className="flex items-center gap-2 bg-whisky-button text-whisky-button-text px-4 py-2 rounded-lg font-bold hover:opacity-90 shadow-md">
                    <Plus className="w-4 h-4" /> Create New NFT
                 </Link>
             )}
        </div>
    </div>
  );

  const renderMyNFTs = () => (
    <>
        {renderHeader("My NFTs")}
        
        {/* Tabs & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                {['All (32)', 'Not Listed (20)', 'Listed (12)'].map(tab => (
                    <button key={tab} className="px-4 py-2 bg-white border border-whisky-border rounded-full text-sm text-gray-500 hover:text-whisky-dark whitespace-nowrap shadow-sm">
                        {tab}
                    </button>
                ))}
            </div>
            <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-white hover:border-whisky-dark bg-white shadow-sm">
                Sort by: Newest <ChevronDown className="w-4 h-4" />
            </button>
        </div>

        {/* Batch Action Bar */}
        {selectedItems.length > 0 && (
            <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-whisky-button text-whisky-button-text px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-6 font-bold animate-fade-in border border-gray-700">
                <span className="flex items-center gap-2"><CheckSquare className="w-5 h-5" /> {selectedItems.length} items selected</span>
                <div className="h-4 w-px bg-gray-600"></div>
                <button className="hover:underline text-gray-200 hover:text-white">Batch List</button>
                <button className="hover:underline text-gray-200 hover:text-white">Batch Transfer</button>
                <button onClick={() => setSelectedItems([])} className="text-red-400 hover:underline">Cancel</button>
            </div>
        )}

        {/* Grid View */}
        {viewMode === 'GRID' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {myNFTs.map(nft => (
                    <div key={nft.id} className="relative group">
                        <div className="absolute top-3 left-3 z-10">
                            <input 
                                type="checkbox" 
                                checked={selectedItems.includes(nft.id)}
                                onChange={() => toggleSelect(nft.id)}
                                className="w-5 h-5 rounded border-gray-300 bg-white text-whisky-button focus:ring-whisky-button" 
                            />
                        </div>
                        <NFTCard nft={nft} />
                        {/* Hover Actions Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-gray-200 translate-y-full group-hover:translate-y-0 transition-transform flex justify-between items-center z-20 rounded-b-xl shadow-lg">
                            <span className="text-xs text-gray-500">{nft.isListed ? 'Listed' : 'Not Listed'}</span>
                            <div className="flex gap-2">
                                <Link to={`/profile/list-nft/${nft.id}`} className="text-xs bg-whisky-button text-whisky-button-text px-3 py-1.5 rounded font-bold hover:opacity-90">List</Link>
                                <Link to={`/profile/transfer/${nft.id}`} className="text-xs border border-gray-300 text-gray-600 px-3 py-1.5 rounded hover:bg-gray-50">Transfer</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="bg-white border border-whisky-border rounded-xl overflow-hidden shadow-sm">
                {/* List View placeholder */}
                <div className="p-4 text-center text-gray-500">List View Mode Active</div>
            </div>
        )}
    </>
  );

  const renderOffers = (type: 'received' | 'sent') => (
      <>
        {renderHeader(type === 'received' ? "Offers Received" : "My Offers Made", "Manage your negotiations")}
        
        <div className="flex gap-2 mb-6">
            {(type === 'received' ? ['All', 'Pending', 'Accepted', 'Expired'] : ['Active', 'Accepted', 'Declined', 'Expired']).map(tab => (
                 <button key={tab} className="px-4 py-2 bg-white border border-whisky-border rounded-full text-sm text-gray-500 hover:text-whisky-dark hover:border-whisky-dark shadow-sm">
                    {tab}
                </button>
            ))}
        </div>

        <div className="space-y-4">
            {offers.map(offer => (
                <div key={offer.id} className="bg-white border border-whisky-border rounded-xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                    <div className="flex items-center gap-4 flex-grow">
                        <img src={offer.nftImage} alt="nft" className="w-16 h-16 rounded-lg object-cover" />
                        <div>
                            <h3 className="font-bold text-whisky-dark">{offer.nftName}</h3>
                            <p className="text-sm text-gray-500">
                                {type === 'received' ? `Offer from ${offer.from}` : `Offer to ${offer.from}`}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{offer.date}</p>
                        </div>
                    </div>

                    <div className="text-center md:text-right min-w-[120px]">
                        <p className="text-xs text-gray-500">Offer Price</p>
                        <p className="text-xl font-bold text-whisky-dark">{offer.price} {offer.currency}</p>
                        <p className="text-xs text-gray-500">Expires in {offer.expiry}</p>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto">
                        {type === 'received' ? (
                            <>
                                <button className="flex-1 md:flex-none px-4 py-2 bg-whisky-button text-whisky-button-text font-bold rounded-lg text-sm hover:opacity-90">Accept</button>
                                <button className="flex-1 md:flex-none px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50">Counter</button>
                                <button className="flex-1 md:flex-none px-4 py-2 border border-red-200 text-red-500 rounded-lg text-sm hover:bg-red-50">Decline</button>
                            </>
                        ) : (
                             <>
                                <button className="flex-1 md:flex-none px-4 py-2 bg-whisky-button text-whisky-button-text font-bold rounded-lg text-sm hover:opacity-90">Increase</button>
                                <button className="flex-1 md:flex-none px-4 py-2 border border-red-200 text-red-500 rounded-lg text-sm hover:bg-red-50">Withdraw</button>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </>
  );

  const renderRoyalties = () => (
      <>
        {renderHeader("Royalties Dashboard")}
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
                { label: 'Total Sales Volume', value: '45.8 ETH', sub: '$77,000' },
                { label: 'Total Royalties Earned', value: '2.3 ETH', sub: '$3,850' },
                { label: 'Pending Withdrawal', value: '0.8 ETH', sub: '$1,340', action: 'Withdraw' },
            ].map((stat, i) => (
                <div key={i} className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-whisky-dark mb-1">{stat.value}</p>
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-400">{stat.sub}</p>
                        {stat.action && (
                            <button className="text-xs bg-whisky-button text-whisky-button-text px-3 py-1 rounded font-bold hover:opacity-90">
                                {stat.action}
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {/* Chart */}
        <div className="bg-white border border-whisky-border rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-whisky-dark">Earnings History</h3>
                <select className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg p-2">
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                </select>
            </div>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={royaltyData}>
                        <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}Ξ`} />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#e5e7eb', color: '#000' }} />
                        <Line type="monotone" dataKey="amount" stroke="#d4a574" strokeWidth={3} dot={{ fill: '#d4a574' }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white border border-whisky-border rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-whisky-dark">Recent Transactions</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">NFT</th>
                            <th className="px-6 py-3">Sale Price</th>
                            <th className="px-6 py-3">Royalty (5%)</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-whisky-dark">NFT #123</td>
                            <td className="px-6 py-4">5.0 ETH</td>
                            <td className="px-6 py-4 text-green-600">0.25 ETH</td>
                            <td className="px-6 py-4">Nov 20, 2025</td>
                            <td className="px-6 py-4"><ExternalLink className="w-4 h-4 text-gray-400 hover:text-whisky-dark cursor-pointer" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </>
  );

  const renderFavorites = () => (
      <>
         {renderHeader("My Favorites (48)")}
         {/* Price Alert Banner */}
         <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 flex items-center gap-4">
            <div className="p-2 bg-yellow-100 rounded-full text-yellow-600">
                <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="flex-grow">
                <h4 className="font-bold text-gray-800">Set Price Alerts</h4>
                <p className="text-sm text-gray-600">Get notified when favorited NFTs drop below your target price.</p>
            </div>
            <button className="bg-white border border-yellow-300 text-yellow-700 px-4 py-2 rounded-lg text-sm hover:bg-yellow-50">Enable Alerts</button>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {myNFTs.map(nft => (
                 <NFTCard key={nft.id} nft={nft} />
             ))}
         </div>
      </>
  );

  const renderContent = () => {
    switch(section) {
        case 'my-nfts': return renderMyNFTs();
        case 'listings': return renderMyNFTs(); // Reuse for demo, usually filtered
        case 'offers-received': return renderOffers('received');
        case 'my-offers': return renderOffers('sent');
        case 'favorites': return renderFavorites();
        case 'created': return renderMyNFTs(); // Reuse layout
        case 'royalties': return renderRoyalties();
        default: return <div>Select a section</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in min-h-screen">
       {renderContent()}
    </div>
  );
};

export default MyAccount;