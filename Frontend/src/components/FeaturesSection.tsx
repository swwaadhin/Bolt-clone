import { Cpu, Code, Zap, FlaskConical, Layers, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI-Powered Generation',
      description:
        'Describe your website in natural language and watch as Bolt generates all the code and assets for you.',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Interactive Editor',
      description:
        'Make precise adjustments with our fully-featured code editor with syntax highlighting and autocompletion.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Reprompt and Edit',
      description:
        'Easily reprompt or edit your website to get the perfect design and functionality you desire.',
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: 'WebContainer Technology',
      description:
        'Run your web applications directly in the browser with our cutting-edge WebContainer technology.',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Step-by-Step Guidance',
      description:
        'Follow our intuitive step-by-step process to bring your web application from concept to completion.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Download and Deploy',
      description:
        'Easily download your generated website as a zip file and host it on any platform of your choice.',
    },
  ];

  return (
    <motion.section
      id="features"
      className="relative z-10 py-20 bg-gradient-to-b from-[#0f172a] to-[#020617]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Why Choose Bolt to Build Websites?
        </motion.h2>

        <motion.p
          className="text-lg text-center mt-4 max-w-2xl mx-auto text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Bolt combines the intelligence of AI with developer-friendly tools to streamline your entire web development journey.
        </motion.p>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white">✨ Powerful Features</h3>
          <p className="text-md mt-2 text-gray-400">Built to supercharge your creativity and development process</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-gray-900/60 border border-gray-800 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
