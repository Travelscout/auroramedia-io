import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-slate-700 mb-4">Seite nicht gefunden</h2>
        <p className="text-slate-600 mb-8">
          Die angeforderte Seite konnte nicht gefunden werden.
        </p>
        <Link href="/">
          <Button>Zurück zur Startseite</Button>
        </Link>
      </div>
    </main>
  );
}
