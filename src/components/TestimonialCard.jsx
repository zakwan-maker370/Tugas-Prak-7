const TestimonialCard = ({ name, role, quote }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full shrink-0"></div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-blue-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{quote}</p>
    </div>
  );
};

export default TestimonialCard;