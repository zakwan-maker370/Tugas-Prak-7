const PillarCard = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300`}>
      <div className="flex flex-col items-center text-center">
        <Icon className="w-12 h-12 mb-4" />
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default PillarCard;