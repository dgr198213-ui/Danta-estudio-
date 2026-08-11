// El legado de Domingo — panel oscuro, deliberadamente distinto al resto.
// Dos registros separados a propósito: la memoria familiar (cita, cursiva)
// y los hechos documentados por hemeroteca (ficha, mono) — nunca mezclados.
export default function Founder() {
  return (
    <section id="legado" className="bg-ink py-24 px-8">
      <div className="max-w-[980px] mx-auto">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <div>
            <img
              src="/legado/domingo-mostrador.jpg"
              alt="Domingo García Arrabal en el mostrador de Fotos Danta"
              className="w-full grayscale contrast-[1.05] border border-paper/15"
            />
            <p className="font-mono text-[0.62rem] tracking-wide text-paper/40 mt-3">
              Domingo García Arrabal, en el mostrador de Fotos Danta.
            </p>
          </div>

          <div>
            <div className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-brass mb-6">
              El legado de Domingo
            </div>

            <p className="font-display italic text-[clamp(1.15rem,2.2vw,1.4rem)] leading-relaxed text-paper">
              &quot;Mi abuelo trabajaba con negativos, luz y pinturas pastel. Nosotros
              trabajamos con píxeles, código y tecnología. Pero ambos hacemos algo parecido:
              cuidar una historia que alguien ha decidido confiarnos.&quot;
            </p>

            <div className="flex items-center gap-2.5 my-7">
              <svg viewBox="0 0 62 26" className="w-[48px] h-[20px]">
                <path
                  d="M2 20 C 8 6, 14 6, 16 16 C 17 20, 20 20, 22 12 C 24 6, 28 8, 30 16 C 34 8, 40 10, 42 18 C 46 8, 52 6, 58 14"
                  fill="none"
                  stroke="#D98C7B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-mono text-[0.6rem] tracking-wide uppercase text-paper/50">
                Dani, fundador
              </span>
            </div>

            <p className="font-body text-[0.94rem] leading-loose text-paper/65">
              De pequeño me sentaba debajo de la escalera del estudio a ver trabajar a mi
              abuelo. Hoy sigo ahí, en cierto modo — solo que en vez de retocar negativos,
              diseño webs. Danta Estudio es esa continuidad: no la profesión, sino la forma
              de trabajar.
            </p>
          </div>
        </div>

        {/* Ficha documental — hechos confirmados por hemeroteca, nunca mezclados con la memoria familiar de arriba */}
        <div className="mt-16 border border-paper/20 p-6 md:p-7">
          <div className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-brass mb-5">
            Ficha documental · Hemeroteca
          </div>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-[0.76rem] text-paper/75">
            <div>
              <dt className="text-paper/40 mb-0.5">Nombre</dt>
              <dd>Domingo García Arrabal</dd>
            </div>
            <div>
              <dt className="text-paper/40 mb-0.5">Negocio</dt>
              <dd>Fotos Danta</dd>
            </div>
            <div>
              <dt className="text-paper/40 mb-0.5">Dirección</dt>
              <dd>Calle Mayor, 33 · Alcalá de Henares</dd>
            </div>
            <div>
              <dt className="text-paper/40 mb-0.5">Teléfono</dt>
              <dd>888 09 98</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-paper/40 mb-0.5">Actividad</dt>
              <dd>Fotografía profesional en color · vídeo · taller de edición</dd>
            </div>
          </dl>
          <p className="font-mono text-[0.62rem] text-paper/35 mt-5 leading-relaxed">
            Datos confirmados por prensa local y la Biblioteca Virtual del Ayuntamiento de
            Alcalá de Henares. La fecha de fundación y el archivo de negativos originales
            siguen pendientes de localizar.
          </p>
        </div>
      </div>
    </section>
  );
}
