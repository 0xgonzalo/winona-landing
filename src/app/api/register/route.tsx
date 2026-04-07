import { getSupabase } from '@/utils/supabase/supabase';
import { NextRequest } from 'next/server';


export async function POST(request: NextRequest) {
  try {
    const { nombre, apellido, email, fecha_nac, ciudad } = await request.json()

    if (!nombre || !apellido || !email || !fecha_nac || !ciudad) {
      return Response.json({
        error: 'Todos los campos son obligatorios'
      }, { status: 400 })
    }

    const { data, error } = await getSupabase().rpc('register_user', {
      p_nombre: nombre,
      p_apellido: apellido,
      p_email: email,
      p_fecha_nac: fecha_nac,
      p_ciudad: ciudad,
    })

    if (error) {
      console.error('Error de Supabase:', error)
      return Response.json({
        error: 'Error interno del servidor'
      }, { status: 500 })
    }

    if (data.error === 'limit_reached') {
      return Response.json({
        error: 'El cupo de registros está lleno. Se han alcanzado los 1000 registros.'
      }, { status: 403 })
    }

    if (data.error === 'duplicate_email') {
      return Response.json({ error: 'Email ya registrado' }, { status: 409 })
    }

    return Response.json({
      message: 'Registro exitoso',
      data: data.data
    }, { status: 200 })

  } catch (error) {
    console.error('Error del servidor:', error)
    return Response.json({
      error: 'Error interno del servidor'
    }, { status: 500 })
  }
}
