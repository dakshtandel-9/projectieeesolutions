import { motion } from 'framer-motion';
import { Target, Users, Award, Zap, Heart, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
    return (
        <>
            <SEO title="About Us | projectsieeesolutions" description="Learn about our mission to empower engineering students with innovative project solutions." />

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"
                        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
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
                            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Us</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Empowering the next generation of engineers with innovative project solutions and expert guidance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-500/50 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                To bridge the gap between academic learning and industry implementation by providing students with hands-on experience in cutting-edge technologies.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                We strive to empower engineering students with the practical skills, knowledge, and confidence needed to excel in their careers and contribute meaningfully to the tech industry.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                To become the most trusted partner for engineering students across India, known for delivering exceptional project guidance and fostering innovation.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                We envision a future where every engineering student has access to world-class project mentorship, enabling them to transform their innovative ideas into reality.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
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
                            Our Core <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Student-Centric",
                                desc: "Every decision we make puts student success at the forefront. Your growth is our priority.",
                                gradient: "from-cyan-500 to-blue-500"
                            },
                            {
                                icon: <Award className="w-8 h-8" />,
                                title: "Excellence",
                                desc: "We maintain the highest standards in project quality, documentation, and technical expertise.",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Integrity",
                                desc: "Honest guidance, transparent processes, and ethical practices in all our interactions.",
                                gradient: "from-green-500 to-emerald-500"
                            },
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 text-white`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "1000+", label: "Happy Students", icon: "🎓" },
                            { value: "50+", label: "Technologies", icon: "💻" },
                            { value: "100%", label: "Success Rate", icon: "🏆" },
                            { value: "15+", label: "Years Experience", icon: "⭐" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                            >
                                <div className="text-4xl mb-3">{stat.icon}</div>
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            What Sets Us <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Apart</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Industry-Grade Projects", desc: "Real-world applications using the latest technologies and frameworks" },
                            { title: "Expert Mentorship", desc: "Guidance from professionals with hands-on industry experience" },
                            { title: "Complete Documentation", desc: "Detailed reports, presentations, and source code explanations" },
                            { title: "Lifetime Support", desc: "Ongoing assistance even after project completion" },
                            { title: "Customized Solutions", desc: "Tailored projects based on your interests and career goals" },
                            { title: "Placement Assistance", desc: "Project portfolio that impresses recruiters and helps you stand out" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                            >
                                <div className="flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
