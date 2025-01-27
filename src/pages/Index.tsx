import { motion } from "framer-motion";
import { useState, useRef } from "react";
import CreditCard from "../components/CreditCard";
import PhoneDisplay from "../components/PhoneDisplay";
import PartnerCard from "../components/PartnerCard";
import FeatureCard from "../components/FeatureCard";
import DiagonalCards from "../components/DiagonalCards";

const Index = () => {
  const partnersContainerRef = useRef<HTMLDivElement>(null);

  const scrollPartners = (direction: "left" | "right") => {
    if (partnersContainerRef.current) {
      const scrollAmount = direction === "right" ? 400 : -400;
      partnersContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const partners = [
    "Notion", "Airtable", "Zudio", "Gumroad",
    "Lifestyle", "Gumroad", "Lifestyle", "Zudio"
  ];

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const features = [
    {
      title: "Online Payments",
      description: "Accept payments online with our secure payment gateway",
      icon: "💳"
    },
    {
      title: "Smart POS",
      description: "Transform your smartphone into a payment terminal",
      icon: "📱"
    },
    {
      title: "Instant Settlements",
      description: "Get your money faster with instant settlement",
      icon: "⚡"
    },
    {
      title: "Business Analytics",
      description: "Track your business growth with detailed analytics",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">pine labs</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Partners</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Developers</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
          <button className="cta-button px-6 py-2 rounded-full font-medium">
            Get Started
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold leading-tight"
            >
              Reimagine
              <br />
              'Business as
              <br />
              usual'.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-lg"
            >
              Join millions of businesses across the globe to change
              the way you accept payments both online and in-person,
              lead the charge in issuing cards and credit and totally
              revamp the way you touch your customer's lives.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-4"
            >
              <button className="cta-button px-8 py-3 rounded-full font-medium">
                Explore Capabilities
              </button>
              <button className="px-8 py-3 rounded-full font-medium border border-gray-300 hover:border-gray-400 transition-colors">
                Talk to us
              </button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            <motion.div
              animate={{ y: [-10, 10] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse",
                duration: 2
              }}
              className="relative z-10"
            >
              <CreditCard />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse",
                duration: 2
              }}
              className="absolute top-40 left-40 z-20"
            >
              <PhoneDisplay />
            </motion.div>

            <div className="absolute right-0 bottom-0 text-6xl font-bold text-gray-900">
              one
              <br />
              transaction
              <br />
              at a time
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-32 mb-20">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left side text */}
            <div className="lg:w-1/3">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold leading-tight mb-6"
              >
                Trusted by the best in business the world, we move money for brands, banks and fintechs alike.
              </motion.h2>
            </div>

            {/* Right side cards */}
            <div className="lg:w-2/3 relative">
              <div 
                ref={partnersContainerRef}
                className="overflow-x-auto hide-scrollbar"
              >
                <div className="flex gap-6 p-4 min-w-max">
                  {partners.map((partner, index) => (
                    <PartnerCard 
                      key={`${partner}-${index}`}
                      name={partner}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollPartners("right")}
                className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#CCFF00] rounded-full p-3 shadow-lg z-10"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M9 18L15 12L9 6" 
                    stroke="black" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Features Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Everything you need to grow your business
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                isExpanded={expandedCard === index}
                onExpand={() => setExpandedCard(expandedCard === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section> */}

        {/* Diagonal Cards Section - Now at the end */}
        <DiagonalCards />
      </main>
    </div>
  );
};

export default Index;
