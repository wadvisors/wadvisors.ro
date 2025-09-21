export default function SiteLogo({ className = "w-24" }) {
  return (
    <a
      className={`primary-focus flex items-center align-middle ${className}`}
      href="/"
      aria-label="W Advisors"
    >
      <img src="/wadvisors.svg" className="w-full h-auto" alt="W Advisors" />
    </a>
  );
}
