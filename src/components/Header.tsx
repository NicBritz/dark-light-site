"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="relative z-50">
      <nav
        className={clsx(
          "navbar fixed z-60 bg-base-100 uppercase",
          !isDropdownOpen && "shadow"
        )}
      >
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="hidden sm:block">
              <Link href="/" className="btn btn-ghost normal-case text-2xl">
                Dark-Light
              </Link>
            </div>
            <div className="dropdown sm:hidden" onClick={handleClick}>
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="navbar-end sm:hidden">
            <Link href="/" className="btn btn-ghost normal-case text-2xl">
              Dark-Light
            </Link>
          </div>
          <ul className="hidden sm:flex ml-auto p-3 gap-6">
            <li
              className={clsx(
                "hover:underline underline-offset-4 decoration-blue-500 decoration-2",
                pathname === "/" && "text-blue-500"
              )}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={clsx(
                "hover:underline underline-offset-4 decoration-blue-500 decoration-2",
                pathname.includes("/portfolio") && "text-blue-500"
              )}
            >
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li
              className={clsx(
                "hover:underline underline-offset-4 decoration-blue-500 decoration-2",
                pathname === "/contact" && "text-blue-500"
              )}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className="fixed w-full z-60 pt-2 mt-16 p-4 space-y-4 shadow bg-base-100 text-white sm:hidden uppercase"
        >
          <li
            className={clsx("pl-2.5", pathname === "/" && "text-blue-500 py-2")}
            onClick={() => setIsDropdownOpen(false)}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={() => setIsDropdownOpen(false)}
            className={clsx(
              "pl-2.5",
              pathname === "/portfolio" && "text-blue-500 py-2"
            )}
          >
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li
            onClick={() => setIsDropdownOpen(false)}
            className={clsx(
              "pl-2.5",
              pathname === "/contact" && "text-blue-500 py-2"
            )}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </header>
  );
}
