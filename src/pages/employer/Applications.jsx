// pages/employer/Applications.jsx
import React, { useState } from "react";
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
  FaChartLine,
  FaFilter,
  FaSearch,
  FaDownload,
  FaUserCheck,
  FaUserTimes,
  FaEllipsisV,
  FaTag,
  FaPercent,
  FaHeart,
  FaRegHeart,
  FaChevronDown,
  FaInfoCircle,
  FaBuilding,
  FaArrowLeft,
} from "react-icons/fa";

const Applications = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("match");
  const [selectedRows, setSelectedRows] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const currentJob = {
    id: "JOB-001",
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    postedDate: "2024-03-01",
    totalApplicants: 156,
    newApplicants: 12,
    inReview: 45,
    shortlisted: 18,
    interviewed: 8,
    rejected: 67,
  };

  const applications = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      jobTitle: "Senior React Developer",
      currentCompany: "TechCorp Inc.",
      currentPosition: "Frontend Developer",
      location: "San Francisco, CA",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      experience: 6,
      skills: [
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Redux",
        "Jest",
        "HTML5",
        "CSS3",
        "Webpack",
      ],
      education: "M.S. Computer Science - Stanford University",
      matchPercentage: 95,
      appliedDate: "2024-03-15T10:30:00",
      status: "shortlisted",
      cv: "sarah_johnson_cv.pdf",
      saved: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "MC",
      jobTitle: "Senior React Developer",
      currentCompany: "DesignHub",
      currentPosition: "UI Developer",
      location: "Remote",
      email: "michael.c@email.com",
      phone: "+1 (555) 234-5678",
      experience: 4,
      skills: ["React", "JavaScript", "CSS", "HTML", "Figma", "UI Design"],
      education: "B.S. Computer Science - UC Berkeley",
      matchPercentage: 88,
      appliedDate: "2024-03-14T14:45:00",
      status: "interview",
      cv: "michael_chen_cv.pdf",
      saved: false,
    },
    {
      id: 3,
      name: "Emily Brown",
      avatar: "EB",
      jobTitle: "Senior React Developer",
      currentCompany: "InnovateLabs",
      currentPosition: "React Developer",
      location: "New York, NY",
      email: "emily.b@email.com",
      phone: "+1 (555) 345-6789",
      experience: 5,
      skills: ["React", "Redux", "Node.js", "TypeScript", "GraphQL", "Jest"],
      education: "M.S. Computer Science - Columbia University",
      matchPercentage: 92,
      appliedDate: "2024-03-13T09:15:00",
      status: "matching",
      cv: "emily_brown_cv.pdf",
      saved: true,
    },
    {
      id: 4,
      name: "David Wilson",
      avatar: "DW",
      jobTitle: "Senior React Developer",
      currentCompany: "CloudTech Solutions",
      currentPosition: "Frontend Engineer",
      location: "Austin, TX",
      email: "david.w@email.com",
      phone: "+1 (555) 456-7890",
      experience: 7,
      skills: [
        "React",
        "Angular",
        "Vue",
        "JavaScript",
        "TypeScript",
        "Webpack",
      ],
      education: "B.S. Computer Engineering - UT Austin",
      matchPercentage: 78,
      appliedDate: "2024-03-12T16:20:00",
      status: "rejected",
      cv: "david_wilson_cv.pdf",
      saved: false,
    },
    {
      id: 5,
      name: "Lisa Anderson",
      avatar: "LA",
      jobTitle: "Senior React Developer",
      currentCompany: "GrowthMark",
      currentPosition: "Frontend Developer",
      location: "Chicago, IL",
      email: "lisa.a@email.com",
      phone: "+1 (555) 567-8901",
      experience: 3,
      skills: ["React", "JavaScript", "CSS", "HTML", "Redux", "Jest"],
      education: "B.A. Computer Science - Northwestern University",
      matchPercentage: 82,
      appliedDate: "2024-03-11T11:00:00",
      status: "interview",
      cv: "lisa_anderson_cv.pdf",
      saved: false,
    },
    {
      id: 6,
      name: "James Taylor",
      avatar: "JT",
      jobTitle: "Senior React Developer",
      currentCompany: "SalesForce Dynamics",
      currentPosition: "JavaScript Developer",
      location: "Remote",
      email: "james.t@email.com",
      phone: "+1 (555) 678-9012",
      experience: 2,
      skills: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
      education: "B.S. Computer Science - University of Florida",
      matchPercentage: 96,
      appliedDate: "2024-03-10T13:40:00",
      status: "shortlisted",
      cv: "james_taylor_cv.pdf",
      saved: true,
    },
  ];

  const tabs = [
    {
      id: "all",
      label: "All Candidates",
      icon: <FaUser />,
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
    if (percentage >= 90) return "bg-green-100 text-green-700 border-green-200";
    if (percentage >= 70)
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    return "bg-orange-100 text-orange-700 border-orange-200";
  };

  const filteredApplications = applications.filter((app) => {
    if (activeTab === "saved") return app.saved;
    if (activeTab !== "all" && app.status !== activeTab) return false;

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        app.name.toLowerCase().includes(search) ||
        app.currentCompany.toLowerCase().includes(search) ||
        app.currentPosition.toLowerCase().includes(search) ||
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
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const handleSelectAll = () => {
    if (selectedRows.length === sortedApplications.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(sortedApplications.map((app) => app.id));
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleBulkAction = (action) => {
    console.log(`Bulk ${action} for rows:`, selectedRows);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center text-sm">
        <button className="flex items-center text-gray-500 hover:text-[#4EB956] transition-all">
          <FaArrowLeft className="mr-2" size={12} />
          Back to Jobs
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#1E2558] to-[#4EB956] flex items-center justify-center text-white text-2xl font-bold">
              {currentJob.title.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {currentJob.title}
                </h1>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {currentJob.totalApplicants} Applicants
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <span className="flex items-center text-sm text-gray-600">
                  <FaBuilding className="mr-2 text-gray-400" />
                  {currentJob.department}
                </span>
                <span className="flex items-center text-sm text-gray-600">
                  <FaMapMarkerAlt className="mr-2 text-gray-400" />
                  {currentJob.location}
                </span>
                <span className="flex items-center text-sm text-gray-600">
                  <FaBriefcase className="mr-2 text-gray-400" />
                  {currentJob.type}
                </span>
                <span className="flex items-center text-sm text-gray-600">
                  <FaClock className="mr-2 text-gray-400" />
                  Posted:{" "}
                  {new Date(currentJob.postedDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all">
              View Job Details
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">
              {currentJob.totalApplicants}
            </p>
            <p className="text-xs text-gray-500">Total</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {currentJob.newApplicants}
            </p>
            <p className="text-xs text-gray-500">New</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">
              {currentJob.inReview}
            </p>
            <p className="text-xs text-gray-500">In Review</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">
              {currentJob.shortlisted}
            </p>
            <p className="text-xs text-gray-500">Shortlisted</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">
              {currentJob.interviewed}
            </p>
            <p className="text-xs text-gray-500">Interviewed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">
              {currentJob.rejected}
            </p>
            <p className="text-xs text-gray-500">Rejected</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-gray-600 text-sm">
            Review and manage candidates who applied for this position
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all">
            <FaDownload className="mr-2" />
            Export List
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1E2558] to-[#4EB956] text-white rounded-lg hover:shadow-lg transition-all">
            <FaFilter className="mr-2" />
            Advanced Filters
          </button>
        </div>
      </div>

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
              <p className="text-sm text-gray-500">Total Applications</p>
              <p className="text-2xl font-bold text-gray-800">
                {applications.length}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <FaUser />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Shortlisted</p>
              <p className="text-2xl font-bold text-gray-800">
                {applications.filter((a) => a.status === "shortlisted").length}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
              <FaUserCheck />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Rejected</p>
              <p className="text-2xl font-bold text-gray-800">
                {applications.filter((a) => a.status === "rejected").length}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
              <FaUserTimes />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1 flex flex-wrap gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm transition-all ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[#1E2558] to-[#4EB956] text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
            <span
              className={`text-xs ${activeTab === tab.id ? "text-white/80" : "text-gray-400"}`}
            >
              ({tab.count})
            </span>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search candidates by name, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-[#4EB956] outline-none"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:border-[#4EB956] outline-none bg-white"
            >
              <option value="all">All Experience Levels</option>
              <option value="entry">Entry Level (0-2 yrs)</option>
              <option value="mid">Mid Level (3-5 yrs)</option>
              <option value="senior">Senior Level (6+ yrs)</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:border-[#4EB956] outline-none bg-white"
            >
              <option value="match">Sort by Match %</option>
              <option value="recent">Most Recent</option>
              <option value="experience">Experience</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {selectedRows.length > 0 && (
        <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
          <span className="text-sm text-blue-700">
            <strong>{selectedRows.length}</strong> candidates selected
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => handleBulkAction("shortlist")}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
            >
              Shortlist Selected
            </button>
            <button
              onClick={() => handleBulkAction("reject")}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
            >
              Reject Selected
            </button>
            <button
              onClick={() => setSelectedRows([])}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Applications Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 w-10">
                  <input
                    type="checkbox"
                    checked={
                      selectedRows.length === sortedApplications.length &&
                      sortedApplications.length > 0
                    }
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-[#4EB956] focus:ring-[#4EB956]"
                  />
                </th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidate
                </th>
                {/* <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th> */}
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Position
                </th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Experience
                </th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Skills
                </th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Match
                </th>
                {/* <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th> */}
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedApplications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-all"
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(app.id)}
                      onChange={() => handleSelectRow(app.id)}
                      className="rounded border-gray-300 text-[#4EB956] focus:ring-[#4EB956]"
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      {/* <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1E2558] to-[#4EB956] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {app.avatar}
                      </div> */}
                      <div>
                        <p className="font-medium text-gray-800">{app.name}</p>
                        <div className="flex items-center mt-1">
                          <FaMapMarkerAlt
                            className="text-gray-400 mr-1"
                            size={10}
                          />
                          <span className="text-xs text-gray-500">
                            {app.location}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          Applied:{" "}
                          {new Date(app.appliedDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </td>
                  {/* <td className="p-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-xs text-gray-600">
                        <FaEnvelope className="mr-2 text-gray-400" size={10} />
                        <a
                          href={`mailto:${app.email}`}
                          className="hover:text-[#4EB956] truncate max-w-[150px]"
                        >
                          {app.email}
                        </a>
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <FaPhone className="mr-2 text-gray-400" size={10} />
                        <a
                          href={`tel:${app.phone}`}
                          className="hover:text-[#4EB956]"
                        >
                          {app.phone}
                        </a>
                      </div>
                    </div>
                  </td> */}
                  <td className="p-4">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">
                        {app.currentPosition}
                      </p>
                      <p className="text-xs text-gray-500">
                        {app.currentCompany}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-gray-800">
                      {app.experience} years
                    </span>
                  </td>
                  <td className="p-4 relative">
                    <div className="flex items-center">
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {app.skills.slice(0, 1).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {app.skills.length > 1 && (
                          <span
                            className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs cursor-help relative"
                            onMouseEnter={() => setHoveredSkill(app.id)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            +{app.skills.length - 1}
                            {hoveredSkill === app.id && (
                              <div className="absolute z-10 bottom-full left-0 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg">
                                <div className="font-medium mb-1">
                                  All Skills:
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {app.skills.map((s, i) => (
                                    <span
                                      key={i}
                                      className="px-1.5 py-0.5 bg-gray-700 rounded text-[10px]"
                                    >
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getMatchColor(app.matchPercentage)}`}
                    >
                      {app.matchPercentage}%
                    </span>
                  </td>
                  {/* <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getStatusBadge(app.status).bg} ${getStatusBadge(app.status).text}`}
                    >
                      {getStatusBadge(app.status).icon}
                      <span className="ml-1">
                        {getStatusBadge(app.status).label}
                      </span>
                    </span>
                  </td> */}
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-all text-[#4EB956]"
                        title="View Profile"
                      >
                        <FaEye size={16} />
                      </button>
                      <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-all text-blue-600"
                        title="Download CV"
                      >
                        <FaDownload size={16} />
                      </button>
                      <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-all text-green-600"
                        title="Shortlist"
                      >
                        <FaStar size={16} />
                      </button>
                      <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-all text-red-600"
                        title="Reject"
                      >
                        <FaTimesCircle size={16} />
                      </button>
                      <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-all text-gray-400"
                        title="More"
                      >
                        <FaEllipsisV size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {sortedApplications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaUser className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              No candidates found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Pagination */}
        {sortedApplications.length > 0 && (
          <div className="flex items-center justify-between p-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">{sortedApplications.length}</span>{" "}
              of <span className="font-medium">{applications.length}</span>{" "}
              candidates
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-[#1E2558] text-white rounded-lg text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions Info */}
      <div className="bg-gradient-to-r from-[#1E2558]/5 to-[#4EB956]/5 rounded-xl p-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <FaInfoCircle className="text-[#4EB956]" size={20} />
            <div>
              <h3 className="font-medium text-gray-800">
                Quick Tips for {currentJob.title}
              </h3>
              <p className="text-sm text-gray-600">
                Select multiple candidates to perform bulk actions. Hover over
                skills to see full list.
              </p>
            </div>
          </div>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            View Job Description
          </button>
        </div>
      </div>
    </div>
  );
};

export default Applications;
