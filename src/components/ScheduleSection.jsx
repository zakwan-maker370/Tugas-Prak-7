import React from "react";

const ScheduleSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Jadwal & <span className="text-blue-600">Program Kegiatan</span>
          </h2>
          <p className="text-gray-600">
            Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran
            dan pengembangan skill Setiap Sabtu
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
              📅
            </div>
            <h3 className="text-2xl font-bold text-blue-600">Setiap Sabtu</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-linear-to-r from-yellow-100 to-green-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  🕘
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sesi Pagi</h4>
                  <p className="text-blue-600 font-semibold">
                    09.00 - 12.00 WIB
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Workshop: Career Talks, dan Extra Classes Internal
              </p>
            </div>

            <div className="bg-linear-to-r from-yellow-100 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  🕓
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sesi Sore</h4>
                  <p className="text-blue-600 font-semibold">
                    16.00 - 19.00 WIB
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Project Work, Mentoring, dan Collaboration Session
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-3">💬</div>
            <h4 className="font-bold text-lg mb-2">Carrer Talks</h4>
            <p className="text-sm text-gray-700">
              Sesi sharing dari praktisi Industri dan alumni sukses
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-3">📚</div>
            <h4 className="font-bold text-lg mb-2">Extra Classes</h4>
            <p className="text-sm text-gray-700">
              Kelas tambahan skill development dan workshop teknis
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-3">💻</div>
            <h4 className="font-bold text-lg mb-2">Project Work</h4>
            <p className="text-sm text-gray-700">
              Mengerjakan project nyata dengan bimbingan mentor
            </p>
          </div>

          <div className="bg-pink-100 p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-3">👥</div>
            <h4 className="font-bold text-lg mb-2">Mentoring</h4>
            <p className="text-sm text-gray-700">
              Sesi konsultasi personal dengan mentor berpengalaman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
