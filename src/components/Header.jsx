import { useState } from "react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="max-width py-5">
        <div className="flex items-center justify-between">
          <article className="flex items-center">
            <img src={logo} alt="" />

            <nav className="hidden md:block md:ml-5">
              <ul className="flex items-start justify-start">
                <li>
                  <button className="text-slate-400">Features</button>
                </li>
                <li className="my-5 md:my-0 md:mx-5">
                  <button className="text-slate-400">Pricing</button>
                </li>
                <li>
                  <button className="text-slate-400">Resources</button>
                </li>
              </ul>
            </nav>
          </article>

          {isOpen && (
            <div className="absolute left-5 right-5 top-20 rounded-md bg-slate-900 text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
              <nav className="md:hidden">
                <ul className="flex flex-col items-center justify-center">
                  <li>
                    <button>Features</button>
                  </li>
                  <li className="my-5">
                    <button>Pricing</button>
                  </li>
                  <li>
                    <button>Resources</button>
                  </li>
                  <div className="divide-y divide-solid"></div>
                </ul>
              </nav>
              <ul className="flex flex-col items-center justify-center">
                <li className="my-5">
                  <button className="text-slate-400">Login</button>
                </li>
                <li>
                  <button className="btn-cta rounded-full">Sign Up</button>
                </li>
              </ul>
            </div>
          )}

          <div className="hidden md:block">
            <ul className="flex items-center ml-5">
              <li className="my-5 md:my-0 md:mr-5">
                <button className="text-slate-400">Login</button>
              </li>
              <li>
                <button className="btn-cta rounded-full">Sign Up</button>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl md:hidden"
          >
            {isOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </header>
    </>
  );
}
