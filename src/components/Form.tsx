'use client';
import { useState, FormEvent } from "react";
import { useRouter } from 'next/navigation'


const Form = () => {
  const [mensaje, setMensaje] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensaje('');

    const formElement = e.currentTarget;
    const formData = new FormData(formElement)
    
    const userData = {
      nombre: formData.get('nombre'),
      apellido: formData.get('apellido'),
      email: formData.get('email'),
      fecha_nac: formData.get('fecha_nac'),
      ciudad: formData.get('ciudad'),
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })

      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch {
        setMensaje('Respuesta inválida del servidor.');
        return;
      }
      
      if (response.ok) {
        setMensaje('¡Usuario registrado exitosamente!');
        formElement.reset();
        
        setTimeout(() => {
          router.refresh()
        }, 2000);

      } else {
        setMensaje(`Error: ${result.error}`)
      }
    } catch {
      setMensaje('Error de conexión. Intenta nuevamente.')
    }
  }

  return (
    <div>
      {mensaje && (
        <div className={`mb-4 p-3 rounded ${
          mensaje.includes('exitosamente') 
            ? 'bg-green-100 text-green-700 border border-green-200' 
            : 'bg-red-100 text-red-700 border border-red-200'
        }`}>
          {mensaje}
        </div>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <label className="text-xs mb-1 block" htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" className="w-full rounded bg-gray-100 px-3 py-2 font-semibold" required />
      </div>
      <div>
        <label className="text-xs mb-1 block" htmlFor="apellido">Apellido</label>
        <input id="apellido" name="apellido" type="text" className="w-full rounded bg-gray-100 px-3 py-2 font-semibold" required />
      </div>
      <div>
        <label className="text-xs mb-1 block" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="w-full rounded bg-gray-100 px-3 py-2 font-semibold" required />
      </div>
      <div>
        <label className="text-xs mb-1 block" htmlFor="fecha_nac">Fecha de Nacimiento</label>
        <input id="fecha_nac" name="fecha_nac" type="date" className="w-full rounded bg-gray-100 px-3 py-2" placeholder="DD/MM/YYYY" required />
      </div>
      <div>
        <label className="text-xs mb-1 block" htmlFor="ciudad">Ciudad</label>
        <input id="ciudad" name="ciudad" type="text" className="w-full rounded bg-gray-100 px-3 py-2 font-semibold" required />
      </div>
      <button type="submit" className="mt-4 bg-[#E4572E] text-white rounded py-2 font-semibold hover:bg-[#c13c1a] transition-colors">Enviar</button>
    </form>
    </div>
  )
};

export default Form; 