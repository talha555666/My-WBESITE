import React from "react";
import { NavLink } from "react-router";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

   
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 text-center">
        <div className="space-y-8">

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Hi, I'm <span className="text-blue-600">Abu Talha</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I build fast, responsive and modern web applications using 
            <span className="font-semibold text-gray-800"> React</span> & 
           <span className="font-semibold text-gray-800"> Tailwind CSSn</span> 
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
        

            <NavLink
              to="/discover"
              className="px-8 py-3 bg-blue-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-all active:scale-95"
            >
              Discover more
            </NavLink>
          </div>

        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: " Fast Performance",
              desc: "Optimized, clean and lightweight code for smooth user experience.",
            },
            {
              title: " Responsive Design",
              desc: "Mobile-first layouts that work perfectly on all devices.",
            },
            {
              title: " Modern UI",
              desc: "Minimal, clean and user-focused interface design.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-sm border hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

     
   
    </div>
  );
}

export default Home;