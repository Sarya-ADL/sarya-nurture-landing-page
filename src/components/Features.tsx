
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bath, 
  Spoon, 
  PersonStanding, 
  School, 
  HeartHandshake, 
  Video,
  WashingHands
} from 'lucide-react';

const Features = () => {
  const adlFeatures = [
    {
      title: "Daily Self-Care Routines",
      description: "Age-appropriate routines for hygiene, nutrition, and self-care tasks designed specifically for children with special needs.",
      icon: Bath
    },
    {
      title: "Eating & Drinking Skills",
      description: "Fun activities to develop skills like using spoons, forks and drinking without spilling.",
      icon: Spoon
    },
    {
      title: "Dressing & Grooming",
      description: "Step-by-step guides to help children learn to dress themselves and maintain personal hygiene.",
      icon: PersonStanding
    },
    {
      title: "School Readiness",
      description: "Activities to help children take care of their school bags and follow classroom routines.",
      icon: School
    },
    {
      title: "Social Skills & Safety",
      description: "Lessons on polite behavior, personal space, emergency handling, and waiting patiently.",
      icon: HeartHandshake
    },
    {
      title: "Interactive Visual Guides",
      description: "Engaging videos and step-by-step visual instructions for all daily living activities.",
      icon: Video
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">Life Skills for Every Child</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sarya helps Indian children with special needs develop essential Activities of Daily Living (ADL) through engaging, culturally appropriate content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adlFeatures.map((feature, index) => (
            <Card key={index} className="feature-card border-none hover:shadow-md transition-all duration-300 hover:bg-sarya-purple/5">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-sarya-purple/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-sarya-purple-dark" />
                </div>
                <CardTitle className="text-xl text-sarya-purple-dark">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-sarya-purple-dark mb-6 text-center">Essential Daily Living Skills We Cover</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Simple Laundry", "Dressing Self", "Feeding with Spoon/Fork", 
              "Grooming", "Handling Emergencies", "Personal Space & Safety",
              "Managing Money", "Polite Behavior", "Basic Meal Prep",
              "Shopping from Lists", "School Bag Care", "Independent Toileting",
              "Managing Periods", "Using Sanitary Products", "Waiting Patiently",
              "Washing Hands Properly"
            ].map((skill, index) => (
              <div key={index} className="bg-sarya-purple/10 rounded-xl p-3 flex items-center justify-center">
                <p className="text-center text-sarya-purple-dark font-medium text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-sarya-purple/10 p-8 rounded-3xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-sarya-purple-dark">AI-Powered Personal Assistant</h3>
            <p className="text-base text-gray-700 mt-2 max-w-2xl mx-auto">
              Our AI buddy creates personalized learning experiences for your child
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark mb-2">Personalized Activities</h4>
              <p className="text-gray-600">
                Tailored to your child's developmental needs, interests, and abilities
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark mb-2">Customized Routines</h4>
              <p className="text-gray-600">
                Create step-by-step visual schedules that work for your child's unique needs
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark mb-2">Progress Tracking</h4>
              <p className="text-gray-600">
                Monitor your child's development with detailed insights and achievements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
