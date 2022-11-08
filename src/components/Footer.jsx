import React from "react";
import logo from "../assets/content/logo-main.png";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const services = [
  {
    name: "Advisory calls",
    href: "#",
  },
  {
    name: "Financial courses",
    href: "#",
  },
  {
    name: "Open free demat",
    href: "#",
  },
  {
    name: "Hedge fund",
    href: "#",
  },
];

const company = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "Terms of use",
    href: "/terms-of-use",
  },
  {
    name: "Refund policy",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto mt-10 max-w-7xl p-10 py-8 sm:px-6 lg:py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            <img
              className="h-7 w-auto sm:h-8"
              src={logo}
              alt="Welfra Investment Logo"
            />
            <p className="pt-3 text-base text-gray-base">
              Nodia: 812A Tower A Ithum Tower, Noida Sector 62, Noida 201301
            </p>
            <p className="text-base text-gray-base">
              Pune: Office No. 206, Mont Vert Apex, Phata Baner, Pune 411045
            </p>
            <div className="space-x-4">
              <a
                href="tel:9958909384"
                rel="noreferrer"
                title="Call us"
                className="group inline-flex flex-shrink-0 py-2 text-base font-medium
                text-gray-base transition-all
                hover:text-gray-darker md:text-lg"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@welfrainvesting.com"
                rel="noreferrer"
                title="Mail us"
                className="group inline-flex flex-shrink-0 py-2 text-base font-medium
                text-gray-base transition-all
                hover:text-gray-darker md:text-lg"
              >
                <EnvelopeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid md:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-dark">
                  Services
                </h3>
                <ul className="mt-4 space-y-3">
                  {services.map((service) => {
                    return (
                      <li key={service.name}>
                        <Link
                          className="text-base text-gray-base transition-all hover:text-slate-900"
                          to={service.href}
                        >
                          {service.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-dark">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  {company.map((companyItem) => {
                    return (
                      <li key={companyItem.name}>
                        <Link
                          className="text-base text-gray-base transition-all hover:text-slate-900"
                          to={companyItem.href}
                        >
                          {companyItem.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-dark">
                  Request a{" "}
                  <span className="bg-gradient-to-r from-blue-secondary to-blue-primary bg-clip-text text-transparent">
                    Free
                  </span>{" "}
                  call back
                </h3>
                <p className="mt-4 text-base text-gray-base">
                  Get notified about new components and other important updates.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="footer-phone-number" className="sr-only">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="footer-phone-number"
                    id="footer-phone-number"
                    required
                    className="w-full min-w-0 appearance-none rounded-lg border-gray-300 bg-white py-2 px-4 text-base text-slate-900 placeholder-slate-500 shadow-sm ring-gray-300 focus:border-blue-primary focus:placeholder-slate-400 focus:outline-none focus:ring-blue-primary"
                    placeholder="Enter phone number"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-lg border border-transparent bg-blue-primary py-2 px-4 text-base font-medium text-white transition-all hover:bg-blue-800 focus:ring-2 focus:ring-blue-primary focus:ring-offset-2"
                    >
                      Request call back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 items-center border-t border-slate-200 pt-8 text-base text-gray-base sm:flex sm:justify-between">
          <p className="flex text-center sm:block">
            © 2022 Welfra Investment and Assets Management.
          </p>
          <ul className="hidden items-center space-x-3 sm:flex">
            <li>
              <a
                className="transition-all hover:text-slate-900"
                href="/imprint"
              >
                Imprint
              </a>
            </li>
            <li>
              <a
                className="transition-all hover:text-slate-900"
                href="/privacy"
              >
                Privacy
              </a>
            </li>
          </ul>
          <div className="mt-2 flex items-center justify-center space-x-3 sm:hidden">
            <a className="transition-all hover:text-slate-900" href="/imprint">
              Imprint
            </a>
            <span>|</span>
            <a className="transition-all hover:text-slate-900" href="/privacy">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
