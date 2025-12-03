import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NFT } from '../types';

interface NFTCardProps {
  nft: NFT;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <Link to={`/nft/${nft.id}`} className="group block bg-white rounded-xl overflow-hidden border border-whisky-border hover:border-whisky-gold hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={nft.image} 
          alt={nft.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white/80 backdrop-blur p-2 rounded-full hover:text-red-500 text-gray-600 transition-colors shadow-sm">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wider text-whisky-dark border border-gray-200 uppercase shadow-sm">
            {nft.collection}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-lg text-whisky-dark group-hover:text-whisky-gold transition-colors line-clamp-1">
            {nft.name}
          </h3>
        </div>
        
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Price</p>
            <p className="text-sm font-bold text-whisky-dark">
              {nft.price} {nft.currency}
            </p>
          </div>
          <button className="text-xs font-semibold bg-whisky-button text-whisky-button-text px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;