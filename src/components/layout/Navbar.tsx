import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { NAV_LINKS } from '../../data/content';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed w-full bg-slate-900/80 backdrop-blur-xl z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-500 p-2.5 rounded-2xl">
                                    <Code2 className="h-7 w-7 text-white" />
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-xl text-white block leading-tight">
                                    projectsieee<span className="text-cyan-400">solutions</span>
                                </span>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" />
                                    Engineering Excellence
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={cn(
                                        "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 relative group",
                                        location.pathname === link.href
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {location.pathname === link.href && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                                        location.pathname === link.href
                                            ? "text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
