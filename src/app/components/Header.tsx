"use client";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="text-2xl font-bold">
          <span className="text-blue-600">Stay</span>
          <span className="text-gray-900">cation.</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="#"
            className={`text-blue-600 hover:text-blue-700 transition duration-300 cursor-pointer ${
              activeTab === "Home" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </Link>
          <Link
            href="#"
            className={`text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer ${
              activeTab === "Browse by" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveTab("Browse by")}
          >
            Browse by
          </Link>
          <Link
            href="#"
            className={`text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer ${
              activeTab === "Stories" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveTab("Stories")}
          >
            Stories
          </Link>
          <Link
            href="#"
            className={`text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer ${
              activeTab === "Agents" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveTab("Agents")}
          >
            Agents
          </Link>
        </div>
        <div className="md:hidden flex justify-end">
          <button
            className="text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-full right-0 bg-white p-4 border shadow-md">
              <Link
                href="#"
                className={`text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer ${
                  activeTab === "Home" ? "font-bold" : "font-normal"
                }`}
                onClick={() => setActiveTab("Home")}
              >
                Home
              </Link>
              <Link
                href="#"
                className={`text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer ${
                  activeTab === "Browse by" ? "font-bold" : "font-normal"
                }`}
                onClick={() => setActiveTab("Browse by")}
              >
                Browse by
              </Link>
              <Link
                href="#"
                className={`text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer ${
                  activeTab === "Stories" ? "font-bold" : "font-normal"
                }`}
                onClick={() => setActiveTab("Stories")}
              >
                Stories
              </Link>
              <Link
                href="#"
                className={`text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer ${
                  activeTab === "Agents" ? "font-bold" : "font-normal"
                }`}
                onClick={() => setActiveTab("Agents")}
              >
                Agents
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
