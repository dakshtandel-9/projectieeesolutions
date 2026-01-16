import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Code2, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../../data/content';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-950 text-gray-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-500 p-2.5 rounded-2xl">
                                    <Code2 className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            <span className="font-bold text-xl text-white">
                                projectsieee<span className="text-cyan-400">solutions</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                            Empowering engineering students with innovative project solutions and expert guidance since 2010. Your success is our mission.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-200" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <MapPin className="h-5 w-5 text-cyan-400" />
                                </div>
                                <span className="text-sm text-gray-400 leading-relaxed pt-2">{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone className="h-5 w-5 text-purple-400" />
                                </div>
                                <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                                    {COMPANY_INFO.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="h-5 w-5 text-green-400" />
                                </div>
                                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                                    {COMPANY_INFO.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/75 transition-all duration-300 hover:scale-110 flex items-center justify-center z-50"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
}
