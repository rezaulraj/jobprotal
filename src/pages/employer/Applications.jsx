// pages/employer/Applications.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaFileAlt,
  FaEye,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaCalendarCheck,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaChartLine,
  FaFilter,
  FaSearch,
  FaDownload,
  FaShare,
  FaComment,
  FaUserCheck,
  FaUserTimes,
  FaUserClock,
  FaVideo,
  FaAward,
  FaChevronDown,
  FaEllipsisV,
  FaTag,
  FaPercent,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

const Applications = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("match");

  // Mock applications data
  const applications = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      position: "Senior React Developer",
      currentCompany: "TechCorp Inc.",
      currentPosition: "Frontend Developer",
      location: "San Francisco, CA",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      experience: 6,
      skills: ["React", "TypeScript", "Node.js", "GraphQL", "Redux", "Jest"],
      education: "M.S. Computer Science - Stanford University",
      matchPercentage: 95,
      appliedDate: "2024-03-15T10:30:00",
      status: "shortlisted",
      stage: "technical",
      interviews: [
        { type: "HR Round", date: "2024-03-18", status: "completed" },
        { type: "Technical", date: "2024-03-20", status: "scheduled" },
      ],
      cv: "sarah_johnson_cv.pdf",
      coverLetter: true,
      portfolio: "sarah.dev",
      expectedSalary: "$120k - $140k",
      noticePeriod: "2 weeks",
      relocation: true,
      remote: true,
      tags: ["Top Performer", "Quick Learner"],
      saved: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "MC",
      position: "UX/UI Designer",
      currentCompany: "DesignHub",
      currentPosition: "Product Designer",
      location: "Remote",
      email: "michael.c@email.com",
      phone: "+1 (555) 234-5678",
      experience: 4,
      skills: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "User Research",
        "Prototyping",
        "Wireframing",
      ],
      education: "B.F.A. Graphic Design - RISD",
      matchPercentage: 88,
      appliedDate: "2024-03-14T14:45:00",
      status: "interview",
      stage: "hr",
      interviews: [
        { type: "Portfolio Review", date: "2024-03-19", status: "scheduled" },
      ],
      cv: "michael_chen_cv.pdf",
      coverLetter: true,
      portfolio: "michael.design",
      expectedSalary: "$90k - $110k",
      noticePeriod: "1 month",
      relocation: false,
      remote: true,
      tags: ["Creative", "Team Player"],
      saved: false,
    },
    {
      id: 3,
      name: "Emily Brown",
      avatar: "EB",
      position: "Product Manager",
      currentCompany: "InnovateLabs",
      currentPosition: "Associate PM",
      location: "New York, NY",
      email: "emily.b@email.com",
      phone: "+1 (555) 345-6789",
      experience: 5,
      skills: [
        "Product Strategy",
        "Agile",
        "User Stories",
        "Data Analysis",
        "Roadmapping",
        "A/B Testing",
      ],
      education: "MBA - Columbia University",
      matchPercentage: 92,
      appliedDate: "2024-03-13T09:15:00",
      status: "matching",
      stage: "review",
      interviews: [],
      cv: "emily_brown_cv.pdf",
      coverLetter: true,
      portfolio: null,
      expectedSalary: "$130k - $150k",
      noticePeriod: "3 weeks",
      relocation: true,
      remote: false,
      tags: ["Leadership", "Data-Driven"],
      saved: true,
    },
    {
      id: 4,
      name: "David Wilson",
      avatar: "DW",
      position: "DevOps Engineer",
      currentCompany: "CloudTech Solutions",
      currentPosition: "DevOps Specialist",
      location: "Austin, TX",
      email: "david.w@email.com",
      phone: "+1 (555) 456-7890",
      experience: 7,
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Python"],
      education: "B.S. Computer Engineering - UT Austin",
      matchPercentage: 78,
      appliedDate: "2024-03-12T16:20:00",
      status: "rejected",
      stage: "rejected",
      interviews: [],
      cv: "david_wilson_cv.pdf",
      coverLetter: false,
      portfolio: null,
      expectedSalary: "$140k - $160k",
      noticePeriod: "2 months",
      relocation: true,
      remote: true,
      tags: ["AWS Certified"],
      saved: false,
    },
    {
      id: 5,
      name: "Lisa Anderson",
      avatar: "LA",
      position: "Marketing Specialist",
      currentCompany: "GrowthMark",
      currentPosition: "Digital Marketing Manager",
      location: "Chicago, IL",
      email: "lisa.a@email.com",
      phone: "+1 (555) 567-8901",
      experience: 3,
      skills: [
        "SEO",
        "Content Strategy",
        "Social Media",
        "Google Analytics",
        "Email Marketing",
        "PPC",
      ],
      education: "B.A. Marketing - Northwestern University",
      matchPercentage: 82,
      appliedDate: "2024-03-11T11:00:00",
      status: "interview",
      stage: "technical",
      interviews: [
        { type: "Skills Assessment", date: "2024-03-21", status: "scheduled" },
      ],
      cv: "lisa_anderson_cv.pdf",
      coverLetter: true,
      portfolio: "lisa.marketing",
      expectedSalary: "$70k - $85k",
      noticePeriod: "1 week",
      relocation: true,
      remote: false,
      tags: ["Creative", "Results-Driven"],
      saved: false,
    },
    {
      id: 6,
      name: "James Taylor",
      avatar: "JT",
      position: "Sales Representative",
      currentCompany: "SalesForce Dynamics",
      currentPosition: "BDR",
      location: "Remote",
      email: "james.t@email.com",
      phone: "+1 (555) 678-9012",
      experience: 2,
      skills: [
        "Cold Calling",
        "CRM",
        "Negotiation",
        "Lead Generation",
        "Salesforce",
        "Account Management",
      ],
      education: "B.B.A. Sales - University of Florida",
      matchPercentage: 96,
      appliedDate: "2024-03-10T13:40:00",
      status: "shortlisted",
      stage: "hr",
      interviews: [
        { type: "HR Screen", date: "2024-03-22", status: "scheduled" },
      ],
      cv: "james_taylor_cv.pdf",
      coverLetter: true,
      portfolio: null,
      expectedSalary: "$60k - $75k + commission",
      noticePeriod: "Immediate",
      relocation: false,
      remote: true,
      tags: ["High Energy", "Top Closer"],
      saved: true,
    },
  ];

  const tabs = [
    {
      id: "all",
      label: "All Applications",
      icon: <FaFileAlt />,
      count: applications.length,
    },
    {
      id: "matching",
      label: "Matching",
      icon: <FaPercent />,
      count: applications.filter(
        (a) => a.matchPercentage >= 80 && a.status === "matching",
      ).length,
    },
    {
      id: "shortlisted",
      label: "Shortlisted",
      icon: <FaStar />,
      count: applications.filter((a) => a.status === "shortlisted").length,
    },
    {
      id: "interview",
      label: "Interview",
      icon: <FaCalendarCheck />,
      count: applications.filter((a) => a.status === "interview").length,
    },
    {
      id: "rejected",
      label: "Rejected",
      icon: <FaTimesCircle />,
      count: applications.filter((a) => a.status === "rejected").length,
    },
    {
      id: "saved",
      label: "Saved",
      icon: <FaHeart />,
      count: applications.filter((a) => a.saved).length,
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "matching":
        return {
          bg: "bg-blue-50",
          text: "text-blue-600",
          icon: <FaPercent size={12} />,
          label: "Matching",
        };
      case "shortlisted":
        return {
          bg: "bg-green-50",
          text: "text-green-600",
          icon: <FaStar size={12} />,
          label: "Shortlisted",
        };
      case "interview":
        return {
          bg: "bg-purple-50",
          text: "text-purple-600",
          icon: <FaCalendarCheck size={12} />,
          label: "Interview",
        };
      case "rejected":
        return {
          bg: "bg-red-50",
          text: "text-red-600",
          icon: <FaTimesCircle size={12} />,
          label: "Rejected",
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          icon: <FaFileAlt size={12} />,
          label: "New",
        };
    }
  };

  const getMatchColor = (percentage) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 70) return "text-yellow-600";
    return "text-orange-600";
  };

  const filteredApplications = applications.filter((app) => {
    // Filter by tab
    if (activeTab === "saved") return app.saved;
    if (activeTab !== "all" && app.status !== activeTab) return false;

    // Search
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        app.name.toLowerCase().includes(search) ||
        app.position.toLowerCase().includes(search) ||
        app.skills.some((s) => s.toLowerCase().includes(search))
      );
    }
    return true;
  });

  const sortedApplications = [...filteredApplications].sort((a, b) => {
    if (sortBy === "match") return b.matchPercentage - a.matchPercentage;
    if (sortBy === "recent")
      return new Date(b.appliedDate) - new Date(a.appliedDate);
    if (sortBy === "experience") return b.experience - a.experience;
    return 0;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Applications
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Review and manage candidate applications
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all">
            <FaDownload className="mr-2" />
            Export
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-linear-to-r from-[#1E2558] to-[#4EB956] text-white rounded-lg hover:shadow-lg transition-all">
            <FaFilter className="mr-2" />
            Advanced Filters
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Match</p>
              <p className="text-2xl font-bold text-gray-800">
                {Math.round(
                  applications.reduce(
                    (acc, app) => acc + app.matchPercentage,
                    0,
                  ) / applications.length,
                )}
                %
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <FaChartLine />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Interviews Scheduled</p>
              <p className="text-2xl font-bold text-gray-800">
                {applications.filter((a) => a.interviews.length > 0).length}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <FaCalendarCheck />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Response Rate</p>
              <p className="text-2xl font-bold text-gray-800">68%</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
              <FaUserCheck />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Response Time</p>
              <p className="text-2xl font-bold text-gray-800">2.4 days</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
              <FaClock />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Applications List - Left Column */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex overflow-x-auto pb-2 space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-linear-to-r from-[#1E2558] to-[#4EB956] text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  <span
                    className={`text-xs ${
                      activeTab === tab.id ? "text-white/80" : "text-gray-400"
                    }`}
                  >
                    ({tab.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-[#4EB956] outline-none"
              />
            </div>
            <div className="flex gap-2 mt-3">
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#4EB956] outline-none"
              >
                <option value="all">All Jobs</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#4EB956] outline-none"
              >
                <option value="match">Match %</option>
                <option value="recent">Most Recent</option>
                <option value="experience">Experience</option>
              </select>
            </div>
          </div>

          {/* Candidates List */}
          <div className="overflow-y-auto max-h-[600px]">
            {sortedApplications.map((app) => (
              <div
                key={app.id}
                onClick={() => setSelectedApplication(app)}
                className={`p-4 border-b border-gray-50 cursor-pointer transition-all ${
                  selectedApplication?.id === app.id
                    ? "bg-gradient-to-r from-[#1E2558]/5 to-[#4EB956]/5 border-l-4 border-l-[#4EB956]"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#1E2558] to-[#4EB956] flex items-center justify-center text-white font-bold flex-shrink-0">
                    {app.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800 truncate">
                        {app.name}
                      </h3>
                      {app.saved && (
                        <FaHeart className="text-red-500 text-xs" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {app.position}
                    </p>
                    <div className="flex items-center mt-1 space-x-2">
                      <span
                        className={`text-xs font-medium ${getMatchColor(app.matchPercentage)}`}
                      >
                        {app.matchPercentage}% match
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">
                        {app.experience} yrs
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getStatusBadge(app.status).bg} ${getStatusBadge(app.status).text}`}
                      >
                        {getStatusBadge(app.status).label}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(app.appliedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Details - Right Column */}
        <div className="lg:col-span-2">
          {selectedApplication ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Header Actions */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-linear-to-r from-[#1E2558] to-[#4EB956] flex items-center justify-center text-white text-xl font-bold">
                      {selectedApplication.avatar}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {selectedApplication.name}
                      </h2>
                      <p className="text-gray-600">
                        {selectedApplication.currentPosition} at{" "}
                        {selectedApplication.currentCompany}
                      </p>
                      <div className="flex items-center mt-1 space-x-3">
                        <span className="flex items-center text-sm text-gray-500">
                          <FaMapMarkerAlt className="mr-1" size={12} />
                          {selectedApplication.location}
                        </span>
                        <span className="flex items-center text-sm text-gray-500">
                          <FaBriefcase className="mr-1" size={12} />
                          {selectedApplication.experience} years exp.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                      <FaRegHeart
                        className={
                          selectedApplication.saved
                            ? "text-red-500"
                            : "text-gray-400"
                        }
                      />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                      <FaShare className="text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                      <FaEllipsisV className="text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center">
                    <FaCheckCircle className="mr-2" size={14} />
                    Shortlist
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all flex items-center">
                    <FaCalendarCheck className="mr-2" size={14} />
                    Schedule Interview
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center">
                    <FaVideo className="mr-2" size={14} />
                    Video Call
                  </button>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all flex items-center">
                    <FaEnvelope className="mr-2" size={14} />
                    Send Email
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all flex items-center">
                    <FaTimesCircle className="mr-2" size={14} />
                    Reject
                  </button>
                </div>
              </div>

              {/* Match Score Card */}
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-[#1E2558]/5 to-[#4EB956]/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Match Score</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-800">
                        {selectedApplication.matchPercentage}%
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        Overall match
                      </span>
                    </div>
                  </div>
                  <div className="w-20 h-20 relative">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 36}`}
                        strokeDashoffset={`${2 * Math.PI * 36 * (1 - selectedApplication.matchPercentage / 100)}`}
                        className="text-[#4EB956]"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-800">
                      {selectedApplication.matchPercentage}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="p-6 space-y-6">
                {/* Contact Info */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <FaEnvelope className="text-[#4EB956]" />
                      <span className="text-sm text-gray-600">
                        {selectedApplication.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <FaPhone className="text-[#4EB956]" />
                      <span className="text-sm text-gray-600">
                        {selectedApplication.phone}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedApplication.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience & Education */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Experience
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <FaBriefcase className="text-gray-400 mt-1" />
                        <div>
                          <p className="font-medium text-gray-800">
                            {selectedApplication.currentPosition}
                          </p>
                          <p className="text-sm text-gray-600">
                            {selectedApplication.currentCompany}
                          </p>
                          <p className="text-xs text-gray-500">
                            {selectedApplication.experience} years total
                            experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Education
                    </h3>
                    <div className="flex items-start space-x-3">
                      <FaGraduationCap className="text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">
                          {selectedApplication.education}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Preferences */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Job Preferences
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Expected Salary</p>
                      <p className="font-medium text-gray-800">
                        {selectedApplication.expectedSalary}
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Notice Period</p>
                      <p className="font-medium text-gray-800">
                        {selectedApplication.noticePeriod}
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Remote</p>
                      <p className="font-medium text-gray-800">
                        {selectedApplication.remote ? "Yes" : "No"}
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Relocation</p>
                      <p className="font-medium text-gray-800">
                        {selectedApplication.relocation ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interviews */}
                {selectedApplication.interviews.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Interview Schedule
                    </h3>
                    <div className="space-y-2">
                      {selectedApplication.interviews.map(
                        (interview, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <p className="font-medium text-gray-800">
                                {interview.type}
                              </p>
                              <p className="text-sm text-gray-600">
                                {new Date(interview.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  },
                                )}
                              </p>
                            </div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                interview.status === "completed"
                                  ? "bg-green-100 text-green-600"
                                  : interview.status === "scheduled"
                                    ? "bg-blue-100 text-blue-600"
                                    : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {interview.status}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {/* Documents */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Documents
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                      <FaFileAlt className="text-[#4EB956]" />
                      <span className="text-sm">CV.pdf</span>
                    </button>
                    {selectedApplication.coverLetter && (
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                        <FaFileAlt className="text-[#4EB956]" />
                        <span className="text-sm">Cover Letter</span>
                      </button>
                    )}
                    {selectedApplication.portfolio && (
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                        <FaEye className="text-[#4EB956]" />
                        <span className="text-sm">Portfolio</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedApplication.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center space-x-1 px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                      >
                        <FaTag size={10} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notes Section */}
              <div className="p-6 border-t border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-3">Add Note</h3>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-linear-to-r from-[#1E2558] to-[#4EB956] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    HR
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="Write a note about this candidate..."
                      rows="3"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#4EB956] outline-none resize-none"
                    />
                    <div className="flex justify-end mt-2">
                      <button className="px-4 py-2 bg-[#1E2558] text-white rounded-lg hover:bg-[#2a3470] transition-all">
                        Add Note
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FaUser className="text-gray-400 text-3xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Select an Application
              </h3>
              <p className="text-gray-500">
                Choose a candidate from the list to view their details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Applications;
