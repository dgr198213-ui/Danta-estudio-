const PRINCIPLES = [
  { word: 'Escuchar', desc: 'Antes de diseñar, conocer.' },
  { word: 'Observar', desc: 'Encontrar lo que os hace diferentes.' },
  { word: 'Cuidar', desc: 'No dejar ningún detalle al azar.' },
  { word: 'Crear', desc: 'No adaptamos vuestra historia a una plantilla.' },
  { word: 'Permanecer', desc: 'Que siga teniendo sentido cuando la boda haya terminado.' },
  { word: 'Rectitud', desc: 'Cumplir lo prometido, sin vender lo que no hace falta.' },
];

export default function Principles() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 pt-22 pb-10">
      <div className="mb-12">
        <div className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-brass mb-3 flex items-center gap-2.5">
          <span className="w-[22px] h-px bg-brass" />
          Principios Danta
        </div>
        <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.6rem)]">Lo que no cambia</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-10">
        {PRINCIPLES.map((p) => (
          <div key={p.word} className="border-t border-ink/10 pt-4">
            <span className="font-display italic text-[1.2rem] text-burgundy">{p.word}</span>
            <p className="font-body text-[0.96rem] text-ink-soft mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
