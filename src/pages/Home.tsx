import { ArrowRight, CheckCircle2, Cpu, GraduationCap, Layout as LayoutIcon, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import SEO from '../components/SEO';
import { SERVICE_CATEGORIES } from '../data/content';

export default function Home() {
    return (
        <>
            <SEO
                title="projectsieeesolutions | Innovative Engineering Projects"
                description="Final year engineering projects for CSE, ECE, EEE, Mechanical and more. Expert guidance and comprehensive support."
            />

            {/* Hero Section - Redesigned */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                {/* Animated Background Gradients */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute top-0 right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                        animate={{
                            x: [0, -100, 0],
                            y: [0, 100, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                        animate={{
                            x: [0, 50, 0],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block mb-4"
                            >
                                <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium backdrop-blur-sm">
                                    🚀 Trusted by 1000+ Students
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                            >
                                <span className="text-white">Transform Your</span>
                                <br />
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Engineering Dreams
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-300 mb-8 leading-relaxed"
                            >
                                Expert guidance for your final year projects. From VLSI to AI, Robotics to IoT - we bring your innovative ideas to life with cutting-edge technology.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to="/contact">
                                    <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 rounded-full px-8 shadow-lg shadow-cyan-500/50">
                                        Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link to="/services">
                                    <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8">
                                        Browse Projects
                                    </Button>
                                </Link>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
                            >
                                {[
                                    { value: "1000+", label: "Projects Delivered" },
                                    { value: "50+", label: "Technologies" },
                                    { value: "100%", label: "Success Rate" },
                                ].map((stat, idx) => (
                                    <div key={idx}>
                                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Floating Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] hidden lg:block"
                        >
                            {/* Main Card */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-0 left-0 w-80 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                                        <Cpu className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">VLSI Design</h3>
                                        <p className="text-gray-400 text-sm">Cadence & Xilinx</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-300">Progress</span>
                                        <span className="text-cyan-400 font-semibold">92%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                                            initial={{ width: 0 }}
                                            animate={{ width: "92%" }}
                                            transition={{ delay: 1, duration: 1.5 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Second Card */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                className="absolute top-40 right-0 w-72 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                                        <Lightbulb className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">AI & ML</h3>
                                        <p className="text-gray-400 text-sm">Python & TensorFlow</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-300">Accuracy</span>
                                        <span className="text-purple-400 font-semibold">96%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                                            initial={{ width: 0 }}
                                            animate={{ width: "96%" }}
                                            transition={{ delay: 1.2, duration: 1.5 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Third Card */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute bottom-20 left-12 w-64 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-5 shadow-2xl"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">IoT Projects</h3>
                                        <p className="text-gray-400 text-xs">Arduino & ESP32</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span>Real-time Monitoring</span>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-10 -right-10 w-40 h-40 border border-cyan-500/20 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute -bottom-10 -left-10 w-32 h-32 border border-purple-500/20 rounded-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features / Why Choose Us - Redesigned */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
                <motion.div
                    className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            Why <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Choose Us?</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            We don't just provide code; we provide knowledge and expertise that sets you apart.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: <GraduationCap className="h-10 w-10" />,
                                title: "Expert Guidance",
                                desc: "Learn from industry professionals with years of real-world experience in cutting-edge technologies.",
                                gradient: "from-cyan-500 to-blue-500"
                            },
                            {
                                icon: <LayoutIcon className="h-10 w-10" />,
                                title: "Complete Documentation",
                                desc: "Get detailed reports, presentations, source code, and comprehensive project documentation.",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: <CheckCircle2 className="h-10 w-10" />,
                                title: "100% Success Guarantee",
                                desc: "We ensure your project runs flawlessly and meets all academic and technical requirements.",
                                gradient: "from-green-500 to-emerald-500"
                            },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                                    style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                                />
                                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl h-full hover:border-white/20 transition-all duration-300">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 text-white`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Preview - Redesigned */}
            <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                {/* Background Pattern */}
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
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4"
                    >
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                Project <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Domains</span>
                            </h2>
                            <p className="text-xl text-gray-400">Explore our wide range of technical expertise.</p>
                        </div>
                        <Link to="/services">
                            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm group">
                                View All Domains
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {SERVICE_CATEGORIES.slice(0, 8).map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -5 }}
                            >
                                <Link to="/services">
                                    <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 rounded-2xl p-6 h-full transition-all duration-300 cursor-pointer overflow-hidden">
                                        {/* Hover Gradient Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <Cpu className="w-6 h-6 text-cyan-400" />
                                            </div>
                                            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">{cat}</h3>
                                            <p className="text-gray-500 text-sm">Explore projects →</p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section - New */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <motion.div
                    className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"
                    animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            Student <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Success Stories</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Hear from students who transformed their ideas into reality with our guidance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Rahul Sharma", role: "CSE, VTU", text: "The VLSI project guidance was exceptional. Got placed at Intel with this project!", rating: 5 },
                            { name: "Priya Patel", role: "ECE, Anna University", text: "Best decision for my final year. The ML project helped me land my dream job at Google.", rating: 5 },
                            { name: "Arjun Kumar", role: "EEE, JNTU", text: "Professional approach and complete support. Highly recommended for serious students!", rating: 5 },
                        ].map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">{testimonial.name}</div>
                                        <div className="text-gray-500 text-sm">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Redesigned */}
            <section className="py-24 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                        }}
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    />
                </div>

                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Ready to Start Your <br />
                            <span className="text-cyan-200">Dream Project?</span>
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join successful students. Get expert guidance, complete documentation, and guaranteed results for your final year project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/contact">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-10 text-lg shadow-2xl">
                                    Get Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-10 text-lg">
                                    Browse Projects
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { icon: "🎓", label: "1000+ Students" },
                                { icon: "⭐", label: "4.9/5 Rating" },
                                { icon: "🏆", label: "100% Success" },
                                { icon: "🚀", label: "50+ Technologies" },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20"
                                >
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <div className="text-white font-semibold">{item.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
