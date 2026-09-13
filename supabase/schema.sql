create table if not exists public.constructs (
  id timestamptz primary key,
  title text not null,
  author text not null default 'anonymous',
  cells smallint[] not null check (cardinality(cells) = 256),
  created_at timestamptz not null default now(),
  rating numeric(2,1) not null default 0
);
alter table public.constructs enable row level security;
create policy "Public can read constructs" on public.constructs for select using (true);
create policy "Public can submit constructs" on public.constructs for insert with check (true);