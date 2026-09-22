import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
  { href: "/docs", label: "Docs" },
];

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = (href: string) => {
    const isActive = router.pathname === href;

    return `rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:focus-visible:outline-purple-300 ${
      isActive
        ? "bg-purple-200 text-purple-950 dark:bg-purple-800 dark:text-white"
        : "text-purple-900 hover:bg-purple-200/70 dark:text-purple-100 dark:hover:bg-purple-800/70"
    }`;
  };

  return (
    <header className="border-b border-purple-200 bg-purple-100 dark:border-purple-900 dark:bg-purple-950/70">
      <nav className="mx-auto max-w-6xl px-6" aria-label="Primary navigation">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-purple-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700 dark:text-white dark:focus-visible:outline-purple-300"
          >
            AGENTS.md
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClasses(item.href)}
                aria-current={router.pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-purple-950 hover:bg-purple-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 sm:hidden dark:text-purple-100 dark:hover:bg-purple-800 dark:focus-visible:outline-purple-300"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} flex-col gap-1 border-t border-purple-200 py-3 sm:hidden dark:border-purple-900`}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses(item.href)}
              aria-current={router.pathname === item.href ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
