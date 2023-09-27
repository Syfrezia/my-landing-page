import { useState } from "react";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full sticky top-0 z-10 py-4 px-6 sm:px-16 bg-primary">
      <nav className="w-full flex justify-between items-center">
        <img src={logo} alt="studisini.id" width={150} />
        <ul className="list-none sm:flex-end-center gap-6 hidden flex-1">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                className="cursor-pointer text-off-white font-semibold hover:text-secondary"
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="text-3xl text-white sm:hidden cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <IoMdClose /> : <HiMenuAlt3 />}
        </div>
      </nav>

      <div className={`${!toggle ? "hidden" : "flex"} sm:hidden py-2`}>
        <ul className="list-none flex-1 flex flex-col gap-1">
          {navLinks.map((nav) => (
            <li key={nav.id} className="flex-center-center">
              <a
                className="cursor-pointer font-medium text-off-white hover:text-secondary"
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
