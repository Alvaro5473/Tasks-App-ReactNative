import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mxczeolferkpduxyvmgh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14Y3plb2xmZXJrcGR1eHl2bWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3OTA3ODUsImV4cCI6MjA0ODM2Njc4NX0.eXlEfJq1xKeJbbW7cmLrB4bjIxpZKILEWwqzPZVeGFg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Prueba de conexión
export const testConnection = async () => {
  try {
    const { data, error } = await supabase.from('tasks').select('*').limit(1);
    if (error) {
      console.error('Error al conectar con Supabase:', error);
    } else {
      console.log('Conexión exitosa. Datos:', data);
    }
  } catch (err) {
    console.error('Error inesperado:', err);
  }
};

export default supabase;