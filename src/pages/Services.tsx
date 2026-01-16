import { motion } from 'framer-motion';
import { Cpu, Code, Zap, Wifi, Database, Smartphone, Brain, Cog } from 'lucide-react';
import SEO from '../components/SEO';
import { SERVICE_CATEGORIES } from '../data/content';

const categoryIcons: { [key: string]: any } = {
    'Matlab Projects': Brain,
    'VLSI Projects': Cpu,
    'Embedded Systems': Cog,
    'Robotics': Zap,
    'Power Systems': Database,
    'Java/J2EE': Code,
    'DotNet': Code,
    'Android': Smartphone,
    'NS2/NS3': Wifi,
    'Python': Code,
};

export default function Services() {
    return (
        <>
            <SEO title="Services | projectsieeesolutions" description="Browse our wide range of engineering project domains and technologies." />

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-20 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"
                        animate={{ scale: [1, 1.2, 1], y: [0, 50, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"
                        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
                        transition={{ duration: 12, repeat: Infinity }}
                    />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Comprehensive project guidance across all major engineering domains. From concept to completion, we've got you covered.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {['All Domains', 'CSE', 'ECE', 'EEE', 'Mechanical'].map((tag, idx) => (
                                <motion.button
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="px-6 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                                >
                                    {tag}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {SERVICE_CATEGORIES.map((category, idx) => {
                            const Icon = categoryIcons[category] || Code;
                            const gradients = [
                                'from-cyan-500 to-blue-500',
                                'from-purple-500 to-pink-500',
                                'from-green-500 to-emerald-500',
                                'from-orange-500 to-red-500',
                                'from-indigo-500 to-purple-500',
                                'from-yellow-500 to-orange-500',
                            ];
                            const gradient = gradients[idx % gradients.length];

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`} />
                                    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-8 h-full transition-all duration-300">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{category}</h3>
                                        <p className="text-gray-400 mb-4">Final Year & Mini Projects</p>
                                        <ul className="space-y-2 text-sm text-gray-500">
                                            <li>✓ Complete Source Code</li>
                                            <li>✓ Documentation & PPT</li>
                                            <li>✓ Expert Guidance</li>
                                            <li>✓ Lifetime Support</li>
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            What's <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Included</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Every project comes with comprehensive support and documentation
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Complete Source Code', desc: 'Well-commented, industry-standard code with proper documentation', icon: '💻' },
                            { title: 'Project Report', desc: 'Detailed technical report covering all aspects of the project', icon: '📄' },
                            { title: 'PPT Presentation', desc: 'Professional presentation slides for your project demo', icon: '📊' },
                            { title: 'Synopsis', desc: 'Comprehensive project synopsis for submission', icon: '📝' },
                            { title: 'Expert Guidance', desc: '1-on-1 mentorship from industry professionals', icon: '👨‍🏫' },
                            { title: 'Lifetime Support', desc: 'Ongoing assistance even after project completion', icon: '🤝' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Can't Find Your Domain?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            We work on custom projects too! Get in touch with your requirements.
                        </p>
                        <a href="/contact">
                            <button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105">
                                Contact Us Now
                            </button>
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
