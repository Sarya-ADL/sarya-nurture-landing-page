import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bath, 
  Baby, 
  PersonStanding, 
  School, 
  HeartHandshake, 
  Video,
  Home,
  Shield,
  IndianRupee,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const Features = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const adlCategories = [
    {
      title: "Self-Care Skills",
      description: "Master essential daily routines tailored for Indian children, including traditional eating methods, dental hygiene, bathing rituals, and school uniform management.",
      icon: Bath,
      activities: [
        "Eating with hand (traditional Indian style)",
        "Brushing teeth with proper technique",
        "Bathing and drying body thoroughly",
        "Wearing and managing school uniforms",
        "Using Indian-style toilets independently"
      ],
      color: "from-sarya-peach/30 to-sarya-purple/10",
      benefits: "Builds confidence and independence in daily routines"
    },
    {
      title: "Home Skills",
      description: "Learn culturally relevant household tasks like traditional cleaning methods, setting up Indian-style dining, and basic kitchen skills including chai preparation.",
      icon: Home,
      activities: [
        "Traditional floor cleaning (pocha)",
        "Setting up Indian-style dining (thali)",
        "Basic kitchen assistance",
        "Water management and storage",
        "Making traditional chai"
      ],
      color: "from-sarya-purple/10 to-sarya-green/20",
      benefits: "Develops responsibility and cultural understanding"
    },
    {
      title: "School Readiness",
      description: "Prepare for Indian school environments with skills like managing tiffin boxes, following classroom etiquette, and handling traditional school supplies.",
      icon: School,
      activities: [
        "Organizing school bag with books",
        "Managing tiffin box and water bottle",
        "Following classroom rules and etiquette",
        "Copying from blackboard effectively",
        "Taking care of school supplies"
      ],
      color: "from-sarya-green/20 to-sarya-peach/20",
      benefits: "Enhances academic success and classroom participation"
    },
    {
      title: "Social Behavior",
      description: "Master Indian social customs including respectful greetings, traditional etiquette, and appropriate public behavior in various settings.",
      icon: HeartHandshake,
      activities: [
        "Traditional namaste greeting",
        "Using respectful language (aap, ji)",
        "Sharing and turn-taking in groups",
        "Public speaking with confidence",
        "Respecting elders and traditions"
      ],
      color: "from-sarya-peach/20 to-sarya-purple/30",
      benefits: "Strengthens social connections and cultural identity"
    },
    {
      title: "Safety Awareness",
      description: "Learn essential safety skills for Indian environments, including traffic awareness, emergency protocols, and personal safety measures.",
      icon: Shield,
      activities: [
        "Memorizing home address in Hindi/English",
        "Emergency contact procedures",
        "Stranger safety in Indian context",
        "Road safety with traffic signals",
        "Public transport safety"
      ],
      color: "from-sarya-purple/30 to-sarya-green/30",
      benefits: "Ensures personal safety in Indian settings"
    },
    {
      title: "Money & Shopping",
      description: "Develop financial literacy with Indian currency, including traditional shopping practices, value understanding, and basic transactions.",
      icon: IndianRupee,
      activities: [
        "Identifying Indian currency notes",
        "Shopping at local markets",
        "Understanding money value",
        "Making simple purchases",
        "Saving pocket money"
      ],
      color: "from-sarya-green/30 to-sarya-peach/30",
      benefits: "Builds financial independence and practical skills"
    }
  ];

  const handleCategoryClick = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section 
      id="features" 
      className="py-20 bg-white dark:bg-[#2a2535]"
      aria-label="Main ADL Skills for Indian Children"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark dark:text-white mb-4">
            Essential Life Skills for Indian Children
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sarya helps children with autism, ADHD, and special needs master daily living skills through culturally relevant content designed specifically for Indian families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {adlCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`flex flex-col border-none rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${category.color} p-6 cursor-pointer dark:shadow-sarya-purple/10 dark:hover:shadow-sarya-purple/20`}
              onClick={() => handleCategoryClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCategoryClick(index);
                }
              }}
              aria-expanded={expandedCategory === index}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-16 w-16 rounded-full bg-white/50 dark:bg-white/10 flex items-center justify-center shadow-md">
                  <category.icon className="h-8 w-8 text-sarya-purple-dark dark:text-white" />
                </div>
                {expandedCategory === index ? (
                  <ChevronDown className="h-6 w-6 text-sarya-purple-dark dark:text-white" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-6 w-6 text-sarya-purple-dark dark:text-white" aria-hidden="true" />
                )}
              </div>
              
              <CardTitle className="text-xl text-sarya-purple-dark dark:text-white mb-2 font-bold">
                {category.title}
              </CardTitle>
              
              <CardDescription className="text-sarya-purple-dark/80 dark:text-gray-300 mb-4">
                {category.description}
              </CardDescription>

              {expandedCategory === index && (
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    {category.activities.map((activity, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center space-x-2 bg-white/50 dark:bg-white/10 rounded-lg p-2 text-sarya-purple-dark dark:text-white"
                      >
                        <div className="h-2 w-2 rounded-full bg-sarya-purple-dark dark:bg-white"></div>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-sarya-purple-dark/80 dark:text-gray-300 italic">
                    {category.benefits}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            className="btn-download bg-sarya-green hover:bg-sarya-purple-dark text-sarya-purple-dark dark:text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all animate-float"
            onClick={() => window.open('https://forms.gle/BcXzk5t1ZYTMXjSX7', '_blank', 'noopener,noreferrer')}
          >
            Join Beta Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
