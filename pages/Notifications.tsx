import React, { useState } from 'react';
import { Settings, CheckCircle, ShoppingBag, Tag, AlertCircle } from 'lucide-react';
import { Notification } from '../types';

const Notifications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'unread' | 'sales' | 'offers' | 'system'>('all');

  const mockNotifications: Notification[] = [
    {
      id: '1',
      type: 'sold',
      title: 'Your NFT #123 has been sold!',
      message: 'Sold for 2.0 ETH to @buyer123',
      time: '2 minutes ago',
      read: false,
      image: 'https://picsum.photos/50/50?random=1'
    },
    {
      id: '2',
      type: 'offer',
      title: 'New offer: 1.8 ETH on NFT #456',
      message: 'From @collector_xyz',
      time: '1 hour ago',
      read: false,
      image: 'https://picsum.photos/50/50?random=2'
    },
    {
      id: '3',
      type: 'listing',
      title: '@artist123 listed a new NFT in collection you follow',
      message: '3 hours ago',
      time: '3 hours ago',
      read: true,
    },
    {
      id: '4',
      type: 'system',
      title: 'System: Platform maintenance scheduled',
      message: 'Dec 1, 2025 2:00 AM - 4:00 AM UTC',
      time: '1 day ago',
      read: true,
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'sold': return <ShoppingBag className="w-5 h-5 text-green-400" />;
      case 'offer': return <Tag className="w-5 h-5 text-whisky-gold" />;
      case 'system': return <AlertCircle className="w-5 h-5 text-blue-400" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const filtered = mockNotifications.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !n.read;
    return n.type === filter;
  });

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif font-bold text-whisky-light">Notifications</h1>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
            {['all', 'unread', 'sales', 'offers', 'system'].map(f => (
                <button 
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${filter === f ? 'bg-whisky-gold text-whisky-dark' : 'bg-whisky-card border border-whisky-gold/10 text-gray-400 hover:text-whisky-gold'}`}
                >
                    {f}
                </button>
            ))}
        </div>
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-whisky-gold hover:bg-whisky-card rounded-lg transition-colors">
                <CheckCircle className="w-4 h-4" /> Mark All as Read
            </button>
            <button className="p-2 text-gray-400 hover:text-whisky-gold transition-colors">
                <Settings className="w-5 h-5" />
            </button>
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map(notification => (
            <div key={notification.id} className={`p-4 rounded-xl border transition-colors flex gap-4 ${notification.read ? 'bg-whisky-card/30 border-whisky-gold/5' : 'bg-whisky-card border-whisky-gold/20'}`}>
                <div className="flex-shrink-0 mt-1">
                    {notification.image ? (
                        <div className="w-12 h-12 rounded bg-whisky-dark overflow-hidden border border-whisky-gold/20">
                             <img src={notification.image} alt="thumb" className="w-full h-full object-cover" />
                        </div>
                    ) : (
                        <div className="w-12 h-12 rounded bg-whisky-dark/50 flex items-center justify-center border border-whisky-gold/10">
                            {getIcon(notification.type)}
                        </div>
                    )}
                </div>
                <div className="flex-grow">
                    <div className="flex justify-between items-start">
                        <h3 className={`font-medium ${notification.read ? 'text-gray-300' : 'text-white'}`}>{notification.title}</h3>
                        {!notification.read && <span className="w-2 h-2 rounded-full bg-whisky-gold"></span>}
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                    {notification.type === 'offer' && (
                        <button className="mt-2 text-xs border border-whisky-gold/20 text-whisky-gold px-3 py-1 rounded hover:bg-whisky-gold hover:text-whisky-dark transition-colors">
                            View Offer
                        </button>
                    )}
                    <p className="text-xs text-gray-600 mt-2">{notification.time}</p>
                </div>
            </div>
        ))}
        {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
                No notifications found.
            </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;