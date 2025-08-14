export const metadata = {
  title: "Kontakt | AuroraMedia",
  description: "Demo buchen oder kostenloses Audit anfragen.",
};
import KontaktForm from "./KontaktForm";

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Kontakt</h1>
      <p className="mt-3 text-slate-600">Demo buchen oder kostenloses Audit anfragen.</p>
      <div className="mt-8 max-w-xl">
        <KontaktForm />
      </div>
    </main>
  );
}


