import Eyebrow from './Eyebrow';

const STEPS = [
  {
    n: '01',
    title: 'Nos contáis vuestra historia',
    desc: 'Un formulario breve o media hora hablando — lo que os resulte más cómodo.',
    icon: <path d="M4 5h16v11H8l-4 4V5z" />,
  },
  {
    n: '02',
    title: 'La diseñamos a medida',
    desc: 'Cuidamos cada detalle de vuestra web como se cuidaba cada negativo, uno a uno.',
    icon: <path d="M3 21l3-1 11-11-2-2L4 18l-1 3zM14 5l2 2 2-2-2-2-2 2z" />,
  },
  {
    n: '03',
    title: 'La revisáis juntos',
    desc: 'Ajustes hasta que esté exactamente como la queréis, sin prisa.',
    icon: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    n: '04',
    title: 'La publicamos',
    desc: 'Lista para compartir con quien queráis, cuando queráis.',
    icon: <path d="M3 11l18-8-8 18-2-8-8-2z" />,
  },
];

export default function Process() {
  return (
    <section id="proceso" className="max-w-[1200px] mx-auto px-8 py-24 border-t border-ink/10">
      <div className="max-w-[640px] mb-14">
        <Eyebrow>Cómo trabajamos contigo</Eyebrow>
        <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.6rem)] leading-tight max-w-[14ch] mb-3.5">
          Un proceso cercano, sin complicaciones
        </h2>
        <p className="font-body text-[1.08rem] leading-relaxed text-ink-soft max-w-[50ch]">
          Nada de plantillas que rellenas tú solo. Nos sentamos con vuestra historia y la
          construimos a mano, como se hacía cada foto en la Calle Mayor.
        </p>
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-9">
        <div className="hidden md:block absolute top-[10px] left-[6%] right-[6%] border-t border-dashed border-ink/15" />
        {STEPS.map((s) => (
          <div key={s.n} className="relative bg-paper pt-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[0.75rem] text-brass tracking-wide bg-paper pr-2">
                {s.n}
              </span>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-burgundy" strokeWidth="1.6">
                {s.icon}
              </svg>
            </div>
            <div className="font-display italic text-[1.12rem] text-ink mb-2">{s.title}</div>
            <p className="font-body text-[0.94rem] leading-snug text-ink-soft">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
