import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OTCDealDetail: React.FC = () => {
  const { id } = useParams();
  // Mock data fetch based on ID
  const deal = {
    id,
    project: 'Macallan 72yo Genesis',
    logo: 'https://picsum.photos/100/100?random=50',
    fdv: '$46,694,666',
    amount: '$2,309,760',
    type: 'VESTING',
    listed: '19/11/2025'
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
        {/* Deal Header Info */}
        <div className="bg-whisky-card border border-whisky-gold/10 rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-whisky-gold/20 bg-whisky-main p-2">
                    <img src={deal.logo} alt="project" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="flex-grow text-center md:text-left">
                    <h1 className="text-3xl font-serif font-bold text-white mb-2">{deal.project}</h1>
                    <div className="inline-block bg-whisky-gold/10 text-whisky-gold px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6">
                        THIRD PARTY WANTS TO SELL
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-whisky-gold/10 pt-6">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">FDV</p>
                            <p className="text-lg font-bold text-white">{deal.fdv}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Amount</p>
                            <p className="text-lg font-bold text-white">{deal.amount}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Deal Type</p>
                            <p className="text-lg font-bold text-white">{deal.type}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Listed</p>
                            <p className="text-lg font-bold text-white">{deal.listed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Offer Form */}
        <div className="max-w-2xl mx-auto bg-whisky-card border border-whisky-gold/10 rounded-xl p-8">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Submit Your Offer</h2>
            
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Offer Price (USD)</label>
                    <input type="number" placeholder="0.00" className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-white focus:border-whisky-gold outline-none" />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Amount (tokens)</label>
                    <input type="number" placeholder="0" className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-white focus:border-whisky-gold outline-none" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Contact Email</label>
                    <div className="relative">
                        <input type="email" placeholder="yourname" className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-white focus:border-whisky-gold outline-none pr-32" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">@gmail.com</span>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Additional Notes (Optional)</label>
                    <textarea rows={4} className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-white focus:border-whisky-gold outline-none"></textarea>
                </div>

                <button className="w-full py-4 bg-whisky-gold text-whisky-dark font-bold rounded-xl hover:opacity-90 transition-opacity mt-4">
                    Submit Offer
                </button>
            </div>
        </div>
    </div>
  );
};

export default OTCDealDetail;