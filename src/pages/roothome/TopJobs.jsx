import React from "react";
import eurostell from "/images/rootpage/eurosteel.jpeg";
import { Link } from "react-router-dom";

const TopJobs = () => {
  const topJobs = [
    {
      title: "Account Manager",
      company: "Euro Steel",
      companyImage: eurostell,
    },
    {
      title: "Account Manager",
      company: "Euro Steel",
      companyImage: eurostell,
    },
    { title: "IT Officer", company: "Euro Steel", companyImage: eurostell },
    {
      title: "Business Executive",
      company: "Euro Steel",
      companyImage: eurostell,
    },
    {
      title: "Operation Manager",
      company: "Euro Steel",
      companyImage: eurostell,
    },
    { title: "Sales Officer", company: "Euro Steel", companyImage: eurostell },
    {
      title: "Marketing Advisor",
      company: "Euro Steel",
      companyImage: eurostell,
    },
    { title: "Supervisor", company: "Euro Steel", companyImage: eurostell },

    {
      title: "HR Specialist",
      company: "Euro Steel",
      companyImage: eurostell,
    },
    {
      title: "Finance Executive",
      company: "Euro Steel",
      companyImage: eurostell,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-2">
        <h2 className="text-2xl font-bold text-[#1E2558]/90 mb-4">Top Jobs</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 border divide-y divide-x p-2 border-gray-300 divide-gray-500">
          {topJobs.map((job, index) => (
            <Link
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex items-center gap-4 p-4 hover:shadow-lg hover:scale-[1.02] transition-transform "
            >
              <img
                src={job.companyImage}
                alt={`${job.company} logo`}
                className="size-16 object-contain rounded-sm border border-gray-300"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {job.title}
                </h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopJobs;
