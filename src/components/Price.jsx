// Improved Pricing Section Component
import React, { useState } from 'react';
import { Check, Star, Trophy, Zap, Sparkles, Shield, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';


const Price = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 9.99,
      annualPrice: 7.99,
      description: 'Perfect for individuals getting started',
      features: [
        { text: '1,000+ Live Channels', included: true },
        { text: 'HD Streaming Quality', included: true },
        { text: '1 Device Connection', included: true },
        { text: 'Standard Support', included: true },
        { text: 'Electronic Program Guide', included: true },
        { text: '4K Quality', included: false },
        { text: 'VOD Library', included: false },
        { text: 'Catch-up TV', included: false },
      ],
      popular: false,
      badge: null,
      cta: 'Start Free Trial',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Premium',
      monthlyPrice: 14.99,
      annualPrice: 12.49,
      description: 'Best value for serious streamers',
      features: [
        { text: '5,000+ Live Channels', included: true, highlight: true },
        { text: 'Full HD & 4K Quality', included: true, highlight: true },
        { text: '3 Device Connections', included: true },
        { text: 'Priority 24/7 Support', included: true, highlight: true },
        { text: 'EPG + Catch-up TV', included: true },
        { text: 'VOD Library (50,000+)', included: true, highlight: true },
        { text: 'PPV Events Included', included: true },
        { text: 'Cloud DVR (50GB)', included: true },
      ],
      popular: true,
      badge: 'Most Popular',
      cta: 'Start Free Trial',
      icon: <Star className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      savings: 'Save 17%'
    },
    {
      name: 'Ultimate',
      monthlyPrice: 24.99,
      annualPrice: 19.99,
      description: 'For power users & families',
      features: [
        { text: '10,000+ Live Channels', included: true, highlight: true },
        { text: '4K Ultra HD + HDR', included: true, highlight: true },
        { text: '5 Device Connections', included: true, highlight: true },
        { text: 'VIP Phone Support', included: true, highlight: true },
        { text: 'All Premium Features', included: true },
        { text: 'Adult Content (Optional)', included: true },
        { text: 'Exclusive Sports Packages', included: true, highlight: true },
        { text: 'Cloud DVR (200GB)', included: true, highlight: true },
      ],
      popular: false,
      badge: 'Best Value',
      cta: 'Start Free Trial',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-600',
      savings: 'Save 20%'
    }
  ];

  const testimonials = [
    {
      text: "Switched from cable and saved $80/month. Quality is amazing!",
      author: "Mike R.",
      role: "Premium User"
    },
    {
      text: "Best IPTV service I've tried. The 4K streams are crystal clear.",
      author: "Sarah L.",
      role: "Ultimate User"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Simple, Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Start with a 24-hour free trial. No credit card required. 
            Cancel anytime with no questions asked.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 p-1 transition-colors hover:border-green-500/50"
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-linear-to-r from-green-500 to-emerald-600 shadow-lg"
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold"
              >
                Save up to 20%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative rounded-3xl p-6 lg:p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-linear-to-b from-green-500/20 to-black border-2 border-green-500/50 scale-105 z-10' 
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              } ${hoveredPlan === index && !plan.popular ? 'scale-102 border-green-500/30' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                    plan.popular 
                      ? 'bg-linear-to-r from-green-500 to-emerald-600 text-black' 
                      : 'bg-purple-500 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${plan.color} flex items-center justify-center text-white mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                {isAnnual && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-gray-400 line-through text-sm">
                      ${plan.monthlyPrice}/mo
                    </span>
                    {plan.savings && (
                      <span className="text-green-400 text-sm font-semibold">
                        {plan.savings}
                      </span>
                    )}
                  </div>
                )}
                <p className="text-gray-500 text-xs mt-2">
                  {isAnnual ? 'Billed annually' : 'Billed monthly'}
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => toast.success(`Starting ${plan.name} plan trial!`)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold mb-6 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-black hover:shadow-lg hover:shadow-green-500/30'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                {plan.cta}
              </motion.button>

              {/* Features */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  What's included
                </p>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        feature.highlight ? 'bg-green-500/20' : 'bg-white/10'
                      }`}>
                        <Check className={`w-3 h-3 ${feature.highlight ? 'text-green-400' : 'text-gray-400'}`} />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-gray-600" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Signals */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-white font-semibold">7-Day Money Back</p>
              <p className="text-gray-400 text-sm">No questions asked</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Instant Setup</p>
              <p className="text-gray-400 text-sm">Start watching in 5 minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-white font-semibold">50,000+ Users</p>
              <p className="text-gray-400 text-sm">Trust StreamMax daily</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Questions? Check our <button onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })} className="text-green-400 hover:underline">FAQ</button> or <a href="https://wa.me/1234567890" className="text-green-400 hover:underline">chat with us</a>
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-600 text-xs">
            <Shield className="w-4 h-4" />
            <span>256-bit SSL encryption • Secure payments</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add X icon for missing features
const X = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Price;
