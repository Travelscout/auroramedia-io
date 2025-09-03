import React, { type ReactElement } from "react";
import Link from "next/link";

export function SiteFooter(): ReactElement {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-black font-semibold text-lg mb-4">Bleiben Sie auf dem Laufenden</p>
          <p className="text-gray-600 mb-6">© 2025 AuroraMedia — KI-Agenten aus Düsseldorf</p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link className="text-gray-600 hover:text-black transition-colors" href="/impressum">Impressum</Link>
            <Link className="text-gray-600 hover:text-black transition-colors" href="/datenschutz">Datenschutz</Link>
            <Link className="text-gray-600 hover:text-black transition-colors" href="/agb">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;


