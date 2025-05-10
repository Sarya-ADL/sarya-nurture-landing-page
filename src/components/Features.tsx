
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { child, book, calendar, heart, bookUser } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Daily Self-Care Routines",
      description: "Age-appropriate routines for hygiene, nutrition, and self-care tasks designed specifically for children with special needs.",
      icon: child
    },
    {
      title: "Age-Based Learning",
      description: "Customized developmental activities tailored to your child's specific needs, abilities, and interests.",
      icon: book
    },
    {
      title: "Structured Schedules",
      description: "Create visual schedules and reminders that help establish consistency and reduce anxiety for your child.",
      icon: calendar
    },
    {
      title: "Multi-Language Support",
      description: "Content available in Hindi, Tamil, Telugu, Bengali, and Malayalam to support families across India.",
      icon: bookUser
    },
    {
      title: "Parent Community",
      description: "Connect with other parents, share experiences, and learn from each other in a supportive environment.",
      icon: heart
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">Features Designed with Care</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every feature in Sarya is thoughtfully created to support the unique needs of Indian children with special needs and empower their parents.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border-none hover:bg-sarya-purple/5">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-sarya-purple/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-sarya-purple-dark" />
                </div>
                <CardTitle className="text-xl text-sarya-purple-dark">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
