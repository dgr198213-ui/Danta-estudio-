import Eyebrow from './Eyebrow';

const FEATURES = [
  {
    n: '01',
    title: 'Vuestra historia',
    desc: 'Contad quiénes sois y cómo empezó todo.',
    icon: (
      <path d="M6 4h9a3 3 0 013 3v13a2 2 0 00-2-2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
    ),
  },
  {
    n: '02',
    title: 'Confirmación RSVP',
    desc: 'Tus invitados confirman asistencia, acompañantes y necesidades.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
        <path d="M16 8a3 3 0 110 0" />
      </>
    ),
  },
  {
    n: '03',
    title: 'El día',
    desc: 'Horarios, lugares, mapa y toda la información del gran día.',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="1.5" />
        <path d="M3 9h18M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    n: '04',
    title: 'Galería',
    desc: 'Vuestras fotos, momentos y recuerdos en un mismo lugar.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="15" rx="1.5" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 15l-5-5-5 5-3-3-5 5" />
      </>
    ),
  },
  {
    n: '05',
    title: 'Carrete Digital',
    desc: 'Un QR para que vuestros invitados compartan sus fotos en tiempo real.',
    icon: <circle cx="12" cy="12" r="8.5" />,
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-8 py-24 border-t border-ink/10">
      <p className="hidden lg:block absolute top-16 right-8 max-w-[190px] text-right font-display italic text-[0.92rem] text-ink-soft/80 rotate-[-2deg]">
        Una experiencia pensada para vosotros y para los que os acompañan.
      </p>

      <Eyebrow>Una web Danta</Eyebrow>
      <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.6rem)] leading-tight mb-14 max-w-[16ch]">
        Todo lo que necesitáis. <em className="italic text-burgundy">Nada de lo que no.</em>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {FEATURES.map((f) => (
          <div key={f.n} className="border-t border-ink/10 pt-4">
            <svg viewBox="0 0 24 24" className="w-6 h-6 mb-4 fill-none stroke-burgundy" strokeWidth="1.5">
              {f.icon}
            </svg>
            <div className="font-mono text-[0.68rem] text-brass mb-2">{f.n}</div>
            <div className="font-display italic text-[1.02rem] mb-1.5">{f.title}</div>
            <p className="font-body text-[0.86rem] leading-snug text-ink-soft">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
