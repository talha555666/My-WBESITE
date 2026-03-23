import { NavLink } from "react-router";

function Discover() {
    return (
        <div >
             <section id="learn-more" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* ABOUT PREVIEW */}
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Journey as a Developer
            </h2>

            <p className="text-gray-600 leading-relaxed">
              I'm a passionate frontend developer who loves transforming ideas
              into interactive digital experiences. I focus on clean code,
              performance, and user-friendly interfaces.
            </p>

            <NavLink
              to="/about"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Read Full Story →
            </NavLink>
          </div>

          {/* SKILLS + WHY ME */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Technical Skills
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>✔ HTML5 / CSS3 / Tailwind CSS</li>
                <li>✔ JavaScript (ES6+)</li>
                <li>✔ React JS</li>
                <li>✔ Responsive & Mobile-First Design</li>
                <li>✔ Git & GitHub</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm">
              <h3 className="text-xl font-semibold mb-6">
                Why Choose Me?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li> Fast Delivery</li>
                <li> User-Focused Development</li>
                <li> Clean & Maintainable Code</li>
                <li> Performance Optimization</li>
              </ul>
            </div>

          </div>

          {/* PROJECTS */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-center">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Portfolio Website",
                  desc: "Personal portfolio built with React and Tailwind CSS.",
                },
                {
                  title: "Landing Page",
                  desc: "High-converting responsive product landing page.",
                },
                {
                  title: "Dashboard UI",
                  desc: "Modern admin dashboard interface with clean layout.",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5">
                    {project.desc}
                  </p>
                  <button className="text-blue-600 font-semibold hover:underline">
                    View Project →
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

        </div>
    )   
}
export default Discover;