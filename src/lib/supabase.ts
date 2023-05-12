import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://dpzdjdynihvoslrzmmgo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwemRqZHluaWh2b3NscnptbWdvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTMyOTc2NiwiZXhwIjoxOTk2OTA1NzY2fQ.iLJXTg7CXgNoM-eHlN1vRbE6Bf6wR0eOsSMxlNMKo0c'
);
