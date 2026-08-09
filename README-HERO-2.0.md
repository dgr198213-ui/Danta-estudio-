# Danta 2.0 — Hero

Archivos:
- `components/DantaHero.tsx` — componente Next.js.
- `styles/DantaHero.module.css` — estilos completos y responsive.
- `config/danta-2-design.json` — especificación visual.
- `public/brand/*.svg` — versiones provisionales del sistema de marca.

## Integración

Copia los archivos al proyecto Next.js y usa:

```tsx
import DantaHero from "@/components/DantaHero";

export default function Page() {
  return <DantaHero />;
}
```

El CTA principal apunta a `#contacto` y el secundario a `#ejemplo`.
Los SVG incluidos son placeholders vectoriales para poder probar el sistema. Para producción conviene sustituirlos por una vectorización fiel del logo original.
