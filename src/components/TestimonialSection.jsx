import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      major: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Budi Santoso",
      major: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Budi Santoso",
      major: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-600">{testimonial.major}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
