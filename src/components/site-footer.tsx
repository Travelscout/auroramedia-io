import React, { type ReactElement } from "react";
import Link from "next/link";

export function SiteFooter(): ReactElement {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-black mb-4">Bleiben Sie auf dem Laufenden</h3>
          <p className="text-black mb-6">© 2025 AuroraMedia — KI-Agenten aus Düsseldorf</p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link className="text-black hover:text-gray-600 transition-colors" href="/impressum">Impressum</Link>
            <Link className="text-black hover:text-gray-600 transition-colors" href="/datenschutz">Datenschutz</Link>
            <Link className="text-black hover:text-gray-600 transition-colors" href="/agb">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;


