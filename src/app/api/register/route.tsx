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

    const { data, error } = await getSupabase()
      .from('register')
      .insert([
        {
          nombre,
          apellido,
          email,
          fecha_nac,
          ciudad,
        }
      ])
      .select()

    if(error?.code == '23505') {
      return Response.json({ error: "Email ya registrado" }, { status: 409 });
    }

    if (error) {
      console.error('Error de Supabase:', error)
      return Response.json({ 
        error: 'Error' 
      }, { status: 500 })
    }

    return Response.json({ 
      message: 'Registro exitoso', 
      data: data[0] 
    }, { status: 200 })

  } catch (error) {
    console.error('Error del servidor:', error)
    return Response.json({ 
      error: 'Error interno del servidor' 
    }, { status: 500 })
  }
}