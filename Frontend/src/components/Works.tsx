import { motion } from "framer-motion";

function HowItWorksStep({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center text-center bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white flex items-center justify-center text-xl font-bold shadow-md mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 px-4 md:px-6">{description}</p>
    </motion.div>
  );
}

export default function HowitWork() {
  return (
    <section id="howitworks" className="pt-28 pb-20 bg-gradient-to-b from-[#0f172a] to-[#020617] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500">
          How Bolt Works!
        </h2>
        <p className="text-md text-gray-400 mt-4 max-w-2xl mx-auto">
          In just three simple steps, go from a prompt to a deployed website!
        </p>

        <div className="mt-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <HowItWorksStep
              number={1}
              title="Give a Prompt"
              description="Describe your website idea in a few words and let our AI do the rest."
            />
            <HowItWorksStep
              number={2}
              title="Edit & Reprompt"
              description="Tweak the generated website to match your vision or reprompt for a fresh look."
            />
            <HowItWorksStep
              number={3}
              title="Download & Deploy"
              description="Download your finished site as a zip file and host it anywhere you want."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
  