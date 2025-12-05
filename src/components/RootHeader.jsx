import React, { useState, useEffect, useRef } from "react";
import {
  FaBusinessTime,
  FaLaptopCode,
  FaIndustry,
  FaServicestack,
  FaUsers,
  FaPlane,
  FaGraduationCap,
  FaCode,
  FaPhone,
  FaBriefcase,
  FaBuilding,
  FaHandHoldingHeart,
  FaShoppingCart,
  FaHome,
  FaHospital,
  FaHeadset,
  FaHardHat,
  FaMoneyBill,
  FaTools,
  FaShippingFast,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaBriefcase as FaJob,
  FaHandshake,
  FaBuilding as FaCompany,
  FaSearch,
  FaComments,
  FaFileAlt,
  FaSignInAlt,
  FaUserPlus,
  FaChevronRight,
} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const RootHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveNav(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    {
      label: "Browse Job",
      icon: <FaSearch className="text-xs" />,
      subNav: [
        {
          name: "Sales / Business Development",
          path: "/jobs",
          count: 7206,
          icon: <FaBusinessTime />,
        },
        {
          name: "Information Technology",
          path: "/jobs",
          count: 474,
          icon: <FaLaptopCode />,
        },
        {
          name: "Manufacturing",
          path: "/jobs",
          count: 212,
          icon: <FaIndustry />,
        },
        {
          name: "Services",
          path: "/jobs",
          count: 188,
          icon: <FaServicestack />,
        },
        {
          name: "Recruitment/Employment Firms",
          path: "/jobs",
          count: 177,
          icon: <FaUsers />,
        },
        {
          name: "Travel/Tourism/Transportation",
          path: "/jobs",
          count: 157,
          icon: <FaPlane />,
        },
        {
          name: "Education/Training",
          path: "/jobs",
          count: 125,
          icon: <FaGraduationCap />,
        },
        {
          name: "IT/Telecommunication",
          path: "/jobs",
          count: 125,
          icon: <FaCode />,
        },
        {
          name: "Call Center",
          path: "/jobs",
          count: 116,
          icon: <FaPhone />,
        },
        {
          name: "Consultants",
          path: "/jobs",
          count: 104,
          icon: <FaBriefcase />,
        },
        {
          name: "Banking/Financial Services",
          path: "/jobs",
          count: 98,
          icon: <FaBuilding />,
        },
        {
          name: "N.G.O./Social Services",
          path: "/jobs",
          count: 97,
          icon: <FaHandHoldingHeart />,
        },
        {
          name: "E-Commerce / E-Business",
          path: "/jobs",
          count: 90,
          icon: <FaShoppingCart />,
        },
        {
          name: "Real Estate/Property",
          path: "/jobs",
          count: 90,
          icon: <FaHome />,
        },
        {
          name: "Healthcare/Hospital/Medical",
          path: "/jobs",
          count: 87,
          icon: <FaHospital />,
        },
        { name: "BPO", path: "/jobs", count: 75, icon: <FaHeadset /> },
        {
          name: "Construction / Cement / Metals",
          path: "/jobs",
          count: 61,
          icon: <FaHardHat />,
        },
        {
          name: "Accounting/Taxation",
          path: "/jobs",
          count: 60,
          icon: <FaMoneyBill />,
        },
        {
          name: "Engineering",
          path: "/jobs",
          count: 56,
          icon: <FaTools />,
        },
        {
          name: "Importers/ Distributors/Exporters",
          path: "/jobs",
          count: 54,
          icon: <FaShippingFast />,
        },
      ],
    },
    {
      label: "Community",
      path: "/community",
      icon: <FaComments className="text-xs" />,
    },
    {
      label: "Free CV Review",
      path: "/free-cv-review",
      icon: <FaFileAlt className="text-xs" />,
    },
    {
      label: "Login",
      path: "/login",
      icon: <FaSignInAlt className="text-xs" />,
    },
    {
      label: "Sign Up",
      path: "/sign-up",
      icon: <FaUserPlus className="text-xs" />,
    },
  ];

  const languages = [
    {
      name: "English",
      code: "US",
      countryCode: "US",
    },
    {
      name: "Bangla",
      code: "BD",
      countryCode: "BD",
    },
  ];

  const actionButtons = [
    {
      label: "Post a Job",
      icon: <FaJob className="text-xs" />,
      color: "from-[#1E2558] to-[#2d377a]",
    },
    {
      label: "Hire a Freelancer",
      icon: <FaHandshake className="text-xs" />,
      color: "from-[#4EB956] to-[#3da345]",
    },
    {
      label: "Employers",
      icon: <FaCompany className="text-xs" />,
      outline: true,
    },
  ];

  const handleBrowseJobClick = () => {
    if (activeNav === "Browse Job") {
      setActiveNav(null);
    } else {
      setActiveNav("Browse Job");
    }
  };

  const handleNavItemClick = (label) => {
    if (label === "Browse Job") {
      handleBrowseJobClick();
    } else {
      setActiveNav(null);
    }
  };

  return (
    <>
      <nav
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="Logo"
                  className="h-8 w-auto transition-all duration-300"
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={item.label === "Browse Job" ? dropdownRef : null}
                >
                  {item.subNav ? (
                    <button
                      onClick={() => handleNavItemClick(item.label)}
                      className={`flex flex-col items-center space-y-1 group cursor-pointer ${
                        activeNav === item.label ? "text-[#4EB956]" : ""
                      }`}
                    >
                      <div
                        className={`${
                          activeNav === item.label
                            ? "text-[#4EB956]"
                            : "text-gray-500"
                        } transition-colors duration-200`}
                      >
                        {item.icon}
                      </div>
                      <span
                        className={`text-[10px] font-medium uppercase tracking-wider transition-colors duration-200 ${
                          activeNav === item.label
                            ? "text-[#4EB956]"
                            : "text-gray-600"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  ) : (
                    <a
                      href={item.path}
                      className="flex flex-col items-center space-y-1 group"
                      onClick={() => setActiveNav(null)}
                    >
                      <div className="text-gray-500 group-hover:text-[#4EB956] transition-colors duration-200">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-medium text-gray-600 group-hover:text-[#4EB956] uppercase tracking-wider transition-colors duration-200">
                        {item.label}
                      </span>
                    </a>
                  )}

                  {item.subNav && activeNav === item.label && (
                    <div
                      className="fixed left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-40"
                      style={{ top: "64px" }}
                    >
                      <div className="container mx-auto px-4 py-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                          {item.subNav.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.path}
                              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded transition-colors duration-200 group/sub"
                              onClick={() => setActiveNav(null)}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="text-gray-400 group-hover/sub:text-[#4EB956] transition-colors duration-200">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <p className="text-xs font-medium text-gray-700 group-hover/sub:text-[#1E2558]">
                                    {subItem.name}
                                  </p>
                                  <p className="text-[10px] text-gray-400 mt-0.5">
                                    {subItem.count} jobs available
                                  </p>
                                </div>
                              </div>
                              <FaChevronRight className="text-[8px] text-gray-300 group-hover/sub:text-[#4EB956]" />
                            </a>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <a
                            href="/all/category"
                            className="text-xs text-primary hover:text-secondary font-medium hover:underline flex items-center space-x-1 cursor-pointer"
                            onClick={() => setActiveNav(null)}
                          >
                            <span>View all job categories</span>
                            <FaChevronRight className="text-[8px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block relative group">
                <button className="flex items-center space-x-1.5 text-gray-600 hover:text-[#4EB956] transition-colors duration-200 cursor-pointer">
                  <ReactCountryFlag
                    countryCode={
                      languages.find((lang) => lang.name === selectedLanguage)
                        ?.countryCode || "US"
                    }
                    svg
                    style={{
                      width: "1.2em",
                      height: "1.2em",
                      borderRadius: "50%",
                    }}
                    title={selectedLanguage}
                  />
                  <span className="text-[10px] font-medium uppercase tracking-wider">
                    {selectedLanguage}
                  </span>
                  <FaChevronDown className="text-[8px]" />
                </button>

                <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {languages.map((lang, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedLanguage(lang.name)}
                      className={`flex items-center space-x-2 w-full p-2 rounded transition-colors duration-200 cursor-pointer ${
                        selectedLanguage === lang.name
                          ? "bg-gray-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <ReactCountryFlag
                        countryCode={lang.countryCode}
                        svg
                        style={{
                          width: "1.2em",
                          height: "1.2em",
                          borderRadius: "50%",
                        }}
                        title={lang.name}
                      />
                      <span className="text-xs font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex items-center space-x-2">
                {actionButtons.map((button, index) => (
                  <button
                    key={index}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 ${
                      button.outline
                        ? "border border-[#1E2558] text-[#1E2558] hover:bg-[#1E2558] hover:text-white"
                        : `bg-linear-to-r ${button.color} text-white`
                    } rounded text-[10px] font-medium uppercase tracking-wider transition-all duration-200 hover:shadow-md cursor-pointer`}
                  >
                    {button.icon}
                    <span>{button.label}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden cursor-pointer text-gray-600 hover:text-[#4EB956] transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <FaTimes className="text-lg" />
                ) : (
                  <FaBars className="text-lg" />
                )}
              </button>
            </div>
          </div>

          <div className="hidden md:flex lg:hidden justify-center border-t border-gray-100 pt-3 pb-2">
            <div className="flex items-center justify-center space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="flex flex-col items-center space-y-1 group cursor-pointer"
                >
                  <div className="text-gray-500 group-hover:text-[#4EB956] transition-colors duration-200">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-medium text-gray-600 group-hover:text-[#4EB956] uppercase tracking-wider transition-colors duration-200">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <Link to={"/"}>
                  <img src={logo} alt="Logo" className="h-6 w-auto" />
                </Link>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-[#4EB956] cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>

            <div className="h-[calc(100%-60px)] overflow-y-auto">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Select Language
                  </span>
                </div>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedLanguage(lang.name);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center cursor-pointer space-x-3 w-full p-3 rounded transition-colors duration-200 ${
                        selectedLanguage === lang.name
                          ? "bg-linear-to-r from-[#1E2558]/10 to-[#4EB956]/10"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <ReactCountryFlag
                        countryCode={lang.countryCode}
                        svg
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                          borderRadius: "50%",
                        }}
                        title={lang.name}
                      />
                      <span className="text-sm font-medium">{lang.name}</span>
                      {selectedLanguage === lang.name && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-[#4EB956]"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-50 last:border-0"
                    >
                      {item.subNav ? (
                        <div>
                          <button
                            onClick={() =>
                              setActiveNav(
                                activeNav === item.label ? null : item.label
                              )
                            }
                            className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-[#4EB956] transition-colors duration-200 cursor-pointer"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="text-gray-500">{item.icon}</div>
                              <span className="text-sm font-medium">
                                {item.label}
                              </span>
                            </div>
                            <FaChevronDown
                              className={`text-xs transition-transform duration-200 ${
                                activeNav === item.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {activeNav === item.label && (
                            <div className="pl-8 pb-3">
                              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                                {item.subNav.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href="#"
                                    className="flex items-center justify-between py-2 text-gray-600 hover:text-[#4EB956] transition-colors duration-200 group"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    <div className="flex items-center space-x-2">
                                      <div className="text-gray-400 group-hover:text-[#4EB956]">
                                        {subItem.icon}
                                      </div>
                                      <span className="text-xs">
                                        {subItem.name}
                                      </span>
                                    </div>
                                    <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 rounded">
                                      {subItem.count}
                                    </span>
                                  </a>
                                ))}
                              </div>
                              {item.subNav.length > 8 && (
                                <a
                                  href="#"
                                  className="block mt-2 text-xs text-primary hover:text-secondary font-medium hover:underline"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  View all categories →
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={item.path}
                          className="flex items-center space-x-3 py-3 text-gray-700 hover:text-[#4EB956] transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="text-gray-500">{item.icon}</div>
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-gray-100">
                <div className="space-y-3">
                  {actionButtons.map((button, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center justify-center space-x-2 py-3 ${
                        button.outline
                          ? "border border-[#1E2558] text-[#1E2558] hover:bg-[#1E2558] hover:text-white"
                          : `bg-linear-to-r ${button.color} text-white`
                      } rounded text-sm font-medium transition-all duration-200 cursor-pointer`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {button.icon}
                      <span>{button.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        @media (min-width: 1024px) {
          .fixed {
            animation: slideDown 0.2s ease-out;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default RootHeader;
