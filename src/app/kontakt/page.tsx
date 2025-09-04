export const metadata = {
  title: "Kontakt | AuroraMedia",
  description: "Demo buchen oder kostenloses Audit anfragen.",
};
import KontaktForm from "./KontaktForm";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Kontakt</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demo buchen oder kostenloses Audit anfragen.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <Suspense fallback={<div className="text-slate-500">Formular wird geladen…</div>}>
              <KontaktForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}


