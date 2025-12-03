import React, { useState } from 'react';
import { Search, ChevronDown, CheckCircle, XCircle, Clock, ExternalLink, FileText } from 'lucide-react';

const DAO: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'closed'>('active');

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
        {/* Header Section */}
        <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-whisky-dark mb-3">DAO Governance</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Shape the future of our platform through community voting. All proposals are hosted on Snapshot.
            </p>
            <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search proposals..." 
                    className="w-full bg-white border border-whisky-border rounded-full py-3 pl-12 pr-4 text-whisky-dark focus:border-whisky-button outline-none shadow-md"
                />
            </div>
        </div>

        {/* Governance Stats */}
        <div className="bg-white border border-whisky-border rounded-xl p-6 mb-12 shadow-md">
            <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Governance Stats:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                        <FileText className="w-5 h-5 text-whisky-gold" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-whisky-dark">47</p>
                        <p className="text-xs text-gray-500">Total Proposals</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">Passed: <span className="text-whisky-dark font-bold">32</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                             <XCircle className="w-4 h-4 text-red-500" />
                            <span className="text-sm text-gray-600">Rejected: <span className="text-whisky-dark font-bold">8</span></span>
                        </div>
                     </div>
                     <div className="h-8 w-px bg-gray-200"></div>
                     <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                         <span className="text-sm text-gray-600">Active: <span className="text-whisky-dark font-bold">7</span></span>
                     </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                         <div className="w-5 h-5 flex items-center justify-center font-bold text-whisky-dark text-xs">VP</div>
                    </div>
                     <div>
                        <p className="text-2xl font-bold text-whisky-dark">15,234</p>
                        <p className="text-xs text-gray-500">Total Voters</p>
                    </div>
                </div>
                 <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between border border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-whisky-gold animate-pulse"></div>
                        <span className="text-sm text-whisky-dark font-bold">Your Voting Power</span>
                    </div>
                    <span className="text-gray-700 font-mono font-bold">1,250 tokens</span>
                </div>
            </div>
        </div>

        {/* Proposals Section */}
        <div>
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-gray-200 mb-6">
                <button 
                    onClick={() => setActiveTab('active')}
                    className={`pb-4 px-2 text-lg font-serif font-bold transition-colors relative ${activeTab === 'active' ? 'text-whisky-button' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    Active Proposals (7)
                    {activeTab === 'active' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-button"></span>}
                </button>
                <button 
                    onClick={() => setActiveTab('closed')}
                    className={`pb-4 px-2 text-lg font-serif font-bold transition-colors relative ${activeTab === 'closed' ? 'text-whisky-button' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    Closed Proposals (40)
                    {activeTab === 'closed' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-button"></span>}
                </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 mb-8">
                <span className="text-sm text-gray-500">Filter & Sort:</span>
                <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-whisky-dark hover:border-whisky-dark">
                    Category: All <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-whisky-dark hover:border-whisky-dark">
                    Status: All <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-whisky-dark hover:border-whisky-dark ml-auto">
                    Sort: Newest <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            {/* Active Proposals List */}
            {activeTab === 'active' && (
                <div className="space-y-6">
                    {/* Proposal Card 1 */}
                    <div className="bg-white border border-whisky-border rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-200 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> ACTIVE
                                </span>
                                <span className="text-gray-500 text-sm">Proposal #47</span>
                            </div>
                            <span className="text-sm text-gray-500">Ends: Dec 5, 2025 (3 days left)</span>
                        </div>

                        <h3 className="text-xl font-bold text-whisky-dark mb-2">Reduce Platform Fee to 2%</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs flex items-center gap-1">
                                💰 Fee Structure
                            </span>
                            <span>•</span>
                            <span>Proposed by: <span className="text-whisky-button font-medium">@dao_member_xyz</span></span>
                            <span>•</span>
                            <span>Nov 25, 2025</span>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Current Results:</h4>
                            
                            <div className="mb-3">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="flex items-center gap-1 text-green-600 font-medium"><CheckCircle className="w-3 h-3" /> For</span>
                                    <span className="text-gray-600">65% (8,234 votes)</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <div className="bg-green-500 h-full rounded-full" style={{width: '65%'}}></div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="flex items-center gap-1 text-red-600 font-medium"><XCircle className="w-3 h-3" /> Against</span>
                                    <span className="text-gray-600">35% (4,432 votes)</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                    <div className="bg-red-500 h-full rounded-full" style={{width: '35%'}}></div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-200 pt-3">
                                <span>Quorum: 240,000 / 200,000</span>
                                <span className="text-green-600 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Reached</span>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button className="flex items-center gap-2 bg-whisky-button text-whisky-button-text px-6 py-2 rounded-lg font-bold hover:opacity-90 shadow-md">
                                Vote on Snapshot <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

             {activeTab === 'closed' && (
                <div className="space-y-6">
                     <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                         <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-200 flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" /> PASSED
                                </span>
                                <span className="text-gray-500 text-sm">Proposal #44</span>
                            </div>
                            <span className="text-sm text-gray-500">Ended: Nov 20, 2025</span>
                        </div>
                         <h3 className="text-xl font-bold text-gray-700 mb-2">Implement NFT Royalty Standard</h3>
                         <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                            <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs flex items-center gap-1">
                                📜 Policy
                            </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm mb-4">
                             <span className="text-green-600 font-bold">73% For</span>
                             <div className="w-32 bg-gray-200 rounded-full h-1.5">
                                 <div className="bg-green-500 h-full rounded-full" style={{width: '73%'}}></div>
                             </div>
                             <span className="text-gray-500 ml-auto flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Executed Nov 22</span>
                        </div>
                         <div className="border-t border-gray-200 pt-4 flex justify-end">
                            <button className="text-sm text-whisky-button hover:underline flex items-center gap-1">View Details <ExternalLink className="w-3 h-3" /></button>
                         </div>
                     </div>
                </div>
             )}
        </div>
    </div>
  );
};

export default DAO;