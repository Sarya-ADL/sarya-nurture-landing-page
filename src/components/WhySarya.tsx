import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Languages,
  Video,
  Award,
  Clock,
  Heart
} from 'lucide-react';

const WhySarya = () => {
  const reasons = [
    {
      title: "Built for Indian Families",
      description: "Unlike generic apps, Sarya is designed specifically for the Indian cultural context, with activities, examples, and content that reflect daily life in India.",
      icon: Users
    },
    {
      title: "Practical Daily Routines",
      description: "Structured routines for morning, afternoon, and evening that help children with special needs develop independence in self-care and daily tasks.",
      icon: Calendar
    },
    {
      title: "Developmental Progress",
      description: "Activities designed by child development experts that support cognitive, social, and physical development for children with autism, ADHD, and Down syndrome.",
      icon: TrendingUp
    },
    {
      title: "Language Accessibility",
      description: "Access all content in your preferred language, making it easier to involve grandparents and other family members in your child's care routine.",
      icon: Languages
    }
  ];

  const howItWorks = [
    {
      title: "Step-by-Step Videos",
      description: "Clear, visual instructions for every activity, making learning easy and engaging.",
      icon: Video,
      color: "from-sarya-peach/30 to-sarya-purple/10"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your child's development with detailed progress reports and achievements.",
      icon: Award,
      color: "from-sarya-purple/10 to-sarya-green/20"
    },
    {
      title: "Daily Routines",
      description: "Structured schedules that help build consistency and independence.",
      icon: Clock,
      color: "from-sarya-green/20 to-sarya-peach/20"
    },
    {
      title: "Family Support",
      description: "Resources and guidance for parents and caregivers to support their child's journey.",
      icon: Heart,
      color: "from-sarya-peach/20 to-sarya-purple/30"
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">Why Sarya?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sarya addresses the unique challenges faced by Indian families caring for children with special needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none rounded-3xl shadow-md hover:shadow-lg transition-all overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-sarya-purple to-sarya-peach"></div>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-sarya-purple/20 flex items-center justify-center">
                    <reason.icon className="h-6 w-6 text-sarya-purple-dark" />
                  </div>
                  <CardTitle className="text-xl text-sarya-purple-dark">{reason.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">How Sarya Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive approach to learning and development, designed for Indian children with special needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {howItWorks.map((step, index) => (
            <Card 
              key={index} 
              className={`border-none rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${step.color} p-6`}
            >
              <div className="h-16 w-16 rounded-full bg-white/50 flex items-center justify-center mb-4 shadow-md">
                <step.icon className="h-8 w-8 text-sarya-purple-dark" />
              </div>
              <CardTitle className="text-xl text-sarya-purple-dark mb-2 font-bold">
                {step.title}
              </CardTitle>
              <p className="text-sarya-purple-dark/80">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-sarya-purple/10 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-sarya-purple-dark mb-4">Activities for All Ages</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-bold text-sarya-purple-dark text-lg mb-3">Young Children (3-8 years)</h4>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Basic hygiene routines</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Simple self-care tasks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Early developmental activities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Sensory play ideas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-bold text-sarya-purple-dark text-lg mb-3">Older Children (9-14 years)</h4>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Independent daily routines</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Social skills development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Academic support activities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Emotional regulation tools</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-bold text-sarya-purple-dark text-lg mb-3">Teens & Adults (15+ years)</h4>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Vocational skill building</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Independent living tasks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Community integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-sarya-purple-dark"></div>
                  <span>Long-term planning support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySarya;
