import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ShieldCheck } from 'lucide-react';

const NFTPurchase: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [complete, setComplete] = useState(false);

  // Mock Data
  const nft = {
    name: 'Macallan Sherry Oak Cask #2891',
    price: 12450,
    currency: 'USDC',
    image: `https://picsum.photos/800/800?random=${id || 1}`
  };

  const handlePurchase = () => {
    setProcessing(true);
    setTimeout(() => {
        setProcessing(false);
        setComplete(true);
    }, 2000);
  };

  if (complete) {
    return (
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center animate-fade-in">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-lg">
                <CheckCircle className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-whisky-dark mb-4">Purchase Successful!</h1>
            <p className="text-gray-600 mb-8 text-center max-w-md">
                You are now the owner of <strong>{nft.name}</strong>. The asset has been transferred to your wallet.
            </p>
            <div className="flex gap-4">
                <button onClick={() => navigate('/profile/my-nfts')} className="bg-whisky-button text-whisky-button-text px-8 py-3 rounded-xl font-bold hover:opacity-90">
                    View My Assets
                </button>
                 <button onClick={() => navigate('/')} className="border border-gray-300 text-gray-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100">
                    Back Home
                </button>
            </div>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-whisky-dark mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to NFT
      </button>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Summary */}
        <div>
            <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm mb-6">
                <div className="flex gap-4 mb-4">
                     <img src={nft.image} alt={nft.name} className="w-24 h-24 rounded-lg object-cover" />
                     <div>
                         <h2 className="font-serif font-bold text-lg text-whisky-dark">{nft.name}</h2>
                         <p className="text-sm text-gray-500">The Macallan • Cask</p>
                     </div>
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium text-whisky-dark">{nft.price.toLocaleString()} {nft.currency}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Platform Fee (2.5%)</span>
                        <span className="font-medium text-whisky-dark">{(nft.price * 0.025).toFixed(2)} {nft.currency}</span>
                    </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Gas Fee (Est.)</span>
                        <span className="font-medium text-whisky-dark">12.50 {nft.currency}</span>
                    </div>
                </div>
                <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between items-center">
                    <span className="font-bold text-gray-800">Total</span>
                    <span className="font-bold text-2xl text-whisky-dark">{(nft.price * 1.025 + 12.50).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {nft.currency}</span>
                </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <ShieldCheck className="w-6 h-6 text-green-600 mt-0.5" />
                <div>
                    <h4 className="font-bold text-sm text-gray-800">Secure Transaction</h4>
                    <p className="text-xs text-gray-500 mt-1">
                        This transaction is protected by our escrow smart contract. Ownership will be transferred immediately upon payment confirmation.
                    </p>
                </div>
            </div>
        </div>

        {/* Right: Payment */}
        <div>
            <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-6">Confirm Purchase</h1>
            
            <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-gray-700 mb-4">Payment Method</h3>
                <div className="flex items-center justify-between p-4 border border-whisky-button/20 bg-blue-50/50 rounded-lg mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                            $
                        </div>
                        <div>
                            <p className="font-bold text-whisky-dark">USDC</p>
                            <p className="text-xs text-gray-500">Balance: 25,000.00 USDC</p>
                        </div>
                    </div>
                    <div className="w-4 h-4 rounded-full border-4 border-blue-500 bg-white"></div>
                </div>
            </div>

            <button 
                onClick={handlePurchase}
                disabled={processing}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all ${processing ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-whisky-button text-whisky-button-text hover:opacity-90'}`}
            >
                {processing ? 'Processing Transaction...' : `Pay ${ (nft.price * 1.025 + 12.50).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) } USDC`}
            </button>
             <p className="text-xs text-gray-400 text-center mt-4">
                By confirming, you agree to our Terms of Service.
            </p>
        </div>
      </div>
    </div>
  );
};

export default NFTPurchase;