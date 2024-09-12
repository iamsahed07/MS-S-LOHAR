import React from 'react';

const TurnoverTimeline = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Turnover Timeline</h1>
      <p>Details about the company's turnover timeline will be displayed here.</p>
      {/* Example Content */}
      <ul className="list-disc ml-5">
        <li>2020: $1,000,000</li>
        <li>2021: $1,200,000</li>
        <li>2022: $1,500,000</li>
        {/* Add more data as needed */}
      </ul>
    </div>
  );
};

export default TurnoverTimeline;
