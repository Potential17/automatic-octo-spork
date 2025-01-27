import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  title: string;
  icon: string;
  color: string;
  description: string;
}

const cards: CardData[] = [
  { 
    title: 'Dynamic QR', 
    icon: '🔲', 
    color: 'bg-white',
    description: 'Generate and manage dynamic QR codes for seamless payment collection'
  },
  { 
    title: 'Prepaid', 
    icon: '💳', 
    color: 'bg-[#7CD7D7]',
    description: 'Issue and manage prepaid cards with complete control and flexibility'
  },
  { 
    title: 'Corporate Card', 
    icon: '🏢', 
    color: 'bg-white',
    description: 'Empower your business with corporate cards designed for modern needs'
  },
  { 
    title: 'Payment Gateway', 
    icon: '🌐', 
    color: 'bg-[#CCFF00]',
    description: 'Accept payments online with our secure and reliable payment gateway'
  },
];

const DiagonalCards = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  useEffect(() => {
    const container = cardsContainerRef.current;
    const cardElements = cardsRef.current;

    if (!container || !cardElements.length) return;

    gsap.set(cardElements, {
      opacity: 0,
      x: -100,
      y: 100,
      rotationY: 45,
      transformPerspective: 1000,
    });

    cardElements.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        x: 0,
        y: 0,
        rotationY: 0,
        duration: 1,
        delay: index * 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
    
    if (selectedCard !== index) {
      // Scroll to expanded card
      const element = document.getElementById(`expanded-card-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-6xl font-bold leading-tight mb-6">
              Commerce,
              <br />
              made compelling.
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business with our comprehensive suite of payment solutions.
            </p>
          </div>

          <div 
            ref={cardsContainerRef}
            className="lg:w-2/3 relative h-[600px]"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`absolute w-64 h-40 ${card.color} rounded-2xl shadow-lg p-6
                  transform transition-transform duration-300 hover:scale-105
                  cursor-pointer`}
                style={{
                  top: `${index * 80}px`,
                  left: `${index * 60}px`,
                  zIndex: index
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded Card Section */}
        {selectedCard !== null && (
          <div 
            id={`expanded-card-${selectedCard}`}
            className="mt-20 w-full max-w-4xl mx-auto"
          >
            <div className={`${cards[selectedCard].color} rounded-2xl shadow-lg p-8`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl">{cards[selectedCard].icon}</span>
                    <h3 className="text-2xl font-bold">{cards[selectedCard].title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    {cards[selectedCard].description}
                  </p>
                  <button className="cta-button px-6 py-3 rounded-full font-medium">
                    Learn More
                  </button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <img 
                    src="/uploads/daac9e8a-b9c4-48f8-86b1-a3eff6364d91.png" 
                    alt="Feature illustration" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagonalCards;