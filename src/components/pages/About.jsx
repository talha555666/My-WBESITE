import React from 'react';
import { NavLink } from 'react-router';

function About() {
    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
            {/* Main Content Section */}
            <div className="max-w-4xl mx-auto py-16 px-6 flex-grow">
                
                {/* Intro Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4 tracking-tight">About Me</h1>
                    <p className="text-lg text-gray-600 italic">"I build modern web experiences with clean code."</p>

            <NavLink
              to="/discover"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Back to the Discover →
            </NavLink>
                </div>
        
                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900">Who I Am</h2>
                        <p className="leading-relaxed">
                            Hello! I'm a passionate **Front-end Developer**. I love turning complex problems into simple, beautiful, and intuitive designs. My goal is to build websites that are fast and easy to use.
                        </p>
                    </div>

                    {/* Skill List */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold mb-4">My Skills</h3>
                        <ul className="space-y-3 font-medium">
                            <li className="flex items-center gap-2 text-blue-500 font-bold">✔ HTML / CSS / Tailwind</li>
                            <li className="flex items-center gap-2 text-blue-500 font-bold">✔ JavaScript / React</li>
                            <li className="flex items-center gap-2 text-blue-500 font-bold">✔ Responsive Design</li>
                             <li className="flex items-center gap-2 text-blue-500 font-bold">✔ landing page</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Section with Direct Email Link */}
            <footer className="bg-gray-900 text-white py-12 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h2 className="text-2xl font-bold">Got a Project? Let's Talk!</h2>
                    <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello.</p>
                    
                    <a 
                        href="mailto:mdabutalha443@gmail.com" 
                        className="inline-block mt-4 px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
                    >
                        Send Me a Message
                    </a>

                    <div className="pt-8 border-t border-gray-800 text-sm text-gray-500">
                        <p>© 2026 Abu Talha. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default About;