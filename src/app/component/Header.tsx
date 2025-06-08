// components/Header.tsx

"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="logo text-xl font-bold text-green-800">
          Eco<span className="text-green-500">Connect</span>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          aria-label="Menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>

        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <li><Link href="#accueil">Accueil</Link></li>
            <li><Link href="#formations">Formations</Link></li>
            <li><Link href="#projets">Projets</Link></li>
            <li><Link href="#forum">Forum</Link></li>
            <li><Link href="#emploi">Emploi</Link></li>
            <li><Link href="#ressources">Ressources</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons hidden md:flex space-x-2">
          <button className="btn btn-secondary bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">Connexion</button>
          <button className="btn bg-green-700 hover:bg-green-900 text-white px-4 py-2 rounded">Inscription</button>
        </div>
      </div>
    </header>
  );
}