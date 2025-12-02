import React from 'react';

const CreateOTCDeal: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-whisky-light mb-2">Create OTC Deal</h1>
            <p className="text-gray-400 mb-8">List your high-value liquid assets for OTC trading.</p>

            <div className="bg-whisky-card border border-whisky-gold/10 rounded-xl p-8 space-y-6">
                 <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Token Name / Project</label>
                    <input type="text" className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-white focus:border-whisky-gold outline-none" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Amount</label>
                    <input type="text" className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-white focus:border-whisky-gold outline-none" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Fully Diluted Valuation (FDV)</label>
                    <input type="text" className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-white focus:border-whisky-gold outline-none" />
                </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Listed Time Range</label>
                    <div className="grid grid-cols-2 gap-4">
                         <input type="date" className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-gray-300 focus:border-whisky-gold outline-none" />
                         <input type="date" className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-gray-300 focus:border-whisky-gold outline-none" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Additional Notes (Optional)</label>
                    <textarea rows={4} className="w-full bg-whisky-main border border-whisky-gold/20 rounded-lg p-3 text-white focus:border-whisky-gold outline-none"></textarea>
                </div>

                <button className="w-full py-4 bg-whisky-gold text-whisky-dark font-bold rounded-xl hover:opacity-90 transition-opacity mt-4">
                    Submit Deal
                </button>
            </div>
        </div>
    </div>
  );
};

export default CreateOTCDeal;