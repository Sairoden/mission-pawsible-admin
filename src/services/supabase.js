import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fpkraiqgftsurdrscohj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwa3JhaXFnZnRzdXJkcnNjb2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0MzgwODUsImV4cCI6MjAxMzAxNDA4NX0.hWKhdUA7-ayCN2NamkOzjry83bFL0G86XLwulfq9_5I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
