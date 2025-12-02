import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NFT } from '../types';

interface NFTCardProps {
  nft: NFT;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <Link to={`/nft/${nft.id}`} className="group block bg-whisky-card rounded-xl overflow-hidden border border-whisky-gold/10 hover:border-whisky-gold/50 hover:shadow-[0_0_20px_rgba(212,165,116,0.1)] transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={nft.image} 
          alt={nft.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-whisky-dark/80 backdrop-blur p-2 rounded-full hover:text-red-500 text-white transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wider text-whisky-gold border border-whisky-gold/20 uppercase">
            {nft.collection}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-lg text-white group-hover:text-whisky-gold transition-colors line-clamp-1">
            {nft.name}
          </h3>
        </div>
        
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Price</p>
            <p className="text-sm font-bold text-whisky-light">
              {nft.price} {nft.currency}
            </p>
          </div>
          <button className="text-xs font-semibold bg-whisky-gold text-whisky-dark px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;