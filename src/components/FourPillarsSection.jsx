import React from "react";

const PillarCard = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`${bgColor} p-8 rounded-2xl shadow-lg h-full`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const FourPillarsSection = () => {
  const pillars = [
    {
      icon: "💡",
      title: "Ideation",
      description:
        "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.",
      bgColor: "bg-yellow-100",
    },
    {
      icon: "🔧",
      title: "Creation",
      description:
        "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.",
      bgColor: "bg-green-100",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.",
      bgColor: "bg-blue-100",
    },
    {
      icon: "🎓",
      title: "Guidance & Support",
      description:
        "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.",
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Komprehensif yang dirancang untuk mengembangkan potensi kreatif
            mahasiswa melalui pendekatan holistik
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillarsSection;
