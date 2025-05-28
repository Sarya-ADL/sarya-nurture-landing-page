import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from './ui/card';

const FAQ = () => {
  const faqs = [
    {
      question: "What are ADLs and why are they important?",
      answer: "ADLs (Activities of Daily Living) are basic self-care and life skills like brushing teeth, bathing, eating, and dressing. For children with special needs, learning ADLs means more independence and confidence!"
    },
    {
      question: "How does Sarya help Indian kids with autism and ADHD?",
      answer: "Sarya uses Indian settings, languages, and real-life examples—like greeting elders with 'namaste', making chai, and using Indian currency—to teach daily skills in a way that feels familiar and fun."
    },
    {
      question: "What skills does Sarya teach?",
      answer: "Sarya covers self-care, home skills, school readiness, social behavior, safety, hygiene, money, and travel. All designed for Indian families and children with special needs."
    },
    {
      question: "How does Sarya make learning fun?",
      answer: "Step-by-step videos, visual cues, progress badges, and activities in Indian languages make learning playful and motivating for every child!"
    },
    {
      question: "Does Sarya include menstrual hygiene for girls?",
      answer: "Yes! Sarya has simple, age-appropriate guides for periods and hygiene, explained with care and cultural sensitivity."
    },
    {
      question: "Is Sarya good for Down syndrome and other needs?",
      answer: "Absolutely! Sarya is for all children with special needs—autism, ADHD, Down syndrome, and more. Activities are visual, step-by-step, and customizable."
    },
    {
      question: "How can parents track progress?",
      answer: "Parents can see detailed progress for each skill, celebrate milestones, and get suggestions for next steps—all in the app!"
    },
    {
      question: "What makes Sarya different from other apps?",
      answer: "Sarya is made in India, for India! All activities, languages, and examples are Indian. No generic content—just real, relatable learning for Indian families."
    }
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-white to-sarya-purple/10">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="inline-block mb-3 p-3 bg-sarya-purple/20 rounded-full">
            <HelpCircle className="h-8 w-8 text-sarya-purple-dark" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Everything Indian parents need to know about Sarya and ADL skills for special needs children.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="feature-card border-none hover:shadow-md transition-all duration-300 hover:bg-sarya-purple/5 cursor-pointer p-0">
              <div
                className="flex items-center justify-between px-6 py-5 text-sarya-purple-dark font-semibold text-base md:text-lg gap-2 rounded-2xl"
                onClick={() => handleToggle(idx)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === idx}
                style={{ minHeight: 56 }}
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-sarya-purple-dark" />
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-sarya-purple-dark" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-sarya-purple-dark" />
                )}
              </div>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-gray-700 text-base leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
