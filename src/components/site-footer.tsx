import React, { type ReactElement } from "react";
import Link from "next/link";

export function SiteFooter(): ReactElement {
  return (
    <footer id="kontakt" className="py-12 mt-12 border-t border-slate-200 text-center">
      <p>© 2025 AuroraMedia — KI-Agenten aus Düsseldorf</p>
      <div className="mt-2 flex justify-center gap-4 text-sm">
        <Link className="hover:underline" href="/impressum">Impressum</Link>
        <Link className="hover:underline" href="/datenschutz">Datenschutz</Link>
        <Link className="hover:underline" href="/agb">AGB</Link>
      </div>
    </footer>
  );
}


