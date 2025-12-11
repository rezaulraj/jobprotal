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
  FaPinterest,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  const functionalAreaJobs = [
    {
      label: "Sales & Business Development Jobs",
      path: "/jobs/sales-business-development",
    },
    {
      label: "Accounts, Finance & Financial Services Jobs",
      path: "/jobs/accounts-finance",
    },
    {
      label: "Client Services & Customer Support Jobs",
      path: "/jobs/customer-support",
    },
    { label: "Marketing Jobs", path: "/jobs/marketing" },
    {
      label: "Software & Web Development Jobs",
      path: "/jobs/software-development",
    },
    { label: "Creative Design Jobs", path: "/jobs/creative-design" },
    { label: "Operations Jobs", path: "/jobs/operations" },
    { label: "Administration Jobs", path: "/jobs/administration" },
    {
      label: "Teachers/Education, Training & Development Jobs",
      path: "/jobs/education-training",
    },
    { label: "Human Resources Jobs", path: "/jobs/human-resources" },
    { label: "Health & Medicine Jobs", path: "/jobs/health-medicine" },
    { label: "Telemarketing Jobs", path: "/jobs/telemarketing" },
    {
      label: "Secretarial, Clerical & Front Office Jobs",
      path: "/jobs/secretarial",
    },
    { label: "Engineering Jobs", path: "/jobs/engineering" },
  ];

  const jobsByCity = [
    { label: "Jobs in Dhaka", path: "/jobs?location=dhaka" },
    { label: "Jobs in Chittagong", path: "/jobs?location=chittagong" },
    { label: "Jobs in Sylhet", path: "/jobs?location=sylhet" },
    { label: "Jobs in Rajshahi", path: "/jobs?location=rajshahi" },
    { label: "Jobs in Khulna", path: "/jobs?location=khulna" },
    { label: "Jobs in Barisal", path: "/jobs?location=barisal" },
    { label: "Jobs in Rangpur", path: "/jobs?location=rangpur" },
    { label: "Jobs in Mymensingh", path: "/jobs?location=mymensingh" },
    { label: "Jobs in Comilla", path: "/jobs?location=comilla" },
    { label: "Jobs in Narayanganj", path: "/jobs?location=narayanganj" },
    { label: "Jobs in Gazipur", path: "/jobs?location=gazipur" },
    { label: "Jobs in Bogura", path: "/jobs?location=bogura" },
    { label: "Jobs in Jessore", path: "/jobs?location=jessore" },
    { label: "Jobs in Cox's Bazar", path: "/jobs?location=coxs-bazar" },
    { label: "Jobs in Dinajpur", path: "/jobs?location=dinajpur" },
  ];

  const jobsByIndustry = [
    {
      label: "Business Development Jobs",
      path: "/jobs/industry/business-development",
    },
    {
      label: "Information Technology Jobs",
      path: "/jobs/industry/information-technology",
    },
    {
      label: "Recruitment / Employment Firms Jobs",
      path: "/jobs/industry/recruitment",
    },
    { label: "Services Jobs", path: "/jobs/industry/services" },
    { label: "Education/Training Jobs", path: "/jobs/industry/education" },
    {
      label: "Banking/Financial Services Jobs",
      path: "/jobs/industry/banking",
    },
    {
      label: "Travel/Tourism/Transportation Jobs",
      path: "/jobs/industry/travel",
    },
    { label: "Manufacturing Jobs", path: "/jobs/industry/manufacturing" },
    { label: "Call Center Jobs", path: "/jobs/industry/call-center" },
    { label: "Consultants Jobs", path: "/jobs/industry/consultants" },
    {
      label: "Healthcare / Hospital / Medical Jobs",
      path: "/jobs/industry/healthcare",
    },
    { label: "BPO Jobs", path: "/jobs/industry/bpo" },
    {
      label: "Importers / Distributors/Exporters Jobs",
      path: "/jobs/industry/import-export",
    },
    { label: "N.G.O./Social Services Jobs", path: "/jobs/industry/ngo" },
    { label: "Other Jobs", path: "/jobs/industry/other" },
  ];

  // const jobSeekersLinks = [
  //   {
  //     label: "British Council Online Placement Test",
  //     path: "/resources/placement-test",
  //   },
  //   { label: "Top Professionals", path: "/professionals" },
  //   { label: "CV Writing", path: "/services/cv-writing" },
  //   { label: "Free CV Review", path: "/services/cv-review" },
  //   { label: "Success Stories", path: "/success-stories" },
  //   { label: "Contact Us", path: "/contact" },
  // ];
   const jobSeekersLinks = [
    {
      label: "British Council Online Placement Test",
      path: "",
    },
    { label: "Top Professionals", path: "" },
    { label: "CV Writing", path: "" },
    { label: "Free CV Review", path: "" },
    { label: "Success Stories", path: "" },
    { label: "Contact Us", path: "" },
  ];


  const employersLinks = [
    { label: "Create Account", path: "/employer/signup" },
    { label: "Post a Job", path: "/employers/post-job" },
    { label: "Employer Products", path: "/employers/products" },
    { label: "Contact Sales", path: "/employers/contact-sales" },
  ];

  const internationalJobs = [
    { label: "Jobs in Saudi Arabia", path: "/jobs/international/saudi-arabia" },
    { label: "Jobs in Bahrain", path: "/jobs/international/bahrain" },
    { label: "Jobs in Qatar", path: "/jobs/international/qatar" },
    { label: "Jobs in UAE", path: "/jobs/international/uae" },
    { label: "Jobs in Malaysia", path: "/jobs/international/malaysia" },
    { label: "Jobs in Singapore", path: "/jobs/international/singapore" },
    { label: "Jobs in Kuwait", path: "/jobs/international/kuwait" },
    { label: "Jobs in Oman", path: "/jobs/international/oman" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF className="w-4 h-4" />,
      label: "Facebook",
      link: "https://www.facebook.com/jobsplus01/",
      color: "hover:bg-blue-600",
      bg: "bg-gray-700",
    },
    {
      icon: <FaTwitter className="w-4 h-4" />,
      label: "Twitter",
      link: "https://x.com/Jobsplus01",
      color: "hover:bg-sky-500",
      bg: "bg-gray-700",
    },
    {
      icon: <FaInstagram className="w-4 h-4" />,
      label: "Instagram",
      link: "https://www.instagram.com/jobsplus01/",
      color: "hover:bg-pink-600",
      bg: "bg-gray-700",
    },
    {
      icon: <FaLinkedinIn className="w-4 h-4" />,
      label: "LinkedIn",
      link: "",
      color: "hover:bg-blue-700",
      bg: "bg-gray-700",
    },
    {
      icon: <FaYoutube className="w-4 h-4" />,
      label: "YouTube",
      link: "https://www.youtube.com/@JobsPlus01",
      color: "hover:bg-red-600",
      bg: "bg-gray-700",
    },
    {
      icon: <SiTiktok className="w-4 h-4" />,
      label: "TikTok",
      link: "https://www.tiktok.com/@jobsplus01",
      color: "hover:bg-black",
      bg: "bg-gray-700",
    },
    {
      icon: <FaPinterest className="w-4 h-4" />,
      label: "Pinterest",
      link: "https://www.pinterest.com/?utm_campaign=emailconfirmwlc",
      color: "hover:bg-red-500",
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
      text: "Road 12, Block C, Uttara, Dhaka 1213, Bangladesh",
    },
  ];

  // Footer sections configuration using the individual arrays
  const footerSections = [
    {
      title: "Jobs by Functional Area",
      data: functionalAreaJobs,
    },
    {
      title: "Jobs By City in Bangladesh",
      data: jobsByCity,
    },
    {
      title: "Jobs By Industry",
      data: jobsByIndustry,
    },
    {
      title: "Job Seekers",
      data: jobSeekersLinks,
    },
    {
      title: "Employers",
      data: employersLinks,
    },
    {
      title: "International Jobs",
      data: internationalJobs,
    },
  ];

  return (
    <footer className="bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10 border-b border-gray-700">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-linear-to-r from-emerald-500 to-teal-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JP</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-linear-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent uppercase">
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
                className="grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
              />
              <button className="px-6 py-3 bg-linear-to-r from-emerald-600 to-teal-700 text-white font-medium rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-emerald-900/30 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-300 mb-4">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 py-10">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-l-4 border-emerald-500 pl-3">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.data.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.path}
                      className="text-xs text-gray-400 hover:text-emerald-300 transition-colors duration-200 flex items-start group"
                    >
                      <span className="text-emerald-500 opacity-0 group-hover:opacity-100 mr-2 mt-0.5 transition-opacity duration-200">
                        •
                      </span>
                      <span className="leading-relaxed">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

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
                  href="/policy"
                  className="text-xs text-gray-400 hover:text-emerald-300 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

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
