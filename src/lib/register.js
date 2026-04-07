import { getSupabase } from "@/utils/supabase/supabase"

export async function getUserCount() {
  try {
    const { count, error } = await getSupabase()
      .from('register')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error al obtener conteo:', error)
      return null
    }

    return count || 0
  } catch (error) {
    console.error('Error del servidor:', error)
    return null
  }
}
