import React, { useState } from "react";
import {
  FaUser,
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaArrowLeft,
  FaPhone,
  FaShieldAlt,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const JobSeekerAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showSignupSteps, setShowSignupSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(60);

  const colors = {
    primary: "#1e2558",
    secondary: "#4eb956",
    lightBg: "#f8f9ff",
    border: "#e0e3ff",
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Send OTP
  const handleSendOtp = () => {
    if (!formData.email) {
      alert("Please enter your email address");
      return;
    }
    setOtpSent(true);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setCurrentStep(2);
  };

  // Verify OTP
  const handleVerifyOtp = () => {
    if (formData.otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }
    setCurrentStep(3);
  };

  // Submit form
  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    setCurrentStep(4);

    setTimeout(() => {
      setCurrentStep(1);
      setShowSignupSteps(false);
      setFormData({
        email: "",
        otp: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      });
    }, 3000);
  };

  // Handle Google Auth
  const handleGoogleAuth = () => {
    console.log("Google authentication initiated");
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Login attempt:", formData.email);
  };

  const handleResendOtp = () => {
    setTimer(60);
    handleSendOtp();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] to-[#eef1ff] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl">
        <div
          className="lg:w-2/5 bg-gradient-to-br from-[#1e2558] to-[#2a3570] text-white p-8 lg:p-12 flex flex-col justify-between"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}, #2a3570)`,
          }}
        >
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-white/20 rounded-xl">
                <FaUser className="text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Job Seeker</h1>
                <p className="text-blue-100">Find your dream job</p>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {isLogin ? "Welcome Back!" : "Start Your Journey"}
            </h2>
            <p className="text-blue-100 mb-8">
              {isLogin
                ? "Sign in to access your personalized job recommendations and applications."
                : "Join thousands of professionals finding their dream careers."}
            </p>
            {!isLogin && !showSignupSteps && (
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="font-semibold">1</span>
                  </div>
                  <span>Verify your email</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="font-semibold">2</span>
                  </div>
                  <span>Create your profile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="font-semibold">3</span>
                  </div>
                  <span>Start applying</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8">
            <p className="text-sm text-blue-100">
              By continuing, you agree to our{" "}
              <a href="#" className="underline hover:text-white">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-white">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="lg:w-3/5 bg-white p-8 lg:p-12">
          <AnimatePresence mode="wait">
            {!showSignupSteps ? (
              <motion.div
                key="main"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full flex flex-col"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {isLogin ? "Sign In" : "Create Account"}
                  </h2>
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-[#1e2558] hover:text-[#4eb956] font-medium transition-colors duration-300 cursor-pointer"
                  >
                    {isLogin
                      ? "Need an account? Sign up"
                      : "Have an account? Sign in"}
                  </button>
                </div>

                <button
                  onClick={handleGoogleAuth}
                  className="w-full flex items-center justify-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-[#4285f4] hover:shadow-lg transition-all duration-300 mb-6 group"
                >
                  <FaGoogle className="text-[#4285f4] text-xl" />
                  <span className="font-medium text-gray-700 group-hover:text-[#4285f4]">
                    Continue with Google
                  </span>
                </button>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or continue with email
                    </span>
                  </div>
                </div>

                {isLogin ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4eb956] focus:border-transparent transition-all duration-300"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4eb956] focus:border-transparent transition-all duration-300"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 text-[#4eb956] rounded focus:ring-[#4eb956]"
                        />
                        <span className="text-sm text-gray-600">
                          Remember me
                        </span>
                      </label>
                      <a
                        href="#"
                        className="text-sm text-[#1e2558] hover:text-[#4eb956] hover:underline transition-colors duration-300"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <button
                      onClick={handleLogin}
                      className="w-full bg-gradient-to-r from-[#1e2558] to-[#2a3570] text-white py-4 rounded-xl font-semibold hover:from-[#4eb956] hover:to-[#3da345] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaSignInAlt />
                      <span>Sign In</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4eb956] focus:border-transparent transition-all duration-300"
                          placeholder="you@example.com"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        We'll send a verification code to this email
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        if (formData.email) {
                          setShowSignupSteps(true);
                          handleSendOtp();
                        } else {
                          alert("Please enter your email address");
                        }
                      }}
                      className="w-full bg-gradient-to-r from-[#1e2558] to-[#2a3570] text-white py-4 rounded-xl font-semibold hover:from-[#4eb956] hover:to-[#3da345] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <FaUserPlus />
                      <span>Continue with Email</span>
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="signup-steps"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full flex flex-col"
              >
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => {
                        if (currentStep > 1) {
                          setCurrentStep(currentStep - 1);
                        } else {
                          setShowSignupSteps(false);
                        }
                      }}
                      className="flex items-center space-x-2 text-gray-600 hover:text-[#1e2558] transition-colors duration-300"
                    >
                      <FaArrowLeft />
                      <span>Back</span>
                    </button>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">
                        Step {currentStep} of 4
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: `${(currentStep / 4) * 100}%` }}
                      className="h-2 rounded-full bg-gradient-to-r from-[#4eb956] to-[#1e2558]"
                    />
                  </div>

                  <div className="flex justify-between mt-2">
                    {["Email", "OTP", "Details", "Complete"].map(
                      (step, index) => (
                        <div
                          key={step}
                          className={`text-xs font-medium ${
                            currentStep > index + 1
                              ? "text-[#4eb956]"
                              : currentStep === index + 1
                              ? "text-[#1e2558]"
                              : "text-gray-400"
                          }`}
                        >
                          {step}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex-1 flex flex-col justify-center"
                    >
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mb-4">
                          <FaEnvelope className="text-2xl text-[#1e2558]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          Verify Your Email
                        </h3>
                        <p className="text-gray-600">
                          We'll send a 6-digit code to{" "}
                          <span className="font-semibold text-[#1e2558]">
                            {formData.email}
                          </span>
                        </p>
                      </div>

                      <button
                        onClick={handleSendOtp}
                        className="w-full bg-gradient-to-r from-[#1e2558] to-[#2a3570] text-white py-4 rounded-xl font-semibold hover:from-[#4eb956] hover:to-[#3da345] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                      >
                        Send Verification Code
                      </button>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex-1 flex flex-col justify-center"
                    >
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4">
                          <FaShieldAlt className="text-2xl text-[#4eb956]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          Enter Verification Code
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Enter the 6-digit code sent to {formData.email}
                        </p>

                        <div className="relative max-w-xs mx-auto">
                          <input
                            type="text"
                            name="otp"
                            value={formData.otp}
                            onChange={handleInputChange}
                            maxLength="6"
                            className="w-full text-center text-3xl font-bold tracking-widest py-4 border-2 border-gray-300 rounded-xl focus:border-[#4eb956] focus:ring-2 focus:ring-[#4eb956]/20 transition-all duration-300"
                            placeholder="000000"
                          />
                        </div>

                        <div className="mt-4">
                          {timer > 0 ? (
                            <p className="text-sm text-gray-500">
                              Resend code in{" "}
                              <span className="font-semibold text-[#1e2558]">
                                {timer}s
                              </span>
                            </p>
                          ) : (
                            <button
                              onClick={handleResendOtp}
                              className="text-sm text-[#4eb956] hover:text-[#3da345] font-medium hover:underline cursor-pointer"
                            >
                              Resend code
                            </button>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={handleVerifyOtp}
                        disabled={formData.otp.length !== 6}
                        className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                          formData.otp.length === 6
                            ? "bg-gradient-to-r from-[#1e2558] to-[#2a3570] text-white hover:from-[#4eb956] hover:to-[#3da345] hover:shadow-lg transform hover:-translate-y-1"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Verify Code
                      </button>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex-1 space-y-6"
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                          Complete Your Profile
                        </h3>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              First Name
                            </label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4eb956] focus:border-transparent transition-all duration-300"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4eb956] focus:border-transparent transition-all duration-300"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Password
                            </label>
                            <div className="relative">
                              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4eb956] focus:border-transparent transition-all duration-300"
                                placeholder="Create a strong password"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                              >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                              </button>
                            </div>
                            <div className="mt-2 space-y-1">
                              <div className="flex items-center space-x-2">
                                <div
                                  className={`w-2 h-2 rounded-full ${
                                    formData.password.length >= 8
                                      ? "bg-[#4eb956]"
                                      : "bg-gray-300"
                                  }`}
                                ></div>
                                <span
                                  className={`text-xs ${
                                    formData.password.length >= 8
                                      ? "text-[#4eb956]"
                                      : "text-gray-500"
                                  }`}
                                >
                                  At least 8 characters
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Confirm Password
                            </label>
                            <div className="relative">
                              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4eb956] focus:border-transparent transition-all duration-300"
                                placeholder="Confirm your password"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                              >
                                {showConfirmPassword ? (
                                  <FaEyeSlash />
                                ) : (
                                  <FaEye />
                                )}
                              </button>
                            </div>
                            {formData.confirmPassword &&
                              formData.password !==
                                formData.confirmPassword && (
                                <p className="text-red-500 text-xs mt-2">
                                  Passwords do not match
                                </p>
                              )}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={
                          !formData.firstName ||
                          !formData.lastName ||
                          !formData.password ||
                          !formData.confirmPassword ||
                          formData.password !== formData.confirmPassword
                        }
                        className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                          formData.firstName &&
                          formData.lastName &&
                          formData.password &&
                          formData.confirmPassword &&
                          formData.password === formData.confirmPassword
                            ? "bg-gradient-to-r from-[#1e2558] to-[#2a3570] text-white hover:from-[#4eb956] hover:to-[#3da345] hover:shadow-lg transform hover:-translate-y-1"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Create Account
                      </button>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex-1 flex flex-col items-center justify-center text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-24 h-24 bg-gradient-to-br from-[#4eb956] to-green-400 rounded-full flex items-center justify-center mb-6"
                      >
                        <FaCheckCircle className="text-4xl text-white" />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        Account Created Successfully!
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Welcome aboard, {formData.firstName}! Your account is
                        ready to use.
                      </p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4 w-full max-w-sm"
                      >
                        <button
                          onClick={() => {
                            setShowSignupSteps(false);
                            setIsLogin(true);
                          }}
                          className="w-full bg-gradient-to-r from-[#1e2558] to-[#2a3570] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
                        >
                          Continue to Dashboard
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerAuth;
