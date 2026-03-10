import React from "react";
import Image from "next/image";
import RegistroPage from "@/components/FormContainer";

export const metadata = {
  title: "Evento Exclusivo",
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col justify-between font-sans">
        <div className="flex flex-1 items-center justify-center px-4 py-8">
          <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col items-center w-full max-w-md mx-auto md:mx-0">
              <div className="bg-white text-black rounded-2xl shado<w-lg p-8 w-full md:min-w-sm flex flex-col justify-center">
                <h2 className="text-2xl font-serif mb-6">Contacto</h2>
                <RegistroPage />
              </div>
              <div className="w-full mt-2">
                <div className="text-xs text-center text-gray-300">
                  <span className="font-bold">Disclaimer:</span> Llenar este formulario no garantiza el acceso. Bohemian Groove se contactará a la brevedad. Evento +18 hasta agotar stock de 100 invitaciones disponibles.
                </div>
              </div>
              
            </div>
            <div className="flex-1 flex  flex-col items-center justify-center">
            <Image src="/revolucion.jpg" alt="Spotify Logo" width={128} height={128} className="w-full md:w-64 h-auto mb-8" />
              <span className="text-4xl  md:text-8xl text-center font-serif">Winona</span>
              <p className="text-center text-2xl md:text-4xl mt-4">Evento Exclusivo</p>
            <div className="flex items-center mt-4">
              <Image src="/spotify.png" alt="Spotify Logo" width={128} height={128} className="w-16 md:w-24 h-auto mr-6" />
              <Image src="/bohemian-logo.png" alt="Bohemian Groove Logo" width={128} height={128} className="w-16 md:w-24 h-auto" />
              <Image src="/rb.png" alt="RB Logo" width={128} height={128} className="w-16 md:w-24 h-auto" />
              <Image src="/laptra.png" alt="Laptra Logo" width={128} height={128} className="w-12 md:w-16 h-auto" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}