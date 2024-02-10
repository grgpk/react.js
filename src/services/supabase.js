import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ypotsybkpzegxsbhvgvq.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwb3RzeWJrcHplZ3hzYmh2Z3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NjAzMjgsImV4cCI6MjAyMTQzNjMyOH0.z5WE-2io2tbk_A3NJlxolAJsC9Y80I5DPZGNUztcdas`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
