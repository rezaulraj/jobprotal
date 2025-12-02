import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  const footerSections = [
    {
      title: "Jobs by Functional Area",
      links: [
        "Sales & Business Development Jobs",
        "Accounts, Finance & Financial Services Jobs",
        "Client Services & Customer Support Jobs",
        "Marketing Jobs",
        "Software & Web Development Jobs",
        "Creative Design Jobs",
        "Operations Jobs",
        "Administration Jobs",
        "Teachers/Education, Training & Development Jobs",
        "Human Resources Jobs",
        "Health & Medicine Jobs",
        "Telemarketing Jobs",
        "Secretarial, Clerical & Front Office Jobs",
        "Engineering Jobs",
      ],
    },
    {
      title: "Jobs By City in Bangladesh",
      links: [
        "Jobs in Dhaka",
        "Jobs in Chittagong",
        "Jobs in Sylhet",
        "Jobs in Rajshahi",
        "Jobs in Khulna",
        "Jobs in Barisal",
        "Jobs in Rangpur",
        "Jobs in Mymensingh",
        "Jobs in Comilla",
        "Jobs in Narayanganj",
        "Jobs in Gazipur",
        "Jobs in Bogura",
        "Jobs in Jessore",
        "Jobs in Cox's Bazar",
        "Jobs in Dinajpur",
      ],
    },
    {
      title: "Jobs By Industry",
      links: [
        "Business Development Jobs",
        "Information Technology Jobs",
        "Recruitment / Employment Firms Jobs",
        "Services Jobs",
        "Education/Training Jobs",
        "Banking/Financial Services Jobs",
        "Travel/Tourism/Transportation Jobs",
        "Manufacturing Jobs",
        "Call Center Jobs",
        "Consultants Jobs",
        "Healthcare / Hospital / Medical Jobs",
        "BPO Jobs",
        "Importers / Distributors/Exporters Jobs",
        "N.G.O./Social Services Jobs",
        "Other Jobs",
      ],
    },
    {
      title: "Job Seekers",
      links: [
        "British Council Online Placement Test",
        "Top Professionals",
        "CV Writing",
        "Free CV Review",
        "Success Stories",
        "Contact Us",
      ],
    },
    {
      title: "Employers",
      links: [
        "Create Account",
        "Post a Job",
        "Employer Products",
        "Contact Sales",
      ],
    },
    {
      title: "International Jobs",
      links: [
        "Jobs in Saudi Arabia",
        "Jobs in Bahrain",
        "Jobs in Qatar",
        "Jobs in UAE",
        "Jobs in Malaysia",
        "Jobs in Singapore",
        "Jobs in Kuwait",
        "Jobs in Oman",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF className="w-4 h-4" />,
      label: "Facebook",
      color: "hover:bg-blue-600",
      bg: "bg-gray-700",
    },
    {
      icon: <FaTwitter className="w-4 h-4" />,
      label: "Twitter",
      color: "hover:bg-sky-500",
      bg: "bg-gray-700",
    },
    {
      icon: <FaInstagram className="w-4 h-4" />,
      label: "Instagram",
      color: "hover:bg-pink-600",
      bg: "bg-gray-700",
    },
    {
      icon: <FaLinkedinIn className="w-4 h-4" />,
      label: "LinkedIn",
      color: "hover:bg-blue-700",
      bg: "bg-gray-700",
    },
    {
      icon: <FaYoutube className="w-4 h-4" />,
      label: "YouTube",
      color: "hover:bg-red-600",
      bg: "bg-gray-700",
    },
    {
      icon: <SiTiktok className="w-4 h-4" />,
      label: "TikTok",
      color: "hover:bg-black",
      bg: "bg-gray-700",
    },
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="w-4 h-4 text-gray-400" />,
      text: "+880 1700 000000",
      href: "tel:+8801700000000",
    },
    {
      icon: <FaEnvelope className="w-4 h-4 text-gray-400" />,
      text: "info@jobsplusbd.com",
      href: "mailto:info@jobsplusbd.com",
    },
    {
      icon: <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />,
      text: "Road 12, Block C, Uttra, Dhaka 1213, Bangladesh",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-12 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10 border-b border-gray-700">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JP</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent uppercase">
                  JobsPlus
                </h2>
                <p className="text-sm text-gray-400">
                  Your Career Partner in Bangladesh
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Find your dream job in Bangladesh's fastest growing job portal.
              Connect with top employers and advance your career today.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="mt-0.5 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-emerald-400 transition-colors duration-200 hover:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-300">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated with Latest Jobs
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to our newsletter and get notified about new job
              opportunities in Bangladesh
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-medium rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-emerald-900/30 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-300 mb-4">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${social.bg} ${social.color} w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <span className="text-gray-300">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 py-10">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-l-4 border-emerald-500 pl-3">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-xs text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-start group"
                    >
                      <span className="text-emerald-500 opacity-0 group-hover:opacity-100 mr-2 mt-0.5 transition-opacity duration-200">
                        •
                      </span>
                      <span className="leading-relaxed">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Jobs Plus. All rights
                reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Jobs in Bangladesh | Employment Opportunities | Career Growth
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Sitemap",
                "Help Center",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-xs text-gray-400 hover:text-emerald-300 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              Popular Searches: Jobs in Dhaka, IT Jobs in Bangladesh, Banking
              Jobs, Government Jobs, Private Jobs, Fresher Jobs, Remote Jobs
            </p>
            <p className="text-[10px] text-gray-700 mt-2">
              JOBS PLUS - বাংলাদেশের শীর্ষ চাকরি খোঁজার প্ল্যাটফর্ম | ঢাকা,
              চট্টগ্রাম, সিলেট, রাজশাহী, খুলনা সহ সকল বিভাগে চাকরি
            </p>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group">
          <div className="relative">
            <div className="absolute inset-0 animate-ping bg-emerald-400 rounded-full opacity-20"></div>
            <span className="relative text-white font-bold text-lg">?</span>
          </div>
        </button>
      </div>

      {/* Responsive Styles */}
      <style jsx="true">{`
        @media (max-width: 768px) {
          .grid-cols-6 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .grid-cols-6 {
            grid-template-columns: 1fr;
          }
        }

        /* Smooth hover effects */
        a {
          transition: all 0.2s ease-in-out;
        }

        /* Better text rendering */
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
