import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  Play,
  Menu,
  X,
  Check,
  Tv,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Clock,
  MessageCircle,
  ChevronRight,
  Star,
  Wifi
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-toastify/dist/ReactToastify.css';

// Navigation Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Library', href: '#shows' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Features', href: '#features' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <Tv className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">AllStream+</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/3187322299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Chat with Us</span>
            </a>
            <button
              onClick={() => toast.info('Coming soon!')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors text-base font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    toast.info('Coming soon!');
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium mt-2"
                >
                  Watch Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  const streamingLogos = [
    { name: 'Netflix', color: 'text-red-600' },
    { name: 'Disney+', color: 'text-blue-600' },
    { name: 'HBO Max', color: 'text-purple-600' },
    { name: 'Prime Video', color: 'text-cyan-400' },
    { name: 'Hulu', color: 'text-green-500' },
    { name: 'Apple TV', color: 'text-gray-200' },
    { name: 'YouTube', color: 'text-red-500' },
    { name: 'ESPN', color: 'text-red-600' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-green-400 text-sm font-semibold mb-6 border border-white/20">
            WELCOME TO PREMIUM IPTV
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            PREMIUM IPTV SERVICE AT AN{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-600">
              UNBEATABLE PRICE
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Experience seamless access to 10,000+ channels, movies, and sports in stunning 4K quality. Works on all devices, anywhere, anytime.Join today for seamless experience!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => toast.success('Welcome! Choose your plan below.')}
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              GET STARTED
            </button>
            <button
              onClick={() => document.getElementById('shows').scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
            >
              View Library <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Streaming Service Logos */}
          <div className="mt-12">
            <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">Compatible with all major platforms</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              {streamingLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-2xl font-bold ${logo.color} hover:opacity-100 transition-opacity cursor-default`}
                >
                  {logo.name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section
const Features = () => {
  const features = [
    {
      icon: <Tv className="w-8 h-8" />,
      title: '10,000+ Channels',
      description: 'Access thousands of live TV channels from around the world, including sports, news, and entertainment.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'All Devices',
      description: 'Watch on your TV, smartphone, tablet, or computer. Compatible with Android, iOS, Smart TVs, and more.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '4K & HD Quality',
      description: 'Enjoy crystal clear picture quality with support for 4K, Full HD, and HD streaming.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Content',
      description: 'International channels from USA, UK, Canada, Europe, Asia, and Latin America.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Private',
      description: 'Your privacy matters. Secure connections and no logging of your viewing habits.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any issues or questions.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900/50 to-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience the future of television with our cutting-edge IPTV service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-green-400/20 to-green-600/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Currently Airing Shows Section
const CurrentShows = () => {
  const shows = [
    { title: 'Stranger Things', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80', category: 'Sci-Fi' },
    { title: 'The Last of Us', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80', category: 'Drama' },
    { title: 'Wednesday', image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?w=400&q=80', category: 'Horror' },
    { title: 'The Witcher', image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80', category: 'Fantasy' },
    { title: 'Breaking Bad', image: 'https://images.unsplash.com/photo-1594909122849-11daa4e4d2f2?w=400&q=80', category: 'Crime' },
    { title: 'Game of Thrones', image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80', category: 'Fantasy' },
  ];

  return (
    <section id="shows" className="py-24 bg-linear-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Currently Airing</h2>
            <p className="text-gray-400">Watch the latest popular shows and series</p>
          </div>
          <button
            onClick={() => toast.info('Full library coming soon!')}
            className="text-green-400 hover:text-green-300 font-medium flex items-center gap-2 transition-colors"
          >
            View All <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {shows.map((show, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">{show.category}</span>
                <h3 className="text-white font-bold mt-1">{show.title}</h3>
                {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toast.success(`Now playing: ${show.title}`);
                  }}
                  className="mt-3 w-full bg-white/20 backdrop-blur-sm hover:bg-green-500 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" /> Watch Now
                </button> */}
              </div>
              <div className="absolute top-2 right-2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
                LIVE
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 9.99,
      period: 'month',
      features: [
        '1,000+ Channels',
        'HD Quality',
        '1 Device Connection',
        '24/7 Support',
        'EPG Guide'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: 500,
      period: 'month',
      features: [
        '5,000+ Channels',
        'Full HD & 4K',
        '3 Device Connections',
        '24/7 Priority Support',
        'EPG Guide',
        'VOD Library',
        'Catch-up TV'
      ],
      popular: true
    },
    {
      name: 'Ultimate',
      price: 24.99,
      period: 'month',
      features: [
        '10,000+ Channels',
        '4K Ultra HD',
        '5 Device Connections',
        '24/7 VIP Support',
        'EPG Guide',
        'VOD Library',
        'Catch-up TV',
        'Adult Content (Optional)',
        'PPV Events Included'
      ],
      popular: false
    },
    {
      name: 'Annual',
      price: 149.99,
      period: 'year',
      features: [
        '10,000+ Channels',
        '4K Ultra HD',
        '5 Device Connections',
        '24/7 VIP Support',
        'EPG Guide',
        'VOD Library',
        'Catch-up TV',
        'Adult Content (Optional)',
        'PPV Events Included'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-green-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Flexible pricing options to suit your entertainment needs</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pricing-swiper pb-12"
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`h-full p-8 rounded-2xl border ${plan.popular
                  ? 'bg-linear-to-b from-green-500/20 to-green-600/5 border-green-500/50'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
                  } transition-all duration-300 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-green-400' : 'text-gray-500'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => toast.success(`Selected ${plan.name} plan! Redirecting to checkout...`)}
                  className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular
                    ? 'bg-green-500 hover:bg-green-600 text-black'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                >
                  Get Started
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// Partners Section
const Partners = () => {
  const partners = [
    { name: 'Netflix', color: 'from-red-600 to-red-800' },
    { name: 'Disney+', color: 'from-blue-600 to-blue-800' },
    { name: 'HBO Max', color: 'from-purple-600 to-purple-800' },
    { name: 'Prime Video', color: 'from-cyan-500 to-blue-600' },
    { name: 'Hulu', color: 'from-green-500 to-green-700' },
    { name: 'Apple TV+', color: 'from-gray-700 to-gray-900' },
    { name: 'YouTube TV', color: 'from-red-500 to-red-700' },
    { name: 'ESPN+', color: 'from-orange-500 to-red-600' },
    { name: 'Paramount+', color: 'from-blue-500 to-indigo-600' },
    { name: 'Peacock', color: 'from-green-400 to-teal-600' },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Partners</h2>
          <p className="text-gray-400">We bring content from all major streaming platforms</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className={`h-24 rounded-xl bg-linear-to-br ${partner.color} opacity-80 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4 cursor-pointer hover:scale-105 transform`}>
                <span className="text-white font-bold text-lg md:text-xl text-center drop-shadow-lg">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 rounded-full px-8 py-4 border border-white/10">
            <Wifi className="w-6 h-6 text-green-400" />
            <span className="text-gray-300">Compatible with all major devices and platforms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Channels', 'Devices'],
    Support: ['Help Center', 'Contact Us', 'Setup Guide', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'DMCA'],
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">AllStream+</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium IPTV service providing access to thousands of channels and on-demand content worldwide.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => toast.info(`${link} page coming soon!`)}
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 AllStream+ IPTV. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CurrentShows />
        <Pricing />
        <Partners />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;