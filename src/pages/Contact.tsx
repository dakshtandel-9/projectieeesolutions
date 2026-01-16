import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../data/content';

export default function Contact() {
    return (
        <>
            <SEO title="Contact Us | projectsieeesolutions" description="Get in touch with us for your project needs. We're here to help!" />

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"
                        animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                </div>

                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Get in <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Have a project idea? We're here to help you bring it to life. Reach out to us today!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Contact Cards */}
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <MapPin className="w-6 h-6" />,
                                        title: 'Our Location',
                                        content: COMPANY_INFO.address,
                                        gradient: 'from-cyan-500 to-blue-500'
                                    },
                                    {
                                        icon: <Phone className="w-6 h-6" />,
                                        title: 'Phone Number',
                                        content: COMPANY_INFO.phone,
                                        gradient: 'from-purple-500 to-pink-500'
                                    },
                                    {
                                        icon: <Mail className="w-6 h-6" />,
                                        title: 'Email Address',
                                        content: COMPANY_INFO.email,
                                        gradient: 'from-green-500 to-emerald-500'
                                    },
                                    {
                                        icon: <Clock className="w-6 h-6" />,
                                        title: 'Working Hours',
                                        content: 'Mon - Sat: 9:00 AM - 7:00 PM',
                                        gradient: 'from-orange-500 to-red-500'
                                    },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                                <p className="text-gray-400 leading-relaxed">{item.content}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Map */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-80"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.026462703816!2d77.5956706!3d12.9177526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1508dae766fd%3A0x1f2e030c3d05ff74!2sProjects%20at%20Bangalore!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="location map"
                                    className="grayscale hover:grayscale-0 transition-all duration-300"
                                ></iframe>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            Quick <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Answers</span>
                        </h2>
                        <p className="text-xl text-gray-400">
                            Frequently asked questions
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            { q: 'How long does it take to complete a project?', a: 'Typically 2-4 weeks depending on complexity and requirements.' },
                            { q: 'Do you provide source code?', a: 'Yes, complete source code with documentation is provided for all projects.' },
                            { q: 'Can I customize my project?', a: 'Absolutely! We tailor each project to your specific requirements and interests.' },
                            { q: 'What support do you offer after completion?', a: 'We provide lifetime support for any queries or modifications needed.' },
                        ].map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                                <p className="text-gray-400">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
