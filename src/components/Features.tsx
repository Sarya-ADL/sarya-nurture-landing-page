import React from 'react';
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
  IndianRupee
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const Features = () => {
  const adlCategories = [
    {
      title: "Self-Care Skills",
      description: "Essential daily routines like eating with hand/spoon, brushing teeth, bathing, wearing school uniforms, and using toilet independently.",
      icon: Bath,
      activities: ["Eating with hand or spoon", "Brushing teeth", "Bathing and drying body", "Wearing own clothes", "Using toilet independently"]
    },
    {
      title: "Home Skills",
      description: "Helping with household chores, setting dining plates, cleaning study table, and basic kitchen help like making chai.",
      icon: Home,
      activities: ["Folding clothes & sweeping", "Setting dining plate", "Helping in kitchen", "Filling water bottles", "Making simple chai"]
    },
    {
      title: "School Readiness",
      description: "Packing school bag, following classroom rules, managing tiffin box, and copying from blackboard effectively.",
      icon: School,
      activities: ["Packing school bag", "Following classroom rules", "Managing tiffin & water bottle", "Copying from blackboard", "Taking care of school supplies"]
    },
    {
      title: "Social Behavior",
      description: "Greeting elders with namaste, using polite words, sharing with others, and speaking respectfully in public.",
      icon: HeartHandshake,
      activities: ["Greeting with namaste", "Saying sorry, please, thank you", "Sharing and waiting turn", "Speaking politely", "Respecting elders"]
    },
    {
      title: "Safety Awareness",
      description: "Knowing personal details, emergency contacts, stranger safety, and road crossing skills for Indian environments.",
      icon: Shield,
      activities: ["Knowing name & parents' details", "Emergency contact knowledge", "Not talking to strangers", "Crossing road safely", "Understanding traffic signals"]
    },
    {
      title: "Money & Shopping",
      description: "Identifying Indian currency, buying from local shops, understanding value of ₹5, ₹10, ₹100 notes and coins.",
      icon: IndianRupee,
      activities: ["Identifying coins and notes", "Buying from local shop", "Understanding money value", "Simple transactions", "Saving pocket money"]
    }
  ];

  const specificActivities = [
    "Asking for help and self-advocating", "Bathing self", "Brushing teeth", 
    "Cleaning up after eating", "Doing simple laundry", "Dressing self",
    "Feeding self with spoon/fork", "Grooming", "Handling emergencies",
    "Maintaining personal space & safety", "Managing personal money", "Practicing polite behavior",
    "Preparing basic meals", "Shopping from a list", "Taking care of school bag",
    "Toileting independently", "Understanding and managing periods", "Using sanitary products",
    "Waiting patiently", "Washing hands properly"
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">
            Main ADL Skills for Indian Children
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sarya teaches essential Activities of Daily Living (ADL) through culturally relevant content designed for Indian families.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {adlCategories.map((category, index) => (
            <Card key={index} className="flex flex-col items-center justify-center border-none rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-sarya-purple/10 to-sarya-peach/10 p-8 min-h-[320px]">
              <div className="h-16 w-16 rounded-full bg-sarya-purple/20 flex items-center justify-center mb-4 shadow-md">
                <category.icon className="h-8 w-8 text-sarya-purple-dark" />
              </div>
              <CardTitle className="text-lg text-sarya-purple-dark text-center mb-2 font-bold">
                {category.title}
              </CardTitle>
              <ul className="text-sarya-purple-dark text-center text-base font-medium space-y-1 mb-2">
                {category.activities.slice(0, 2).map((activity, idx) => (
                  <li key={idx}>• {activity}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="btn-download bg-sarya-green hover:bg-sarya-purple-dark text-sarya-purple-dark font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all animate-float">
            <a href="https://forms.gle/BcXzk5t1ZYTMXjSX7" target="_blank" rel="noopener noreferrer">Join Beta Access</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
