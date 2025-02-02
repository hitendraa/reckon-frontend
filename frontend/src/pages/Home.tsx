import { useState, useEffect } from 'react'
import Hero from "../components/Hero"
import Features from "../components/Features"
import Navbar from "../components/Navbar"
import HowItWorks from "../components/HowItWorks"
import ProjectShowcase from "../components/ProjectShowcase"
import Categories from "../components/Categories"
import CommunityStats from "../components/CommunityStats"
import LeaderBoards from "../components/LeaderBoards"

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-base-200">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Primary gradients */}
        <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 h-[600px] w-[600px] rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/2 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl"></div>
        
        {/* Secondary ambient gradients */}
        <div className="absolute top-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 h-[250px] w-[250px] rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute top-2/3 right-1/4 h-[350px] w-[350px] rounded-full bg-accent/10 blur-3xl"></div>
        
        {/* Moving gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-200/50 to-base-200"></div>
        
        {/* Accent spots */}
        <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 bg-primary/5 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 h-24 w-24 bg-secondary/5 blur-2xl"></div>
        <div className="absolute top-1/4 left-1/3 h-40 w-40 bg-accent/5 blur-2xl"></div>
        
        {/* Mesh gradients */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 via-transparent to-primary/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        <div className="fixed top-0 left-0 right-0 z-30">
          <Navbar className={`transition-all duration-300 ${
            isScrolled 
              ? 'bg-base-100/80 backdrop-blur-lg shadow-lg' 
              : 'bg-transparent hover:bg-base-100/10 hover:backdrop-blur-sm'
          }`} />
        </div>
        <div className="flex-1">
          <Hero />
          <Features />
          <HowItWorks />
          <Categories />
          <ProjectShowcase />
          <LeaderBoards />
          <CommunityStats />
        </div>
      </div>
    </div>
  )
}

export default Home