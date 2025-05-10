
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Backpack, Toothbrush, CalendarDays, Globe2, HeartHandshake } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Daily Self-Care Routines",
      description: "Age-appropriate routines for hygiene, nutrition, and self-care tasks designed specifically for children with special needs.",
      icon: Toothbrush
    },
    {
      title: "Age-Based Learning",
      description: "Customized developmental activities tailored to your child's specific needs, abilities, and interests.",
      icon: Backpack
    },
    {
      title: "Structured Schedules",
      description: "Create visual schedules and reminders that help establish consistency and reduce anxiety for your child.",
      icon: CalendarDays
    },
    {
      title: "Multi-Language Support",
      description: "Content available in Hindi, Tamil, Telugu, Bengali, and Malayalam to support families across India.",
      icon: Globe2
    },
    {
      title: "Parent Community",
      description: "Connect with other parents, share experiences, and learn from each other in a supportive environment.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">Features Designed with Care</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every feature in Sarya is thoughtfully created to support Indian children with special needs and empower their parents.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
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

        <div className="mt-16 bg-sarya-purple/10 p-8 rounded-3xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-sarya-purple-dark">AI-Powered Personal Assistant</h3>
            <p className="text-base text-gray-700 mt-2 max-w-2xl mx-auto">
              We're integrating AI and machine learning to create a personalized buddy for your child
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark mb-2">Personalized Activities</h4>
              <p className="text-gray-600">
                Our AI suggests activities specifically tailored to your child's developmental needs, interests, and abilities
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark mb-2">Progress Tracking</h4>
              <p className="text-gray-600">
                Machine learning algorithms track your child's progress and adjust recommendations for optimal development
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark mb-2">Cultural Adaptation</h4>
              <p className="text-gray-600">
                Our AI understands Indian culture and adapts content to reflect familiar environments and situations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
