// pages/employer/EmployerChangePassword.jsx
import React, { useState } from "react";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaTimesCircle,
  FaKey,
  FaShieldAlt,
} from "react-icons/fa";

const EmployerChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    number: false,
    uppercase: false,
    lowercase: false,
    special: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Check password strength when new password changes
    if (name === "newPassword") {
      setPasswordStrength({
        length: value.length >= 8,
        number: /\d/.test(value),
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      });
    }

    // Clear errors when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setSuccess(false);
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else {
      // Check password strength
      const strengthChecks =
        Object.values(passwordStrength).filter(Boolean).length;
      if (strengthChecks < 4) {
        newErrors.newPassword = "Password is too weak";
      }
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (
      formData.currentPassword &&
      formData.newPassword &&
      formData.currentPassword === formData.newPassword
    ) {
      newErrors.newPassword =
        "New password must be different from current password";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // API call to change password
      console.log("Password change request:", formData);
      setSuccess(true);
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setPasswordStrength({
        length: false,
        number: false,
        uppercase: false,
        lowercase: false,
        special: false,
      });
    } else {
      setErrors(newErrors);
    }
  };

  const getPasswordStrengthScore = () => {
    return Object.values(passwordStrength).filter(Boolean).length;
  };

  const getPasswordStrengthColor = () => {
    const score = getPasswordStrengthScore();
    if (score <= 2) return "bg-red-500";
    if (score <= 3) return "bg-yellow-500";
    if (score <= 4) return "bg-blue-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    const score = getPasswordStrengthScore();
    if (score <= 2) return "Weak";
    if (score <= 3) return "Fair";
    if (score <= 4) return "Good";
    return "Strong";
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
          <FaLock className="mr-3 text-[#4EB956]" />
          Change Password
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Update your password to keep your account secure
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Security Badge */}
        <div className="bg-gradient-to-r from-[#1E2558]/5 to-[#4EB956]/5 p-4 border-b border-gray-100">
          <div className="flex items-center text-sm">
            <FaShieldAlt className="text-[#4EB956] mr-2" />
            <span className="text-gray-600">
              For your security, choose a strong password you haven't used
              before
            </span>
          </div>
        </div>

        {/* Success Message */}
        {success && (
          <div className="m-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" size={20} />
              <div>
                <h3 className="font-medium text-green-800">
                  Password Changed Successfully!
                </h3>
                <p className="text-sm text-green-600 mt-1">
                  Your password has been updated. Use your new password next
                  time you log in.
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.current ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className={`w-full pl-4 pr-12 py-3 border ${errors.currentPassword ? "border-red-300" : "border-gray-200"} rounded-lg focus:border-[#4EB956] outline-none transition-all`}
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("current")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#4EB956]"
              >
                {showPasswords.current ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaTimesCircle className="mr-1" size={12} />
                {errors.currentPassword}
              </p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.new ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className={`w-full pl-4 pr-12 py-3 border ${errors.newPassword ? "border-red-300" : "border-gray-200"} rounded-lg focus:border-[#4EB956] outline-none transition-all`}
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("new")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#4EB956]"
              >
                {showPasswords.new ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>

            {/* Password Strength Meter */}
            {formData.newPassword && (
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Password strength:
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      getPasswordStrengthScore() <= 2
                        ? "text-red-600"
                        : getPasswordStrengthScore() <= 3
                          ? "text-yellow-600"
                          : getPasswordStrengthScore() <= 4
                            ? "text-blue-600"
                            : "text-green-600"
                    }`}
                  >
                    {getPasswordStrengthText()}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
                    style={{
                      width: `${(getPasswordStrengthScore() / 5) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Password Requirements */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div
                    className={`flex items-center text-xs ${passwordStrength.length ? "text-green-600" : "text-gray-400"}`}
                  >
                    {passwordStrength.length ? (
                      <FaCheckCircle className="mr-1" size={10} />
                    ) : (
                      <FaTimesCircle className="mr-1" size={10} />
                    )}
                    At least 8 characters
                  </div>
                  <div
                    className={`flex items-center text-xs ${passwordStrength.number ? "text-green-600" : "text-gray-400"}`}
                  >
                    {passwordStrength.number ? (
                      <FaCheckCircle className="mr-1" size={10} />
                    ) : (
                      <FaTimesCircle className="mr-1" size={10} />
                    )}
                    At least 1 number
                  </div>
                  <div
                    className={`flex items-center text-xs ${passwordStrength.uppercase ? "text-green-600" : "text-gray-400"}`}
                  >
                    {passwordStrength.uppercase ? (
                      <FaCheckCircle className="mr-1" size={10} />
                    ) : (
                      <FaTimesCircle className="mr-1" size={10} />
                    )}
                    Uppercase letter
                  </div>
                  <div
                    className={`flex items-center text-xs ${passwordStrength.lowercase ? "text-green-600" : "text-gray-400"}`}
                  >
                    {passwordStrength.lowercase ? (
                      <FaCheckCircle className="mr-1" size={10} />
                    ) : (
                      <FaTimesCircle className="mr-1" size={10} />
                    )}
                    Lowercase letter
                  </div>
                  <div
                    className={`flex items-center text-xs ${passwordStrength.special ? "text-green-600" : "text-gray-400"}`}
                  >
                    {passwordStrength.special ? (
                      <FaCheckCircle className="mr-1" size={10} />
                    ) : (
                      <FaTimesCircle className="mr-1" size={10} />
                    )}
                    Special character
                  </div>
                </div>
              </div>
            )}

            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaTimesCircle className="mr-1" size={12} />
                {errors.newPassword}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.confirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full pl-4 pr-12 py-3 border ${errors.confirmPassword ? "border-red-300" : "border-gray-200"} rounded-lg focus:border-[#4EB956] outline-none transition-all`}
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirm")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#4EB956]"
              >
                {showPasswords.confirm ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <FaTimesCircle className="mr-1" size={12} />
                {errors.confirmPassword}
              </p>
            )}

            {/* Password Match Indicator */}
            {formData.confirmPassword && formData.newPassword && (
              <div className="mt-2">
                {formData.newPassword === formData.confirmPassword ? (
                  <p className="text-xs text-green-600 flex items-center">
                    <FaCheckCircle className="mr-1" size={10} />
                    Passwords match
                  </p>
                ) : (
                  <p className="text-xs text-red-600 flex items-center">
                    <FaTimesCircle className="mr-1" size={10} />
                    Passwords do not match
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#1E2558] to-[#4EB956] text-white rounded-lg hover:shadow-lg transition-all font-medium"
            >
              Change Password
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  currentPassword: "",
                  newPassword: "",
                  confirmPassword: "",
                });
                setErrors({});
                setSuccess(false);
              }}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-2 flex items-center">
          <FaKey className="mr-2 text-[#4EB956]" size={14} />
          Password Tips
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex items-start">
            <span className="text-[#4EB956] mr-2">•</span>
            Use a mix of letters, numbers, and special characters
          </li>
          <li className="flex items-start">
            <span className="text-[#4EB956] mr-2">•</span>
            Avoid using personal information like your name or birthdate
          </li>
          <li className="flex items-start">
            <span className="text-[#4EB956] mr-2">•</span>
            Don't reuse passwords from other websites
          </li>
          <li className="flex items-start">
            <span className="text-[#4EB956] mr-2">•</span>
            Change your password regularly for better security
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployerChangePassword;
