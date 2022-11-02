import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function () {
  return (
    <div className="mt-36 grid grid-cols-1 gap-4 rounded-xl bg-gradient-to-r from-blue-primary to-blue-secondary sm:grid-cols-2">
      <div className="flex flex-col items-start gap-6 p-8 md:py-16 md:pl-16">
        <h3 className="text-4xl font-bold text-white">
          Pay for profitable trades
        </h3>
        <p className="text-lg text-slate-200">
          We offer well-researched calls and advice related to the segment you
          are looking to invest in.
        </p>
        <button className="inline-flex items-center justify-center gap-1 rounded-xl bg-white py-3 pr-9 pl-11 text-lg font-medium text-gray-dark shadow-xl transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-2xl ">
          Get started
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
