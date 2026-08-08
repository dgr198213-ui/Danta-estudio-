-- Danta — esquema inicial del MVP

create table couple (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  names text,
  created_at timestamptz default now()
);

create table wedding_site (
  id uuid primary key default gen_random_uuid(),
  couple_id uuid references couple(id) on delete cascade,
  slug text unique not null,
  wedding_date date,
  content jsonb default '{}'::jsonb,
  published boolean default false,
  created_at timestamptz default now()
);

create table rsvp (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references wedding_site(id) on delete cascade,
  guest_name text not null,
  attending boolean not null,
  plus_ones int default 0,
  dietary_restrictions text,
  created_at timestamptz default now()
);

create table photo (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references wedding_site(id) on delete cascade,
  url text not null,
  uploaded_by text,
  created_at timestamptz default now()
);

-- RLS: cada pareja solo ve y edita su propia web
alter table wedding_site enable row level security;

create policy "Las parejas gestionan su propia web"
  on wedding_site for all
  using (couple_id = auth.uid())
  with check (couple_id = auth.uid());

-- RSVP y fotos son de escritura pública (invitados sin login) pero solo
-- lectura para el dueño de la web — ajustar según necesidad real.
alter table rsvp enable row level security;
create policy "Cualquiera puede confirmar asistencia" on rsvp for insert with check (true);
create policy "El dueño de la web ve sus RSVPs" on rsvp for select
  using (site_id in (select id from wedding_site where couple_id = auth.uid()));

alter table photo enable row level security;
create policy "Cualquiera puede subir fotos" on photo for insert with check (true);
create policy "Todos pueden ver las fotos publicadas" on photo for select using (true);
