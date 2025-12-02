import React from "react";
import HeroHome from "./HeroHome";
import FreelanceSection from "./FreelanceSection";
import SeniorManagment from "./SeniorManagment";
import JobCategory from "./JobCategory";
import TopJobs from "./TopJobs";
import Benefit from "./Benefit";
import FreshJob from "./FreshJob";
const RootHome = () => {
  return (
    <div>
      <HeroHome />
      <FreelanceSection />
      <SeniorManagment />
      <JobCategory />
      <TopJobs />
      <Benefit />
      <FreshJob />
    </div>
  );
};

export default RootHome;
