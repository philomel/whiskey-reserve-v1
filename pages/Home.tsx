import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import NFTCard from '../components/NFTCard';
import { NFT } from '../types';

const mockTrending: NFT[] = [
  {
    id: '1',
    name: 'Highland Park 50yo',
    collection: 'Distillery Rare',
    image: 'https://picsum.photos/400/400?random=1',
    price: 4.5,
    currency: 'ETH',
    likes: 120,
    status: 'buy_now',
    type: 'Bottle'
  },
  {
    id: '2',
    name: 'Macallan Sherry Hogshead 2015',
    collection: 'Holy Grail Series',
    image: 'https://picsum.photos/400/400?random=2',
    price: 120,
    currency: 'ETH',
    likes: 543,
    status: 'buy_now',
    type: 'Cask'
  },
  {
    id: '3',
    name: 'Yamazaki 25yo',
    collection: 'Japanese Harmony',
    image: 'https://picsum.photos/400/400?random=3',
    price: 12.8,
    currency: 'ETH',
    likes: 89,
    status: 'buy_now',
    type: 'Bottle'
  },
  {
    id: '4',
    name: 'Bowmore 1965',
    collection: 'Islay Legends',
    image: 'https://picsum.photos/400/400?random=4',
    price: 22,
    currency: 'ETH',
    likes: 210,
    status: 'buy_now',
    type: 'Bottle'
  }
];

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-whisky-dark via-transparent to-whisky-main"></div>
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-whisky-dark"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block border border-whisky-gold/30 rounded-full px-4 py-1 mb-6 bg-whisky-dark/50 backdrop-blur-sm">
            <span className="text-xs font-semibold text-whisky-gold tracking-widest uppercase">The Premier Spirit Exchange</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-whisky-light via-whisky-gold to-whisky-light drop-shadow-lg">
            Invest in Liquid History
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover, trade, and own the world's most exclusive whisky casks and bottles as verified NFTs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/explore" className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-whisky-gold to-whisky-light text-whisky-dark font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,165,116,0.4)]">
              Explore NFTs
            </Link>
            <Link to="/create" className="w-full sm:w-auto px-8 py-3 border border-whisky-gold/40 text-whisky-light font-bold rounded-full hover:bg-whisky-gold/10 transition-colors backdrop-blur-sm">
              Start Creating
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-serif font-bold text-whisky-light">Featured Collections</h2>
            <Link to="/explore" className="text-sm text-whisky-gold flex items-center gap-2 hover:underline">
                View All <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { title: 'The Macallan Red', floor: '5.2 ETH', img: 'https://picsum.photos/500/300?random=10' },
                { title: 'Dalmore Decades', floor: '3.1 ETH', img: 'https://picsum.photos/500/300?random=11' },
                { title: 'Karuizawa Ghost', floor: '15.5 ETH', img: 'https://picsum.photos/500/300?random=12' },
            ].map((col, idx) => (
                <div key={idx} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                    <img src={col.img} alt={col.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-whisky-dark via-whisky-dark/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-6 left-6">
                        <h3 className="text-xl font-bold font-serif text-white mb-1">{col.title}</h3>
                        <p className="text-sm text-whisky-gold">Floor: {col.floor}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-10 container mx-auto px-4 border-t border-whisky-gold/10">
        <div className="flex items-center gap-3 mb-10">
            <TrendingUp className="w-6 h-6 text-whisky-gold" />
            <h2 className="text-3xl font-serif font-bold text-whisky-light">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockTrending.map((nft) => (
                <NFTCard key={nft.id} nft={nft} />
            ))}
        </div>
        <div className="mt-12 text-center">
             <Link to="/explore?sort=trending" className="inline-block px-8 py-3 border border-whisky-gold/20 text-whisky-muted hover:text-whisky-gold hover:border-whisky-gold transition-colors rounded-full text-sm font-medium uppercase tracking-wide">
                View All Trending
            </Link>
        </div>
      </section>

      {/* Recent Activity Ticker (Simplified) */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 bg-whisky-gold rounded"></div>
            <h2 className="text-2xl font-serif font-bold text-whisky-light">Recent Activity</h2>
        </div>
        <div className="bg-whisky-card/30 border border-whisky-gold/10 rounded-xl overflow-hidden backdrop-blur-sm">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b border-whisky-gold/5 hover:bg-whisky-card/50 transition-colors last:border-none">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded bg-whisky-dark overflow-hidden border border-whisky-gold/20">
                            <img src={`https://picsum.photos/50?random=${20+i}`} className="w-full h-full object-cover" alt="item"/>
                        </div>
                        <div>
                            <p className="text-sm text-gray-300">
                                <span className="text-whisky-gold font-medium">@User{180+i}</span> bought <span className="text-white font-medium">Springbank 21yo #{100+i}</span>
                            </p>
                            <p className="text-xs text-gray-500">{i * 5} minutes ago</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-whisky-light">2.4 ETH</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;