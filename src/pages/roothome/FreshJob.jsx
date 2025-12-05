import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import freshImage from "/gratuate.png";
import { RiGraduationCapFill } from "react-icons/ri";

const FreshJob = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  const freshJobs = [
    {
      title: "Content Writer / Storyteller",
      company: "Easy Tech",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Chattogram, Bangladesh",
    },
    {
      title: "UX/UI Designer",
      company: "Creative Minds",
      location: "Sylhet, Bangladesh",
    },
    {
      title: "Data Analyst",
      company: "DataPro Analytics",
      location: "Rajshahi, Bangladesh",
    },
    {
      title: "Project Manager",
      company: "BuildIt Constructions",
      location: "Khulna, Bangladesh",
    },
    {
      title: "Digital Marketing Specialist",
      company: "WebGrowth Agency",
      location: "Barishal, Bangladesh",
    },
    {
      title: "Mobile App Developer",
      company: "AppWorks Studio",
      location: "Gazipur, Bangladesh",
    },
    {
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Narayanganj, Bangladesh",
    },
    {
      title: "Sales Executive",
      company: "TradeLink Enterprises",
      location: "Cumilla, Bangladesh",
    },
    {
      title: "Customer Support Representative",
      company: "HelpDesk Bangladesh",
      location: "Savar, Bangladesh",
    },
    {
      title: "Network Administrator",
      company: "NetSecure Ltd",
      location: "Mymensingh, Bangladesh",
    },
    {
      title: "Graphic Designer",
      company: "DesignHub Creative",
      location: "Bogura, Bangladesh",
    },
    {
      title: "Backend Developer",
      company: "ServerSide Technologies",
      location: "Jessore, Bangladesh",
    },
    {
      title: "Quality Assurance Engineer",
      company: "BugFree Solutions",
      location: "Rangpur, Bangladesh",
    },
    {
      title: "Business Analyst",
      company: "StrategyPlus Consultants",
      location: "Feni, Bangladesh",
    },
    {
      title: "HR Specialist",
      company: "TalentFind Recruiters",
      location: "Noakhali, Bangladesh",
    },
    {
      title: "Content Marketing Manager",
      company: "BuzzContent Creators",
      location: "Pabna, Bangladesh",
    },
    {
      title: "Full Stack Developer",
      company: "WebInnovate Labs",
      location: "Kushtia, Bangladesh",
    },
    {
      title: "SEO Specialist",
      company: "RankHigher Agency",
      location: "Tangail, Bangladesh",
    },
    {
      title: "Financial Analyst",
      company: "MoneyMatters Advisors",
      location: "Narsingdi, Bangladesh",
    },
  ];

  const handlePrev = () => {
    setCurrentJobIndex((prevIndex) =>
      prevIndex === 0 ? freshJobs.length - 8 : prevIndex - 8
    );
  };

  const handleNext = () => {
    setCurrentJobIndex((prevIndex) => (prevIndex + 8) % freshJobs.length);
  };

  const visibleJobs = freshJobs.slice(currentJobIndex, currentJobIndex + 8);

  return (
    <div className="container mx-auto px-4 py-10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="grid grid-cols-2 items-center">
          <div className="space-y-9">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <RiGraduationCapFill className="text-5xl md:text-6xl text-black" />
                <h1 className="text-4xl md:text-5xl uppercase font-bold tracking-wider ">
                  Fresh
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-950 uppercase">
                Graduate Jobs
              </h2>
              <p className="text-lg">
                Kickstart your career with these exciellent entry label
                position. Find the job best suited to your skills and begin your
                new and exciting career
              </p>
            </div>

            <div>
              <button className="bg-secondary px-6 py-3 text-lg md:text-xl font-bold uppercase text-black cursor-pointer">Graduate Jobs</button>
            </div>
          </div>
          <a href="#" className=" overflow-hidden h-full">
            <img src={freshImage} alt="Fresh Jobs" className="w-full h-full" />
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Jobs in Bangladesh
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition"
              >
                <IoIosArrowBack size={22} className="text-blue-600" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition"
              >
                <IoIosArrowForward size={22} className="text-blue-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 grow">
            {visibleJobs.map((job, index) => (
              <a
                href="#"
                key={index}
                className="p-2 rounded-lg bg-gray-50 hover:bg-blue-50  transition duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {job.company}, {job.location}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FreshJob;
