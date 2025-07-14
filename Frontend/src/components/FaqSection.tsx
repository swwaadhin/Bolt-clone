import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { cn } from '../utils/cn';

export function FaqSection() {
  const faqs = [
    {
      question: 'How does Bolt turn my prompts into a website?',
      answer:
        'Bolt uses advanced AI to interpret your natural language description and generate the necessary code to create a fully functional website. It analyzes your requirements and produces HTML, CSS, and JavaScript files that match your vision.',
    },
    {
      question: 'Can I customize the generated website?',
      answer:
        'Absolutely! Bolt provides a full-featured code editor where you can make precise adjustments to any aspect of your website. The changes are reflected in real-time in the preview window.',
    },
    {
      question: 'What kind of websites can I create with Bolt?',
      answer:
        "Bolt can help you create a wide range of websites, from simple landing pages to complex web applications with dynamic functionality. It's suitable for portfolios, blogs, e-commerce sites, dashboards, and more.",
    },
    {
      question: 'Do I need coding experience to use Bolt?',
      answer:
        'No coding experience is required. Bolt is designed to be accessible to everyone, regardless of technical background. However, if you do have coding experience, you can leverage it to make more advanced customizations.',
    },
    {
      question: 'How do I deploy my website?',
      answer:
        'Bolt allows you to download your generated website as a zip file. You can then host it on any web server or platform of your choice, such as GitHub Pages, Netlify, or Vercel.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-30 relative z-10 bg-gradient-to-b from-[#0f172a] to-[#020617]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400">
              Find answers to common questions about <span className="text-blue-300 font-semibold">Bolt</span>.
            </p>
          </motion.div>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-xl shadow-md transition hover:shadow-blue-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center w-full px-6 py-5 text-left text-white hover:bg-gray-900/80 transition rounded-t-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                      <span className="text-lg font-medium">{faq.question}</span>
                      <ChevronDown
                        className={cn(
                          'w-5 h-5 text-blue-400 transform transition-transform duration-300',
                          open ? 'rotate-180' : ''
                        )}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 py-4 text-gray-300 text-base border-t border-gray-800 bg-gray-900/40">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
