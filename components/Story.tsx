import Eyebrow from './Eyebrow';

export default function Story() {
  return (
    <section id="historia" className="max-w-[1200px] mx-auto px-8 py-24 border-t border-ink/10">
      <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-18 items-center">
        <div className="flex justify-center order-first">
          <div
            className="w-52 h-52 rounded-full border-[3px] border-burgundy flex flex-col items-center justify-center gap-1.5 text-burgundy relative"
            style={{ transform: 'rotate(-7deg)', mixBlendMode: 'multiply', opacity: 0.88 }}
          >
            <span className="absolute -inset-1 rounded-full border border-burgundy/25" />
            <span className="font-display italic font-semibold text-3xl leading-none">Danta</span>
            <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-center max-w-[130px]">
              Calle Mayor · Alcalá de Henares
            </span>
          </div>
        </div>

        <div>
          <Eyebrow>Nuestra historia</Eyebrow>
          <h2 className="font-display font-semibold text-[clamp(1.9rem,3.2vw,2.6rem)] leading-tight max-w-[15ch] mb-6">
            De la Calle Mayor a tu navegador
          </h2>
          <p className="font-body text-[1.08rem] leading-loose text-ink-soft max-w-[52ch]">
            Danta nació en una tienda de fotografía de Alcalá de Henares que trataba cada boda
            como si fuera la más importante del año. Se abría hasta los domingos — solo se
            cerraba a las once, para ir a misa.
          </p>
          <p className="font-body text-[1.08rem] leading-loose text-ink-soft max-w-[52ch] mt-4">
            Hoy seguimos con esa misma idea, pero en digital: que crear la web de tu boda se
            sienta cercana, cuidada, tuya. No una plantilla más.
          </p>
          <a
            href="#"
            className="inline-block mt-7 font-mono text-[0.78rem] tracking-wide text-burgundy border-b border-current pb-0.5"
          >
            Conoce toda la historia →
          </a>
        </div>
      </div>
    </section>
  );
}
