import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseAdminKey } from "../../config";

export const supabaseUrl = "https://fpkraiqgftsurdrscohj.supabase.co";
export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey);
