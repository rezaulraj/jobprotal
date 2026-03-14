// pages/employer/PostedJobs.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaEye,
  FaFileAlt,
  FaEdit,
  FaTrash,
  FaCopy,
  FaPause,
  FaPlay,
  FaChartLine,
  FaSearch,
  FaCalendarAlt,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
  FaShare,
  FaEllipsisV,
} from "react-icons/fa";

const PostedJobs = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const postedJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      postedDate: "2024-03-15",
      expiresDate: "2024-04-15",
      applications: 24,
      views: 345,
      status: "published",
      salary: "$120k - $150k",
      experience: "5+ years",
      featured: true,
      urgent: true,
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      postedDate: "2024-03-14",
      expiresDate: "2024-04-14",
      applications: 18,
      views: 256,
      status: "published",
      salary: "$90k - $120k",
      experience: "3+ years",
      featured: false,
      urgent: false,
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      postedDate: "2024-03-13",
      expiresDate: "2024-04-13",
      applications: 12,
      views: 189,
      status: "published",
      salary: "$130k - $160k",
      experience: "7+ years",
      featured: true,
      urgent: false,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      postedDate: "2024-03-12",
      expiresDate: "2024-03-26",
      applications: 8,
      views: 98,
      status: "pending",
      salary: "$110k - $140k",
      experience: "4+ years",
      featured: false,
      urgent: false,
      pendingReason: "Under review by admin",
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Chicago, IL",
      type: "Part-time",
      postedDate: "2024-03-10",
      expiresDate: "2024-03-24",
      applications: 5,
      views: 67,
      status: "draft",
      salary: "$50k - $65k",
      experience: "2+ years",
      featured: false,
      urgent: false,
    },
    {
      id: 6,
      title: "Sales Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      postedDate: "2024-03-08",
      expiresDate: "2024-03-22",
      applications: 3,
      views: 45,
      status: "expired",
      salary: "$60k - $80k + commission",
      experience: "2+ years",
      featured: false,
      urgent: false,
    },
    {
      id: 7,
      title: "Customer Support Lead",
      department: "Support",
      location: "Austin, TX",
      type: "Full-time",
      postedDate: "2024-03-05",
      expiresDate: "2024-03-19",
      applications: 9,
      views: 112,
      status: "closed",
      salary: "$55k - $70k",
      experience: "3+ years",
      featured: false,
      urgent: false,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return {
          bg: "bg-green-50",
          text: "text-green-600",
          icon: <FaCheckCircle className="mr-1" size={12} />,
          label: "Published",
        };
      case "pending":
        return {
          bg: "bg-yellow-50",
          text: "text-yellow-600",
          icon: <FaHourglassHalf className="mr-1" size={12} />,
          label: "Pending Approval",
        };
      case "draft":
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          icon: <FaFileAlt className="mr-1" size={12} />,
          label: "Draft",
        };
      case "expired":
        return {
          bg: "bg-orange-50",
          text: "text-orange-600",
          icon: <FaClock className="mr-1" size={12} />,
          label: "Expired",
        };
      case "closed":
        return {
          bg: "bg-red-50",
          text: "text-red-600",
          icon: <FaTimesCircle className="mr-1" size={12} />,
          label: "Closed",
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          icon: null,
          label: status,
        };
    }
  };

  const filterOptions = [
    { value: "all", label: "All Jobs", count: postedJobs.length },
    {
      value: "published",
      label: "Published",
      count: postedJobs.filter((j) => j.status === "published").length,
    },
    {
      value: "pending",
      label: "Pending",
      count: postedJobs.filter((j) => j.status === "pending").length,
    },
    {
      value: "draft",
      label: "Drafts",
      count: postedJobs.filter((j) => j.status === "draft").length,
    },
    {
      value: "expired",
      label: "Expired",
      count: postedJobs.filter((j) => j.status === "expired").length,
    },
    {
      value: "closed",
      label: "Closed",
      count: postedJobs.filter((j) => j.status === "closed").length,
    },
  ];

  const filteredJobs = postedJobs.filter((job) => {
    // Filter by status
    if (filter !== "all" && job.status !== filter) return false;

    // Search by title, department, location
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        job.title.toLowerCase().includes(search) ||
        job.department.toLowerCase().includes(search) ||
        job.location.toLowerCase().includes(search)
      );
    }
    return true;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.postedDate) - new Date(a.postedDate);
      case "oldest":
        return new Date(a.postedDate) - new Date(b.postedDate);
      case "applications":
        return b.applications - a.applications;
      case "views":
        return b.views - a.views;
      default:
        return 0;
    }
  });

  const totalViews = postedJobs.reduce((sum, job) => sum + job.views, 0);
  const totalApplications = postedJobs.reduce(
    (sum, job) => sum + job.applications,
    0,
  );
  const activeJobs = postedJobs.filter((j) => j.status === "published").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Posted Jobs
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Manage and track all your job postings
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Link
            to="/employer/post-job"
            className="inline-flex items-center px-4 py-2 bg-linear-to-r from-[#1E2558] to-[#4EB956] text-white rounded-lg hover:shadow-lg transition-all"
          >
            <span className="mr-2">+</span>
            Post New Job
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Jobs</p>
              <p className="text-2xl font-bold text-gray-800">{activeJobs}</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
              <FaBriefcase />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Applications</p>
              <p className="text-2xl font-bold text-gray-800">
                {totalApplications}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <FaUsers />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Views</p>
              <p className="text-2xl font-bold text-gray-800">{totalViews}</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <FaEye />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-800">
                {((totalApplications / totalViews) * 100).toFixed(1)}%
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
              <FaChartLine />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === option.value
                    ? "bg-linear-to-r from-[#1E2558] to-[#4EB956] text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {option.label}
                <span
                  className={`ml-2 text-xs ${
                    filter === option.value ? "text-white/80" : "text-gray-400"
                  }`}
                >
                  ({option.count})
                </span>
              </button>
            ))}
          </div>

          <div className="flex-1 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs by title, department, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-[#4EB956] outline-none"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:border-[#4EB956] outline-none bg-white"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="applications">Most Applications</option>
              <option value="views">Most Views</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Details
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applications
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Posted / Expires
                </th>
                <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedJobs.map((job) => {
                const status = getStatusColor(job.status);
                return (
                  <tr
                    key={job.id}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-all"
                  >
                    <td className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-linear-to-r from-[#1E2558] to-[#4EB956] flex items-center justify-center text-white flex-shrink-0">
                          {job.title.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-gray-800">
                              {job.title}
                            </h3>
                            {job.featured && (
                              <span className="px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full text-[10px] font-medium">
                                Featured
                              </span>
                            )}
                            {job.urgent && (
                              <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[10px] font-medium">
                                Urgent
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                            <span className="flex items-center">
                              <FaBriefcase className="mr-1" size={10} />
                              {job.department}
                            </span>
                            <span className="flex items-center">
                              <FaMapMarkerAlt className="mr-1" size={10} />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <FaClock className="mr-1" size={10} />
                              {job.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                            <span>Salary: {job.salary}</span>
                            <span>•</span>
                            <span>Exp: {job.experience}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="relative group">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${status.bg} ${status.text}`}
                        >
                          {status.icon}
                          {status.label}
                        </span>
                        {job.status === "pending" && (
                          <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg">
                            {job.pendingReason}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <span className="font-medium text-gray-800">
                          {job.applications}
                        </span>
                        <Link
                          to={`/employer/applications/${job.id}`}
                          className="block text-xs text-[#4EB956] hover:text-[#1E2558] mt-1"
                        >
                          View All
                        </Link>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-gray-800">
                        {job.views}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <div className="flex items-center text-gray-600">
                          <FaCalendarAlt
                            className="mr-1 text-gray-400"
                            size={10}
                          />
                          {new Date(job.postedDate).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric" },
                          )}
                        </div>
                        <div className="flex items-center text-gray-400 text-xs mt-1">
                          <FaClock className="mr-1" size={8} />
                          Expires:{" "}
                          {new Date(job.expiresDate).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric" },
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all text-gray-600 hover:text-[#4EB956]">
                          <FaEye size={14} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all text-gray-600 hover:text-[#1E2558]">
                          <FaEdit size={14} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all text-gray-600 hover:text-blue-600">
                          <FaCopy size={14} />
                        </button>
                        <div className="relative group">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                            <FaEllipsisV size={14} className="text-gray-400" />
                          </button>
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 hidden group-hover:block z-10">
                            <div className="py-1">
                              {job.status === "published" ? (
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                                  <FaPause
                                    className="mr-2 text-orange-500"
                                    size={12}
                                  />
                                  Pause Job
                                </button>
                              ) : job.status === "draft" ? (
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                                  <FaPlay
                                    className="mr-2 text-green-500"
                                    size={12}
                                  />
                                  Publish Now
                                </button>
                              ) : null}
                              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                                <FaShare
                                  className="mr-2 text-blue-500"
                                  size={12}
                                />
                                Share Job
                              </button>
                              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center">
                                <FaTrash className="mr-2" size={12} />
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {sortedJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaBriefcase className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your filters or post a new job
            </p>
            <Link
              to="/employer/post-job"
              className="inline-flex items-center px-4 py-2 bg-linear-to-r from-[#1E2558] to-[#4EB956] text-white rounded-lg hover:shadow-lg transition-all"
            >
              <span className="mr-2">+</span>
              Post New Job
            </Link>
          </div>
        )}

        {sortedJobs.length > 0 && (
          <div className="flex items-center justify-between p-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">{sortedJobs.length}</span> of{" "}
              <span className="font-medium">{postedJobs.length}</span> jobs
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

      <div className="bg-gradient-to-r from-[#1E2558]/5 to-[#4EB956]/5 rounded-xl p-6">
        <h3 className="font-semibold text-gray-800 mb-3">
          Quick Tips for Better Results
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
              <FaCheckCircle size={14} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                Boost Your Jobs
              </p>
              <p className="text-xs text-gray-500">
                Featured jobs get 3x more applications
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
              <FaEye size={14} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                Review Applications
              </p>
              <p className="text-xs text-gray-500">
                Respond to candidates within 48 hours
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
              <FaShare size={14} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                Share Job Posts
              </p>
              <p className="text-xs text-gray-500">
                Promote on social media for wider reach
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedJobs;