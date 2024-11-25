import React from "react";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

const Header = () => (
  <header className="bg-black p-4 flex justify-between items-center shadow-lg">
    <h1 className="text-white text-3xl font-bold">Rule Engine</h1>
    <div className="flex space-x-6">
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub size={30} className="text-white hover:text-blue-600" />
      </a>
      <a href="https://gitlab.com" target="_blank" rel="noreferrer">
        <FaGitlab size={30} className="text-white hover:text-blue-600" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedin size={30} className="text-white hover:text-blue-600" />
      </a>
    </div>
  </header>
);

export default Header;
