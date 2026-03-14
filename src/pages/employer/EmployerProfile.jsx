
import React, { useState } from "react";
import {
  FaUserTie,
  FaPhone,
  FaCamera,
  FaPencilAlt,
  FaSave,
  FaTimes,
  FaCheckCircle,
  FaIdCard,
} from "react-icons/fa";

const EmployerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [employerData, setEmployerData] = useState({
    employerProfileId: "EMP-2024-001",
    userId: "user_123456789",
    nameEmployer: "John Anderson",
    designation: "Senior HR Manager",
    officePhone: "+1 (555) 123-4567",
    profileImage: "",
    profileImagePublicId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Employer Profile</h1>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <FaTimes className="inline mr-2" />
                Cancel
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gradient-to-r from-[#1E2558] to-[#4EB956] text-white rounded-lg hover:shadow-lg"
              >
                <FaSave className="inline mr-2" />
                Save
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-gradient-to-r from-[#1E2558] to-[#4EB956] text-white rounded-lg hover:shadow-lg"
            >
              <FaPencilAlt className="inline mr-2" />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-[#1E2558] to-[#4EB956]"></div>

        <div className="px-6 pb-6">
          <div className="flex justify-center -mt-12 mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg">
                {employerData.profileImage ? (
                  <img
                    src={employerData.profileImage}
                    alt={employerData.nameEmployer}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-[#1E2558] to-[#4EB956] flex items-center justify-center text-white text-3xl font-bold">
                    {employerData.nameEmployer?.charAt(0) || "E"}
                  </div>
                )}
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-gray-200">
                  <FaCamera className="text-gray-600 text-sm" />
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm">
              <FaIdCard className="text-gray-400" />
              <span className="text-gray-500">Profile ID:</span>
              <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono text-[#1E2558]">
                {employerData.employerProfileId}
              </code>
              <span className="flex items-center text-green-600 text-xs">
                <FaCheckCircle className="mr-1" />
                Verified
              </span>
            </div>

            <div className="text-center text-xs text-gray-400">
              User ID: {employerData.userId}
            </div>

            <div className="text-center">
              {isEditing ? (
                <input
                  type="text"
                  name="nameEmployer"
                  value={employerData.nameEmployer}
                  onChange={handleInputChange}
                  className="text-2xl font-bold text-gray-800 text-center border-b border-gray-300 focus:border-[#4EB956] outline-none w-full"
                  placeholder="Full Name"
                />
              ) : (
                <h2 className="text-2xl font-bold text-gray-800">
                  {employerData.nameEmployer}
                </h2>
              )}
            </div>

            <div className="text-center">
              {isEditing ? (
                <input
                  type="text"
                  name="designation"
                  value={employerData.designation}
                  onChange={handleInputChange}
                  className="text-gray-600 text-center border-b border-gray-300 focus:border-[#4EB956] outline-none w-full"
                  placeholder="Designation"
                />
              ) : (
                <p className="text-gray-600 flex items-center justify-center">
                  <FaUserTie className="mr-2 text-gray-400" />
                  {employerData.designation || "Not specified"}
                </p>
              )}
            </div>

            <div className="text-center">
              {isEditing ? (
                <input
                  type="tel"
                  name="officePhone"
                  value={employerData.officePhone}
                  onChange={handleInputChange}
                  className="text-gray-600 text-center border-b border-gray-300 focus:border-[#4EB956] outline-none w-full"
                  placeholder="Office Phone"
                />
              ) : (
                <p className="text-gray-600 flex items-center justify-center">
                  <FaPhone className="mr-2 text-gray-400" />
                  {employerData.officePhone || "Not specified"}
                </p>
              )}
            </div>
          </div>

          {!isEditing && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">
                Profile Information
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Name:</dt>
                  <dd className="text-gray-800 font-medium">
                    {employerData.nameEmployer}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Designation:</dt>
                  <dd className="text-gray-800">
                    {employerData.designation || "—"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Office Phone:</dt>
                  <dd className="text-gray-800">
                    {employerData.officePhone || "—"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Profile ID:</dt>
                  <dd className="text-gray-800 font-mono text-xs">
                    {employerData.employerProfileId}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">User ID:</dt>
                  <dd className="text-gray-800 font-mono text-xs">
                    {employerData.userId}
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployerProfile;
