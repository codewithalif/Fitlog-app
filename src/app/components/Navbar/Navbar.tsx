'use client'
import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import MobileNavToggle from "./MobileNavToggle";
import { usePathname } from "next/navigation";

const links = [
  { name: "Workouts", href: "/" },
  { name: "My Plan", href: "/myPlan" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800 ">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="max-lg:collapse shadow-sm w-full rounded-md">
          <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
          <label
            htmlFor="navbar-1-toggle"
            className="fixed inset-0 hidden max-lg:peer-checked:block"
          ></label>
          <div className="collapse-title navbar">
            <div className="navbar-start md:flex md:gap-2">
              <label
                htmlFor="navbar-1-toggle"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <Image src={logo} alt="logo" />
              <button className="font-oswald text-2xl font-bold">FITLOG</button>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 ">
                {links.map((link) => (
                  <li className="mx-2" key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        pathname === link.href
                          ? "bg-[#c6ff00] text-black"
                          : "text-white"
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end">
              <MobileNavToggle />
            </div>
          </div>

          <div className="collapse-content lg:hidden z-1">
            <ul className="menu">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                       pathname === link.href
                        ? "bg-[#c6ff00] text-black"
                        : "text-white"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;