import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, MoreHorizontal, Clock, Activity as ActivityIcon } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', price: 1.2 },
  { name: 'Feb', price: 1.5 },
  { name: 'Mar', price: 1.3 },
  { name: 'Apr', price: 1.8 },
  { name: 'May', price: 2.2 },
  { name: 'Jun', price: 2.0 },
  { name: 'Jul', price: 2.5 },
];

const NFTDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left: Image */}
            <div className="space-y-6">
                <div className="bg-whisky-card border border-whisky-gold/10 rounded-2xl overflow-hidden aspect-square relative shadow-2xl">
                    <img src={`https://picsum.photos/800/800?random=${id || 1}`} alt="NFT" className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 flex gap-2">
                        <button className="bg-whisky-dark/50 backdrop-blur p-3 rounded-full text-white hover:text-whisky-gold border border-white/10">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                
                {/* Description Box */}
                <div className="bg-whisky-card border border-whisky-gold/10 rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-whisky-gold/10 bg-whisky-main/30 flex items-center gap-2">
                        <ActivityIcon className="w-4 h-4 text-whisky-gold" />
                        <span className="font-semibold text-gray-200">Description</span>
                    </div>
                    <div className="p-6 text-gray-400 text-sm leading-relaxed">
                        This rare cask from 1998 has been maturing in a first-fill Sherry butt. With notes of dried fruits, dark chocolate, and winter spices, it represents a unique investment opportunity in liquid history. Authenticated by the distillery and verified on-chain.
                    </div>
                </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-8">
                <div>
                    <div className="flex items-center gap-2 text-whisky-gold mb-2">
                        <span className="text-sm font-semibold uppercase tracking-wider">The Macallan</span>
                    </div>
                    <h1 className="text-4xl font-serif font-bold text-white mb-4">Sherry Oak Cask #2891</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>Owned by <span className="text-whisky-light hover:underline cursor-pointer">@WhiskyFund</span></span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> 124 favorites</span>
                    </div>
                </div>

                <div className="bg-whisky-card border border-whisky-gold/20 rounded-xl p-6 shadow-lg">
                    <p className="text-gray-400 text-sm mb-2">Current Price</p>
                    <div className="flex items-end gap-4 mb-6">
                        <span className="text-4xl font-bold text-white">4.5 ETH</span>
                        <span className="text-gray-500 mb-1">($12,450.00)</span>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 bg-gradient-to-r from-whisky-gold to-whisky-light text-whisky-dark font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(212,165,116,0.2)]">
                            Buy Now
                        </button>
                        <button className="flex-1 border border-whisky-gold/30 text-whisky-gold font-bold py-4 rounded-xl hover:bg-whisky-gold/10 transition-colors">
                            Make Offer
                        </button>
                    </div>
                </div>

                {/* Price History */}
                <div className="bg-whisky-card border border-whisky-gold/10 rounded-xl overflow-hidden">
                     <div className="p-4 border-b border-whisky-gold/10 bg-whisky-main/30 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-whisky-gold" />
                        <span className="font-semibold text-gray-200">Price History</span>
                    </div>
                    <div className="p-6 h-64">
                         <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <Line type="monotone" dataKey="price" stroke="#d4a574" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                 {/* Attributes */}
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { label: 'Distillery', value: 'Macallan' },
                        { label: 'Year', value: '1998' },
                        { label: 'Cask Type', value: 'Sherry Butt' },
                        { label: 'ABV', value: '54.2%' },
                    ].map((attr) => (
                        <div key={attr.label} className="bg-whisky-card border border-whisky-gold/10 rounded-lg p-3 text-center">
                            <span className="block text-xs text-whisky-gold uppercase tracking-wide mb-1">{attr.label}</span>
                            <span className="block font-semibold text-gray-200">{attr.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default NFTDetail;