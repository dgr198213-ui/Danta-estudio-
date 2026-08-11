// Placeholder honesto: aquí iría vuestra propia web de boda (Irene & Daniel)
// en cuanto esté publicada y me pases la URL — de momento muestra la
// estructura de paneles sin contenido inventado.
const PANELS = ['Bienvenidos', 'Historia', 'El gran día', 'RSVP', 'Carrete Digital'];

export default function ExampleReal() {
  return (
    <section id="ejemplo" className="bg-burgundy text-paper">
      <div className="max-w-[1200px] mx-auto px-8 py-20 grid md:grid-cols-[0.9fr_1.6fr] gap-12 items-center">
        <div>
          <div className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-paper/60 mb-4">
            Ejemplo real
          </div>
          <h2 className="font-display italic text-[2rem] leading-tight mb-4">Irene &amp; Daniel</h2>
          <p className="font-body text-[0.98rem] leading-relaxed text-paper/80 max-w-[36ch] mb-6">
            Explorad una web completa para que veáis cómo podría ser la vuestra.
          </p>
          <a
            href="#"
            className="font-mono text-[0.75rem] tracking-wide border-b border-paper/50 pb-0.5"
          >
            Explorar web de ejemplo →
          </a>
          <p className="font-mono text-[0.62rem] text-paper/40 mt-3">
            (pendiente de enlazar — dime la URL cuando la tengas publicada)
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {PANELS.map((p) => (
            <div
              key={p}
              className="bg-paper/95 text-ink rounded-sm aspect-[3/4] flex items-end p-3"
            >
              <span className="font-mono text-[0.62rem] text-ink-soft uppercase tracking-wide">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
