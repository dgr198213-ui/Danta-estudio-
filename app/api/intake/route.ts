import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { names, email, slug, weddingDate, content } = body;

  if (!names || !email || !slug) {
    return NextResponse.json({ error: 'Faltan datos obligatorios' }, { status: 400 });
  }

  // 1. Crear (o recuperar) la pareja
  const { data: couple, error: coupleError } = await supabaseAdmin
    .from('couple')
    .upsert({ email, names }, { onConflict: 'email' })
    .select()
    .single();

  if (coupleError) {
    return NextResponse.json({ error: coupleError.message }, { status: 500 });
  }

  // 2. Crear la web de boda asociada
  const { data: site, error: siteError } = await supabaseAdmin
    .from('wedding_site')
    .insert({
      couple_id: couple.id,
      slug,
      wedding_date: weddingDate || null,
      content,
      published: false,
    })
    .select()
    .single();

  if (siteError) {
    return NextResponse.json({ error: siteError.message }, { status: 500 });
  }

  return NextResponse.json({ site });
}
