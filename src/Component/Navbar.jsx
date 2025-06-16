import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10
                 shadow-[0_4px_12px_rgba(124,77,255,0.25)] py-2 px-6 flex justify-center md:justify-evenly items-center"
    >
      <div className="flex gap-5 md:gap-10 text-sm md:text-base font-medium text-white">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Me" },
          { to: "/skills", label: "Skills" },
          { to: "/projects", label: "Projects" },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? `relative text-blue-400 font-semibold
                   after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                   after:h-[2px] after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
                   after:rounded-full after:transition-all after:duration-500`
                : "text-gray-300 hover:text-blue-400 transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
