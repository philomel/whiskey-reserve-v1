import React, { useState } from 'react';
import { ShoppingCart, Tag, ArrowRightLeft, Zap, User } from 'lucide-react';
import { ActivityItem } from '../types';

const Activity: React.FC = () => {
  const [showMyActivity, setShowMyActivity] = useState(false);

  // Mock data with "current user" logic (assuming current user is 0x8a...4b12)
  const currentUser = '0x8a...4b12';

  const activities: ActivityItem[] = [
    { id: '1', user: '0x8a...4b12', action: 'bought', item: 'Macallan 1926 #4', price: 1.5, time: '2 minutes ago', image: 'https://picsum.photos/50/50?random=1' },
    { id: '2', user: '0x3c...9d21', action: 'listed', item: 'Yamazaki 25yo', price: 2.0, time: '10 minutes ago', image: 'https://picsum.photos/50/50?random=2' },
    { id: '3', user: '0x1f...5e33', action: 'offer', item: 'Springbank 21yo', price: 0.8, time: '1 hour ago', image: 'https://picsum.photos/50/50?random=3' },
    { id: '4', user: '0x9b...1a44', action: 'minted', item: 'New Cask Drop #100', time: '2 hours ago', image: 'https://picsum.photos/50/50?random=4' },
    { id: '5', user: '0x8a...4b12', action: 'listed', item: 'Glenfiddich 40yo', price: 5.0, time: '1 day ago', image: 'https://picsum.photos/50/50?random=5' },
  ];

  const filteredActivities = showMyActivity 
    ? activities.filter(a => a.user === currentUser)
    : activities;

  const getIcon = (action: string) => {
    switch(action) {
      case 'bought': return <ShoppingCart className="w-4 h-4 text-green-500" />;
      case 'listed': return <Tag className="w-4 h-4 text-yellow-600" />;
      case 'offer': return <Zap className="w-4 h-4 text-blue-500" />;
      default: return <ArrowRightLeft className="w-4 h-4 text-purple-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-4xl">
      <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-8">Activity Feed</h1>
      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
            {['All', 'Sales', 'Listings', 'Offers', 'Transfers'].map(filter => (
                <button key={filter} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-500 hover:text-whisky-dark hover:border-whisky-dark transition-colors whitespace-nowrap shadow-sm">
                    {filter}
                </button>
            ))}
        </div>

        <button 
            onClick={() => setShowMyActivity(!showMyActivity)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md ${showMyActivity ? 'bg-whisky-button text-whisky-button-text' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
        >
            <User className="w-4 h-4" />
            {showMyActivity ? 'Showing My Activity' : 'My Activity'}
        </button>
      </div>

      <div className="bg-white border border-whisky-border rounded-xl overflow-hidden shadow-lg">
        {filteredActivities.length > 0 ? (
            filteredActivities.map((activity, index) => (
                <div key={activity.id} className="p-4 border-b border-gray-100 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 rounded bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                        <img src={activity.image} alt="item" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                            <span className="font-bold text-whisky-button">{activity.user === currentUser ? 'You' : activity.user}</span>
                            <span className="text-gray-500 flex items-center gap-1">
                                {getIcon(activity.action)}
                                {activity.action}
                            </span>
                            <span className="font-bold text-whisky-dark">{activity.item}</span>
                            {activity.price && (
                                <span className="text-gray-500">for <span className="text-whisky-dark font-medium">{activity.price} ETH</span></span>
                            )}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>

                    <button className="text-xs border border-gray-300 text-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors">
                        View
                    </button>
                </div>
            ))
        ) : (
            <div className="p-12 text-center text-gray-400">
                No activity found.
            </div>
        )}
        <div className="p-4 text-center border-t border-gray-100">
            <button className="text-sm text-gray-500 hover:text-whisky-dark transition-colors">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Activity;