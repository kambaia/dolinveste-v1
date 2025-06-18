"use client"; // necessário para usar hooks

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/language-switcher";
import { useTranslation } from "react-i18next";
import MobileMenu from "@/components/mobile-menu";
import Image from "next/image";
import clsx from "clsx";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, Clock } from "lucide-react"
export default function Footer() {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <footer className="bg-white shadow-sm">
      <div className="mx-auto max-w-[1440px] px-3 py-4 flex flex-col items-center justify-between">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-gray-900">
                <Image src="/images/logo_dol.png" alt="Logo da empresa" width={110} height={80} />
              </span>
            </div>
            <p className="text-gray-600 mb-4">{t("contact.info.description")}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{t("contact.info.schedule")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{t("contact.info.weekend")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">{t("contact.quickLinks")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  {t("contact.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  {t("contact.contacts")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">{t("contact.services")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  {t("contact.organization")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  {t("contact.management")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">{t("contact.contacts")}</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{t("contact.info.email")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{t("contact.info.phone")}</span>
              </div>
              <div className="mt-4">
                <p className="mb-2">{t("contact.info.social")}</p>
                <div className="flex space-x-3">
                  <Facebook className="h-5 w-5 text-blue-600 hover:text-blue-700 cursor-pointer" />
                  <Instagram className="h-5 w-5 text-pink-600 hover:text-pink-700 cursor-pointer" />
                  <Twitter className="h-5 w-5 text-blue-400 hover:text-blue-500 cursor-pointer" />
                  <Youtube className="h-5 w-5 text-red-600 hover:text-red-700 cursor-pointer" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-green-500 cursor-pointer"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967s-.471-.149-.67.149-.767.967-.94 1.167-.347.223-.644.074a7.67 7.67 0 0 1-2.26-1.393 8.498 8.498 0 0 1-1.572-1.944c-.165-.297-.017-.458.124-.606.127-.126.297-.33.446-.495.149-.165.198-.28.297-.463.099-.185.05-.347-.025-.495-.075-.148-.669-1.612-.916-2.202-.242-.582-.487-.502-.67-.511l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.48 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.87.118.571-.085 1.758-.718 2.007-1.412.248-.694.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347zm-5.421 7.593h-.001a10.425 10.425 0 0 1-5.333-1.467l-.384-.229-3.962 1.037 1.056-3.862-.251-.396a10.42 10.42 0 0 1-1.61-5.586c.001-5.77 4.703-10.472 10.474-10.472a10.39 10.39 0 0 1 7.418 3.073 10.382 10.382 0 0 1 3.062 7.414c-.003 5.771-4.705 10.473-10.469 10.473z" />
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



















