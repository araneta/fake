import { createClient } from '@supabase/supabase-js'
import 'dotenv/config';
console.log('urkkl',process.env.NEXT_PUBLIC_SUPABASE_URL);
export default createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
