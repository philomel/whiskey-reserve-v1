export interface NFT {
  id: string;
  name: string;
  collection: string;
  image: string;
  price: number;
  lastSale?: number;
  currency: string;
  likes: number;
  description?: string;
  status: 'buy_now' | 'auction' | 'new';
  type: 'Bottle' | 'Cask';
  isListed?: boolean;
  listingPrice?: number;
  expiryDate?: string;
}

export interface Collection {
  id: string;
  name: string;
  coverImage: string;
  floorPrice: number;
}

export interface ActivityItem {
  id: string;
  user: string;
  action: 'bought' | 'listed' | 'offer' | 'minted';
  item: string;
  price?: number;
  time: string;
  image: string;
}

export interface OTCDeal {
  id: string;
  project: string;
  logo: string;
  type: 'sell' | 'buy';
  amount: number | string;
  price: number;
  fdv?: string;
  status: 'active' | 'pending';
  listedDate: string;
  vesting?: string;
}

export enum ViewMode {
  GRID = 'GRID',
  LIST = 'LIST'
}

export interface Offer {
  id: string;
  nftId: string;
  nftName: string;
  nftImage: string;
  from: string;
  price: number;
  currency: string;
  date: string;
  expiry: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
}

export interface Notification {
  id: string;
  type: 'sold' | 'offer' | 'system' | 'listing';
  title: string;
  message: string;
  time: string;
  read: boolean;
  image?: string;
}

export interface Wallet {
  id: string;
  name: string;
  address: string;
  type: 'metamask' | 'okx' | 'walletconnect' | 'other';
  balance: number;
  isPrimary: boolean;
  network: string;
}