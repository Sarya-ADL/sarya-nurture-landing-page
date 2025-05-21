
import React from 'react';
import { Languages as LanguagesIcon } from 'lucide-react';

const Languages = () => {
  const languages = [
    {
      name: "Hindi",
      native: "हिन्दी",
      percentage: 100
    },
    {
      name: "English",
      native: "English",
      percentage: 100
    },
    {
      name: "Tamil",
      native: "தமிழ்",
      percentage: 100
    },
    {
      name: "Kannada",
      native: "ಕನ್ನಡ",
      percentage: 100
    },
    {
      name: "Telugu",
      native: "తెలుగు",
      percentage: 100
    },
    {
      name: "Bengali",
      native: "বাংলা",
      percentage: 100
    },
    {
      name: "Gujarati",
      native: "ગુજરાતી",
      percentage: 100
    },
    {
      name: "Malayalam",
      native: "മലയാളം",
      percentage: 100
    }
  ];

  return (
    <section id="languages" className="py-20 bg-gradient-to-b from-white to-sarya-purple/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-2 bg-sarya-purple/20 rounded-full">
            <LanguagesIcon className="h-8 w-8 text-sarya-purple-dark" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">Made for Indian Families</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sarya is proudly created in India, specifically for Indian children and families. Our app supports 
            multiple regional languages, ensuring accessibility for parents and children across the country.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {languages.map((language) => (
            <div key={language.name} className="flex flex-col items-center bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 border border-sarya-purple/20">
              <h3 className="text-xl font-bold text-sarya-purple-dark mb-2">{language.name}</h3>
              <p className="text-2xl font-devanagari mb-4">{language.native}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-sarya-purple h-2.5 rounded-full"
                  style={{ width: `${language.percentage}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Fully Supported</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-sarya-purple/20">
          <h3 className="text-2xl font-bold text-sarya-purple-dark mb-4">Indian Cultural Context</h3>
          <p className="text-lg text-gray-700 mb-6">
            Beyond just translation, Sarya is built with Indian cultural contexts in mind. Our activities, examples, and content reflect 
            the daily life, values, and practices of Indian families, making the app truly relatable and effective.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-sarya-purple/10 rounded-2xl p-4 hover:bg-sarya-purple/20 transition-colors">
              <h4 className="font-bold text-sarya-purple-dark">Local Foods & Customs</h4>
              <p className="text-gray-600">Nutrition guides with Indian dietary preferences and cultural practices</p>
            </div>
            <div className="bg-sarya-purple/10 rounded-2xl p-4 hover:bg-sarya-purple/20 transition-colors">
              <h4 className="font-bold text-sarya-purple-dark">Cultural Festivals</h4>
              <p className="text-gray-600">Activities around Indian celebrations and traditions</p>
            </div>
            <div className="bg-sarya-purple/10 rounded-2xl p-4 hover:bg-sarya-purple/20 transition-colors">
              <h4 className="font-bold text-sarya-purple-dark">Family Structures</h4>
              <p className="text-gray-600">Support for joint family dynamics and intergenerational living</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
