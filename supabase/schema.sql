create extension if not exists pgcrypto;

create table if not exists public.customer_leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(full_name) between 2 and 80),
  mobile_number text not null check (mobile_number ~ '^[6-9][0-9]{9}$'),
  city text not null default '',
  interest text not null check (interest in (
    'Life Protection',
    'Wealth Planning',
    'Child Future Planning',
    'Retirement Planning',
    'Health & Critical Illness',
    'Tax Saving Solutions',
    'Need Financial Guidance'
  )),
  consent boolean not null default false check (consent = true),
  lead_status text not null default 'New' check (lead_status in ('New','Contacted','Follow-up','Converted','Closed')),
  created_at timestamptz not null default now()
);

alter table public.customer_leads enable row level security;

-- Public visitors may submit enquiries only. They cannot read, update or delete leads.
create policy "public can submit consented enquiries"
on public.customer_leads for insert to anon
with check (consent = true);

-- Replace the placeholder with the exact email used for your Supabase admin account.
-- This limits lead visibility to that single authenticated account.
create policy "approved admin can read leads"
on public.customer_leads for select to authenticated
using ((auth.jwt() ->> 'email') = 'REPLACE_WITH_YOUR_ADMIN_EMAIL');

-- No public SELECT/UPDATE/DELETE policies are intentionally provided.
