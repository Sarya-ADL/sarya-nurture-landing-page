
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhySarya = () => {
  const reasons = [
    {
      title: "Built for Indian Families",
      description: "Unlike generic apps, Sarya is designed specifically for the Indian cultural context, with activities, examples, and content that reflect daily life in India."
    },
    {
      title: "Practical Daily Routines",
      description: "Structured routines for morning, afternoon, and evening that help children with special needs develop independence in self-care and daily tasks."
    },
    {
      title: "Developmental Progress",
      description: "Activities designed by child development experts that support cognitive, social, and physical development for children with autism, ADHD, and Down syndrome."
    },
    {
      title: "Language Accessibility",
      description: "Access all content in your preferred language, making it easier to involve grandparents and other family members in your child's care routine."
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none rounded-3xl shadow-md hover:shadow-lg transition-all overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-sarya-purple to-sarya-peach"></div>
              <CardHeader>
                <CardTitle className="text-xl text-sarya-purple-dark">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-sarya-purple/10 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-sarya-purple-dark mb-4">Activities for All Ages</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark text-lg mb-3">Young Children (3-8 years)</h4>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Basic hygiene routines</li>
                <li>• Simple self-care tasks</li>
                <li>• Early developmental activities</li>
                <li>• Sensory play ideas</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark text-lg mb-3">Older Children (9-14 years)</h4>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Independent daily routines</li>
                <li>• Social skills development</li>
                <li>• Academic support activities</li>
                <li>• Emotional regulation tools</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark text-lg mb-3">Teens & Adults (15+ years)</h4>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Vocational skill building</li>
                <li>• Independent living tasks</li>
                <li>• Community integration</li>
                <li>• Long-term planning support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySarya;
