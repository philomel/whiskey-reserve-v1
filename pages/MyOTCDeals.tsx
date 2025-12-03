import React from 'react';
import { Link } from 'react-router-dom';
import { Edit2, Trash2 } from 'lucide-react';
import { OTCDeal } from '../types';

const MyOTCDeals: React.FC = () => {
  const myDeals: OTCDeal[] = [
    {
      id: '101',
      project: 'Port Ellen 40yo',
      logo: 'https://picsum.photos/60?random=99',
      type: 'sell',
      amount: '1 Bottle',
      price: 45000,
      fdv: '$120,000',
      status: 'active',
      listedDate: '01/12/2025',
      vesting: 'Instant'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-whisky-dark">My OTC Deals</h1>
        <Link to="/otc/deal/create-otc" className="bg-whisky-button text-whisky-button-text px-6 py-2 rounded-lg font-bold hover:opacity-90">
            Create New Deal
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myDeals.length > 0 ? (
            myDeals.map((deal) => (
                <div key={deal.id} className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 p-1 bg-gray-50">
                            <img src={deal.logo} alt="logo" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg text-whisky-dark line-clamp-1">{deal.project}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded font-medium ${deal.type === 'sell' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                {deal.type === 'sell' ? 'Offer to Sell' : 'Offer to Buy'}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3 mb-6">
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Price</span>
                            <span className="font-bold text-whisky-dark">${deal.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Amount</span>
                            <span className="text-gray-800">{deal.amount}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Listed Date</span>
                            <span className="text-gray-800">{deal.listedDate}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Status</span>
                            <span className="text-green-600 font-bold uppercase text-xs">{deal.status}</span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                            <Edit2 className="w-4 h-4" /> Edit
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-red-200 text-red-500 rounded-lg hover:bg-red-50">
                            <Trash2 className="w-4 h-4" /> Delete
                        </button>
                    </div>
                </div>
            ))
        ) : (
            <div className="col-span-full py-20 text-center text-gray-500 bg-white rounded-xl border border-whisky-border">
                You haven't created any OTC deals yet.
            </div>
        )}
      </div>
    </div>
  );
};

export default MyOTCDeals;