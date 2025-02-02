import { motion } from "framer-motion"

const CommunityStats = () => {
  const recentActivities = [
    {
      type: "donation",
      user: "Alex.tez",
      project: "MetaVerse Hub",
      amount: "500 XTZ",
      time: "2m ago",
      icon: "💎"
    },
    {
      type: "nft_mint",
      user: "crypto_whale",
      project: "DeFi Kingdom",
      tokenId: "#420",
      time: "5m ago",
      icon: "🎨"
    },
    {
      type: "verification",
      user: "GameMaster",
      project: "Pixel Warriors",
      time: "15m ago",
      icon: "✅"
    }
  ]

  const metrics = [
    {
      label: "Total Value Locked",
      value: "1.2M XTZ",
      change: "+12.5%",
      icon: "📈"
    },
    {
      label: "NFTs Minted",
      value: "15.4K",
      change: "+5.2%",
      icon: "🎯"
    },
    {
      label: "Active Projects",
      value: "2.8K",
      change: "+8.1%",
      icon: "⚡"
    }
  ]

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Stats Cards */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card bg-base-100/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="card-body">
                    <div className="text-4xl mb-4">{metric.icon}</div>
                    <h3 className="text-3xl font-bold">{metric.value}</h3>
                    <p className="text-base-content/70">{metric.label}</p>
                    <div className="badge badge-success gap-2">
                      {metric.change} 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042.814a.75.75 0 01-.919-.53z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Platform Statistics */}
            <div className="mt-8">
              <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-100/50 backdrop-blur-sm">
                <div className="stat">
                  <div className="stat-title">Daily Volume</div>
                  <div className="stat-value text-primary">45K XTZ</div>
                  <div className="stat-desc">↗︎ 35 (3.5%)</div>
                </div>
                <div className="stat">
                  <div className="stat-title">New Projects</div>
                  <div className="stat-value text-secondary">120</div>
                  <div className="stat-desc">↗︎ 12 (2%)</div>
                </div>
                <div className="stat">
                  <div className="stat-title">New Users</div>
                  <div className="stat-value text-accent">450</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="lg:w-1/3">
            <div className="card bg-base-100/50 backdrop-blur-sm shadow-xl">
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Live Activity
                </h3>

                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors duration-200"
                    >
                      <div className="text-2xl">{activity.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{activity.user}</span>
                          {activity.type === "donation" && (
                            <span className="text-sm opacity-70">donated {activity.amount} to</span>
                          )}
                          {activity.type === "nft_mint" && (
                            <span className="text-sm opacity-70">minted {activity.tokenId} from</span>
                          )}
                          {activity.type === "verification" && (
                            <span className="text-sm opacity-70">verified</span>
                          )}
                        </div>
                        <div className="text-sm">
                          <span className="text-primary">{activity.project}</span>
                          <span className="text-xs opacity-50 ml-2">{activity.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button className="btn btn-ghost btn-sm mt-4 w-full">
                  View All Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityStats
