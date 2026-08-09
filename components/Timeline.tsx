import Eyebrow from './Eyebrow';

const EVENTS = [
  {
    time: '17:00',
    title: 'Ceremonia',
    desc: 'Iglesia de Santa María, Alcalá de Henares.',
    pin: 'Cómo llegar',
  },
  { time: '18:30', title: 'Cóctel', desc: 'Jardines de la finca, con vistas al atardecer.' },
  { time: '20:30', title: 'Cena', desc: 'Salón principal — mesas asignadas en la entrada.' },
  { time: '23:00', title: 'Baile', desc: 'Y a partir de aquí, que no pare la fiesta.' },
];

export default function Timeline() {
  return (
    <section className="py-24 md:py-36 border-t border-ink/10">
      <div className="max-w-[640px] mb-14">
        <Eyebrow>El gran día</Eyebrow>
        <h2 className="font-display font-semibold text-[clamp(1.9rem,3.2vw,2.6rem)] leading-tight mb-4">
          Cada momento, en su sitio
        </h2>
        <p className="font-body text-[1.08rem] leading-relaxed text-ink-soft">
          Para que nadie se pierda nada, ni tenga que preguntar &quot;¿y ahora qué toca?&quot;.
        </p>
      </div>

      <div className="relative pl-8 max-w-[640px]">
        <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-ink/10" />
        {EVENTS.map((ev, i) => (
          <div key={ev.time} className={`relative ${i === EVENTS.length - 1 ? '' : 'pb-9'}`}>
            <span className="absolute -left-8 top-1 w-[9px] h-[9px] rounded-full bg-burgundy" />
            <div className="font-mono text-[0.72rem] tracking-wide text-brass mb-1">{ev.time}</div>
            <div className="font-display italic font-medium text-[1.2rem] mb-1">{ev.title}</div>
            <div className="font-body text-[0.96rem] text-ink-soft max-w-[46ch]">{ev.desc}</div>
            {ev.pin && (
              <div className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-ink-soft mt-1.5">
                <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] fill-burgundy">
                  <path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 8 12 8 12s8-6.6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                {ev.pin}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
