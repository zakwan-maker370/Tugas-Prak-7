const ActivityCard = ({ icon: Icon, title, description, bgColor, time, location }) => {
  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300`}>
      <div className="flex items-start space-x-4">
        <div className="shrink-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-gray-700" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          {time && <p className="text-sm font-semibold mb-1">{time}</p>}
          {location && <p className="text-sm text-gray-700">{location}</p>}
          {description && <p className="text-sm text-gray-700 mt-2">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;