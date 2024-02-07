// Navbar.js
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = ["Beranda", "Struktur"];

  return (
    <div>
      <nav className=" flex flex-wrap items-center w-full justify-between p-8 lg:justify-between xl:px-0 bg-white dark:bg-gray-900">
        <Disclosure>
          {({ open }) => (
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <span className="flex items-center space-x-2 text-2xl font-medium text-green-500 dark:text-gray-100">
                  <Image
                    src="/img/p.png"
                    alt="Logo"
                    width="32"
                    height="32"
                    className="w-8 rounded-sm"
                  />
                  <span>RA</span>
                </span>
              </Link>

              <Disclosure.Button
                aria-label="Toggle Menu"
                className={`px-2 py-1 ml-auto text-white rounded-md lg:hidden ${
                  open ? "bg-green-500" : "bg-green-500"
                } hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700`}
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={index === 0 ? "/" : "/struktur"}
                      className={`w-full px-4 py-2 -ml-4 text-white rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none ${
                        index === 0 ? "bg-green-500" : ""
                      }`}
                    >
                      {item}
                    </Link>
                  ))}
                </>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="nav__item" key={index}>
                <Link
                  href={index === 0 ? "/" : "/struktur"}
                  className={`inline-block px-4 py-2 text-lg font-normal text-green-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 ${
                    index === 0 ? "bg-green-500" : ""
                  }`}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Get Started
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
