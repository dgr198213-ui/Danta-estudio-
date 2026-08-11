export default function SiteFooter() {
  return (
    <footer className="bg-paper border-t border-ink/10">
      <div className="max-w-[1200px] mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[0.7rem] text-ink-soft">© Danta Estudio</span>
        {/* Páginas legales aún no creadas — enlaces de marcador de posición */}
        <div className="flex gap-6 font-mono text-[0.7rem] text-ink-soft">
          <a href="#" className="hover:text-burgundy">Aviso legal</a>
          <a href="#" className="hover:text-burgundy">Política de privacidad</a>
          <a href="#" className="hover:text-burgundy">Política de cookies</a>
        </div>
      </div>
    </footer>
  );
}
