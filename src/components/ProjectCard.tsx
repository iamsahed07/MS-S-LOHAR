import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  duration: string;
  location: string;
  contractValue: string;
  detailsLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, duration, location, contractValue, detailsLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-600">Duration: {duration}</p>
        <p className="text-gray-600">Location: {location}</p>
        <p className="text-gray-600">Contract Value: {contractValue}</p>
        <a href={detailsLink} className="text-blue-500 hover:underline">View Details</a>
      </div>
    </div>
  );
};

export default ProjectCard;
