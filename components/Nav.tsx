export default function Nav() {
  return (
    <nav className="flex justify-between items-center pb-14 mb-16 border-b border-ink/10">
      <div className="flex items-baseline gap-2.5">
        <span className="font-display italic font-semibold text-2xl text-burgundy tracking-tight">
          Danta
        </span>
        <span className="w-px h-3.5 bg-ink/15" />
        <span className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-brass">
          Estudio
        </span>
      </div>
      <div className="flex gap-7 font-mono text-[0.72rem] tracking-[0.08em] uppercase text-ink-soft">
        <a href="#" className="hover:text-burgundy transition-colors">Plantillas</a>
        <a href="#historia" className="hover:text-burgundy transition-colors">Nuestra historia</a>
        <a href="#" className="hover:text-burgundy transition-colors">Precios</a>
      </div>
    </nav>
  );
}
