import React from 'react';

const PreviousTenders = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Previous Tenders</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Project Name</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Work Order Number</th>
            <th className="border border-gray-300 px-4 py-2">Work Description</th>
            <th className="border border-gray-300 px-4 py-2">Contract Value</th>
          </tr>
        </thead>
        <tbody>
          {/* Example rows */}
          <tr>
            <td className="border border-gray-300 px-4 py-2">Project Delta</td>
            <td className="border border-gray-300 px-4 py-2">Location D</td>
            <td className="border border-gray-300 px-4 py-2">WO67890</td>
            <td className="border border-gray-300 px-4 py-2">Description of Project Delta</td>
            <td className="border border-gray-300 px-4 py-2">$600,000</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousTenders;
