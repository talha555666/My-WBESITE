import { NavLink } from "react-router";

function Navbar () {
    return (
      <div className="sticky top-0  bg-white sm:w-full sm:shadow-md  shadow-sm">
          <nav className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Logo Section */}
                <h2 className="text-xl md:text-2xl font-bold text-blue-600">Abu Talha</h2>
                
                {/* Links Section - Mobile এ নিচে নিচে এবং Desktop এ পাশাপাশি */}
                <div className="flex flex-row space-x-5 text-blue-600 text-sm md:text-base">
                 <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                        ? "text-blue-700 font-bold border-b-2 border-blue-600 pb-1"
                        : "hover:text-blue-500 transition-colors"
                    }
                    >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                        ? "text-blue-700 font-bold border-b-2 border-blue-600 pb-1"
                        : "hover:text-blue-500 transition-colors"
                    }
                    >
                    About Me
                </NavLink>
                </div>

                {/* Button Section - Mobile এ ছোট এবং Desktop এ বড় */}
                <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-blue-700 transition active:scale-95 text-sm md:text-base">
                  <a href="mailto:abutalha123@gmail.com">Contact Me</a>
                </button>
            </nav>
      </div>
    )
}
export default Navbar;