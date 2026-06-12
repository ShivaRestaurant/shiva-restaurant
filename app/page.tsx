export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur border-b border-yellow-700 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-yellow-500 font-bold text-xl">
      SHIVA RESTAURANT
    </h1>

    <div className="hidden md:flex gap-6">
      <a href="#ueber-uns" className="hover:text-yellow-500">
        Über Uns
      </a>

      <a href="#speisekarte" className="hover:text-yellow-500">
        Speisekarte
      </a>

      <a href="#kontakt" className="hover:text-yellow-500">
        Kontakt
      </a>
    </div>
  </div>
</nav>
      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        
        <img
          src="/logo.png"
          alt="Shiva Restaurant"
          className="w-72 mb-8"
        />

        <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 tracking-[0.3em]">
          SHIVA
        </h1>

<p className="mt-6 text-xl md:text-2xl text-yellow-500 font-semibold">
  Indische & Mediterrane Küche in Köln
</p>

<p className="mt-4 text-gray-300 max-w-3xl leading-relaxed text-lg">
  Genießen Sie authentische indische Spezialitäten,
  mediterrane Klassiker und frisch zubereitete Gerichte
  in gemütlicher Atmosphäre.
</p>

<p className="mt-2 text-gray-400">
  📍 Ransbacher Weg 13, 50767 Köln
</p>


        <div className="mt-10 flex flex-col md:flex-row gap-4">
      <a
  href="https://wa.me/4915217439734?text=Hallo%20Shiva%20Restaurant,%20ich%20möchte%20einen%20Tisch%20reservieren."
  target="_blank"
  className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-400 transition"
>
  Jetzt per WhatsApp reservieren
</a>
<a
  href="#speisekarte"
  className="border border-yellow-500 px-8 py-4 rounded-2xl hover:bg-yellow-500 hover:text-black transition"
>
  Speisekarte
</a>
      </section>

      {/* ÜBER UNS */}
