"use client";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#222]">

      <Navbar />

      {/* HERO */}
  <section className="relative h-screen overflow-hidden">

  {/* Background image with zoom effect */}
  <div className="absolute inset-0 scale-110">
    <div
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-mango.jpg')",
      }}
    />
  </div>

  {/* Dark gradient overlay (key for premium feel) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

    {/* Small brand tag */}
    <p className="tracking-[0.35em] text-white/70 uppercase text-xs mb-6">
      LIOFI · MANGO DE MÉXICO
    </p>

    {/* Main headline */}
    <h1 className="text-white text-5xl md:text-7xl font-semibold leading-tight">
      México capturado<br />
      en su mejor momento
    </h1>

    {/* Subtext */}
    <p className="mt-6 text-white/80 max-w-xl text-lg">
      Mango liofilizado en pequeños lotes.
      Intensidad real, sin agua, sin distracciones.
    </p>

    {/* CTA */}
    <a
      href="https://wa.me/525575020464?text=Hola,%20quiero%20probar%20Mango%20LIOFI"
      className="mt-10 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition"
    >
      Probar Mango LIOFI
    </a>

  </div>

</section>
<section className="py-32 px-6 bg-[#FAF8F4]">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <div>
      <img
        src="/hero-mango.jpg"
        alt="Mango liofilizado"
        className="rounded-3xl shadow-lg"
      />
    </div>

    <div className="text-left">

      <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
        Producto insignia
      </p>

      <h2 className="text-5xl font-medium mb-6">
        Mango Liofi
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Mango mexicano cuidadosamente seleccionado y liofilizado para conservar
        su sabor natural, textura crujiente y nutrientes.
      </p>

      <div className="space-y-3 text-gray-700">
        <p>✓ 100% fruta</p>
        <p>✓ Sin azúcar añadida</p>
        <p>✓ Crujiente y ligero</p>
        <p>✓ Producción en pequeños lotes</p>
      </div>

    </div>

  </div>

      </section>

      {/* PROCESO */}
      <section className="py-32 px-6 bg-white text-center">

        <h2 className="text-4xl md:text-5xl font-medium mb-12">
          Proceso
        </h2>

        <div className="space-y-4 text-lg text-gray-600">

          <p>Fruta fresca</p>
          <p>↓</p>

          <p>Congelación</p>
          <p>↓</p>

          <p>Liofilización</p>
          <p>↓</p>

          <p>Crunch perfecto</p>

        </div>

      </section>

      {/* STORY */}
      <section className="py-32 px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-medium mb-8">
          De México a tu snack favorito.
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Seleccionamos fruta mexicana y la transformamos mediante
          liofilización para conservar lo mejor de su sabor, aroma y
          nutrientes. Cada lote se produce cuidadosamente para ofrecer
          una experiencia auténtica, ligera y natural.
        </p>

      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6 text-center bg-[#FAF8F4]">

        <h2 className="text-4xl md:text-5xl font-medium mb-8">
          ¿Listo para probarlo?
        </h2>

        <a
          href="https://wa.me/525575020464?text=Hola,%20quiero%20probar%20el%20mango%20liofilizado"
          className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-white font-medium transition hover:scale-105"
        >
          Hablar por WhatsApp
        </a>

      </section>

    </main>
  );
}