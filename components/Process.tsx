import Eyebrow from './Eyebrow';

const STEPS = [
  {
    n: '01',
    title: 'Nos contáis vuestra historia',
    desc: 'Un formulario breve o media hora hablando — lo que os resulte más cómodo.',
  },
  {
    n: '02',
    title: 'La diseñamos a medida',
    desc: 'Cuidamos cada detalle de vuestra web como se cuidaba cada negativo, uno a uno.',
  },
  {
    n: '03',
    title: 'La revisáis juntos',
    desc: 'Ajustes hasta que esté exactamente como la queréis, sin prisa.',
  },
  {
    n: '04',
    title: 'La publicamos',
    desc: 'Lista para compartir con quien queráis, cuando queráis.',
  },
];

export default function Process() {
  return (
    <section className="py-24 border-t border-ink/10">
      <div className="max-w-[640px] mb-13">
        <Eyebrow>Cómo trabajamos contigo</Eyebrow>
        <h2 className="font-display font-semibold text-[clamp(1.9rem,3.2vw,2.6rem)] leading-tight max-w-[14ch] mb-3.5">
          Una web hecha contigo, no por un editor
        </h2>
        <p className="font-body text-[1.08rem] leading-relaxed text-ink-soft max-w-[50ch]">
          Nada de plantillas que rellenas tú solo. Nos sentamos con vuestra historia y la
          construimos a mano, como se hacía cada foto en la Calle Mayor.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-9">
        {STEPS.map((s) => (
          <div key={s.n} className="border-t border-ink/10 pt-4.5">
            <span className="font-mono text-[0.75rem] text-brass tracking-wide">{s.n}</span>
            <div className="font-display italic font-medium text-[1.12rem] text-ink mt-2.5 mb-2">
              {s.title}
            </div>
            <p className="font-body text-[0.94rem] leading-snug text-ink-soft">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