<section id="ueber-uns" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-8">
              Willkommen im Shiva Restaurant
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Im Shiva Restaurant verbinden wir die intensiven Gewürze
              der indischen Küche mit mediterraner Frische und Eleganz.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Unser stilvolles Ambiente und unsere authentischen Gerichte
              machen jeden Besuch zu einem besonderen Erlebnis.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-56 rounded-3xl bg-yellow-500/10 border border-yellow-700 flex items-center justify-center text-gray-500">
              Restaurant Bild
            </div>

            <div className="h-56 rounded-3xl bg-yellow-500/10 border border-yellow-700 flex items-center justify-center text-gray-500 mt-10">
              Essen Bild
            </div>
          </div>
        </div>
      </section>

      {/* SPEISEKARTE */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-yellow-500 mb-16">
            Unsere Spezialitäten
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-950 border border-yellow-700 rounded-3xl p-8">
              <div className="h-48 bg-yellow-500/10 rounded-2xl mb-6 flex items-center justify-center text-gray-500">
                Bild
              </div>

              <h3 className="text-2xl text-yellow-400 font-semibold mb-4">
                Butter Chicken
              </h3>

              <p className="text-gray-400">
                Cremiges Curry mit indischen Gewürzen.
              </p>
            </div>

            <div className="bg-zinc-950 border border-yellow-700 rounded-3xl p-8">
              <div className="h-48 bg-yellow-500/10 rounded-2xl mb-6 flex items-center justify-center text-gray-500">
                Bild
              </div>

              <h3 className="text-2xl text-yellow-400 font-semibold mb-4">
                Lamm Biryani
              </h3>

              <p className="text-gray-400">
                Aromatischer Basmatireis mit zartem Lamm.
              </p>
            </div>

            <div className="bg-zinc-950 border border-yellow-700 rounded-3xl p-8">
              <div className="h-48 bg-yellow-500/10 rounded-2xl mb-6 flex items-center justify-center text-gray-500">
                Bild
              </div>

              <h3 className="text-2xl text-yellow-400 font-semibold mb-4">
                Grillplatte
              </h3>

              <p className="text-gray-400">
                Mediterrane Spezialitäten frisch vom Grill.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RESERVIERUNG */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
            Online Reservierung
          </h2>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Name"
              className="bg-black border border-yellow-700 rounded-2xl px-5 py-4"
            />

            <input
              type="email"
              placeholder="E-Mail"
              className="bg-black border border-yellow-700 rounded-2xl px-5 py-4"
            />

            <input
              type="date"
              className="bg-black border border-yellow-700 rounded-2xl px-5 py-4"
            />

            <input
              type="time"
              className="bg-black border border-yellow-700 rounded-2xl px-5 py-4"
            />

            <textarea
              placeholder="Nachricht"
              rows={5}
              className="bg-black border border-yellow-700 rounded-2xl px-5 py-4 md:col-span-2"
            />

            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-2xl transition md:col-span-2">
              Reservierung senden
            </button>

          </form>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-8">
              Kontakt
            </h2>

            <div className="space-y-6 text-gray-300 text-lg">

              <p>
                <strong>Adresse:</strong>
                <br />
                Shiva Restaurant
                <br />
                Ransbacher Weg 13
                <br />
                50767 Köln
              </p>

              <p>
                <strong>Öffnungszeiten:</strong>
                <br />
                Montag: Ruhetag
                <br />
                Dienstag – Freitag: 11:00 – 21:00
                <br />
                Samstag: 13:00 – 21:00
                <br />
                Sonntag: 12:00 – 21:00
              </p>

            </div>
          </div>

          <div className="h-[400px] rounded-3xl border border-yellow-700 bg-yellow-500/10 flex items-center justify-center text-gray-500">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1817.6489196525392!2d6.8859032110150835!3d51.00304247158494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf303c0851ae19%3A0xbe3c7e3214bff9d4!2sShiva%20Restaurant!5e1!3m2!1sde!2sde!4v1779380322107!5m2!1sde!2sde"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-3xl w-full"
/>
          </div>

        </div>
      </section>
{/* GALERIE */}

<section className="py-20 px-6 bg-black">
  <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
    Unsere Spezialitäten
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

   <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/essen bilder (1).png"
    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-yellow-500">
      Jägerschnitzel
    </h3>
    <p className="text-gray-400">
      Mit Pommes und Salat
    </p>
    <p className="text-white font-bold mt-2">
      13,90 €
    </p>
  </div>
</div>

<div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/essen bilder (2).png"
    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-yellow-500">
      Chicken Nuggets
    </h3>
    <p className="text-gray-400">
      Mit Pommes, Salat & Süß-Sauer-Soße
    </p>
    <p className="text-white font-bold mt-2">
      10,90 €
    </p>
  </div>
</div>    

<div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/essen bilder (3).png"
    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-yellow-500">
      Wiener Schnitzel
    </h3>
    <p className="text-gray-400">
      Mit Pommes & Salat
    </p>
    <p className="text-white font-bold mt-2">
      11,90 €
    </p>
  </div>
</div>    

<div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/essen bilder (4).png"
    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-yellow-500">
      Samosas (3 Stück)
    </h3>
    <p className="text-gray-400">
      Mit Kartoffel-Erbsen-Füllung & Süß-Sauer-Soße
    </p>
    <p className="text-white font-bold mt-2">
      7,90 €
    </p>
  </div>
</div>   

    <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/essen bilder (5).png"
    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-yellow-500">
      Mixed Pakora
    </h3>
    <p className="text-gray-400">
      Knusprig frittiertes Gemüse mit Süß-Sauer-Soße
    </p>
    <p className="text-white font-bold mt-2">
      7,90 €
    </p>
  </div>
</div>

<div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/essen bilder (6).png"
    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-yellow-500">
      Chicken Wings Hot
    </h3>
    <p className="text-gray-400">
      Mit Pommes, frischem Salat & Sweet-Chili-Soße
    </p>
    <p className="text-white font-bold mt-2">
      10,90 €
    </p>
  </div>
</div>   

<div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/essen bilder (7).png"
    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-yellow-500">
      Pasta Alla Panna
    </h3>
    <p className="text-gray-400">
      Cremige Sahnesoße mit Putenschinken (Halal)
    </p>
    <p className="text-white font-bold mt-2">
      11,90 €
    </p>
  </div>
</div>

<div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/essen bilder (8).png"
    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-yellow-500">
      Crispy Chicken Burger
    </h3>
    <p className="text-gray-400">
      135 g knuspriges Hähnchenfilet im Burger Bun
    </p>
    <p className="text-white font-bold mt-2">
      9,50 €
    </p>
  </div>
</div>    

<div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/essen bilder (9).png"
    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-yellow-500">
      Pizza Vegetariana
    </h3>
    <p className="text-gray-400">
      Mit frischem Gemüse nach italienischer Art
    </p>
    <p className="text-white font-bold mt-2">
      ab 12,00 €
    </p>
  </div>
</div>
<div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/essen bilder (10).png"
    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
  />
  <div className="p-4">
    <h3 className="text-xl font-bold text-yellow-500">
      Butter Chicken
    </h3>
    <p className="text-gray-400">
      Traditionelles indisches Curry – wahlweise mit Hähnchen oder Lamm
    </p>
    <p className="text-white font-bold mt-2">
      ab 13,90 €
    </p>
  </div>
</div>


  </div>
</section>
      {/* FOOTER */}
      <footer className="border-t border-yellow-700 py-10 text-center text-gray-500">
        <p className="text-yellow-500 font-bold tracking-[0.3em] mb-2">
          SHIVA RESTAURANT
        </p>

        <p>
          © 2025 Shiva Restaurant · Köln
        </p>
      </footer>
    </div>
  );
}