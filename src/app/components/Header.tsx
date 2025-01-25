"use client";
import { useState } from "react";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="text-2xl font-bold">
          <span className="text-blue-600">Stay</span>
          <span className="text-gray-900">cation.</span>
        </div>
        <nav className="space-x-4">
          <a
            href="#"
            className={`text-blue-600 hover:text-blue-700 transition duration-300 cursor-pointer ${
              activeTab === "Home" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </a>
          <a
            href="#"
            className={`text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer ${
              activeTab === "Browse by" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveTab("Browse by")}
          >
            Browse by
          </a>
          <a
            href="#"
            className={`text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer ${
              activeTab === "Stories" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveTab("Stories")}
          >
            Stories
          </a>
          <a
            href="#"
            className={`text-gray-900 hover:text-blue-600 transition duration-300 cursor-pointer ${
              activeTab === "Agents" ? "font-bold" : "font-normal"
            }`}
            onClick={() => setActiveTab("Agents")}
          >
            Agents
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;