// File path: src/components/Navbar.js
import { Link, NavLink } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Popover, Transition, PopoverButton, PopoverPanel, PopoverGroup} from "@headlessui/react";
import InfoPopover from "./InforPopover";

const solutions = [
  { name: "Show Case", description: "Our pricing plans.", href: "/flex" },
  { name: "Docs", description: "Learn about us.", href: "/docs" },
  { name: "Examples", description: "Our pricing plans.", href: "/examples" },
];

export default function Example() {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeClassName = "text-accent p-1 border-b-2 border-accent text-sm";

  return (
    <div>
      <Popover
        className={`fixed top-0 left-0 right-0 h-14 flex justify-center items-center z-10 transition-all duration-300 transform ${showShadow
          ? "shadow-sm shadow-black/20 bg-primary backdrop-blur-sm"
          : "shadow-none"
          }`}
      >
        <div className="container mx-auto flex flex-row justify-between items-center px-4">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <PopoverButton className="rounded-lg bg-accent p-2 text-text hover:bg-primary hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
              <span className="sr-only">Open menu</span>
              {/* Inline SVG for Menu Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
              </svg>
            </PopoverButton>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 ">
            <img
              alt="home"
              src="https://res.cloudinary.com/dlw9hjlzv/image/upload/v1713958088/AFFABLE/Group_670_1_burzn0.png"
              className="h-7 w-7"
            />
            <p
              className="text-xl lg:text-3xl relative font-extrabold "
              style={{ fontFamily: "Space Grotesk" }}
            >
              ExpertForms
            </p>
          </Link>

          {/* Desktop Navigation */}
          <PopoverGroup as="nav" className="hidden lg:flex gap-10">
            {solutions.map(({ name, href }) => (
              <NavLink
                key={name}
                to={href}
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "text-text hover:text-accent p-1 text-sm"
                }
              >
                {name}
              </NavLink>
            ))}
          </PopoverGroup>

          {/* User Account Button */}
          <div className="flex items-center gap-4">
            <Link
              to="/account"
              className="lg:hidden bg-accent p-2 rounded-lg text-white hover:bg-primary hover:text-black"
            >
              {/* Inline SVG for Account Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 2a10 10 0 0 0 0 20a10 10 0 0 0 0-20Zm0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3Zm0 16a8 8 0 0 1-6.2-2.9a5 5 0 0 1 12.4 0A8 8 0 0 1 12 20Z" />
              </svg>
            </Link>
            <div className="hidden lg:block">
              <InfoPopover />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel className="absolute inset-x-0 top-0 p-4 bg-primary shadow-lg lg:hidden">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <img
                  alt="home"
                  src="https://res.cloudinary.com/dlw9hjlzv/image/upload/v1713958088/AFFABLE/Group_670_1_burzn0.png"
                  className="h-7 w-7"
                />
                <p className="text-xl font-bold">ExpertForms</p>
              </Link>
              <PopoverButton className="bg-accent p-2 rounded-lg text-white hover:bg-primary hover:text-black">
                <span className="sr-only">Close menu</span>
                {/* Inline SVG for Close Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </PopoverButton>
            </div>
            <div className="mt-4">
              <nav className="grid gap-4">
                {solutions.map(({ name, href }) => (
                  <Link
                    key={name}
                    to={href}
                    className="block text-text hover:text-accent p-2 rounded-md"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
}
