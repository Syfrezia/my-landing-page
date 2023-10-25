import {
  footerLinks,
  classesLinks,
  partnerLinks,
  socialMedia,
} from "../constants";

import { logo } from "../assets";
import { GrMail } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-primary text-off-white py-8 px-6 sm:px-16 block md:flex md:flex-col">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center lg:items-start">
          <img src={logo} alt="logo" width={250} />
          <div className="flex-start-center gap-2 text-xl mt-4">
            <GrMail /> halo@studisini.co.id
          </div>
          <div className="flex-start-center gap-2 text-xl mt-4">
            <BsTelephone /> (021) 1111 1234
          </div>
        </div>

        <div className="mt-6 sm:mt-0 flex flex-col lg:flex-row gap-4 md:gap-16">
          <div>
            <p className="text-xl text-center lg:text-start font-semibold">
              STUDISINI.id
            </p>
            <div className="mt-2">
              <ul className="list-none text-center lg:text-start">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <a href="#" className="hover:text-secondary">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 lg:mt-0">
            <p className="text-xl text-center lg:text-start font-semibold">
              Jenis Kelas
            </p>
            <div className="mt-2">
              <ul className="list-none text-center lg:text-start">
                {classesLinks.map((link) => (
                  <li key={link.id}>
                    <a href="#" className="hover:text-secondary">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 lg:mt-0">
            <p className="text-xl text-center lg:text-start font-semibold">
              Partner
            </p>
            <div className="mt-2">
              <ul className="list-none text-center lg:text-start">
                {partnerLinks.map((link) => (
                  <li key={link.id}>
                    <a href="#" className="hover:text-secondary">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-6 pt-4 border-t-2 border-slate-500 flex flex-col md:flex-row justify-between items-center">
        <p className="text-md text-center font-medium flex-center-center">
          Copyright &copy; 2023 studisini.id. All Rights Reserved.
        </p>
        <div className="flex-center-center gap-4 text-2xl mt-6 sm:mt-0">
          {socialMedia.map((social) => (
            <span key={social.id} onClick={() => window.open(social.link)}>
              <social.icon />
            </span>
          ))}
        </div>
      </div>
      <div className="w-full mt-6 flex-center-center">
        <p>Developed by: @syfrezia</p>
      </div>
    </footer>
  );
};

export default Footer;
