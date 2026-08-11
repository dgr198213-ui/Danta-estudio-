const QR_PATTERN_MINI = [
  [1, 0, 1, 1],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 1],
];

// El Carrete Digital ya no es un bloque protagonista: es un extra opcional
// que se ofrece al final, coherente con el foco en el servicio dedicado.
export default function DigitalReel() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 pb-28">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-7 border border-ink/10 rounded p-7">
        <div className="w-11 h-11 bg-ink p-1 rounded grid grid-cols-4 grid-rows-4 gap-px shrink-0">
          {QR_PATTERN_MINI.flat().map((on, i) => (
            <span key={i} className={`rounded-[1px] ${on ? 'bg-paper' : 'bg-transparent'}`} />
          ))}
        </div>
        <div>
          <div className="font-mono text-[0.64rem] tracking-[0.1em] uppercase text-brass mb-1">
            Extra opcional
          </div>
          <div className="font-display italic text-[1.15rem] mb-1.5">Carrete Digital</div>
          <p className="font-body text-[0.94rem] text-ink-soft max-w-[48ch]">
            Un código QR para que los invitados suban sus fotos del móvil al momento — como un
            carrete compartido, sin esperar al revelado.
          </p>
        </div>
        <a
          href="#"
          className="font-mono text-[0.72rem] text-burgundy border-b border-current pb-0.5 whitespace-nowrap"
        >
          Añadir a vuestra web →
        </a>
      </div>
    </section>
  );
}
