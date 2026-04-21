import Link from "next/link";

export default function PublicFooter() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="mb-8 md:mb-0">
          <div
            className="font-semibold text-lg text-[#4a7c59] mb-4 text-center md:text-left"
            style={{ fontFamily: "var(--font-literata), Literata, serif" }}
          >
            EdLight Security
          </div>
          <p className="text-sm text-stone-500 max-w-xs text-center md:text-left">
            The modern standard for security awareness training. Rooted in protection.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          {[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Security", href: "#" },
            { label: "Contact Us", href: "mailto:security@edlight.org" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-stone-500 hover:text-stone-900 transition-all text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-stone-500 text-sm">
          © {new Date().getFullYear()} EdLight Security. Rooted in protection.
        </div>
      </div>
    </footer>
  );
}
