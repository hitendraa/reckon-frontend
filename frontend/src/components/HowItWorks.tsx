import { motion } from "framer-motion"

const HowItWorks = () => {
  const steps = [
    {
      title: "Connect Wallet",
      description: "Link your Tezos wallet to start your journey. We support Temple, Kukai, and other leading wallets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M18.75 8.25h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 12.75a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75zM12 18.75a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75zM12 6.75a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75zM19.5 12.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM19.5 18.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM21.75 6.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5h1.5a.75.75 0 00.75-.75z" />
        </svg>
      ),
      color: "primary"
    },
    {
      title: "Submit Project",
      description: "Pay a small fee in XTZ to submit your project. This helps maintain quality and prevents spam.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
        </svg>
      ),
      color: "secondary"
    },
    {
      title: "Get Verified",
      description: "Our admin team reviews your submission to ensure quality and legitimacy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
      color: "accent"
    },
    {
      title: "Receive Support",
      description: "Get donations in XTZ from supporters who believe in your project.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
          <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
        </svg>
      ),
      color: "secondary"
    }
  ]

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="badge badge-primary mb-4">Simple Process</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Start Building in Minutes
              </span>
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Our streamlined process makes it easy to showcase your project and start receiving support
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary hidden lg:block -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-base-100 border-2 border-primary flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>

              {/* Card Content */}
              <div className="card bg-base-100/50 backdrop-blur-sm shadow-xl group-hover:shadow-2xl group-hover:bg-base-100/70 transition-all duration-300 overflow-visible border border-base-content/5">
                <div className="card-body">
                  <div className="relative">
                    {/* Icon Background */}
                    <div className="absolute inset-0 bg-primary/5 rounded-full transform -rotate-6 transition-transform group-hover:rotate-3"></div>
                    <div className={`w-12 h-12 rounded-lg bg-${step.color}/10 flex items-center justify-center text-${step.color} mb-4 transform transition-transform group-hover:scale-110`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="card-title text-xl mb-2">{step.title}</h3>
                  <p className="text-base-content/70">{step.description}</p>
                  
                  {/* Progress Indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className={`h-1 w-full rounded-full bg-${step.color}/20`}>
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        className={`h-full rounded-full bg-${step.color}`}
                      />
                    </div>
                    <span className={`text-xs font-medium text-${step.color}`}>
                      Step {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center">
            <p className="text-base-content/70 mb-6 max-w-md">
              Ready to showcase your project to the world?
            </p>
            <button className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-primary/20">
              Launch Your Project
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
