import React, { type ReactElement } from "react";
import Link from "next/link";

export function SiteFooter(): ReactElement {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-slate-400">© 2025 AuroraMedia — KI-Agenten aus Düsseldorf</p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link className="text-slate-400 hover:text-white transition-colors" href="/impressum">Impressum</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/datenschutz">Datenschutz</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/agb">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;


