
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are Activities of Daily Living (ADLs) and why are they important for children with Autism and Special Needs?",
      answer: "Activities of Daily Living (ADLs) are essential self-care and life skills that every child needs to learn for independence. For children with autism, ADHD, and other special needs, these skills require structured teaching with visual supports, repetition, and breaking tasks into smaller steps. ADLs include self-care (brushing teeth, bathing), home skills (helping with chores), school readiness (packing bags), social behavior (greeting elders), and safety awareness (knowing emergency contacts)."
    },
    {
      question: "How does Sarya specifically help Indian children with autism and ADHD learn daily living skills?",
      answer: "Sarya is designed specifically for Indian cultural contexts. Our app teaches ADLs through familiar settings - Indian homes, schools, local shops, and communities. Activities include culturally relevant tasks like greeting elders with 'namaste', helping make chai, managing school uniforms, using Indian toilets, understanding Indian currency (₹5, ₹10, ₹100), and practicing safety in Indian traffic conditions. All content is available in 8 regional Indian languages."
    },
    {
      question: "What specific ADL skills does Sarya teach to children with special needs?",
      answer: "Sarya covers 8 main categories: (1) Self-Care: eating with hand/spoon, brushing teeth, bathing, dressing, toileting independently (2) Home Skills: folding clothes, setting dining plates, kitchen help, filling water bottles (3) School Readiness: packing school bag, following classroom rules, managing tiffin box (4) Social Behavior: greeting with namaste, polite conversation, sharing, waiting turns (5) Safety: knowing personal details, emergency contacts, stranger safety, road crossing (6) Health & Hygiene: hand washing, menstrual hygiene, nail cutting (7) Money & Shopping: identifying Indian currency, buying from local shops (8) Travel & Mobility: using school transport, walking safely, understanding signs."
    },
    {
      question: "How does Sarya make learning engaging for children with autism and ADHD?",
      answer: "Sarya uses step-by-step video demonstrations featuring Indian children in real-life situations. Each activity is broken down into simple, manageable steps with visual cues and clear instructions. The app includes progress tracking, achievement badges, and allows children to learn at their own pace. All videos show familiar Indian environments, foods, and customs that children can relate to, making learning more meaningful and engaging."
    },
    {
      question: "Can Sarya help with menstrual hygiene education for girls with special needs?",
      answer: "Yes, Sarya includes age-appropriate modules on understanding and managing periods, using sanitary products responsibly, and maintaining menstrual hygiene. These sensitive topics are covered with cultural sensitivity appropriate for Indian families, using simple language and visual guides that are easy for children with special needs to understand and follow."
    },
    {
      question: "Is Sarya suitable for children with Down syndrome and other developmental needs?",
      answer: "Absolutely! Sarya is designed for children with various special needs including autism, ADHD, Down syndrome, and other developmental conditions. The app's visual learning approach, step-by-step instructions, and culturally relevant content work well for children with different learning styles and abilities. Parents can customize activities based on their child's developmental level and specific needs."
    },
    {
      question: "How can Indian parents track their child's progress in learning ADL skills?",
      answer: "Sarya provides detailed progress tracking for each ADL skill category. Parents can monitor their child's mastery of specific activities like 'brushing teeth properly', 'packing school bag independently', or 'greeting elders politely'. The app shows achievement milestones, areas that need more practice, and suggests next steps for skill development. This helps parents understand their child's growth and celebrate small victories in daily living independence."
    },
    {
      question: "What makes Sarya different from other special needs apps available globally?",
      answer: "Unlike generic international apps, Sarya is built specifically for Indian cultural contexts. Our activities reflect real Indian daily life - making chai, wearing school uniforms, using Indian currency, greeting with namaste, understanding joint family dynamics, navigating Indian traffic, and shopping at local kiranas. The app is available in 8 regional Indian languages and created by Indian developers who understand the unique challenges faced by Indian families with special needs children."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">
            ADL Skills & Special Needs - Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how Sarya helps Indian children with autism, ADHD, and special needs master essential daily living skills through culturally relevant activities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-md border border-sarya-purple/20">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-sarya-purple/20 rounded-xl px-6 py-2 bg-sarya-purple/5">
                <AccordionTrigger className="text-sarya-purple-dark font-semibold text-lg py-4 hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2 pb-4 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
