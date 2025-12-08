import React, { useState, useEffect } from "react";
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
import { MdOutlineDesignServices } from "react-icons/md";
import { GrDatabase } from "react-icons/gr";
import { AiFillNotification } from "react-icons/ai";
import { Link } from "react-router-dom";
import jobData from "../../data/jobData.json";

const JobCategory = () => {
  const [activeTab, setActiveTab] = useState("industry");
  const [actualCompanies, setActualCompanies] = useState([]);
  const [actualLocations, setActualLocations] = useState([]);

  const calculateVacancyCount = (categoryName) => {
    const categoryMapping = {
      "Accounting/Finance": "Accounting/Finance",
      "Business Development": "Business Development",
      "Sales/Marketing": "Sales/Marketing",
      "IT/Telecommunication": "IT/Telecommunication",
      "Information Technology": "Information Technology",
      Engineering: "Engineering",
      Manufacturing: "Manufacturing",
      Services: "Services",
      "Recruitment/Employment Firms": "Recruitment/Employment Firms",
      "Data Entry/Office Support": "Data Entry/Office Support",
      "Hospitality/Travel/Tourism": "Hospitality/Travel/Tourism",
      "Education/Training": "Education/Training",
      "Customer/Service/Call Centre": "Customer/Service/Call Centre",
      Consultants: "Consultants",
      "Banking/Financial Services": "Banking/Financial Services",
      "N.G.O./Social Services": "N.G.O./Social Services",
      "E-Commerce/E-Business": "E-Commerce/E-Business",
      "Real Estate/Property": "Real Estate/Property",
      "Healthcare/Hospital/Medical": "Healthcare/Hospital/Medical",
      BPO: "BPO",
      "Construction/Cement/Metals": "Construction/Cement/Metals",
      "Architect/Interior Design": "Architect/Interior Design",
      "Importers/ Distributors/Exporters": "Importers/ Distributors/Exporters",
    };

    const mappedCategory = categoryMapping[categoryName];
    if (!mappedCategory) return 0;

    const totalVacancies = jobData
      .filter((job) => job.category === mappedCategory)
      .reduce((sum, job) => sum + (Number(job.vacancy) || 0), 0);

    return totalVacancies;
  };

  // Calculate company job counts
  // const calculateCompanyJobCount = (companyName) => {
  //   return jobData.filter((job) => job.company === companyName).length;
  // };

  // Calculate location job counts
  // const calculateLocationJobCount = (location) => {
  //   return jobData.filter((job) => job.location === location).length;
  // };

  // Get unique companies from jobData
  const getUniqueCompanies = () => {
    const companyMap = {};
    jobData.forEach((job) => {
      if (job.company) {
        companyMap[job.company] = (companyMap[job.company] || 0) + 1;
      }
    });

    return Object.entries(companyMap)
      .map(([name, count]) => ({
        name,
        count,
        path: name
          .toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .replace(/\s+/g, "-"),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 12);
  };

  // Get unique locations from jobData
  const getUniqueLocations = () => {
    const locationMap = {};
    jobData.forEach((job) => {
      if (job.location) {
        // Clean up location data (remove extra details)
        let cleanLocation = job.location;
        if (cleanLocation.includes("(")) {
          cleanLocation = cleanLocation.split("(")[0].trim();
        }
        if (cleanLocation.includes("Dhaka")) {
          cleanLocation = "Dhaka";
        }
        locationMap[cleanLocation] = (locationMap[cleanLocation] || 0) + 1;
      }
    });

    return Object.entries(locationMap)
      .map(([name, count]) => ({
        name,
        count,
        path: name
          .toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .replace(/\s+/g, "-"),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  };

  useEffect(() => {
    setActualCompanies(getUniqueCompanies());
    setActualLocations(getUniqueLocations());
  }, []);

  const jobCategories = [
    {
      name: "Accounting/Finance",
      count: calculateVacancyCount("Accounting/Finance"),
      icon: <FaMoneyBill />,
      path: "accounting-finance",
    },
    {
      name: "Business Development",
      count: calculateVacancyCount("Business Development"),
      icon: <FaBusinessTime />,
      path: "business-development",
    },
    {
      name: "Sales/Marketing",
      count: calculateVacancyCount("Sales/Marketing"),
      icon: <AiFillNotification />,
      path: "sales-marketing",
    },
    {
      name: "IT/Telecommunication",
      count: calculateVacancyCount("IT/Telecommunication"),
      icon: <FaCode />,
      path: "it-telecommunication",
    },
    {
      name: "Information Technology",
      count: calculateVacancyCount("Information Technology"),
      icon: <FaLaptopCode />,
      path: "information-technology",
    },
    {
      name: "Engineering",
      count: calculateVacancyCount("Engineering"),
      icon: <FaTools />,
      path: "engineering",
    },
    {
      name: "Manufacturing",
      count: calculateVacancyCount("Manufacturing"),
      icon: <FaIndustry />,
      path: "manufacturing",
    },
    {
      name: "Services",
      count: calculateVacancyCount("Services"),
      icon: <FaServicestack />,
      path: "services",
    },
    {
      name: "Recruitment/Employment Firms",
      count: calculateVacancyCount("Recruitment/Employment Firms"),
      icon: <FaUsers />,
      path: "recruitment-employment",
    },
    {
      name: "Data Entry/Office Support",
      count: calculateVacancyCount("Data Entry/Office Support"),
      icon: <GrDatabase />,
      path: "data-entry-office-support",
    },
    {
      name: "Hospitality/Travel/Tourism",
      count: calculateVacancyCount("Hospitality/Travel/Tourism"),
      icon: <FaPlane />,
      path: "hospitality-travel-tourism",
    },
    {
      name: "Education/Training",
      count: calculateVacancyCount("Education/Training"),
      icon: <FaGraduationCap />,
      path: "education-training",
    },
    {
      name: "Customer/Service/Call Centre",
      count: calculateVacancyCount("Customer/Service/Call Centre"),
      icon: <FaPhone />,
      path: "customer-service-call-centre",
    },
    {
      name: "Consultants",
      count: calculateVacancyCount("Consultants"),
      icon: <FaBriefcase />,
      path: "consultants",
    },
    {
      name: "Banking/Financial Services",
      count: calculateVacancyCount("Banking/Financial Services"),
      icon: <FaBuilding />,
      path: "banking-financial-services",
    },
    {
      name: "N.G.O./Social Services",
      count: calculateVacancyCount("N.G.O./Social Services"),
      icon: <FaHandHoldingHeart />,
      path: "ngo-social-services",
    },
    {
      name: "E-Commerce/E-Business",
      count: calculateVacancyCount("E-Commerce/E-Business"),
      icon: <FaShoppingCart />,
      path: "ecommerce-ebusiness",
    },
    {
      name: "Real Estate/Property",
      count: calculateVacancyCount("Real Estate/Property"),
      icon: <FaHome />,
      path: "real-estate-property",
    },
    {
      name: "Healthcare/Hospital/Medical",
      count: calculateVacancyCount("Healthcare/Hospital/Medical"),
      icon: <FaHospital />,
      path: "healthcare-hospital-medical",
    },
    {
      name: "BPO",
      count: calculateVacancyCount("BPO"),
      icon: <FaHeadset />,
      path: "bpo",
    },
    {
      name: "Construction/Cement/Metals",
      count: calculateVacancyCount("Construction/Cement/Metals"),
      icon: <FaHardHat />,
      path: "construction-cement-metals",
    },
    {
      name: "Architect/Interior Design",
      count: calculateVacancyCount("Architect/Interior Design"),
      icon: <MdOutlineDesignServices />,
      path: "architect-interior-design",
    },
    {
      name: "Importers/ Distributors/Exporters",
      count: calculateVacancyCount("Importers/ Distributors/Exporters"),
      icon: <FaShippingFast />,
      path: "importers-distributors-exporters",
    },
  ];

  const functions = [
    { name: "Sales", count: 0, path: "sales" },
    { name: "Marketing", count: 0, path: "marketing" },
    { name: "Software Development", count: 0, path: "software-development" },
    { name: "Human Resources", count: 0, path: "human-resources" },
    { name: "Finance", count: 0, path: "finance" },
    { name: "Operations", count: 0, path: "operations" },
    { name: "Customer Support", count: 0, path: "customer-support" },
    { name: "Administration", count: 0, path: "administration" },
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
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 group"
              >
                <span className="text-gray-400 mr-3 text-lg shrink-0 group-hover:text-secondary">
                  {category.icon}
                </span>
                <Link
                  to={`/jobs/${category.path}`}
                  className="text-gray-700 group-hover:text-primary flex items-center font-lato w-full min-w-0"
                >
                  <span className="truncate flex-1">{category.name}</span>
                  <span className="text-gray-500 ml-1 shrink-0">
                    ({category.count})
                  </span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200"
            >
              <span className="text-gray-400 mr-3 text-lg">
                <FaPlusCircle />
              </span>
              <Link to="/jobs" className="text-primary font-lato font-semibold">
                All Industries
              </Link>
            </motion.div>
          </div>
        );
      case "city":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {actualLocations.map((location) => (
              <motion.div
                key={location.name}
                whileHover={{ y: -2 }}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 group"
              >
                <span className="text-gray-400 mr-3 text-lg group-hover:text-secondary">
                  <FaBuilding />
                </span>
                <Link
                  to={`/jobs/${location.path}`}
                  className="text-gray-700 group-hover:text-primary flex items-center w-full min-w-0"
                >
                  <span className="truncate flex-1">{location.name}</span>
                  <span className="text-gray-500 ml-1 shrink-0">
                    ({location.count})
                  </span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200"
            >
              <span className="text-gray-400 mr-3 text-lg">
                <FaPlusCircle />
              </span>
              <Link to="/jobs" className="text-primary font-lato font-semibold">
                All Locations
              </Link>
            </motion.div>
          </div>
        );
      case "company":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {actualCompanies.map((company) => (
              <motion.div
                key={company.name}
                whileHover={{ y: -2 }}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 group"
              >
                <span className="text-gray-400 mr-3 text-lg group-hover:text-secondary">
                  <FaBriefcase />
                </span>
                <Link
                  to={`/jobs/${company.path}`}
                  className="text-gray-700 group-hover:text-primary flex items-center w-full min-w-0"
                >
                  <span className="truncate flex-1">{company.name}</span>
                  <span className="text-gray-500 ml-1 shrink-0">
                    ({company.count})
                  </span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200"
            >
              <span className="text-gray-400 mr-3 text-lg">
                <FaPlusCircle />
              </span>
              <Link to="/jobs" className="text-primary font-lato font-semibold">
                All Companies
              </Link>
            </motion.div>
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
                <Link
                  to={`/jobs/${func.path}`}
                  className="text-gray-700 group-hover:text-primary flex items-center w-full min-w-0"
                >
                  <span className="truncate flex-1">{func.name}</span>
                  <span className="text-gray-500 ml-1 shrink-0">
                    ({func.count})
                  </span>
                </Link>
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
    { id: "city", label: "By Location" },
    { id: "company", label: "By Company" },
    { id: "function", label: "By Function" },
  ];

  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 pb-12 pt-4 px-4 sm:px-6 lg:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-700 mb-3">
                Browse Jobs in Bangladesh
              </h2>
              <p className="text-gray-600 text-sm">
                Showing real vacancy counts from {jobData.length} job listings
              </p>
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
              <Link
                to="/jobs"
                className="hover:text-secondary text-primary hover:underline text-sm font-semibold flex items-center"
              >
                View All <FaChevronRight className="ml-1 text-xs" />
              </Link>
            </div>
            <div className="space-y-3">
              {actualCompanies.slice(0, 6).map((company) => (
                <motion.div
                  key={company.name}
                  whileHover={{ x: 5 }}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                    <FaBuilding className="text-gray-400 text-sm group-hover:text-secondary" />
                  </div>
                  <Link
                    to={`/jobs/company/${company.path}`}
                    className="text-gray-700 hover:text-blue-600 flex items-center w-full min-w-0"
                  >
                    <span className="truncate flex-1">{company.name}</span>
                    <span className="text-gray-400 text-xs ml-2 shrink-0">
                      {company.count}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link
                to="/jobs"
                className="flex items-center justify-center text-primary font-semibold hover:text-secondary transition-colors"
              >
                <FaPlusCircle className="mr-2" /> Browse All Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
