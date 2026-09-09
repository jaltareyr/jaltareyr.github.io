"use client";

import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

const navigation = [
  ["/", "HOME"],
  ["/#about", "ABOUT"],
  ["/#experience", "EXPERIENCE"],
  ["/#education", "EDUCATION"],
  ["/projects", "PROJECTS"],
  ["/resume", "RESUME"],
  ["/blogs", "BLOGS"],
  ["/#contact", "CONTACT"],
] as const;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center bg-black px-4 text-white shadow-sm print:hidden">
      <div className="container relative mx-auto flex max-w-screen-xl items-center justify-center">
        <button type="button" className="absolute left-0 rounded-md p-2 transition-colors hover:bg-white/10 md:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-label="Toggle menu">
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-12 flex-col items-center gap-1 rounded-b-xl bg-black p-4 shadow-xl md:static md:flex md:flex-row md:gap-1 md:rounded-none md:p-0 md:shadow-none`}>
          {navigation.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setIsMenuOpen(false)} className="group relative whitespace-nowrap px-3 py-2 text-xs font-semibold tracking-[0.08em] text-gray-200 transition-colors hover:text-white">
              {label}
              <span className="absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-16 print:pt-0">{children}</main>
          <footer className="w-full border-t border-gray-200 bg-white py-5 print:hidden">
            <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
              <p className="text-xs text-gray-500">© 2026 Yashodhan Jaltare. All rights reserved.</p>
              <nav className="flex items-center gap-5">
                <Link href="/projects" className="text-xs font-medium text-gray-600 hover:text-black">Projects</Link>
                <Link href="/resume" className="text-xs font-medium text-gray-600 hover:text-black">Résumé</Link>
                <a href="https://www.linkedin.com/in/yashodhan-jaltare-150a4b192/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-4 w-4 text-gray-500 hover:text-black" /></a>
                <a href="https://github.com/jaltareyr" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-4 w-4 text-gray-500 hover:text-black" /></a>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
