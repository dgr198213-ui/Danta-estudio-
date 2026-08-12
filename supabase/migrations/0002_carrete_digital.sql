-- Carrete Digital — bucket de Storage para las fotos de los invitados
-- y política pública para poder resolver una web de boda por su slug.

insert into storage.buckets (id, name, public)
values ('carrete-digital', 'carrete-digital', true)
on conflict (id) do nothing;

create policy "Cualquiera puede subir al carrete digital"
  on storage.objects for insert
  to public
  with check (bucket_id = 'carrete-digital');

create policy "Cualquiera puede ver las fotos del carrete digital"
  on storage.objects for select
  to public
  using (bucket_id = 'carrete-digital');

-- Necesario para que /carrete/[slug] pueda resolver el site_id a partir
-- del slug sin estar autenticado. Solo expone webs ya publicadas.
create policy "Cualquiera puede ver webs publicadas"
  on wedding_site for select
  using (published = true);
