import Eyebrow from './Eyebrow';

export default function Hero() {
  return (
    <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center pb-20">
      <div>
        <Eyebrow>Alcalá de Henares · tres generaciones</Eyebrow>
        <h1 className="font-display font-semibold text-[clamp(2.4rem,4.6vw,3.6rem)] leading-[1.12] tracking-tight max-w-[13ch]">
          Lo que antes se hacía a mano, hoy lo hacemos{' '}
          <em className="italic font-medium text-burgundy not-italic font-display">
            con el mismo cariño.
          </em>
        </h1>
        <p className="font-display italic font-medium text-[1.05rem] text-burgundy mt-4.5">
          La misma dedicación. Otra forma de crear.
        </p>
        <p className="font-body text-[1.15rem] leading-relaxed text-ink-soft max-w-[46ch] mt-6">
          Danta no hace plantillas. Escuchamos vuestra historia y construimos una web que habla
          solo de vosotros — con el mismo cuidado con el que mi abuelo trataba cada carrete.
        </p>
        <div className="flex items-center gap-7 mt-10 flex-wrap">
          <a
            href="#"
            className="inline-block bg-burgundy hover:bg-burgundy-deep text-paper text-[1.02rem] px-8 py-4 rounded-sm border border-burgundy transition-colors hover:-translate-y-px"
          >
            Empieza tu web →
          </a>
          <a
            href="#historia"
            className="font-mono text-[0.78rem] tracking-wide text-ink-soft border-b border-ink/20 hover:text-burgundy hover:border-burgundy transition-colors pb-0.5"
          >
            Ver una web real ↓
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <div className="bg-ink rounded-md p-3.5 flex flex-col gap-2 shadow-[0_24px_60px_-20px_rgba(36,32,27,0.45)] w-full max-w-[300px] mx-auto">
            <Sprockets />
            <Frame label="Nº 012" />
            <Frame label="Nº 013" retouched />
            <Frame label="Nº 014" />
            <Sprockets />
          </div>
          <p className="font-mono text-[0.68rem] tracking-wide text-ink-soft text-center mt-4 max-w-[260px] mx-auto">
            cada boda, un fotograma cuidado a mano
          </p>
        </div>
      </div>
    </div>
  );
}

function Sprockets() {
  return (
    <div className="flex justify-between px-0.5">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="w-[7px] h-[5px] bg-paper-dark rounded-[1px] opacity-85" />
      ))}
    </div>
  );
}

function Frame({ label, retouched }: { label: string; retouched?: boolean }) {
  return (
    <div
      className={`relative bg-gradient-to-br from-[#3a352d] to-[#1c1914] rounded-[2px] h-24 flex items-end justify-between px-2.5 py-2 overflow-hidden ${
        retouched ? 'outline outline-1 outline-pastel/35' : ''
      }`}
    >
      {retouched && (
        <svg viewBox="0 0 60 40" className="absolute top-3 left-3.5 w-[60px] h-10">
          <path
            d="M20 10 C 24 6, 30 6, 32 12 C 34 18, 28 20, 24 18"
            fill="none"
            stroke="#D98C7B"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="140"
            className="animate-draw"
          />
        </svg>
      )}
      <span className="font-mono text-[0.62rem] text-paper/55 tracking-wide">{label}</span>
    </div>
  );
}
