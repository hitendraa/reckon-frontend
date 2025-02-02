import { motion } from "framer-motion"
import { useState } from "react"

const LeaderBoards = () => {
  const [activeTab, setActiveTab] = useState('donors')

  const tabs = [
    { id: 'donors', label: '🏆 Top Donors', color: 'primary' },
    { id: 'collectors', label: '🎨 NFT Collectors', color: 'secondary' },
    { id: 'creators', label: '⭐ Top Creators', color: 'accent' }
  ]

  const leaderData = {
    donors: [
      { 
        rank: 1,
        wallet: "tz1...8k9j",
        name: "Crypto Whale",
        avatar: "https://i.pravatar.cc/150?img=1",
        amount: "125.5k XTZ",
        projects: 45,
        nfts: 89,
        trend: "+12%",
        badge: "🐋 Whale"
      },
      {
        rank: 2,
        wallet: "tz1...1f8d",
        name: "NFT Lover",
        avatar: "https://i.pravatar.cc/150?img=2",
        amount: "89.2k XTZ",
        projects: 32,
        nfts: 67,
        trend: "+8%",
        badge: "🎨 Artist"
      },
      {
        rank: 3,
        wallet: "tz1...4m2n",
        name: "DeFi King",
        avatar: "https://i.pravatar.cc/150?img=3",
        amount: "45.2k XTZ",
        projects: 12,
        nfts: 34,
        trend: "+15%",
        badge: "💰 Investor"
      },
      {
        rank: 4,
        wallet: "tz1...9p3q",
        name: "GameMaster",
        avatar: "https://i.pravatar.cc/150?img=4",
        amount: "23.8k XTZ",
        projects: 8,
        nfts: 21,
        trend: "+7%",
        badge: "🎮 Gamer"
      }
      // Add more donors...
    ],
    collectors: [
      {
        rank: 1,
        wallet: "tz1...4m2n",
        name: "NFT Master",
        avatar: "https://i.pravatar.cc/150?img=2",
        collection: 234,
        rarity: "Legendary",
        worth: "45.2k XTZ",
        trend: "+8%",
        badge: "🎭 Curator"
      },
      {
        rank: 2,
        wallet: "tz1...1f8d",
        name: "Art Lover",
        avatar: "https://i.pravatar.cc/150?img=5",
        collection: 189,
        rarity: "Rare",
        worth: "23.8k XTZ",
        trend: "+7%",
        badge: "🎨 Collector"
      },
      {
        rank: 3,
        wallet: "tz1...9p3q",
        name: "Crypto King",
        avatar: "https://i.pravatar.cc/150?img=6",
        collection: 156,
        rarity: "Epic",
        worth: "12.5k XTZ",
        trend: "+5%",
        badge: "💎 Investor"
      }
      // Add more collectors...
    ],
    creators: [
      {
        rank: 1,
        wallet: "tz1...9p3q",
        name: "DeFi King",
        avatar: "https://i.pravatar.cc/150?img=3",
        projectsCount: 12,
        totalRaised: "234.5k XTZ",
        supporters: "2.1k",
        trend: "+15%",
        badge: "👑 Expert"
      },
      {
        rank: 2,
        wallet: "tz1...4m2n",
        name: "GameMaster",
        avatar: "https://i.pravatar.cc/150?img=4",
        projectsCount: 8,
        totalRaised: "89.2k XTZ",
        supporters: "1.2k",
        trend: "+8%",
        badge: "🎮 Developer"
      },
      {
        rank: 3,
        wallet: "tz1...1f8d",
        name: "NFT Lover",
        avatar: "https://i.pravatar.cc/150?img=2",
        projectsCount: 32,
        totalRaised: "45.2k XTZ",
        supporters: "789",
        trend: "+12%",
        badge: "🎨 Artist"
      },
      {
        rank: 4,
        wallet: "tz1...8k9j",
        name: "Crypto Whale",
        avatar: "https://i.pravatar.cc/150?img=1",
        projectsCount: 45,
        totalRaised: "23.8k XTZ",
        supporters: "456",
        trend: "+7%",
        badge: "🐋 Whale"
      }
      // Add more creators...
    ]
  }

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Top Contributors
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Leaderboard Champions
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`btn ${
                activeTab === tab.id
                  ? `btn-${tab.color}`
                  : 'btn-ghost hover:bg-base-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Leaderboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card bg-base-100/50 backdrop-blur-sm shadow-xl"
          >
            <div className="card-body">
              <h3 className="card-title mb-6">Top Rankings</h3>
              <div className="space-y-4">
                {leaderData[activeTab as keyof typeof leaderData].map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-base-200/50 hover:bg-base-200 transition-colors"
                  >
                    {/* Rank */}
                    <div className="text-2xl font-bold w-8 text-center">
                      #{leader.rank}
                    </div>

                    {/* Avatar */}
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={leader.avatar} alt={leader.name} />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{leader.name}</span>
                        <span className="text-xs opacity-50">{leader.wallet}</span>
                        <div className="badge badge-primary badge-sm">{leader.badge}</div>
                      </div>
                      <div className="text-sm opacity-70">
                        {activeTab === 'donors' && 'amount' in leader && 'projects' in leader && (
                          <span>Donated {leader.amount} to {leader.projects} projects</span>
                        )}
                        {activeTab === 'collectors' && 'collection' in leader && 'rarity' in leader && (
                          <span>{leader.collection} NFTs • {leader.rarity} Collector</span>
                        )}
                        {activeTab === 'creators' && 'projectsCount' in leader && 'supporters' in leader && (
                          <span>{leader.projectsCount} Projects • {leader.supporters} Supporters</span>
                        )}
                      </div>
                    </div>

                    {/* Trend */}
                    <div className="badge badge-success gap-1">
                      {leader.trend}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats & Achievements */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="stats shadow bg-base-100/50 backdrop-blur-sm w-full"
            >
              <div className="stat">
                <div className="stat-title">Total Donations</div>
                <div className="stat-value text-primary">892K XTZ</div>
                <div className="stat-desc">↗︎ 120 (15%)</div>
              </div>
              <div className="stat">
                <div className="stat-title">NFTs Collected</div>
                <div className="stat-value text-secondary">45.6K</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>
            </motion.div>

            {/* Recent Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card bg-base-100/50 backdrop-blur-sm shadow-xl"
            >
              <div className="card-body">
                <h3 className="card-title mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  {[
                    { icon: "🎉", title: "1000+ Active Donors", desc: "Platform milestone reached" },
                    { icon: "💎", title: "100K NFTs Minted", desc: "Across all projects" },
                    { icon: "🚀", title: "500K XTZ Volume", desc: "In the last 30 days" }
                  ].map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-base-200/50">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <div className="font-medium">{achievement.title}</div>
                        <div className="text-sm opacity-70">{achievement.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeaderBoards
