import React from "react";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="mt-36">
        <section className="hero flex flex-col items-center text-center">
          <h1 className="text-7xl font-extrabold text-gray-darker">
            Build your{" "}
            <span className="bg-gradient-to-r from-blue-secondary to-blue-primary bg-clip-text text-transparent">
              Wealth Wisely.
            </span>
          </h1>
          <p className="z-10 mx-auto mt-16 w-[800px] text-xl leading-8 text-gray-base">
            Maximize your returns on your investments. Experience the most
            strategic utilization to grow your hard earned money.
          </p>
          <form className="z-0 mt-14 flex gap-3">
            <div className="rounded-lg bg-gradient-to-r from-blue-secondary to-blue-primary p-[1px]">
              <div className="something relative rounded-xl sm:w-[230px]">
                <div className="absolute top-4 h-9 w-full rounded-full bg-gradient-to-b from-blue-secondary to-blue-primary blur-2xl "></div>
                <div className=" relative z-10 w-full rounded-xl shadow-lg">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                    <span className="text-gray-base sm:text-lg">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    className="font-base block w-full rounded-lg border-none py-3 pl-16 tracking-wide text-gray-base focus:border-blue-primary focus:ring-blue-primary sm:text-lg"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
            <button
              htmlFor="phone-number"
              className="rounded-xl border border-transparent bg-blue-primary px-11 py-3 text-lg font-medium text-white shadow-xl ring-blue-primary ring-offset-2 transition-all hover:bg-blue-800 focus:ring-2"
            >
              Request call back
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
