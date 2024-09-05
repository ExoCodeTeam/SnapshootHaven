// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wnaxzgvovlhpvgrjzosd.supabase.co"; // Replace with your Supabase project URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY; // Replace with your Supabase public API key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
