'use server';
import { getUserCount } from '@/lib/register';
import Form from './Form';

const LIMITE_USUARIOS = 1000


export default async function RegistroPage() {
  const usuariosRegistrados = await getUserCount()

  if (usuariosRegistrados >= LIMITE_USUARIOS) {
    return (
      <div className="max-w-md mx-auto p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-500 mb-4">
            Registro Completo
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Form />
    </div>
  )
}
