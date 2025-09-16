import React from "react";
import sortlogo from "../assets/sortlogo.svg";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-200 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-50 mr-2" src={sortlogo} alt="sortlogo" />
        </div>

          <div className="min-w-0">
            <h3 className="text-base font-semibold">Contact us</h3>
            <div className="mt-1 text-sm text-neutral-600">
              <a
                href="mailto:support@smarthrow.com"
                className="no-underline hover:underline"
                aria-label="Email sales at smarthrow dot com"
              >
                support@smarthrow.com
              </a>
              <div>Smart Load AS, Leirabekkvegen 8. 7604 Levanger</div>
            </div>
          </div>
        </div>

        {/* Bunnlinje */}
        <div className=" text-xs text-neutral-500">
          © {new Date().getFullYear()} SMARTthrow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
