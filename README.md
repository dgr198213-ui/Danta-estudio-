# Danta

MVP de la plataforma de creación de webs de boda Danta — homenaje a la tienda de
fotografía de la Calle Mayor de Alcalá de Henares.

## Stack

- Next.js 14 (App Router) + Tailwind CSS
- Supabase (Postgres + Auth + Storage)
- Despliegue previsto en Vercel

## Empezar

```bash
npm install
cp .env.example .env.local   # rellena con tus credenciales de Supabase
npm run dev
```

## Base de datos

El esquema inicial (parejas, webs de boda, RSVP, fotos) está en
`supabase/migrations/0001_init.sql`. Aplícalo desde el SQL editor de tu
proyecto de Supabase o con la CLI:

```bash
supabase db push
```

## Estructura

```
app/            rutas (App Router) y estilos globales
app/intake/     formulario interno para dar de alta cada pareja (concierge)
app/api/intake/ API route que crea la pareja + web en Supabase (service role)
app/carrete/[slug]/ página pública del Carrete Digital — subida de fotos + galería en tiempo real
components/     Hero, Story, Founder, Principles, Process, Rsvp, Timeline, DigitalReel...
lib/supabase.ts       cliente público (anon key) — para el navegador
lib/supabase-admin.ts cliente con service role — solo server-side
supabase/       migraciones SQL
```

### Carrete Digital

`/carrete/[slug]` es la página que abren los invitados al escanear el QR. Resuelve
el `slug` contra `wedding_site` (solo webs con `published = true`, vía política RLS
pública) y permite subir fotos directamente a Supabase Storage (bucket
`carrete-digital`, público). Las fotos nuevas aparecen en tiempo real para todos los
que tengan la página abierta, vía Supabase Realtime.

Para que un slug sea accesible desde `/carrete/[slug]`, su `wedding_site.published`
tiene que estar en `true` — de momento eso se cambia a mano desde el editor de
tablas de Supabase, hasta que exista el flujo de publicación real.

⚠️ **Antes de publicar `/intake` en producción**: ahora mismo cualquiera con la URL
podría enviar el formulario y crear registros en tu base de datos, porque no tiene
autenticación delante. Para el uso que le vas a dar tú solo durante la validación
esto es asumible, pero si compartes el enlace o lo dejas indexable, protégelo con
un login sencillo (por ejemplo, Supabase Auth con tu email) antes de ese paso.

## Estado actual

Landing completa con el posicionamiento actualizado (Hero, Nuestra historia, El
legado de Domingo, Principios, Cómo trabajamos contigo, RSVP, Cronograma, Carrete
Digital como extra). El formulario de RSVP y el intake ya escriben en Supabase en
cuanto configures `.env.local`. Pendiente: autenticación del intake, subida real
de fotos al Carrete Digital, y publicación real de la web por pareja (slug →
página pública).
