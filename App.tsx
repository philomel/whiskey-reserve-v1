import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import OTC from './pages/OTC';
import OTCDealDetail from './pages/OTCDealDetail';
import CreateOTCDeal from './pages/CreateOTCDeal';
import Activity from './pages/Activity';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NFTDetail from './pages/NFTDetail';
import MyAccount from './pages/MyAccount';
import NFTManagement from './pages/NFTManagement';
import Notifications from './pages/Notifications';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          
          {/* OTC Routes */}
          <Route path="/otc" element={<OTC />} />
          <Route path="/otc/deal/create-otc" element={<CreateOTCDeal />} />
          <Route path="/otc/deal/:id" element={<OTCDealDetail />} />

          <Route path="/activity" element={<Activity />} />
          <Route path="/notifications" element={<Notifications />} />
          
          {/* Main Profile (Public View) */}
          <Route path="/profile" element={<Profile />} />
          
          {/* Profile Management Routes */}
          <Route path="/profile/my-nfts" element={<MyAccount section="my-nfts" />} />
          <Route path="/profile/my-listings" element={<MyAccount section="listings" />} />
          <Route path="/profile/offers-received" element={<MyAccount section="offers-received" />} />
          <Route path="/profile/my-offers" element={<MyAccount section="my-offers" />} />
          <Route path="/profile/favorites" element={<MyAccount section="favorites" />} />
          <Route path="/profile/created" element={<MyAccount section="created" />} />
          <Route path="/profile/royalties" element={<MyAccount section="royalties" />} />
          <Route path="/profile/transactions" element={<MyAccount section="transactions" />} />

          {/* NFT Actions */}
          <Route path="/profile/list-nft/:id" element={<NFTManagement action="list" />} />
          <Route path="/profile/transfer/:id" element={<NFTManagement action="transfer" />} />
          <Route path="/profile/withdraw" element={<NFTManagement action="withdraw" />} />

          {/* Settings Sub-routes */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/wallets" element={<Settings initialTab="wallets" />} />
          <Route path="/settings/privacy" element={<Settings initialTab="privacy" />} />

          <Route path="/nft/:id" element={<NFTDetail />} />
          <Route path="/create" element={<div className="p-20 text-center text-whisky-gold">Create Feature Coming Soon</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;