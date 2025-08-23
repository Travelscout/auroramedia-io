"use client";

import React, { type ReactElement, useState } from "react";
import Link from "next/link";
import { AuroraLogo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SiteHeader(): ReactElement {
  const [imgOk, setImgOk] = useState(true);
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center min-h-32 md:min-h-40" aria-label="AuroraMedia Startseite">
          {imgOk ? (
            <Image
              src="/images/auroramedia-logo-black.png"
              alt="AuroraMedia"
              width={1000}
              height={250}
              priority
              sizes="(min-width: 1024px) 1000px, (min-width:768px) 900px, 800px"
              className="h-32 md:h-40 w-auto max-w-[1000px]"
              onError={() => setImgOk(false)}
            />
          ) : (
            <AuroraLogo size={160} />
          )}
          <span className="sr-only">AuroraMedia</span>
        </Link>
      </div>
      <nav className="hidden md:flex gap-6 items-center text-sm">
        <Link className="hover:underline" href="/loesungen">Lösungen</Link>
        <Link className="hover:underline" href="/preise">Preise</Link>
        <Link className="hover:underline" href="/branchen">Branchen</Link>
        <Link className="hover:underline" href="/ueber-uns">Über uns</Link>
        <Link className="hover:underline" href="/cases">Cases</Link>
        <Link className="hover:underline" href="/blog">Blog</Link>
        <Link className="hover:underline" href="/kontakt">Kontakt</Link>
        <Button size="sm" asChild>
          <Link href="/kontakt">Kostenloses Audit</Link>
        </Button>
      </nav>
    </header>
  );
}


