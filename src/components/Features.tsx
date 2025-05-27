
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">
            Main ADL Skills for Indian Children
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sarya teaches essential Activities of Daily Living (ADL) through culturally relevant content designed specifically for Indian families and children with special needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {adlCategories.map((category, index) => (
            <Card key={index} className="feature-card border-none hover:shadow-md transition-all duration-300 hover:bg-sarya-purple/5 h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-sarya-purple/20 flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-sarya-purple-dark" />
                </div>
                <CardTitle className="text-xl text-sarya-purple-dark">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base mb-4">{category.description}</CardDescription>
                <ul className="text-sm text-gray-700 space-y-1">
                  {category.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-sarya-purple mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-sarya-purple-dark mb-6 text-center">All Activities Available in Sarya</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {specificActivities.map((activity, index) => (
              <div key={index} className="bg-sarya-purple/10 rounded-xl p-3 flex items-center justify-center min-h-[60px]">
                <p className="text-center text-sarya-purple-dark font-medium text-sm">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-sarya-purple/10 p-8 rounded-3xl">
          <div className="text-center mb-6">
            <div className="h-12 w-12 rounded-full bg-sarya-purple/20 flex items-center justify-center mb-4 mx-auto">
              <Video className="h-6 w-6 text-sarya-purple-dark" />
            </div>
            <h3 className="text-2xl font-bold text-sarya-purple-dark">Video-Based Learning</h3>
            <p className="text-base text-gray-700 mt-2 max-w-2xl mx-auto">
              All activities include step-by-step video demonstrations featuring Indian children in familiar settings
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark mb-2">Indian Context</h4>
              <p className="text-gray-600">
                Activities set in Indian homes, schools, and communities with familiar foods, clothes, and customs
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark mb-2">Step-by-Step Guides</h4>
              <p className="text-gray-600">
                Clear visual instructions broken down into simple, manageable steps for easy learning
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark mb-2">Progress Tracking</h4>
              <p className="text-gray-600">
                Monitor your child's mastery of each skill with detailed progress reports and achievements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
