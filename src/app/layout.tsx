'use client';

import Link from "next/link";
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-4 h-16 flex items-center justify-center">
      <div className="container mx-auto flex justify-center items-center max-w-screen-xl relative">
        <button
          className="md:hidden absolute left-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-black md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4 items-center`}>
          <NavLink href="/" onClick={() => setIsMenuOpen(false)}>HOME</NavLink>
          <NavLink href="/#about" onClick={() => setIsMenuOpen(false)}>ABOUT</NavLink>
          <NavLink href="/#experience" onClick={() => setIsMenuOpen(false)}>EXPERIENCE</NavLink>
          <NavLink href="/#education" onClick={() => setIsMenuOpen(false)}>EDUCATION</NavLink>
          <NavLink href="/resume" onClick={() => setIsMenuOpen(false)}>RESUME</NavLink>
          <NavLink href="/blogs" onClick={() => setIsMenuOpen(false)}>BLOGS</NavLink>
          <NavLink href="/#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Footer() {

  return (
    <footer className="flex flex-col sm:flex-row py-4 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t text-center sm:text-left">
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
        © 2025 Yashodhan Jaltare. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:gap-6 justify-center sm:justify-end">
        <Link className="text-xs hover:underline underline-offset-4" href={`/terms`}>
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href={`/privacy`}>
          Privacy
        </Link>
      </nav>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={`${href}`}
      // href={`${basePath}${href}`}
      onClick={handleClick}
      className="text-sm font-medium px-2 py-2 relative group whitespace-nowrap"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
    </a>
  );
}

