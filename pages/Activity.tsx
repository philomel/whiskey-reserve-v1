import React from 'react';
import { ShoppingCart, Tag, ArrowRightLeft, Zap } from 'lucide-react';
import { ActivityItem } from '../types';

const Activity: React.FC = () => {
  const activities: ActivityItem[] = [
    { id: '1', user: '0x8a...4b12', action: 'bought', item: 'Macallan 1926 #4', price: 1.5, time: '2 minutes ago', image: 'https://picsum.photos/50/50?random=1' },
    { id: '2', user: '0x3c...9d21', action: 'listed', item: 'Yamazaki 25yo', price: 2.0, time: '10 minutes ago', image: 'https://picsum.photos/50/50?random=2' },
    { id: '3', user: '0x1f...5e33', action: 'offer', item: 'Springbank 21yo', price: 0.8, time: '1 hour ago', image: 'https://picsum.photos/50/50?random=3' },
    { id: '4', user: '0x9b...1a44', action: 'minted', item: 'New Cask Drop #100', time: '2 hours ago', image: 'https://picsum.photos/50/50?random=4' },
  ];

  const getIcon = (action: string) => {
    switch(action) {
      case 'bought': return <ShoppingCart className="w-4 h-4 text-green-400" />;
      case 'listed': return <Tag className="w-4 h-4 text-yellow-400" />;
      case 'offer': return <Zap className="w-4 h-4 text-blue-400" />;
      default: return <ArrowRightLeft className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-4xl">
      <h1 className="text-3xl font-serif font-bold text-whisky-light mb-8">Activity Feed</h1>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['All', 'Sales', 'Listings', 'Offers', 'Transfers'].map(filter => (
            <button key={filter} className="px-4 py-2 bg-whisky-card border border-whisky-gold/10 rounded-full text-sm text-gray-400 hover:text-whisky-gold hover:border-whisky-gold/30 transition-colors whitespace-nowrap">
                {filter}
            </button>
        ))}
      </div>

      <div className="bg-whisky-card border border-whisky-gold/10 rounded-xl overflow-hidden">
        {activities.map((activity, index) => (
            <div key={activity.id} className="p-4 border-b border-whisky-gold/5 flex items-center gap-4 hover:bg-whisky-main/50 transition-colors">
                <div className="w-12 h-12 rounded bg-whisky-dark overflow-hidden flex-shrink-0">
                    <img src={activity.image} alt="item" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-bold text-whisky-gold">{activity.user}</span>
                        <span className="text-gray-400 flex items-center gap-1">
                            {getIcon(activity.action)}
                            {activity.action}
                        </span>
                        <span className="font-bold text-white">{activity.item}</span>
                        {activity.price && (
                             <span className="text-gray-400">for <span className="text-whisky-light">{activity.price} ETH</span></span>
                        )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{activity.time}</p>
                </div>

                <button className="text-xs border border-whisky-gold/20 text-whisky-gold px-3 py-1 rounded hover:bg-whisky-gold hover:text-whisky-dark transition-colors">
                    View
                </button>
            </div>
        ))}
        <div className="p-4 text-center">
            <button className="text-sm text-whisky-muted hover:text-whisky-gold">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Activity;