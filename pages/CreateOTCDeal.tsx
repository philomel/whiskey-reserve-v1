import React from 'react';

const CreateOTCDeal: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-2">Create OTC Deal</h1>
            <p className="text-gray-500 mb-8">List your high-value liquid assets for OTC trading.</p>

            <div className="bg-white border border-whisky-border rounded-xl p-8 space-y-6 shadow-sm">
                 <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Token Name / Project</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Amount</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Fully Diluted Valuation (FDV)</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none" />
                </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Listed Time Range</label>
                    <div className="grid grid-cols-2 gap-4">
                         <input type="date" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-whisky-button outline-none" />
                         <input type="date" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-whisky-button outline-none" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Additional Notes (Optional)</label>
                    <textarea rows={4} className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none"></textarea>
                </div>

                <button className="w-full py-4 bg-whisky-button text-whisky-button-text font-bold rounded-xl hover:opacity-90 transition-opacity mt-4 shadow-md">
                    Submit Deal
                </button>
            </div>
        </div>
    </div>
  );
};

export default CreateOTCDeal;