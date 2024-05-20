import { CanvasReveal } from "@/components/CanvasReveal";

export default function Page() {
    return (
      <main className="relative z-10">
        {/* Above The Fold */}
        <section className="h-screen w-full flex items-center justify-center overflow-hidden">
          <CanvasReveal />
        </section>
      </main>
    );
}