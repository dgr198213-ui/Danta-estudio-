import Link from "next/link";
import styles from "../styles/DantaHero.module.css";

export default function DantaHero() {
  return (
    <section className={styles.hero} aria-labelledby="danta-hero-title">
      <div className={styles.grain} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Danta Estudio — inicio">
          <img src="/brand/danta-seal-real.png" alt="Danta Estudio" className={styles.logo} />
        </Link>

        <nav className={styles.nav} aria-label="Navegación principal">
          <Link href="#proceso">Cómo trabajamos</Link>
          <Link href="#ejemplo">Una web real</Link>
          <Link href="#historia">Historia</Link>
        </nav>

        <Link href="#proceso" className={styles.headerCta}>
          Cuéntanos vuestra historia
        </Link>
      </header>

      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>ALCALÁ DE HENARES · TRES GENERACIONES</p>

          <h1 id="danta-hero-title">
            Lo que antes se hacía a mano,
            <br />
            hoy lo hacemos <em>con el mismo cariño.</em>
          </h1>

          <p className={styles.lead}>
            Webs de boda hechas a medida para contar vuestra historia.
          </p>

          <p className={styles.leadSecondary}>
            Danta no usa plantillas. Escuchamos vuestra historia y diseñamos una web que
            habla solo de vosotros, con el mismo cuidado con el que mi abuelo trataba cada
            carrete.
          </p>

          <p className={styles.manifesto}>La misma dedicación. Otra forma de crear.</p>

          <div className={styles.actions}>
            <Link href="#proceso" className={styles.primaryCta}>
              Cuéntanos vuestra historia <span aria-hidden="true">→</span>
            </Link>
            <Link href="#ejemplo" className={styles.secondaryCta}>
              Ver una web real <span aria-hidden="true">↓</span>
            </Link>
          </div>

          <div className={styles.microFeatures}>
            <div className={styles.microFeature}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.2C.4 8 2 4.5 5.4 4c2-.3 3.7.7 4.6 2.2C10.9 4.7 12.6 3.7 14.6 4c3.4.5 5 4 3.4 7.8-2.5 4.6-10 9.2-10 9.2z"/></svg>
              <div><b>Diseño a medida</b><span>Nada de plantillas</span></div>
            </div>
            <div className={styles.microFeature}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="10" rx="1.5"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>
              <div><b>Vuestra historia</b><span>Contadnos lo que queráis</span></div>
            </div>
            <div className={styles.microFeature}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
              <div><b>Publicación</b><span>Cuando esté perfecta</span></div>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <span className={styles.verticalTag}>ARCHIVO · 01</span>

          <div className={styles.filmFrame}>
            <div className={styles.filmTop}>
              <span>KODAK 400TX</span>
              <span>43</span>
            </div>
            <div className={styles.sprocketsCol}>
              {Array.from({ length: 7 }).map((_, i) => <span key={i} />)}
            </div>
            <div className={styles.sprocketsCol}>
              {Array.from({ length: 7 }).map((_, i) => <span key={i} />)}
            </div>
            <div className={styles.filmPhoto}>
              <span>espacio para fotografía</span>
            </div>
            <div className={styles.filmBottom}>
              <span>▶ 12</span>
              <span>→</span>
            </div>
          </div>

          <div className={styles.tapeNote}>
            <span className={styles.tapeStrip} />
            <img src="/brand/danta-seal-real.png" alt="" className={styles.tapeMark} />
            <p>
              Historias que
              <br />
              merecen ser
              <br />
              reveladas.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>REVELAR</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
