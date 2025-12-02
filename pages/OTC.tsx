import React, { useState } from 'react';
import { Search, Clock, DollarSign, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OTCDeal } from '../types';

const OTC: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sell' | 'buy'>('sell');

  const mockDeals: OTCDeal[] = [
    {
      id: '1',
      project: 'Macallan 72yo Genesis',
      logo: 'https://picsum.photos/60?random=50',
      type: 'sell',
      amount: '1 Cask',
      price: 120000,
      fdv: '$46,694,666',
      status: 'active',
      listedDate: '19/11/2025',
      vesting: 'Instant'
    },
    {
      id: '2',
      project: 'Karuizawa 1960 Cask',
      logo: 'https://picsum.photos/60?random=51',
      type: 'sell',
      amount: '2 Casks',
      price: 350000,
      fdv: '$12,500,000',
      status: 'active',
      listedDate: '18/11/2025',
      vesting: 'Bonded Warehouse'
    },
    {
      id: '3',
      project: 'Springbank 1919',
      logo: 'https://picsum.photos/60?random=52',
      type: 'buy',
      amount: '1 Bottle',
      price: 85000,
      fdv: 'N/A',
      status: 'active',
      listedDate: '15/11/2025',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* Refactored Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-whisky-light mb-2">OTC Deals</h1>
        <p className="text-gray-400 mb-6">Submit interest in OTC deals, in partnership with SecondLane.</p>
        
        <div className="flex flex-col md:flex-row gap-4">
             <div className="relative flex-grow">
                <input 
                    type="text" 
                    placeholder="Search by project name..." 
                    className="w-full h-14 bg-whisky-card border border-whisky-gold/20 rounded-xl pl-12 pr-4 text-gray-200 focus:border-whisky-gold outline-none"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
            <Link to="/otc/deal/create-otc" className="flex items-center justify-center h-14 px-8 bg-whisky-gold text-whisky-dark font-bold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
                Submit your OTC deal
            </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-whisky-card border border-whisky-gold/10 rounded-xl p-4 mb-8 flex gap-8 px-8">
         <div className="flex items-center gap-2">
             <span className="text-gray-400 text-sm uppercase tracking-wider">Wants To Sell</span>
             <span className="text-xl font-bold text-white">96</span>
         </div>
         <div className="w-px bg-whisky-gold/10"></div>
         <div className="flex items-center gap-2">
             <span className="text-gray-400 text-sm uppercase tracking-wider">Wants To Buy</span>
             <span className="text-xl font-bold text-white">78</span>
         </div>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDeals.filter(d => d.type === activeTab).map((deal) => (
            <Link key={deal.id} to={`/otc/deal/${deal.id}`} className="bg-whisky-card border border-whisky-gold/10 rounded-xl p-6 hover:border-whisky-gold/40 transition-all group block">
                <div className="flex flex-col h-full">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-whisky-gold/20 p-1 flex-shrink-0">
                            <img src={deal.logo} alt="logo" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg text-white group-hover:text-whisky-gold transition-colors line-clamp-1">{deal.project}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded ${deal.type === 'sell' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                {deal.type === 'sell' ? 'Offer to Sell' : 'Offer to Buy'}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow">
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">FDV / Amount</span>
                            <div className="text-right">
                                <span className="block font-mono text-white font-bold">{deal.fdv || '-'}</span>
                                <span className="block text-xs text-gray-400">{deal.amount}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Deal Type</span>
                            <span className="text-gray-300">{deal.vesting || 'Spot'}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Listed Date</span>
                            <span className="text-gray-300">{deal.listedDate}</span>
                        </div>
                    </div>

                    <div className="w-full py-3 bg-whisky-main border border-whisky-gold/20 text-whisky-gold rounded-lg text-center group-hover:bg-whisky-gold group-hover:text-whisky-dark font-medium transition-all">
                        Click to View Details
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default OTC;