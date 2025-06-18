"use client"; // necessário para usar hooks

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/language-switcher";
import { useTranslation } from "react-i18next";
import MobileMenu from "@/components/mobile-menu";
import Image from "next/image";
import clsx from "clsx";

export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 ">
      <div className="mx-auto max-w-[1440px] px-3 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <span className="text-2xl font-bold text-gray-900">
            <Image
              src="/images/logo_dol.png"
              alt="Logo da empresa"
              width={130}
              height={80}
            />
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={clsx(
              "font-medium",
              pathname === "/" ? "text-primary" : "text-gray-700 hover:text-hove_primary"
            )}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/about"
            className={clsx(
              "font-medium",
              pathname === "/about" ? "text-primary" : "text-gray-700 hover:text-hove_primary"
            )}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/contact"
            className={clsx(
              "font-medium",
              pathname === "/contact" ? "text-primary" : "text-gray-700 hover:text-hove_primary"
            )}
          >
            {t("nav.contact")}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
