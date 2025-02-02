import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import RevolvingText from './RevolvingText'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredProjects = [
    {
      title: "MetaVerse Hub",
      creator: "CryptoLabs",
      image: "https://images.pexels.com/photos/8721320/pexels-photo-8721320.jpeg",
      logo: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01",
      description: "Revolutionary NFT marketplace in the metaverse",
      stats: { users: "47K", volume: "85k", nfts: "12k" },
      tags: ["NFT Marketplace", "Metaverse", "Gaming"]
    },
    {
      title: "DeFi Kingdom",
      creator: "BlockMasters",
      image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
      logo: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01",
      description: "Gamified DeFi protocol with yield farming",
      stats: { users: "32K", volume: "120k", nfts: "8k" },
      tags: ["DeFi", "Gaming", "Yield"]
    },
    {
      title: "ArtBlock",
      creator: "PixelLabs",
      image: "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg",
      logo: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01",
      description: "AI-powered generative art platform",
      stats: { users: "25K", volume: "45k", nfts: "15k" },
      tags: ["Art", "AI", "Generative"]
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredProjects.length])

  return (
    <div className="relative w-full overflow-hidden min-h-screen flex items-center">
      {/* Floating Cards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-32 -left-10 w-56 h-80 transform -rotate-12 opacity-80"
        >
          <motion.div className="card bg-base-100 shadow-xl">
              <figure className="relative h-48">
                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0" alt="NFT Art" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent"></div>
              </figure>
              <div className="card-body p-4">
                <div className="badge badge-secondary">Game NFT</div>
                <h3 className="card-title text-sm">Crystal Raiders</h3>
              </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
          className="absolute top-48 -right-10 w-56 h-80 transform rotate-12 opacity-80"
        >
          <div className="card bg-base-100 shadow-xl">
            <figure className="relative h-48">
              <img src="https://images.unsplash.com/photo-1634973357973-f2ed2657db3c" alt="NFT Art" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent"></div>
            </figure>
            <div className="card-body p-4">
              <div className="badge badge-primary">Art NFT</div>
              <h3 className="card-title text-sm">Digital Dreams</h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left max-w-2xl pt-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Web3 Innovation Platform</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Showcase Your Projects
              </span>
              <br />
              <span className="text-base-content">on the Blockchain</span>
            </h1>
            
            <p className="text-lg mb-6 text-base-content/80 leading-relaxed max-w-xl">
              Transform your ideas into NFTs, receive XTZ donations, and build a thriving community. 
              Join the future of decentralized project showcasing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="btn btn-primary btn-lg gap-2 hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Submit Project
              </button>
              <button className="btn btn-ghost btn-lg gap-2 hover:scale-105 transition-transform">
                Explore Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="stats stats-vertical lg:stats-horizontal shadow-lg bg-base-100/50 backdrop-blur-sm">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                </div>
                <div className="stat-title">Projects</div>
                <div className="stat-value text-primary">500+</div>
                <div className="stat-desc">↗︎ 40 (30 days)</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div className="stat-title">Donated</div>
                <div className="stat-value text-secondary">89k XTZ</div>
                <div className="stat-desc">↗︎ 90 (30 days)</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div className="stat-title">Users</div>
                <div className="stat-value text-accent">2.6K</div>
                <div className="stat-desc">↗︎ 400 (30 days)</div>
              </div>
            </div>
          </motion.div>

          {/* Center Revolving Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="relative">
              <RevolvingText />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-3 -right-3"
              >
                <div className="badge badge-primary">Web3</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Right Content - Featured Projects Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-sm lg:max-w-md mt-8 lg:mt-16"
          >
            <div className="relative group">
              <div className="carousel w-full">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      x: currentSlide === index ? 0 : 100,
                      scale: currentSlide === index ? 1 : 0.9
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 ${currentSlide === index ? 'visible' : 'invisible'}`}
                  >
                    <div className="card bg-base-100 shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
                      <figure className="relative h-48">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/50 to-transparent"></div>
                      </figure>
                      
                      <div className="card-body p-6 relative">
                        <div className="absolute -top-24 right-4 w-16 h-16">
                          <img 
                            src={project.logo}
                            alt="Logo"
                            className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-base-100"
                          />
                        </div>

                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h2 className="card-title text-2xl">{project.title}</h2>
                            <p className="text-sm opacity-70">by {project.creator}</p>
                          </div>
                          <div className="badge badge-primary">Featured</div>
                        </div>

                        <div className="flex justify-between items-center gap-4 my-4">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="flex flex-col items-center p-2 bg-base-200 rounded-lg flex-1">
                              <span className="text-primary text-lg font-bold">{value}</span>
                              <span className="text-xs capitalize">{key}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag) => (
                            <div key={tag} className="badge badge-outline">{tag}</div>
                          ))}
                        </div>

                        <div className="card-actions justify-end mt-4">
                          <button className="btn btn-primary btn-sm gap-2">
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    </motion.div>
                ))}
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center gap-2 mt-4">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-primary w-4' : 'bg-base-300'
                    }`}
                  />
                ))}
              </div>

              {/* Background Accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-xl opacity-20 group-hover:opacity-30 transition-opacity -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero