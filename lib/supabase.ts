import { createClient } from '@supabase/supabase-js';

// Fallback para que `next build` no reviente si aún no has configurado
// .env.local — las llamadas reales fallarán con un error claro hasta que
// pongas tus credenciales de Supabase.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
