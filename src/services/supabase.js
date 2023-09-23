import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://smdxavevbbioiiyzrtzq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZHhhdmV2YmJpb2lpeXpydHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3NjQxMTUsImV4cCI6MjAxMDM0MDExNX0.oD1uoxHwRQRg2eHQ3CgEaNQwb8DCiRcU8C61A1sQC_o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
