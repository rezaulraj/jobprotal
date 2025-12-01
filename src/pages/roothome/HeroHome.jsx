import React, { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaDollarSign,
  FaBriefcase,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import heroBgImage from "/images/rootpage/banner_bg.webp";

const HeroHome = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState({
    jobTitleSkillsCompany: "",
    location: "",
    minSalary: "",
  });

  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [showSalaryDropdown, setShowSalaryDropdown] = useState(false);

  const searchInputRef = useRef(null);
  const expandedSearchRef = useRef(null);
  const locationInputRef = useRef(null);

  const bangladeshCities = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Rajshahi",
    "Sylhet",
    "Barisal",
    "Rangpur",
    "Mymensingh",
    "Comilla",
    "Narayanganj",
    "Gazipur",
    "Cox's Bazar",
    "Jessore",
    "Bogra",
    "Dinajpur",
    "Tangail",
    "Pabna",
    "Kushtia",
    "Noakhali",
    "Feni",
  ];

  const salaryRanges = [
    { value: "", label: "Select Min Salary" },
    { value: "10000", label: "৳10,000+" },
    { value: "20000", label: "৳20,000+" },
    { value: "30000", label: "৳30,000+" },
    { value: "50000", label: "৳50,000+" },
    { value: "75000", label: "৳75,000+" },
    { value: "100000", label: "৳1,00,000+" },
    { value: "150000", label: "৳1,50,000+" },
    { value: "200000", label: "৳2,00,000+" },
  ];

  const handleSearchClick = () => {
    setIsSearchExpanded(true);
  };

  const handleCloseSearch = () => {
    setIsSearchExpanded(false);
    setShowLocationSuggestions(false);
    setShowSalaryDropdown(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchQuery);
  };

  const handleInputChange = (field, value) => {
    setSearchQuery((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "location" && value.length > 0) {
      setShowLocationSuggestions(true);
    } else if (field === "location" && value.length === 0) {
      setShowLocationSuggestions(false);
    }
  };

  const handleLocationSelect = (city) => {
    setSearchQuery((prev) => ({
      ...prev,
      location: city,
    }));
    setShowLocationSuggestions(false);
  };

  const handleSalarySelect = (value) => {
    setSearchQuery((prev) => ({
      ...prev,
      minSalary: value,
    }));
    setShowSalaryDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showLocationSuggestions &&
        locationInputRef.current &&
        !locationInputRef.current.contains(event.target)
      ) {
        setShowLocationSuggestions(false);
      }

      if (
        showSalaryDropdown &&
        !event.target.closest(".salary-dropdown-container")
      ) {
        setShowSalaryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showLocationSuggestions, showSalaryDropdown]);

  const filteredCities = bangladeshCities.filter((city) =>
    city.toLowerCase().includes(searchQuery.location.toLowerCase())
  );

  return (
    <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[500px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2558]/20 to-[#4EB956]/70"></div>
      </div>

      {!isSearchExpanded && (
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Find Your <span className="text-[#4EB956]">Dream Job</span> With
              Us
            </h1>
          </div>

          <div className="max-w-2xl lg:max-w-4xl mx-auto">
            <div
              ref={searchInputRef}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl p-3 sm:p-4 transform transition-all duration-300 hover:shadow-2xl sm:hover:shadow-3xl cursor-pointer"
              onClick={handleSearchClick}
            >
              <div className="flex items-center h-full">
                <div className="flex-1 pl-3 sm:pl-4">
                  <div className="text-sm sm:text-base md:text-lg text-gray-600">
                    Search by job title, location, or salary
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#1E2558] to-[#2d377a] text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center h-full min-h-[48px] px-4 sm:px-6">
                  <FaSearch className="text-sm sm:text-base md:text-lg" />
                  <span className="ml-1 sm:ml-2 hidden xs:inline text-xs sm:text-sm md:text-base">
                    Search
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSearchExpanded && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-gray-900/95">
            <button
              onClick={handleCloseSearch}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-[#4EB956] transition-colors duration-200 z-50"
            >
              <FaTimes className="text-xl sm:text-2xl" />
            </button>

            <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div
                ref={expandedSearchRef}
                className="w-full max-w-6xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl border border-gray-700/50"
              >
                <div className="p-4 sm:p-6 border-b border-gray-700/50">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
                    Find Your Dream Job
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base text-center mt-2">
                    Search from thousands of job opportunities
                  </p>
                </div>

                <form onSubmit={handleSearchSubmit} className="p-4 sm:p-6">
                  <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FaBriefcase className="text-sm sm:text-base" />
                        </div>
                        <input
                          type="text"
                          placeholder="Job title, skills, or company"
                          value={searchQuery.jobTitleSkillsCompany}
                          onChange={(e) =>
                            handleInputChange(
                              "jobTitleSkillsCompany",
                              e.target.value
                            )
                          }
                          className="w-full pl-10 pr-3 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4EB956] focus:ring-1 focus:ring-[#4EB956]/50 transition-all duration-300 text-sm sm:text-base h-full"
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="min-w-0 relative" ref={locationInputRef}>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FaMapMarkerAlt className="text-sm sm:text-base" />
                        </div>
                        <input
                          type="text"
                          placeholder="Location"
                          value={searchQuery.location}
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                          onFocus={() => setShowLocationSuggestions(true)}
                          className="w-full pl-10 pr-3 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4EB956] focus:ring-1 focus:ring-[#4EB956]/50 transition-all duration-300 text-sm sm:text-base h-full"
                        />

                        {showLocationSuggestions &&
                          filteredCities.length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl z-50 max-h-[300px] min-h-[100px] overflow-y-auto">
                              {filteredCities.map((city, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => handleLocationSelect(city)}
                                  className="w-full px-3 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200 flex items-center border-b border-gray-700 last:border-0"
                                >
                                  <FaMapMarkerAlt className="text-gray-400 mr-2 text-xs sm:text-sm flex-shrink-0" />
                                  <span className="text-xs sm:text-sm truncate">
                                    {city}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}
                      </div>
                    </div>

                    <div className="min-w-[140px] salary-dropdown-container">
                      <div className="relative h-full">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FaDollarSign className="text-sm sm:text-base" />
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setShowSalaryDropdown(!showSalaryDropdown)
                          }
                          className="w-full pl-10 pr-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-gray-600/50 rounded-lg text-left text-white focus:outline-none focus:border-[#4EB956] focus:ring-1 focus:ring-[#4EB956]/50 transition-all duration-300 h-full"
                        >
                          <span className="text-sm sm:text-base truncate block">
                            {searchQuery.minSalary
                              ? salaryRanges.find(
                                  (s) => s.value === searchQuery.minSalary
                                )?.label
                              : "Min Salary"}
                          </span>
                        </button>
                        <FaChevronDown
                          className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-transform duration-300 ${
                            showSalaryDropdown ? "rotate-180" : ""
                          }`}
                        />

                        {showSalaryDropdown && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl z-50 max-h-[300px] min-h-[100px] overflow-y-auto">
                            {salaryRanges.map((range, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => handleSalarySelect(range.value)}
                                className={`w-full px-3 py-3 text-left transition-colors duration-200 flex items-center border-b border-gray-700 last:border-0 ${
                                  searchQuery.minSalary === range.value
                                    ? "bg-[#4EB956]/20 text-white"
                                    : "text-white hover:bg-white/10"
                                }`}
                              >
                                <span className="text-xs sm:text-sm">
                                  {range.label}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="sm:w-auto">
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-gradient-to-r from-[#1E2558] to-[#4EB956] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center h-full min-h-[48px]"
                      >
                        <FaSearch className="mr-2" />
                        <span className="hidden sm:inline">Search</span>
                        <span className="sm:hidden">Search Jobs</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-gray-400 text-xs sm:text-sm text-center">
                      <span className="text-[#4EB956]">Tip:</span> Try searching
                      for "Software Engineer in Dhaka" or "Marketing Manager
                      ৳50,000+"
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        /* Custom scrollbar for dropdowns */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: #4eb956 #1e2558;
        }

        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #1e2558;
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #4eb956, #1e2558);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default HeroHome;
