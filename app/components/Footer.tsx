import { useRouteLoaderData } from "react-router";
import SiteLogo from "./SiteLogo";
import FooterLink from "./FooterLink";
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const { env } = useRouteLoaderData("root");

  return (
    <footer className="bg-base-100/40 mt-12 flex flex-col items-center justify-center py-8">
      <div className="site-container">
        <div className="flex w-full flex-col items-center justify-between gap-2 text-lg md:grid md:grid-cols-5">
          <div className="flex justify-center py-2 text-center md:hidden">
            <SiteLogo />
          </div>
          <div className="col-span-2 flex justify-end gap-4">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/portfolio">Portfolio</FooterLink>
          </div>
          <div className="hidden justify-center text-center md:flex">
            <SiteLogo />
          </div>
          <div className="flex gap-4 md:col-span-2">
            <FooterLink to="/team">Team</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </div>
        </div>

        <div className="text-base-500 mt-8 flex justify-center gap-4">
          <a
            href="https://x.com/WAdvisors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="size-6 transition hover:opacity-80" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://x.com/WAdvisors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="size-6 transition hover:opacity-80" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://x.com/WAdvisors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="size-6 transition hover:opacity-80" />
            <span className="sr-only">Youtube</span>
          </a>
          <a
            href="https://x.com/WAdvisors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="size-6 transition hover:opacity-80" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
        <div className="mt-6 mb-2 text-center text-sm opacity-80 flex items-center justify-center">
          &copy; 2025
        </div>
        <div className="font-extralight text-xs opacity-50 font-mono flex gap-2 items-center justify-center">
          <em className="not-italic">
            Made with{" "}
            <span className="text-red-600 animation animate-pulse">♥</span> &{" "}
            <a className="underline" target="_blank" href="https://bknd.io">
              bknd.io
            </a>
          </em>
          <span className="bg-white rounded p-1">{env.GIT_BRANCH}</span>
          <span className="bg-white rounded p-1">
            {env.GIT_SHA.slice(0, 7)}
          </span>
        </div>
      </div>
    </footer>
  );
}
