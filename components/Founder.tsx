// El legado de Domingo — deliberadamente distinto al resto de la web:
// panel oscuro, como un negativo, para marcar el origen filosófico de Danta.
export default function Founder() {
  return (
    <section className="bg-ink py-24 px-8">
      <div className="max-w-[620px] mx-auto text-center">
        <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-brass mb-6.5">
          El legado de Domingo
        </div>

        <p className="font-display italic font-medium text-[clamp(1.3rem,2.6vw,1.65rem)] leading-relaxed text-paper">
          &quot;Mi abuelo trabajaba con negativos, luz y pinturas pastel. Nosotros trabajamos
          con píxeles, código y tecnología. Pero ambos hacemos algo parecido: cuidar una
          historia que alguien ha decidido confiarnos.&quot;
        </p>

        <div className="flex items-center justify-center gap-2.5 my-9">
          <svg viewBox="0 0 62 26" className="w-[52px] h-[22px]">
            <path
              d="M2 20 C 8 6, 14 6, 16 16 C 17 20, 20 20, 22 12 C 24 6, 28 8, 30 16 C 34 8, 40 10, 42 18 C 46 8, 52 6, 58 14"
              fill="none"
              stroke="#D98C7B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-mono text-[0.62rem] tracking-wide uppercase text-paper/55">
            Dani, fundador
          </span>
        </div>

        <p className="font-body text-[1rem] leading-loose text-paper/70 pt-8 border-t border-paper/15">
          De pequeño me sentaba debajo de la escalera del estudio a ver trabajar a mi abuelo.
          No entendía del todo lo que hacía, pero sabía que era algo importante: el cuidado con
          el que trataba a cada persona que confiaba en él. Hoy sigo ahí, en cierto modo — solo
          que en vez de retocar negativos, diseño webs. Danta Estudio es esa continuidad: no la
          profesión, sino la forma de trabajar.
        </p>
      </div>
    </section>
  );
}
