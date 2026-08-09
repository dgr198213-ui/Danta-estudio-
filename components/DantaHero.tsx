import Link from "next/link";
import styles from "../styles/DantaHero.module.css";

type DantaHeroProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
};

export default function DantaHero({
  eyebrow = "ALCALÁ DE HENARES · TRES GENERACIONES",
  title = (
    <>
      Lo que antes se hacía a mano,
      <br />
      hoy lo hacemos con el mismo cariño.
    </>
  ),
  description = "Webs de boda personalizadas, diseñadas desde cero para contar vuestra historia.",
}: DantaHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="danta-hero-title">
      <div className={styles.grain} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Danta Estudio — inicio">
          <img
            src="/brand/danta-logo.svg"
            alt="Danta Estudio"
            className={styles.logo}
          />
        </Link>

        <nav className={styles.nav} aria-label="Navegación principal">
          <Link href="#proceso">Cómo trabajamos</Link>
          <Link href="#ejemplo">Una web real</Link>
          <Link href="#historia">Nuestra historia</Link>
        </nav>

        <Link href="#contacto" className={styles.headerCta}>
          Empezar
        </Link>
      </header>

      <div className={styles.frame}>
        <div className={styles.index} aria-hidden="true">
          <span>01</span>
          <i />
          <span>HERO</span>
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>

          <div className={styles.markWrap} aria-hidden="true">
            <span className={styles.markOuter} />
            <span className={styles.markShutter} />
            <span className={styles.markCode}>&lt;/&gt;</span>
          </div>

          <h1 id="danta-hero-title">{title}</h1>

          <p className={styles.lead}>{description}</p>

          <p className={styles.manifesto}>
            La misma dedicación.
            <br />
            Otra forma de crear.
          </p>

          <div className={styles.actions}>
            <Link href="#contacto" className={styles.primaryCta}>
              Cuéntanos vuestra historia <span aria-hidden="true">→</span>
            </Link>

            <Link href="#ejemplo" className={styles.secondaryCta}>
              Ver una web real <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        <div className={styles.archive} aria-hidden="true">
          <span>DANTA / ESTUDIO</span>
          <span>ARCHIVO · 01</span>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>REVELAR</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
