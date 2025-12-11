import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const ProjectCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      category: "UI/UX Design",
      title: "Creative Portfolio Platform",
      description:
        "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      team: [
        { name: "Budi Santoso", role: "Frontend Developer" },
        { name: "Budi Santoso", role: "Frontend Developer" },
        { name: "Budi Santoso", role: "Frontend Developer" },
      ],
      image:
        "src/assets/foto.png.jpg",
    },
    {
      category: "Web Development",
      title: "Creative Portfolio Platform",
      description:
        "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      team: [
        { name: "Rudi Santoso", role: "Frontend Developer" },
        { name: "Rudi Santoso", role: "Frontend Developer" },
        { name: "Rudi Santoso", role: "Frontend Developer" },
      ],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    },
    {
      category: "Mobile Development",
      title: "Creative Portfolio Platform",
      description:
        "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      team: [
        { name: "Andi Santoso", role: "Frontend Developer" },
        { name: "Andi Santoso", role: "Frontend Developer" },
        { name: "Andi Santoso", role: "Frontend Developer" },
      ],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    },
  ];

  const changeSlide = (newSlide) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(newSlide);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % projects.length);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + projects.length) % projects.length);
  };

  return (
    <section id="project" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Showcase <span className="text-blue-600">Student Projects</span>
          </h2>
          <p className="text-gray-600">
            Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam
            program Ruang Ekspresi
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`grid md:grid-cols-2 gap-8 p-8 transition-all duration-500 ease-in-out ${
                    idx === currentSlide
                      ? "opacity-100 relative"
                      : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                  style={{
                    transform:
                      idx === currentSlide
                        ? "translateX(0)"
                        : idx < currentSlide
                        ? "translateX(-100%)"
                        : "translateX(100%)",
                  }}
                >
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 transition-all duration-300">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-bold mb-4 text-gray-800 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 transition-all duration-300">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-800">
                          Tim Pembuat:
                        </h4>
                        <div className="space-y-2">
                          {project.team.map((member, memberIdx) => (
                            <div
                              key={memberIdx}
                              className="flex items-center gap-3 transition-all duration-300"
                              style={{
                                transitionDelay: `${memberIdx * 100}ms`,
                              }}
                            >
                              <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                {member.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">
                                  {member.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {member.role}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                        <ExternalLink size={18} />
                        Live Demo
                      </button>
                    </div>
                  </div>

                  <div className="transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl w-full h-full object-cover shadow-lg transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => changeSlide(idx)}
                disabled={isTransitioning}
                className={`h-3 rounded-full transition-all duration-500 ${
                  currentSlide === idx
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 w-3 hover:bg-gray-400"
                } disabled:cursor-not-allowed`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
