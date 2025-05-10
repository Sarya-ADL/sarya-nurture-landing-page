
import React from 'react';

const Languages = () => {
  const languages = [
    {
      name: "Hindi",
      native: "हिन्दी",
      percentage: 85
    },
    {
      name: "Tamil",
      native: "தமிழ்",
      percentage: 75
    },
    {
      name: "Telugu",
      native: "తెలుగు",
      percentage: 80
    },
    {
      name: "Bengali",
      native: "বাংলা",
      percentage: 70
    },
    {
      name: "Malayalam",
      native: "മലയാളം",
      percentage: 65
    }
  ];

  return (
    <section id="languages" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">Language Support</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sarya is proudly made for Indian families with support for multiple regional languages, ensuring accessibility for parents across the country.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {languages.map((language) => (
            <div key={language.name} className="flex flex-col items-center bg-sarya-purple/10 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-sarya-purple-dark mb-2">{language.name}</h3>
              <p className="text-2xl font-devanagari mb-4">{language.native}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-sarya-purple h-2.5 rounded-full" 
                  style={{ width: `${language.percentage}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">{language.percentage}% Complete</p>
            </div>
          ))}
        </div>
        
        <div className="bg-sarya-peach/20 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-sarya-purple-dark mb-4">Cultural Sensitivity</h3>
          <p className="text-lg text-gray-700 mb-6">
            Beyond just translation, Sarya is built with Indian cultural contexts in mind. Our activities, examples, and content reflect 
            the daily life, values, and practices of Indian families, making the app truly relatable and effective.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark">Local Foods</h4>
              <p className="text-gray-600">Nutrition guides with Indian dietary preferences</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark">Cultural Festivals</h4>
              <p className="text-gray-600">Activities around Indian celebrations</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h4 className="font-bold text-sarya-purple-dark">Family Structures</h4>
              <p className="text-gray-600">Support for joint family dynamics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
