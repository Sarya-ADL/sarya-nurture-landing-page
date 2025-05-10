
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      quote: "Sarya has transformed our daily routine. My son with autism now follows his morning tasks independently using the visual schedule. The Hindi language support makes it accessible for our whole family.",
      relation: "Mother of a 7-year-old with autism"
    },
    {
      name: "Rajesh Patel",
      location: "Mumbai",
      quote: "The activities designed specifically for Indian contexts make such a difference. My daughter connects with the examples and scenarios in a way she never did with other apps we tried.",
      relation: "Father of a 10-year-old with ADHD"
    },
    {
      name: "Lakshmi Venkatesh",
      location: "Bangalore",
      quote: "Having everything in Tamil has been incredible for us. My son with Down syndrome has made remarkable progress with the developmental activities that are age-appropriate and engaging.",
      relation: "Mother of a 12-year-old with Down syndrome"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">Parent Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from families across India who have experienced positive changes through Sarya.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none rounded-3xl shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 6.5C11 5.4 10.1 4.5 9 4.5H7.5C6.4 4.5 5.5 5.4 5.5 6.5V8C5.5 9.1 6.4 10 7.5 10H9C10.1 10 11 10.9 11 12V13.5C11 14.6 10.1 15.5 9 15.5H7.5C6.4 15.5 5.5 14.6 5.5 13.5" stroke="#ACA1D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.5 6.5C18.5 5.4 17.6 4.5 16.5 4.5H15C13.9 4.5 13 5.4 13 6.5V8C13 9.1 13.9 10 15 10H16.5C17.6 10 18.5 10.9 18.5 12V13.5C18.5 14.6 17.6 15.5 16.5 15.5H15C13.9 15.5 13 14.6 13 13.5" stroke="#ACA1D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <p className="text-gray-700 italic flex-grow mb-4">{testimonial.quote}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-bold text-sarya-purple-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.relation}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
