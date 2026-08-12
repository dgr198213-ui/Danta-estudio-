'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

type Photo = {
  id: string;
  url: string;
  uploaded_by: string | null;
  created_at: string;
};

export default function CarreteDigitalPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [siteId, setSiteId] = useState<string | null>(null);
  const [siteStatus, setSiteStatus] = useState<'loading' | 'found' | 'not-found'>('loading');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [guestName, setGuestName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 1. Resolver el slug a un site_id (solo webs publicadas, ver RLS)
  useEffect(() => {
    async function resolveSite() {
      const { data, error } = await supabase
        .from('wedding_site')
        .select('id')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error || !data) {
        setSiteStatus('not-found');
        return;
      }
      setSiteId(data.id);
      setSiteStatus('found');
    }
    resolveSite();
  }, [slug]);

  const fetchPhotos = useCallback(async (id: string) => {
    const { data } = await supabase
      .from('photo')
      .select('id, url, uploaded_by, created_at')
      .eq('site_id', id)
      .order('created_at', { ascending: false });
    if (data) setPhotos(data as Photo[]);
  }, []);

  // 2. Cargar fotos existentes + suscripción en tiempo real a fotos nuevas
  useEffect(() => {
    if (!siteId) return;
    fetchPhotos(siteId);

    const channel = supabase
      .channel(`carrete-${siteId}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'photo', filter: `site_id=eq.${siteId}` },
        (payload) => {
          setPhotos((prev) => [payload.new as Photo, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [siteId, fetchPhotos]);

  async function handleFiles(files: FileList | null) {
    if (!files || !siteId) return;
    setUploading(true);
    setError('');

    for (const file of Array.from(files)) {
      const ext = file.name.split('.').pop();
      const path = `${siteId}/${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from('carrete-digital')
        .upload(path, file, { cacheControl: '3600', upsert: false });

      if (uploadError) {
        setError('No se pudo subir alguna foto. Inténtalo de nuevo.');
        continue;
      }

      const { data: urlData } = supabase.storage.from('carrete-digital').getPublicUrl(path);

      await supabase.from('photo').insert({
        site_id: siteId,
        url: urlData.publicUrl,
        uploaded_by: guestName || null,
      });
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  if (siteStatus === 'loading') {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center">
        <p className="font-mono text-[0.75rem] text-ink-soft">Cargando...</p>
      </main>
    );
  }

  if (siteStatus === 'not-found') {
    return (
      <main className="min-h-screen bg-paper flex items-center justify-center px-8 text-center">
        <div>
          <p className="font-mono text-[0.7rem] tracking-wide uppercase text-brass mb-3">
            Carrete Digital
          </p>
          <p className="font-display italic text-[1.3rem] text-ink">
            No encontramos esta web, o todavía no está publicada.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-paper px-6 py-14">
      <div className="max-w-[560px] mx-auto">
        <div className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-brass mb-2">
          Carrete Digital
        </div>
        <h1 className="font-display text-[1.7rem] text-ink mb-2">
          Compartid vuestras fotos del móvil
        </h1>
        <p className="font-body text-ink-soft mb-8">
          Como un carrete compartido, sin esperar al revelado. Se suben al momento y las ve
          todo el mundo aquí mismo.
        </p>

        <div className="border border-burgundy p-6 mb-10">
          <label className="block font-mono text-[0.64rem] tracking-wide uppercase text-ink-soft mb-2">
            Tu nombre (opcional)
          </label>
          <input
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Escribe tu nombre"
            className="w-full bg-transparent font-body italic text-[1rem] border-b border-ink/20 pb-2 mb-5 focus:outline-none focus:border-burgundy"
          />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            capture="environment"
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
            id="carrete-upload"
          />
          <label
            htmlFor="carrete-upload"
            className="block w-full text-center bg-burgundy text-paper rounded-sm py-3.5 font-body text-[0.96rem] cursor-pointer"
          >
            {uploading ? 'Subiendo...' : 'Subir fotos →'}
          </label>
          {error && <p className="font-mono text-[0.7rem] text-burgundy mt-3">{error}</p>}
        </div>

        <div className="font-mono text-[0.68rem] tracking-wide uppercase text-ink-soft mb-4">
          {photos.length} {photos.length === 1 ? 'foto' : 'fotos'}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {photos.map((p) => (
            <img
              key={p.id}
              src={p.url}
              alt={p.uploaded_by ? `Foto de ${p.uploaded_by}` : 'Foto de un invitado'}
              className="w-full aspect-square object-cover rounded-sm"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
