"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const year = `${new Date().getFullYear()}`;
    setCurrentYear(year);
  }, []);

  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
          <h2 className="text-2xl font-bold text-blue-600">Staycation.</h2>
          <p className="text-gray-500 mt-2">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-16 lg:space-x-20 xl:space-x-24 2xl:space-x-28">
          <div className="mb-8 md:mb-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
            <h3 className="text-lg font-semibold text-gray-800">
              For Beginners
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                >
                  New Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                >
                  Start Booking a Room
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                >
                  Use Payments
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
            <h3 className="text-lg font-semibold text-gray-800">Explore Us</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                >
                  Our Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
            <h3 className="text-lg font-semibold text-gray-800">Connect Us</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="mailto:support@staycation.id"
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                >
                  support@staycation.id
                </a>
              </li>
              <li>
                <a
                  href="tel:02122081996"
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                >
                  021 - 2208 - 1996
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Kemang,+Kec.+Mampang+Prpt,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta/@-6.266667,106.816667,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f5e5c7c7c7c7:0x7a5a2a2a2a2a2a2a!8m2!3d-6.266667!4d106.819056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition duration-300"
                >
                  Staycation, Kemang, Jakarta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 mt-8 text-center">
        <p className="text-gray-500">
          Copyright {currentYear} • All rights reserved • Staycation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
