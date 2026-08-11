export default function CtaBand() {
  return (
    <section className="bg-ink text-paper">
      <div className="max-w-[1200px] mx-auto px-8 py-24 text-center">
        <div className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-brass mb-5">
          ¿Empezamos?
        </div>
        <h2 className="font-display italic text-[clamp(1.8rem,3.4vw,2.5rem)] max-w-[18ch] mx-auto mb-4">
          ¿Queréis una web que se parezca a vosotros?
        </h2>
        <p className="font-body text-paper/70 max-w-[46ch] mx-auto mb-8">
          Contadnos vuestra historia y os diremos cómo podemos convertirla en una experiencia
          digital para vuestra boda.
        </p>
        {/* Sustituye este mailto por vuestro email o formulario de contacto real */}
        <a
          href="mailto:hola@danta.es"
          className="inline-block bg-paper text-ink px-8 py-4 font-mono text-[0.78rem] tracking-wide uppercase"
        >
          Hablar con Danta →
        </a>
      </div>
    </section>
  );
}
