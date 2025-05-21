
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are Activities of Daily Living (ADLs)?",
      answer: "Activities of Daily Living (ADLs) are the essential tasks that individuals perform daily for self-care, such as feeding, bathing, dressing, toileting, and transferring. For children with autism, ADHD, and other developmental needs, learning these skills requires structured support, visual guidance, and consistent practice."
    },
    {
      question: "How does Sarya help children with autism and ADHD learn daily living skills?",
      answer: "Sarya breaks down complex daily activities into simple, visual step-by-step guides that are easier for children to follow and understand. Our app uses culturally relevant examples, consistent routines, and engaging visuals to help children practice and master essential skills at their own pace."
    },
    {
      question: "Why is Sarya specifically designed for Indian families?",
      answer: "Most special needs apps available globally don't account for Indian cultural contexts, food habits, family structures, and daily routines. Sarya fills this gap by providing activities, examples, and content that reflect Indian daily life, making skill development more relatable and effective for Indian children."
    },
    {
      question: "Which developmental areas does Sarya focus on?",
      answer: "Sarya focuses on self-care (hygiene, dressing, feeding), household skills (simple laundry, basic meal prep), social skills (polite behavior, waiting patiently), safety awareness (handling emergencies, personal space), school readiness, and adaptive skills tailored to different age groups and developmental stages."
    },
    {
      question: "How can I customize activities for my child's specific needs?",
      answer: "Sarya allows you to personalize routines and activities based on your child's abilities, interests, and goals. You can select the skills your child needs to work on, adjust difficulty levels, and track progress over time to see improvements and identify areas that need more attention."
    },
    {
      question: "Is Sarya helpful for children without diagnosed conditions?",
      answer: "Absolutely! While Sarya is designed with special needs in mind, it's beneficial for any child who needs support in learning daily living skills. Many parents use Sarya to establish consistent routines, teach independence, and promote self-care skills in all children."
    },
    {
      question: "Which plan offers the best value?",
      answer: "Our yearly plan offers the best value with all premium features at a significant discount compared to monthly billing. It includes unlimited access to all skills modules, personalized routines, progress tracking, and priority updates with new content and features."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how Sarya helps Indian children with special needs develop essential daily living skills.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-md border border-sarya-purple/20">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-sarya-purple/20 rounded-xl px-6 py-2 bg-sarya-purple/5">
                <AccordionTrigger className="text-sarya-purple-dark font-semibold text-lg py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 bg-sarya-peach/20 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-sarya-purple-dark mb-4">Have more questions?</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team of Indian special needs experts is here to help you find the best solutions for your child's development journey.
          </p>
          <div className="inline-block bg-sarya-purple hover:bg-sarya-purple-dark text-white font-medium py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg">
            Contact Support
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
