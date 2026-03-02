import React, { useState, useEffect, useRef } from "react";
import {
  FaBell,
  FaChevronDown,
  FaSignOutAlt,
  FaUserCircle,
  FaBuilding,
  FaChartBar,
  FaCog,
  FaKey,
  FaShareAlt,
  FaUserTie,
  FaBars,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const EmployerHeader = ({ sidebarOpen, setSidebarOpen, sidebarCollapsed }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@techcorp.com",
    company: "Tech Corp Inc.",
    avatar: null,
    role: "HR Manager",
    plan: "Enterprise",
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notifications = [
    {
      id: 1,
      title: "New Application",
      message: "Sarah Johnson applied for Senior Developer",
      time: "5 min ago",
      read: false,
      avatar: "SJ",
    },
    {
      id: 2,
      title: "Profile View",
      message: "Your profile was viewed by 3 candidates",
      time: "1 hour ago",
      read: false,
      icon: "👁️",
    },
    {
      id: 3,
      title: "Job Expiring",
      message: "UX Designer position expires in 3 days",
      time: "3 hours ago",
      read: true,
      icon: "⚠️",
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header
      className={`bg-white sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="flex items-center justify-between h-20 px-4 md:px-6 relative">
        {/* Left Section - Menu Toggle (only visible on mobile) */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-[#4EB956] transition-colors"
          >
            <FaBars className="text-xl" />
          </button>
        </div>

        {/* Left spacer for desktop (to maintain center alignment) */}
        <div className="hidden lg:block w-10"></div>

        {/* Center Section - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/employer/dashboard"
            className="flex items-center space-x-2"
          >
            <img src={logo} alt="Logo" className="h-8 w-auto md:h-10" />
            {/* <span className="hidden sm:inline text-lg md:text-xl font-bold bg-linear-to-r from-[#1E2558] to-[#4EB956] bg-clip-text text-transparent">
              Employer
            </span> */}
          </Link>
        </div>

        {/* Right Section - Actions & Profile */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Quick Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/employer/post-job"
              className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-[#1E2558] to-[#2d377a] text-white rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <span>Post a Job</span>
            </Link>
          </div>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => {
                setIsNotificationOpen(!isNotificationOpen);
                setIsUserDropdownOpen(false);
              }}
              className="relative p-2 text-gray-600 hover:text-[#4EB956] transition-colors rounded-full hover:bg-gray-50"
            >
              <FaBell className="text-lg md:text-xl" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {isNotificationOpen && (
              <div className="absolute right-0 mt-3 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
                <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">
                      Notifications
                    </h3>
                    {unreadCount > 0 && (
                      <span className="text-xs bg-[#4EB956] text-white px-2 py-1 rounded-full">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${
                        !notification.read ? "bg-blue-50/30" : ""
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {notification.avatar ? (
                          <div className="w-8 h-8 rounded-full bg-linear-to-r from-[#1E2558] to-[#4EB956] flex items-center justify-center text-white text-xs font-bold">
                            {notification.avatar}
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            {notification.icon}
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-800">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-600 mt-0.5">
                            {notification.message}
                          </p>
                          <span className="text-[10px] text-gray-400 mt-1 block">
                            {notification.time}
                          </span>
                        </div>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-[#4EB956] rounded-full"></span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 border-t border-gray-100">
                  <Link
                    to="/employer/notifications"
                    className="block text-center text-xs text-[#4EB956] hover:text-[#1E2558] font-medium"
                    onClick={() => setIsNotificationOpen(false)}
                  >
                    View All Notifications
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setIsUserDropdownOpen(!isUserDropdownOpen);
                setIsNotificationOpen(false);
              }}
              className="flex items-center space-x-2 md:space-x-3 cursor-pointer group"
            >
              {/* User Avatar */}
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-transparent group-hover:border-[#4EB956] transition-all"
                />
              ) : (
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-linear-to-r from-[#1E2558] to-[#4EB956] flex items-center justify-center text-white font-semibold text-sm md:text-base group-hover:scale-105 transition-transform">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}

              {/* User Info - Hidden on mobile */}
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#1E2558]">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 flex items-center">
                  <FaBuilding className="mr-1 text-[10px]" />
                  {user.company}
                </p>
              </div>

              <FaChevronDown
                className={`text-xs text-gray-400 transition-all duration-200 ${
                  isUserDropdownOpen ? "rotate-180" : ""
                } group-hover:text-[#4EB956]`}
              />
            </button>

            {/* User Dropdown */}
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
                <div className="absolute -top-2 right-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                {/* User Profile Card */}
                <div className="p-4 bg-linear-to-r from-[#1E2558]/5 to-[#4EB956]/5 rounded-t-xl">
                  <div className="flex items-center space-x-3">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#1E2558] to-[#4EB956] flex items-center justify-center text-white font-bold text-lg">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-600">{user.email}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-[10px] bg-[#4EB956]/10 text-[#4EB956] px-2 py-0.5 rounded-full">
                          {user.role}
                        </span>
                        <span className="text-[10px] bg-[#1E2558]/10 text-[#1E2558] px-2 py-0.5 rounded-full">
                          {user.plan}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2 p-3 border-b border-gray-100">
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#1E2558]">5</p>
                    <p className="text-[10px] text-gray-500">Active Jobs</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#4EB956]">12</p>
                    <p className="text-[10px] text-gray-500">Applications</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#1E2558]">3</p>
                    <p className="text-[10px] text-gray-500">Interviews</p>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  <MenuItem
                    to="/employer/dashboard"
                    icon={<MdDashboard />}
                    label="Dashboard"
                    description="Overview & analytics"
                    onClick={() => setIsUserDropdownOpen(false)}
                  />
                  <MenuItem
                    to="/employer/profile"
                    icon={<FaUserCircle />}
                    label="My Profile"
                    description="Manage your personal info"
                    onClick={() => setIsUserDropdownOpen(false)}
                  />
                  <MenuItem
                    to="/employer/company"
                    icon={<FaBuilding />}
                    label="Company Profile"
                    description="Update company details"
                    onClick={() => setIsUserDropdownOpen(false)}
                  />
                  <MenuItem
                    to="/employer/share-access"
                    icon={<FaShareAlt />}
                    label="Share Access"
                    description="Manage team permissions"
                    badge="New"
                    onClick={() => setIsUserDropdownOpen(false)}
                  />
                  <MenuItem
                    to="/employer/change-password"
                    icon={<FaKey />}
                    label="Change Password"
                    description="Update your password"
                    onClick={() => setIsUserDropdownOpen(false)}
                  />
                </div>

                {/* Account Overview */}
                <div className="p-2 border-t border-gray-100">
                  <MenuItem
                    to="/employer/account-overview"
                    icon={<FaChartBar />}
                    label="Account Overview"
                    description="Billing & subscription"
                    onClick={() => setIsUserDropdownOpen(false)}
                  />
                </div>

                {/* Logout */}
                <div className="p-2 border-t border-gray-100">
                  <button
                    onClick={() => {
                      // Handle logout
                      setIsUserDropdownOpen(false);
                    }}
                    className="flex items-center space-x-3 p-3 w-full hover:bg-red-50 rounded-lg transition-all group"
                  >
                    <FaSignOutAlt className="text-gray-400 group-hover:text-red-500" />
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-red-500">
                        Logout
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Sign out of your account
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Menu Item Component
const MenuItem = ({ to, icon, label, description, badge, onClick }) => (
  <Link
    to={to}
    className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-all group"
    onClick={onClick}
  >
    <div className="text-gray-400 group-hover:text-[#4EB956] transition-colors text-lg">
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium text-gray-700 group-hover:text-[#1E2558]">
          {label}
        </p>
        {badge && (
          <span className="text-[10px] bg-[#4EB956] text-white px-1.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <p className="text-[10px] text-gray-400">{description}</p>
    </div>
  </Link>
);

export default EmployerHeader;
