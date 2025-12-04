import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBusinessTime,
  FaLaptopCode,
  FaIndustry,
  FaServicestack,
  FaUsers,
  FaPlane,
  FaGraduationCap,
  FaPhone,
  FaBriefcase,
  FaBuilding,
  FaHandHoldingHeart,
  FaShoppingCart,
  FaHome,
  FaHospital,
  FaHeadset,
  FaTools,
  FaMoneyBill,
  FaHardHat,
  FaShippingFast,
  FaPlusCircle,
  FaChevronRight,
  FaCode,
} from "react-icons/fa";

const JobCategory = () => {
  const [activeTab, setActiveTab] = useState("industry");

  const jobCategories = [
    { name: "Business Development", count: 7206, icon: <FaBusinessTime /> },
    { name: "Information Technology", count: 474, icon: <FaLaptopCode /> },
    { name: "Manufacturing", count: 212, icon: <FaIndustry /> },
    { name: "Services", count: 188, icon: <FaServicestack /> },
    { name: "Recruitment/Employment Firms", count: 177, icon: <FaUsers /> },
    { name: "Travel/Tourism/Transportation", count: 157, icon: <FaPlane /> },
    { name: "Education/Training", count: 125, icon: <FaGraduationCap /> },
    { name: "IT/Telecommunication", count: 125, icon: <FaCode /> },
    { name: "Call Center", count: 116, icon: <FaPhone /> },
    { name: "Consultants", count: 104, icon: <FaBriefcase /> },
    { name: "Banking/Financial Services", count: 98, icon: <FaBuilding /> },
    { name: "N.G.O./Social Services", count: 97, icon: <FaHandHoldingHeart /> },
    { name: "E-Commerce / E-Business", count: 90, icon: <FaShoppingCart /> },
    { name: "Real Estate/Property", count: 90, icon: <FaHome /> },
    { name: "Healthcare/Hospital/Medical", count: 87, icon: <FaHospital /> },
    { name: "BPO", count: 75, icon: <FaHeadset /> },
    { name: "Construction / Cement / Metals", count: 61, icon: <FaHardHat /> },
    { name: "Accounting/Taxation", count: 60, icon: <FaMoneyBill /> },
    { name: "Engineering", count: 56, icon: <FaTools /> },
    {
      name: "Importers/ Distributors/Exporters",
      count: 54,
      icon: <FaShippingFast />,
    },
  ];

  const cities = [
    { name: "Karachi", count: 5000 },
    { name: "Lahore", count: 4500 },
    { name: "Islamabad", count: 3000 },
    { name: "Faisalabad", count: 2000 },
    { name: "Rawalpindi", count: 1800 },
    { name: "Multan", count: 1500 },
    { name: "Gujranwala", count: 1200 },
    { name: "Peshawar", count: 1000 },
  ];

  const companies = [
    { name: "Telenor Bangladesh", count: 300 },
    { name: "Jazz", count: 250 },
    { name: "Engro Corporation", count: 200 },
    { name: "Habib Bank Limited", count: 180 },
    { name: "Unilever Bangladesh", count: 160 },
    { name: "Nestlé Bangladesh", count: 150 },
    { name: "Systems Limited", count: 140 },
    { name: "PTCL", count: 130 },
  ];

  const functions = [
    { name: "Sales", count: 3500 },
    { name: "Marketing", count: 2800 },
    { name: "Software Development", count: 2200 },
    { name: "Human Resources", count: 1500 },
    { name: "Finance", count: 1400 },
    { name: "Operations", count: 1300 },
    { name: "Customer Support", count: 1200 },
    { name: "Administration", count: 1100 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "industry":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
            {jobCategories.map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ y: -2 }}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200  group"
              >
                <span className="text-gray-400 mr-3 text-lg shrink-0 group-hover:text-secondary">
                  {category.icon}
                </span>
                <a
                  href="#"
                  className="text-gray-700 group-hover:text-primary flex items-center font-lato w-full min-w-0"
                >
                  <span className="truncate flex-1 ">{category.name}</span>
                  <span className="text-gray-500 ml-1 shrink-0">
                    ({category.count})
                  </span>
                </a>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200"
            >
              <span className="text-gray-400 mr-3 text-lg">
                <FaPlusCircle />
              </span>
              <a href="#" className="text-primary font-lato font-semibold">
                More Industries
              </a>
            </motion.div>
          </div>
        );
      case "city":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cities.map((city) => (
              <motion.div
                key={city.name}
                whileHover={{ y: -2 }}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 group"
              >
                <span className="text-gray-400 mr-3 text-lg group-hover:text-secondary">
                  <FaBuilding />
                </span>
                <a
                  href="#"
                  className="text-gray-700 group-hover:text-primary flex items-center w-full min-w-0"
                >
                  <span className="truncate flex-1">{city.name}</span>
                  <span className="text-gray-500 ml-1 shrink-0">
                    ({city.count})
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        );
      case "company":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {companies.map((company) => (
              <motion.div
                key={company.name}
                whileHover={{ y: -2 }}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 group"
              >
                <span className="text-gray-400 mr-3 text-lg group-hover:text-secondary">
                  <FaBriefcase />
                </span>
                <a
                  href="#"
                  className="text-gray-700 group-hover:text-primary flex items-center w-full min-w-0"
                >
                  <span className="truncate flex-1">{company.name}</span>
                  <span className="text-gray-500 ml-1 shrink-0">
                    ({company.count})
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        );
      case "function":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {functions.map((func) => (
              <motion.div
                key={func.name}
                whileHover={{ y: -2 }}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 group"
              >
                <span className="text-gray-400 mr-3 text-lg group-hover:text-secondary">
                  <FaUsers />
                </span>
                <a
                  href="#"
                  className="text-gray-700 group-hover:text-primary flex items-center w-full min-w-0"
                >
                  <span className="truncate flex-1">{func.name}</span>
                  <span className="text-gray-500 ml-1 shrink-0">
                    ({func.count})
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const tabs = [
    { id: "industry", label: "By Industry" },
    { id: "city", label: "By City" },
    { id: "company", label: "By Company" },
    { id: "function", label: "By Function" },
  ];

  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 pb-12 pt-4 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <div className=" mb-6">
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                Browse Jobs in Bangladesh
              </h2>
            </div>
            <div className="flex flex-wrap border-b border-gray-200 mb-6 -mx-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-semibold rounded-t-lg mx-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-secondary bg-blue-50"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="min-h-[300px]"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-700">Top Employers</h2>
              <a
                href="#"
                className="hover:text-secondary text-primary hover:underline text-sm font-semibold flex items-center"
              >
                View All <FaChevronRight className="ml-1 text-xs" />
              </a>
            </div>
            <div className="space-y-3">
              {companies.slice(0, 6).map((company) => (
                <motion.div
                  key={company.name}
                  whileHover={{ x: 5 }}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <FaBuilding className="text-gray-400 text-sm group-hover:text-secondary" />
                  </div>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 flex items-center w-full min-w-0"
                  >
                    <span className="truncate flex-1">{company.name}</span>
                    <span className="text-gray-400 text-xs ml-2 shrink-0">
                      {company.count}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <a
                href="#"
                className="flex items-center justify-center text-primary font-semibold hover:text-secondary transition-colors"
              >
                <FaPlusCircle className="mr-2" /> Browse All Companies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
