import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RootHome from "./pages/roothome/RootHome";
import UnderDevelopment from "./components/UnderDevelopment";
import AllJobs from "./pages/jobs/AllJobs";
import FreelanceJobDescription from "./pages/jobs/FreelanceJobDescription";
import ScrollToTop from "./components/ScrollToTop";
import SingleJobDescription from "./pages/jobs/SingleJobDescription";
import JobSeekerAuth from "./components/JobSeekerAuth";
import SeekerSignin from "./components/SeekerSignin";
import EmployerAuth from "./components/EmployerAuth";
import EmployerLogin from "./components/EmployerLogin";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<RootHome />} />
          <Route path="jobs" element={<AllJobs />} />
          <Route path="jobs/:cate" element={<AllJobs />} />
          <Route path="job/:id" element={<SingleJobDescription />} />
          <Route
            path="/freelance/:jobId"
            element={<FreelanceJobDescription />}
          />
          <Route path="jobseeker/signup" element={<JobSeekerAuth />} />
          <Route path="jobseeker/login" element={<SeekerSignin />} />
          <Route path="employer/signup" element={<EmployerAuth />} />
          <Route path="employer/login" element={<EmployerLogin />} />
          <Route path="*" element={<UnderDevelopment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
