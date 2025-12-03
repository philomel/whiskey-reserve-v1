import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Info, CheckCircle, XCircle, ArrowRight, Zap, Settings, Truck } from 'lucide-react';

interface NFTManagementProps {
    action: 'list' | 'transfer' | 'withdraw';
}

const NFTManagement: React.FC<NFTManagementProps> = ({ action }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Mock NFT
  const nft = { name: `Cask #${id || '123'}`, image: 'https://picsum.photos/300/300?random=1' };

  const renderListForm = () => (
    <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-8">List NFT for Sale</h1>
        
        <div className="bg-white border border-whisky-border rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-6 mb-6">
                <img src={nft.image} alt="nft" className="w-24 h-24 rounded-lg object-cover" />
                <div>
                    <h2 className="text-xl font-bold text-whisky-dark">{nft.name}</h2>
                    <p className="text-gray-500">Speyside Rare Collection</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Sale Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-3">Sale Type</label>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-whisky-button text-whisky-button-text font-bold py-3 rounded-lg border border-whisky-button">Fixed Price</button>
                        <button className="bg-gray-50 text-gray-400 py-3 rounded-lg border border-gray-200 cursor-not-allowed">Timed Auction (Soon)</button>
                    </div>
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-3">Price</label>
                    <div className="relative">
                        <input type="number" placeholder="0.00" className="w-full bg-gray-50 border border-whisky-border rounded-lg py-3 pl-4 pr-20 text-whisky-dark focus:border-whisky-button outline-none" />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-whisky-button">ETH</div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">≈ $0.00 USD</p>
                </div>

                {/* Tokens */}
                 <div>
                    <label className="block text-sm font-medium text-gray-600 mb-3">Accepted Tokens</label>
                    <div className="flex gap-4">
                        {['ETH', 'USDC', 'USDT'].map(token => (
                            <label key={token} className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" defaultChecked={token === 'ETH'} className="text-whisky-button rounded bg-gray-100 border-gray-300" />
                                <span className="text-gray-700">{token}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Fees */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm border border-gray-200">
                    <div className="flex justify-between text-gray-500">
                        <span>Platform Fee</span>
                        <span>2.5%</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                        <span>Creator Royalty</span>
                        <span>5.0%</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-whisky-dark">
                        <span>You Receive</span>
                        <span>-- ETH</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex gap-4">
            <button onClick={() => navigate(-1)} className="flex-1 py-4 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50">Cancel</button>
            <button className="flex-1 py-4 bg-whisky-button text-whisky-button-text font-bold rounded-xl hover:opacity-90">Complete Listing</button>
        </div>
    </div>
  );

  const renderTransferForm = () => (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-6">Transfer NFT</h1>
        
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 flex items-start gap-3">
            <Info className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">
                Warning: Transferring this NFT will permanently move it to the recipient's wallet. This action cannot be undone.
            </p>
        </div>

        <div className="bg-white border border-whisky-border rounded-xl p-6 mb-8 shadow-sm">
             <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <img src={nft.image} alt="nft" className="w-16 h-16 rounded object-cover" />
                <span className="font-bold text-whisky-dark text-lg">{nft.name}</span>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-3">Recipient Address (0x... or ENS)</label>
                    <input type="text" placeholder="0x..." className="w-full bg-gray-50 border border-whisky-border rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none" />
                </div>
                
                 <div>
                    <label className="block text-sm font-medium text-gray-600 mb-3">Gas Fee Estimate</label>
                    <div className="grid grid-cols-3 gap-4">
                        <button className="bg-blue-50 border border-blue-200 text-blue-700 py-3 rounded-lg flex flex-col items-center">
                            <Zap className="w-4 h-4 mb-1" />
                            <span className="text-xs font-bold">Fast</span>
                            <span className="text-[10px] opacity-70">0.005 ETH</span>
                        </button>
                        <button className="bg-white border border-gray-200 text-gray-500 py-3 rounded-lg flex flex-col items-center hover:bg-gray-50">
                            <Settings className="w-4 h-4 mb-1" />
                            <span className="text-xs font-bold">Normal</span>
                        </button>
                        <button className="bg-white border border-gray-200 text-gray-500 py-3 rounded-lg flex flex-col items-center hover:bg-gray-50">
                            <Truck className="w-4 h-4 mb-1" />
                            <span className="text-xs font-bold">Slow</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex gap-4">
            <button onClick={() => navigate(-1)} className="flex-1 py-4 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50">Cancel</button>
            <button className="flex-1 py-4 bg-whisky-button text-whisky-button-text font-bold rounded-xl hover:opacity-90">Confirm Transfer</button>
        </div>
      </div>
  );

  const renderWithdrawForm = () => (
     <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-8">Withdraw to Wallet</h1>
        
        <div className="bg-white border border-whisky-border rounded-xl p-6 mb-8 shadow-sm">
            <h3 className="font-bold text-whisky-dark mb-4">Select NFTs to Withdraw</h3>
            <div className="space-y-3 mb-6">
                {[1, 2].map(i => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                         <input type="checkbox" defaultChecked className="text-whisky-button rounded bg-white border-gray-300" />
                         <img src={`https://picsum.photos/40?random=${i}`} className="w-10 h-10 rounded" alt="nft"/>
                         <span className="text-gray-700">Cask #{100+i}</span>
                    </div>
                ))}
            </div>
            
            <h3 className="font-bold text-whisky-dark mb-4">Destination</h3>
             <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer p-3 border border-whisky-button rounded-lg bg-gray-50">
                    <input type="radio" name="dest" defaultChecked className="text-whisky-button bg-white" />
                    <div>
                        <span className="block text-whisky-dark font-bold">Connected Wallet</span>
                        <span className="block text-xs text-gray-500 font-mono">0x1234...5678</span>
                    </div>
                </label>
                 <label className="flex items-center gap-3 cursor-pointer p-3 border border-gray-200 rounded-lg bg-white text-gray-500 hover:bg-gray-50">
                    <input type="radio" name="dest" className="text-whisky-button bg-white" />
                    <span>Custom Address</span>
                </label>
            </div>
        </div>

        <button className="w-full py-4 bg-whisky-button text-whisky-button-text font-bold rounded-xl hover:opacity-90">Confirm Withdrawal</button>
     </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
        {action === 'list' && renderListForm()}
        {action === 'transfer' && renderTransferForm()}
        {action === 'withdraw' && renderWithdrawForm()}
    </div>
  );
};

export default NFTManagement;