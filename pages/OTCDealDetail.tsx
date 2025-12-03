import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, Info } from 'lucide-react';

const OTCDealDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const handleSubmit = () => {
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    navigate('/otc');
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in relative">
        {/* Confirmation Modal */}
        {showConfirmation && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl text-center border border-whisky-border animate-scale-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-whisky-dark mb-2">Offer Submitted!</h2>
                    <p className="text-gray-600 mb-6">
                        Your offer has been successfully sent to the seller. We will notify you once they respond.
                    </p>
                    <button 
                        onClick={closeConfirmation}
                        className="w-full bg-whisky-button text-whisky-button-text font-bold py-3 rounded-xl hover:opacity-90"
                    >
                        Back to OTC Deals
                    </button>
                </div>
            </div>
        )}

        {/* Deal Header Info */}
        <div className="bg-white border border-whisky-border rounded-xl p-8 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 bg-gray-50 p-2 shadow-inner">
                    <img src={deal.logo} alt="project" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="flex-grow text-center md:text-left">
                    <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-2">{deal.project}</h1>
                    <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6">
                        THIRD PARTY WANTS TO SELL
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-100 pt-6">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">FDV</p>
                            <p className="text-lg font-bold text-whisky-dark">{deal.fdv}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Amount</p>
                            <p className="text-lg font-bold text-whisky-dark">{deal.amount}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Deal Type</p>
                            <p className="text-lg font-bold text-whisky-dark">{deal.type}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Listed</p>
                            <p className="text-lg font-bold text-whisky-dark">{deal.listed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Offer Form */}
        <div className="max-w-2xl mx-auto bg-white border border-whisky-border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-whisky-dark mb-6">Submit Your Offer</h2>
            
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Your Offer Price (USD)</label>
                    <input type="number" placeholder="0.00" className="w-full bg-gray-50 border border-whisky-border rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none" />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Amount (tokens)</label>
                    <input type="number" placeholder="0" className="w-full bg-gray-50 border border-whisky-border rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Contact Email</label>
                    <div className="relative">
                        <input type="email" placeholder="yourname" className="w-full bg-gray-50 border border-whisky-border rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none pr-32" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">@gmail.com</span>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Additional Notes (Optional)</label>
                    <textarea rows={4} className="w-full bg-gray-50 border border-whisky-border rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none"></textarea>
                </div>

                <button onClick={handleSubmit} className="w-full py-4 bg-whisky-button text-whisky-button-text font-bold rounded-xl hover:opacity-90 transition-opacity mt-4 shadow-md">
                    Submit Offer
                </button>
            </div>
        </div>
    </div>
  );
};

export default OTCDealDetail;