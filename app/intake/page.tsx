'use client';

import { useState } from 'react';

const emptyForm = {
  names: '',
  email: '',
  slug: '',
  weddingDate: '',
  historia: '',
  ceremoniaLugar: '',
  ceremoniaHora: '',
  coctelLugar: '',
  coctelHora: '',
  cenaLugar: '',
  cenaHora: '',
  baileHora: '',
  carreteActivado: false,
  notasInternas: '',
};

export default function IntakePage() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function update<K extends keyof typeof emptyForm>(key: K, value: (typeof emptyForm)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const content = {
      historia: form.historia,
      ceremonia: { lugar: form.ceremoniaLugar, hora: form.ceremoniaHora },
      coctel: { lugar: form.coctelLugar, hora: form.coctelHora },
      cena: { lugar: form.cenaLugar, hora: form.cenaHora },
      baile: { hora: form.baileHora },
      carrete_activado: form.carreteActivado,
      notas_internas: form.notasInternas,
    };

    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          names: form.names,
          email: form.email,
          slug: form.slug,
          weddingDate: form.weddingDate || null,
          content,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error desconocido');
      setStatus('sent');
      setForm(emptyForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Error desconocido');
    }
  }

  return (
    <main className="min-h-screen bg-paper px-6 py-14">
      <div className="max-w-[640px] mx-auto">
        <div className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-brass mb-2">
          Herramienta interna · Danta Estudio
        </div>
        <h1 className="font-display font-semibold text-[1.9rem] text-ink mb-2">
          Intake de nueva pareja
        </h1>
        <p className="font-body text-ink-soft mb-10">
          Rellena esto tras hablar con la pareja. Crea el registro base en Supabase — el
          contenido se pule después.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Section title="Pareja">
            <Field label="Nombres" required>
              <input
                required
                value={form.names}
                onChange={(e) => update('names', e.target.value)}
                placeholder="Irene y Daniel"
                className="input"
              />
            </Field>
            <Field label="Email de contacto" required>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="pareja@email.com"
                className="input"
              />
            </Field>
            <Field label="Slug de la web (nombres.danta.es)" required>
              <input
                required
                value={form.slug}
                onChange={(e) => update('slug', e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                placeholder="irene-y-daniel"
                className="input"
              />
            </Field>
            <Field label="Fecha de la boda">
              <input
                type="date"
                value={form.weddingDate}
                onChange={(e) => update('weddingDate', e.target.value)}
                className="input"
              />
            </Field>
          </Section>

          <Section title="Su historia">
            <Field label="Cómo se conocieron / lo que os han contado">
              <textarea
                value={form.historia}
                onChange={(e) => update('historia', e.target.value)}
                rows={5}
                placeholder="Notas sobre su historia, tono, detalles que quieren destacar..."
                className="input resize-y"
              />
            </Field>
          </Section>

          <Section title="El gran día">
            <div className="grid grid-cols-[1fr_120px] gap-3">
              <Field label="Ceremonia — lugar">
                <input value={form.ceremoniaLugar} onChange={(e) => update('ceremoniaLugar', e.target.value)} className="input" />
              </Field>
              <Field label="Hora">
                <input type="time" value={form.ceremoniaHora} onChange={(e) => update('ceremoniaHora', e.target.value)} className="input" />
              </Field>
            </div>
            <div className="grid grid-cols-[1fr_120px] gap-3">
              <Field label="Cóctel — lugar">
                <input value={form.coctelLugar} onChange={(e) => update('coctelLugar', e.target.value)} className="input" />
              </Field>
              <Field label="Hora">
                <input type="time" value={form.coctelHora} onChange={(e) => update('coctelHora', e.target.value)} className="input" />
              </Field>
            </div>
            <div className="grid grid-cols-[1fr_120px] gap-3">
              <Field label="Cena — lugar">
                <input value={form.cenaLugar} onChange={(e) => update('cenaLugar', e.target.value)} className="input" />
              </Field>
              <Field label="Hora">
                <input type="time" value={form.cenaHora} onChange={(e) => update('cenaHora', e.target.value)} className="input" />
              </Field>
            </div>
            <Field label="Hora del baile">
              <input type="time" value={form.baileHora} onChange={(e) => update('baileHora', e.target.value)} className="input max-w-[120px]" />
            </Field>
          </Section>

          <Section title="Extras">
            <label className="flex items-center gap-2.5 font-body text-ink">
              <input
                type="checkbox"
                checked={form.carreteActivado}
                onChange={(e) => update('carreteActivado', e.target.checked)}
                className="w-4 h-4 accent-burgundy"
              />
              Activar Carrete Digital para esta boda
            </label>
          </Section>

          <Section title="Notas internas (no aparecen en la web)">
            <textarea
              value={form.notasInternas}
              onChange={(e) => update('notasInternas', e.target.value)}
              rows={3}
              placeholder="Preferencias de diseño, alergias importantes, cualquier cosa a recordar..."
              className="input resize-y"
            />
          </Section>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-burgundy text-paper rounded-sm py-3.5 font-body text-[1rem] disabled:opacity-60"
          >
            {status === 'sending' ? 'Creando...' : 'Crear web de la pareja'}
          </button>

          {status === 'sent' && (
            <p className="font-mono text-[0.75rem] text-burgundy">
              ✓ Web creada. Ya puedes pulir el contenido desde Supabase.
            </p>
          )}
          {status === 'error' && (
            <p className="font-mono text-[0.75rem] text-burgundy">Error: {errorMsg}</p>
          )}
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(36,32,27,0.2);
          border-radius: 3px;
          padding: 10px 12px;
          font-family: 'Newsreader', serif;
          font-size: 0.98rem;
          color: #24201B;
        }
        .input:focus { outline: none; border-color: #7A1F2B; }
      `}</style>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[0.66rem] tracking-[0.1em] uppercase text-ink-soft mb-3 pb-2 border-b border-ink/10">
        {title}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[0.68rem] tracking-wide text-ink-soft mb-1.5">
        {label} {required && <span className="text-burgundy">*</span>}
      </span>
      {children}
    </label>
  );
}
