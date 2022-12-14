import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars2Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "../assets/content/logo-main.png";
import { Link } from "react-router-dom";
const services = [
  {
    name: "Advisory Calls",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Professional Courses",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Open Free Demat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const company = [
  {
    name: "Company Terms",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Refund Policy",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Privacy Policy",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Events",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className="relative">
      <div className="mx-auto max-w-7xl px-8 sm:px-6">
        <div className="flex items-center justify-between py-8 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">
                Welfra Investment And Assets Management Private Limited
              </span>
              <img
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt="Welfra Investment Logo"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-slate-100 p-2 text-gray-base hover:text-gray-dark focus:outline-none">
              <span className="sr-only">Open menu</span>
              <Bars2Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-dark" : "text-gray-base",
                      "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-dark focus:outline-none"
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-dark" : "text-gray-base",
                        "ml-2 h-5 w-5 group-hover:text-gray-dark"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {services.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-blue-primary"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-dark">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-base">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <Link
                                to={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-dark hover:bg-gray-100"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-gray-base opacity-60"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link
              to="#"
              className="text-base font-medium text-gray-base hover:text-gray-dark"
            >
              Blog
            </Link>
            <Link
              to="#"
              className="text-base font-medium text-gray-base hover:text-gray-dark"
            >
              Contact
            </Link>

            <Link
              to="#"
              className="text-base font-medium text-gray-base hover:text-gray-dark"
            >
              About
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              to="/signin"
              className="whitespace-nowrap text-base font-medium text-gray-base hover:text-gray-dark"
            >
              Sign in
            </Link>
            <Link
              to="signup"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm ring-blue-primary ring-offset-2 transition-all hover:bg-blue-800 focus:ring-2"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-0 bg-black bg-opacity-20" />
      </Transition.Child>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-3 transition md:hidden"
        >
          <div className="z-10 divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="mb-2 h-8 w-auto"
                    src={logo}
                    alt="Welfra Investment Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-slate-100 p-2 text-gray-base hover:text-gray-dark focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-8">
                <nav className="grid gap-y-9">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-blue-primary"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-dark">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-8 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                <Link
                  to="#"
                  className="text-base font-medium text-gray-dark hover:text-gray-darker"
                >
                  Pricing
                </Link>

                <Link
                  to="#"
                  className="text-base font-medium text-gray-dark hover:text-gray-darker"
                >
                  Docs
                </Link>
                {company.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-base font-medium text-gray-dark hover:text-gray-darker"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <Link
                  to="/signup"
                  className="flex w-full items-center justify-center rounded-lg border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-800"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-base">
                  Existing customer?{" "}
                  <a
                    href="/signin"
                    className="text-blue-primary hover:text-blue-800"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
