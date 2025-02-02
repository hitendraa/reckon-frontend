import { motion } from "framer-motion"
import { useState } from "react"

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'trending', label: '🔥 Trending' },
    { id: 'newest', label: '✨ Newest' },
    { id: 'funded', label: '💰 Most Funded' }
  ]

  const projects = [
    {
      id: 1,
      name: "MetaVerse Gaming Hub",
      image: "https://images.unsplash.com/photo-1657734240363-356201c49b15",
      category: "Gaming",
      raised: "156k",
      target: "200k",
      supporters: "2.1k",
      progress: 85,
      creator: {
        name: "CryptoLabs",
        avatar: "https://i.pravatar.cc/150?img=32",
        verified: true
      },
      tags: ["Gaming", "NFT", "Metaverse"],
      trending: true,
      daysLeft: 12
    },
    {
      id: 2,
      name: "DeFi Trading Platform",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55",
      category: "DeFi",
      raised: "234k",
      target: "300k",
      supporters: "3.4k",
      progress: 92,
      creator: {
        name: "BlockTech",
        avatar: "https://i.pravatar.cc/150?img=33",
        verified: false
      },
      tags: ["DeFi", "Trading", "Exchange"],
      trending: false,
      daysLeft: 20
    },
    {
      id: 3,
      name: "NFT Art Gallery",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",
      category: "Art",
      raised: "89k",
      target: "120k",
      supporters: "1.2k",
      progress: 75,
      creator: {
        name: "ArtBlocks",
        avatar: "https://i.pravatar.cc/150?img=34",
        verified: true
      },
      tags: ["Art", "NFT", "Gallery"],
      trending: true,
      daysLeft: 15
    }
  ]

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header with Animated Background */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center relative mb-16 p-8 rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-xl"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                Featured Projects
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Discover Amazing Projects
                </span>
              </h2>
              <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                Explore innovative projects, support creators, and be part of the future
              </p>
            </motion.div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`btn btn-sm ${
                    activeFilter === filter.id
                      ? 'btn-primary'
                      : 'btn-ghost hover:btn-primary/20'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card bg-base-100/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Project Image with Overlay */}
                <figure className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/50 to-transparent"></div>
                  
                  {/* Time Left Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="badge badge-primary gap-2">
                      ⏰ {project.daysLeft} days left
                    </div>
                  </div>
                  
                  {/* Trending Badge */}
                  {project.trending && (
                    <div className="absolute top-4 right-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="badge badge-secondary gap-2"
                      >
                        🔥 Trending
                      </motion.div>
                    </div>
                  )}
                </figure>

                <div className="card-body">
                  {/* Creator Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={project.creator.avatar} alt={project.creator.name} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{project.creator.name}</span>
                        {project.creator.verified && (
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                        )}
                      </div>
                      <div className="text-sm opacity-70">{project.category}</div>
                    </div>
                  </div>

                  {/* Project Title & Progress */}
                  <h3 className="card-title text-xl mb-2">{project.name}</h3>
                  
                  {/* Progress Section */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>{project.raised} XTZ</span>
                      <span className="opacity-70">of {project.target} XTZ</span>
                    </div>
                    
                    <div className="w-full bg-base-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1 }}
                        className="bg-primary h-2 rounded-full"
                      />
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        {project.supporters} Supporters
                      </span>
                      <span>{project.progress}% Funded</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <div key={tag} className="badge badge-outline badge-sm">{tag}</div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="card-actions justify-between items-center mt-6">
                    <button className="btn btn-outline btn-sm">
                      Learn More
                    </button>
                    <button className="btn btn-primary btn-sm gap-2">
                      Support Project
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn btn-outline btn-wide gap-2">
            Load More Projects
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase
