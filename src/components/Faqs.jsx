// FAQ Section Component
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { toast } from 'react-toastify';
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is IPTV and how does it work?",
      answer: "IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional terrestrial, satellite, or cable formats. When you select a channel, the content is streamed to your device through your internet connection in real-time, offering more flexibility and interactive features than conventional TV."
    },
    {
      question: "What internet speed do I need for smooth streaming?",
      answer: "For standard HD streaming, we recommend at least 10 Mbps. For 4K Ultra HD content, you'll need a stable connection of 25 Mbps or higher. We also suggest using a wired Ethernet connection for the most stable experience, though WiFi works well for HD content."
    },
    {
      question: "Which devices are supported?",
      answer: "Our service works on virtually all devices: Smart TVs (Samsung, LG, Android TV), Amazon Fire Stick, Apple TV, Android boxes, smartphones (iOS & Android), tablets, computers (Windows, Mac, Linux), and gaming consoles (PS4/PS5, Xbox). One subscription covers multiple devices simultaneously."
    },
    {
      question: "How many channels do you offer?",
      answer: "We provide access to over 10,000 live TV channels from around the world, including sports, movies, news, entertainment, and international content. Additionally, our VOD library contains 50,000+ movies and TV series that are updated daily."
    },
    {
      question: "Is IPTV legal to use?",
      answer: "Yes, IPTV technology itself is completely legal. Our service operates as a content aggregator, providing access to publicly available streams. However, we recommend users ensure they comply with local laws regarding content consumption in their region."
    },
    {
      question: "Can I use a VPN with your service?",
      answer: "Absolutely! You can use any VPN service with our IPTV. In fact, we recommend it for privacy protection and to prevent your ISP from throttling streaming traffic. Our service works seamlessly with popular VPNs like ExpressVPN, NordVPN, and Surfshark."
    },
    {
      question: "How do I set up the service after purchasing?",
      answer: "After purchase, you'll receive login credentials and setup instructions via email within minutes. Simply download our recommended app (IPTV Smarters or TiviMate), enter your credentials, and start watching. We also provide 24/7 support to help with any setup issues."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, cryptocurrency (Bitcoin, Ethereum), and various local payment methods. All transactions are secured with 256-bit SSL encryption."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 24-hour free trial so you can test our service quality before committing. The trial includes full access to all channels and features. No credit card required for the trial."
    },
    {
      question: "What if I experience buffering or technical issues?",
      answer: "First, check your internet connection and try using a VPN. If issues persist, our 24/7 support team is available via WhatsApp, email, or live chat. We also have an extensive troubleshooting guide in our help center. Most issues are resolved within minutes."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-400 font-semibold tracking-wider uppercase text-sm">FAQs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about our IPTV service. Can't find the answer you're looking for? Reach out to our support team.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors"
                >
                  <ChevronRight className={`w-5 h-5 text-green-400 transition-transform ${openIndex === index ? 'rotate-90' : ''}`} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="h-px bg-white/10 mb-4" />
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
          <p className="text-gray-400 mb-6">Our support team is available 24/7 to help you with any inquiries</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 rounded-full transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>
            <motion.button
              onClick={() => toast.info('Live chat coming soon!')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-full transition-colors border border-white/20"
            >
              <MessageCircle className="w-5 h-5" />
              Live Chat
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;