import React from 'react';

const ToolsAndEquipments = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Tools and Equipments</h1>
      <p>Details about the tools and equipment owned by the company.</p>
      {/* Example Content */}
      <ul className="list-disc ml-5">
        <li>Excavators</li>
        <li>Cranes</li>
        <li>Bulldozers</li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

export default ToolsAndEquipments;
