import React from "react";
import Image from "next/image";
import RegistroPage from "@/components/FormContainer";

export const metadata = {
  title: "Evento Exclusivo",
};

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-black text-white flex flex-col justify-between font-sans">
        <Image src="/portada-winona.png" alt="Background" fill className="object-cover opacity-20 pointer-events-none" priority />
        <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-8">
          <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col items-center w-full max-w-md mx-auto md:mx-0">
              <div className="bg-white text-black rounded-2xl shadow-lg p-8 w-full md:min-w-sm flex flex-col justify-center">
                <h2 className="text-2xl font-serif mb-6">Contacto</h2>
                <RegistroPage />
              </div>
              <div className="w-full mt-2">
                <div className="text-xs text-center text-gray-300">
                  <span className="font-bold">Disclaimer:</span> Llenar este formulario no garantiza el acceso. Bohemian Groove se contactará a la brevedad. Evento +18 hasta agotar stock de 100 invitaciones disponibles.
                </div>
              </div>

            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <Image src="/portada-winona-disco.png" alt="Winona" width={128} height={128} className="w-full md:w-64 h-auto mb-8" />
              <span className="text-4xl md:text-4xl text-center font-serif">Winona Riders</span>
              <p className="text-center text-2xl md:text-2xl mt-8">Evento Exclusivo</p>
              <div className="flex items-center mt-4 gap-8">
                <Image src="/indie-folks-logo.jpg" alt="Indie Folks Logo" width={128} height={128} className="w-16 md:w-24 h-auto" />
                <Image src="/winona-logo.png" alt="Winona Riders Logo" width={128} height={128} className="w-16 md:w-24 h-auto" />
                <Image src="/die-recordings.png" alt="Die Recordings Logo" width={128} height={128} className="w-16 md:w-48 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}