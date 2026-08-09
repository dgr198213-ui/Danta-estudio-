'use client';

import { useState } from 'react';
import Eyebrow from './Eyebrow';
import { supabase } from '@/lib/supabase';

export default function Rsvp({ siteId }: { siteId?: string }) {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<boolean | null>(null);
  const [diet, setDiet] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!siteId || !name || attending === null) return;
    setStatus('sending');
    const { error } = await supabase.from('rsvp').insert({
      site_id: siteId,
      guest_name: name,
      attending,
      dietary_restrictions: diet || null,
    });
    setStatus(error ? 'error' : 'sent');
  }

  return (
    <section className="py-24 border-t border-ink/10">
      <div className="grid md:grid-cols-[1fr_0.95fr] gap-18 items-center">
        <div>
          <Eyebrow>Confirmar asistencia</Eyebrow>
          <h2 className="font-display font-semibold text-[clamp(1.9rem,3.2vw,2.6rem)] leading-tight max-w-[12ch] mb-5">
            ¿Nos acompañas?
          </h2>
          <p className="font-body text-[1.08rem] leading-loose text-ink-soft max-w-[44ch]">
            Un formulario sencillo para que cada invitado confirme si viene, si trae acompañante
            y si tiene alguna restricción alimentaria — sin llamadas ni grupos de WhatsApp
            interminables.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-paper border-[1.5px] border-burgundy outline outline-1 outline-burgundy outline-offset-[6px] rounded-sm p-9 max-w-[380px] mx-auto"
        >
          <div className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-brass text-center mb-6">
            Confirma tu asistencia
          </div>

          <label className="block font-mono text-[0.64rem] tracking-wide uppercase text-ink-soft mb-2">
            Nombre
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Escribe tu nombre"
            className="w-full bg-transparent font-body italic text-[1.02rem] border-b border-ink/20 pb-2 mb-6 focus:outline-none focus:border-burgundy"
          />

          <label className="block font-mono text-[0.64rem] tracking-wide uppercase text-ink-soft mb-2">
            ¿Asistirás?
          </label>
          <div className="flex gap-2.5 mb-6">
            <button
              type="button"
              onClick={() => setAttending(true)}
              className={`flex-1 text-center py-2.5 font-body text-[0.92rem] border rounded-sm transition-colors ${
                attending === true
                  ? 'bg-burgundy border-burgundy text-paper'
                  : 'border-ink/15 text-ink-soft'
              }`}
            >
              Sí, allí estaré
            </button>
            <button
              type="button"
              onClick={() => setAttending(false)}
              className={`flex-1 text-center py-2.5 font-body text-[0.92rem] border rounded-sm transition-colors ${
                attending === false
                  ? 'bg-burgundy border-burgundy text-paper'
                  : 'border-ink/15 text-ink-soft'
              }`}
            >
              No podré ir
            </button>
          </div>

          <label className="block font-mono text-[0.64rem] tracking-wide uppercase text-ink-soft mb-2">
            Restricciones alimentarias
          </label>
          <input
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            placeholder="Ninguna / alergias / vegetariano..."
            className="w-full bg-transparent font-body italic text-[1.02rem] border-b border-ink/20 pb-2 mb-7 focus:outline-none focus:border-burgundy"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-burgundy text-paper rounded-sm py-3.5 font-body text-[0.96rem] disabled:opacity-60"
          >
            {status === 'sent' ? 'Confirmación enviada ✓' : 'Enviar confirmación'}
          </button>
          {status === 'error' && (
            <p className="font-mono text-[0.7rem] text-burgundy mt-3">
              No se pudo enviar. Inténtalo de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
