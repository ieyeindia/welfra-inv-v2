import React from "react";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cta from "../components/Cta";

// assets
import OutlookIndiaLogo from "../assets/content/outlookindia-logo.png";
import HindusthanTimesLogo from "../assets/content/ht-logo.png";
import AniNewsLogo from "../assets/content/aninews-logo.png";
import AniHtOiLogos from "../assets/content/ani-ht-oi-logos.png";

// icons
import {
  ChartBarIcon,
  Square3Stack3DIcon,
  ShieldCheckIcon,
  ComputerDesktopIcon,
  CheckBadgeIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
const services = [
  {
    name: "Advisory Calls",
    description:
      "We offer well-researched calls and advice related to the segment you are looking to invest in. Professional traders at Welfra Investments minutely analyses the market and provide you with in-depth market information.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Portfolio Management Schemes",
    description:
      "We are going to offer you the most awaited, reliable, and profitable Portfolio Management Schemes. Experts at Welfra Investments handle your portfolio and proficiently secure your finances in the best possible way.",
    href: "#",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Hedge Fund",
    description:
      "We employ a vast range of strategies to manage your hedge fund. Welfra Investments thrives on offering specialized financial services to its clients. You as a client can expect steady growth of your Hedge fund.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Financial Training",
    description:
      "Not only do we grow your finances, but we also help you grow both as a trader and an investor. Welfra Investments delivers unstinting guidance and continual training, so that you can yourself trade in the market.",
    href: "#",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Certified Internships",
    description:
      "Individuals can join our fast-growing team as interns by filling out the application form. We assure you that you will learn invaluable lessons and acquire extraordinary skills during your journey with Welfra Investments.",
    href: "#",
    icon: CheckBadgeIcon,
  },
  {
    name: "More",
    description:
      "We employ a vast range of strategies to manage your hedge fund. Welfra Investments thrives on offering specialized financial services to its clients. You as a client can expect steady growth of your Hedge fund.",
    href: "#",
    icon: ArrowLeftOnRectangleIcon,
  },
];

export default function Index() {
  return (
    <>
      <main className="mx-auto mt-20 mb-20 max-w-7xl px-8 sm:mt-36 sm:px-6">
        {/* HERO SECTION */}

        <section className="hero flex flex-col items-center text-center">
          <h1 className="text-6xl font-extrabold text-gray-darker sm:text-7xl">
            Build your{" "}
            <span className="bg-gradient-to-br from-blue-secondary to-blue-primary bg-clip-text text-transparent">
              Wealth Wisely.
            </span>
          </h1>
          <p className="mx-auto my-11 text-xl leading-8 text-gray-base  sm:my-0 sm:mt-16 sm:w-[800px] sm:text-xl">
            Maximize your returns on your investments. Experience the most
            strategic utilization to grow your hard earned money.
          </p>
          <form className="w-full sm:mt-14 sm:flex sm:max-w-[30rem]">
            <label htmlFor="footer-phone-number" className="sr-only">
              Phone number
            </label>
            <input
              type="tel"
              name="hero-phone-number"
              id="hero-phone-number"
              required
              className="w-full min-w-0 appearance-none rounded-xl border-gray-200 bg-white py-3 px-4 text-lg text-slate-900 placeholder-slate-500 shadow-sm ring-gray-300 focus:border-blue-primary focus:placeholder-slate-400 focus:outline-none focus:ring-blue-primary"
              placeholder="Enter phone number"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-xl border border-transparent bg-blue-primary py-3 px-11 text-lg font-medium text-white shadow-xl transition-all hover:bg-blue-800 focus:ring-2 focus:ring-blue-primary focus:ring-offset-2"
              >
                Request call back
              </button>
            </div>
          </form>
          <p className="mt-14 text-center text-lg text-gray-base">
            As featured in
          </p>
          <div className="mt-7 flex gap-3.5 sm:gap-8">
            <img
              className="h-[18px] w-auto sm:h-7"
              src={OutlookIndiaLogo}
              alt="Outlook India"
            />
            <img
              className="h-[18px] w-auto sm:h-7"
              src={AniNewsLogo}
              alt="ANI News"
            />
            <img
              className="h-[18px] w-auto sm:h-7"
              src={HindusthanTimesLogo}
              alt="Hindustha Times"
            />
          </div>
        </section>

        {/* SERVICES SECTION */}

        <section className="mt-32 flex flex-col items-center">
          <span className="bg-gradient-to-r from-blue-secondary to-blue-primary bg-clip-text text-lg font-semibold uppercase tracking-wider text-transparent">
            Services
          </span>
          <h2 className="mt-7 text-center text-4xl font-bold text-gray-darker sm:text-5xl">
            What do we have for you?
          </h2>
          <div className="mt-20 grid grid-cols-1 gap-8 text-base sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => {
              return (
                <div
                  key={service.name}
                  className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 text-gray-base transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/30"
                >
                  <service.icon
                    className="h-9 w-9 flex-shrink-0 text-blue-primary"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold text-gray-dark">
                    {service.name}
                  </h3>
                  <p className="mt-1">{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        {/* Call to action */}
        <Cta />
      </main>
    </>
  );
}
