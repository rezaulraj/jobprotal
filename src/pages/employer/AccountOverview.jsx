import { Link } from "react-router-dom";
import {
  FaUserTie,
  FaShieldAlt,
  FaFileInvoice,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaDownload,
  FaEdit,
  FaKey,
  FaCrown,
  FaGem,
  FaRocket,
  FaUserShield,
  FaFingerprint,
} from "react-icons/fa";

const AccountOverview = () => {
  const accountData = {
    accountId: "ACC-2024-001",
    userId: "user_123456789",
    employerProfileId: "EMP-2024-001",
    email: "john.anderson@techcorp.com",
    emailVerified: true,
    phoneVerified: true,
    nameEmployer: "John Anderson",
    designation: "Senior HR Manager",
    officePhone: "+1 (555) 123-4567",
    alternateEmail: "john.personal@email.com",

    companyName: "TechCorp Solutions",
    companyId: "COMP-2024-001",
    companySize: "100-250",
    industry: "Information Technology",
    companyWebsite: "www.techcorp.com",
    companyLocation: "San Francisco, CA",

    accountStatus: "active",
    accountType: "premium",
    verificationLevel: "tier_3",
    twoFactorEnabled: true,

    joinDate: "2022-03-15T10:30:00",
    lastLogin: "2024-03-15T09:45:00",
    lastPasswordChange: "2024-02-01T14:20:00",
    subscriptionExpiry: "2024-12-31T23:59:59",

    stats: {
      jobsPosted: 24,
      activeJobs: 5,
      totalApplications: 347,
      interviewsScheduled: 18,
      hiresMade: 12,
      profileViews: 1256,
      savedCandidates: 45,
      responseRate: 95,
      avgResponseTime: "2.4 hours",
    },

    subscription: {
      plan: "Premium Annual",
      price: "$999/year",
      nextBilling: "2024-12-31",
      paymentMethod: "Visa ending in 4242",
      features: [
        "Unlimited job postings",
        "Advanced analytics",
        "Priority support",
        "AI candidate matching",
        "Video interviews",
        "Team collaboration",
      ],
    },

    security: {
      lastLoginIP: "192.168.1.1",
      lastLoginDevice: "Chrome on Windows",
      activeSessions: 2,
      loginHistory: [
        {
          date: "2024-03-15 09:45",
          device: "Chrome / Windows",
          location: "San Francisco, CA",
          ip: "192.168.1.1",
        },
        {
          date: "2024-03-14 18:30",
          device: "Safari / iPhone",
          location: "San Francisco, CA",
          ip: "192.168.1.2",
        },
        {
          date: "2024-03-13 08:15",
          device: "Firefox / MacOS",
          location: "San Francisco, CA",
          ip: "192.168.1.3",
        },
      ],
    },

    notifications: {
      email: {
        newApplications: true,
        interviewReminders: true,
        candidateMessages: true,
        marketingUpdates: false,
        securityAlerts: true,
      },
      push: {
        newApplications: true,
        interviewReminders: true,
        candidateMessages: false,
        systemUpdates: true,
      },
      sms: {
        interviewReminders: true,
        urgentMessages: true,
      },
    },

    billingHistory: [
      {
        id: "INV-001",
        date: "2024-03-01",
        description: "Premium Plan - March 2024",
        amount: "$83.25",
        status: "paid",
      },
      {
        id: "INV-002",
        date: "2024-02-01",
        description: "Premium Plan - February 2024",
        amount: "$83.25",
        status: "paid",
      },
      {
        id: "INV-003",
        date: "2024-01-01",
        description: "Premium Plan - January 2024",
        amount: "$83.25",
        status: "paid",
      },
    ],
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return (
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm flex items-center">
            <FaCheckCircle className="mr-1" size={12} />
            Active
          </span>
        );
      case "inactive":
        return (
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center">
            <FaTimesCircle className="mr-1" size={12} />
            Inactive
          </span>
        );
      case "suspended":
        return (
          <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm flex items-center">
            <FaExclamationTriangle className="mr-1" size={12} />
            Suspended
          </span>
        );
      default:
        return null;
    }
  };

  const getPlanBadge = (type) => {
    switch (type) {
      case "premium":
        return (
          <span className="px-3 py-1 bg-gradient-to-r from-[#1E2558] to-[#4EB956] text-white rounded-full text-sm flex items-center">
            <FaCrown className="mr-1" size={12} />
            Premium
          </span>
        );
      case "basic":
        return (
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center">
            <FaGem className="mr-1" size={12} />
            Basic
          </span>
        );
      case "enterprise":
        return (
          <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm flex items-center">
            <FaRocket className="mr-1" size={12} />
            Enterprise
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Account Overview
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Manage your account settings and view usage statistics
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <Link
            to="/employer/profile"
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
          >
            <FaEdit className="inline mr-2" />
            Edit Profile
          </Link>
          <Link
            to="/employer/change-password"
            className="px-4 py-2 bg-gradient-to-r from-[#1E2558] to-[#4EB956] text-white rounded-lg hover:shadow-lg transition-all"
          >
            <FaKey className="inline mr-2" />
            Change Password
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Account Status</p>
              {getStatusBadge(accountData.accountStatus)}
              <p className="text-xs text-gray-400 mt-2">
                Member since{" "}
                {new Date(accountData.joinDate).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
              <FaUserShield size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Account Type</p>
              {getPlanBadge(accountData.accountType)}
              <p className="text-xs text-gray-400 mt-2">
                Expires:{" "}
                {new Date(accountData.subscriptionExpiry).toLocaleDateString()}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <FaCrown size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Verification Level</p>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center">
                <FaFingerprint className="mr-1" size={12} />
                Tier 3 - Verified
              </span>
              <p className="text-xs text-gray-400 mt-2">Identity verified</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <FaShieldAlt size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 flex items-center">
                <FaUserTie className="mr-2 text-[#4EB956]" />
                Account Information
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Personal Details
                  </h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Name:</dt>
                      <dd className="text-gray-800 font-medium">
                        {accountData.nameEmployer}
                      </dd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Designation:</dt>
                      <dd className="text-gray-800">
                        {accountData.designation}
                      </dd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Office Phone:</dt>
                      <dd className="text-gray-800">
                        {accountData.officePhone}
                      </dd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Email:</dt>
                      <dd className="text-gray-800 flex items-center">
                        {accountData.email}
                        {accountData.emailVerified && (
                          <FaCheckCircle
                            className="ml-2 text-green-500"
                            size={12}
                          />
                        )}
                      </dd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Alternate Email:</dt>
                      <dd className="text-gray-800">
                        {accountData.alternateEmail}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Company Details
                  </h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Company:</dt>
                      <dd className="text-gray-800 font-medium">
                        {accountData.companyName}
                      </dd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Industry:</dt>
                      <dd className="text-gray-800">{accountData.industry}</dd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Company Size:</dt>
                      <dd className="text-gray-800">
                        {accountData.companySize} employees
                      </dd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Location:</dt>
                      <dd className="text-gray-800">
                        {accountData.companyLocation}
                      </dd>
                    </div>
                    <div className="flex justify-between text-sm">
                      <dt className="text-gray-500">Website:</dt>
                      <dd className="text-gray-800">
                        {accountData.companyWebsite}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Account IDs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Account ID</p>
                    <p className="text-sm font-mono text-[#1E2558]">
                      {accountData.accountId}
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">User ID</p>
                    <p className="text-sm font-mono text-[#1E2558]">
                      {accountData.userId}
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Employer Profile ID</p>
                    <p className="text-sm font-mono text-[#1E2558]">
                      {accountData.employerProfileId}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 flex items-center">
                <FaFileInvoice className="mr-2 text-[#4EB956]" />
                Billing History
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {accountData.billingHistory.map((bill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {bill.description}
                      </p>
                      <p className="text-xs text-gray-500">{bill.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-800">
                        {bill.amount}
                      </p>
                      <span className="text-xs text-green-600">
                        {bill.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all">
                <FaDownload className="inline mr-2" />
                Download All Invoices
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
