import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">RUANG EKSPRESI :</span> Wadah
              kreatif & Kompetitif Mahasiswa
            </h1>
            <div className="flex flex-wrap gap-3">
              <span className="px-6 py-2 bg-yellow-200 rounded-full text-sm font-medium">
                Ideation
              </span>
              <span className="px-6 py-2 bg-green-200 rounded-full text-sm font-medium">
                Creation
              </span>
              <span className="px-6 py-2 bg-blue-200 rounded-full text-sm font-medium">
                Collaboration
              </span>
              <span className="px-6 py-2 bg-pink-200 rounded-full text-sm font-medium">
                Guidance & Support
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src="src/assets/foto.png.jpg"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
