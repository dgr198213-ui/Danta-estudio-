import { createClient } from '@supabase/supabase-js';

// ⚠️ Solo se importa desde código de servidor (API routes). La service role
// key nunca debe llegar al navegador — por eso no lleva el prefijo NEXT_PUBLIC_.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-role-key';

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});
