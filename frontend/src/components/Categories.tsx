import { motion } from "framer-motion"
import { useState } from "react"

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("GameFi")
  
  const categories = [
    {
      name: "GameFi",
      icon: "🎮",
      projects: 156,
      growth: "+45%",
      color: "primary",
      description: "Play-to-earn games and gaming NFTs",
      trending: [
        {
          title: "Meta Legends",
          image: "https://images.unsplash.com/photo-1657734240363-356201c49b15",
          raised: "125k",
          target: "150k",
          progress: 83,
          hot: true,
          tags: ["P2E", "NFT", "Metaverse"]
        },
        {
          title: "Crypto Dragons",
          image: "https://images.unsplash.com/photo-1601987077677-5346c0c57d3f",
          raised: "89k",
          target: "100k",
          progress: 89,
          hot: true,
          tags: ["GameFi", "Dragons", "Strategy"]
        }
      ]
    },
    {
      name: "DeFi",
      icon: "💰",
      projects: 234,
      growth: "+67%",
      color: "secondary",
      description: "Decentralized finance protocols"
    },
    {
      name: "NFT Art",
      icon: "🎨",
      projects: 189,
      growth: "+38%",
      color: "accent",
      description: "Digital art and collectibles"
    },
    {
      name: "DAOs",
      icon: "🏛️",
      projects: 78,
      growth: "+92%",
      color: "primary",
      description: "Decentralized organizations"
    }
  ]

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge badge-accent mb-4">Categories</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Explore by Category
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Discover projects across different categories and find the perfect opportunity to contribute
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Cards */}
          <div className="lg:w-1/3">
            <div className="grid gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group cursor-pointer ${activeCategory === category.name ? 'scale-105' : ''}`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <div className={`card bg-base-100/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden
                    ${activeCategory === category.name ? 'border-2 border-primary' : ''}`}>
                    <div className="card-body">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl bg-base-200/50 w-16 h-16 rounded-xl flex items-center justify-center">
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="card-title text-xl">{category.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm opacity-70">{category.projects} Projects</span>
                            <div className="badge badge-primary badge-sm">{category.growth}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Active Indicator */}
                    <div className={`h-1 bg-primary transition-all duration-300 
                      ${activeCategory === category.name ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Trending Projects */}
          <div className="lg:w-2/3">
            <div className="bg-base-100/30 backdrop-blur-lg rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Trending in {activeCategory}
                  </span>
                </h3>
                <button className="btn btn-primary btn-sm gap-2">
                  View All
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {categories.find(c => c.name === activeCategory)?.trending?.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="card bg-base-100 shadow-xl group"
                  >
                    <figure className="relative h-48">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent"></div>
                      {project.hot && (
                        <div className="absolute top-4 right-4">
                          <div className="badge badge-secondary gap-2">
                            🔥 Hot
                          </div>
                        </div>
                      )}
                    </figure>
                    
                    <div className="card-body">
                      <h4 className="card-title">{project.title}</h4>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-base-200 rounded-full h-2 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1 }}
                          className="bg-primary h-2 rounded-full"
                        />
                      </div>
                      
                      <div className="flex justify-between text-sm mb-4">
                        <span>{project.raised} XTZ Raised</span>
                        <span className="opacity-70">{project.progress}%</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags?.map(tag => (
                          <div key={tag} className="badge badge-outline badge-sm">{tag}</div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
