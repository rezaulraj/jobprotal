import { Routes, Route, Navigate } from "react-router-dom";
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
import Jobpost from "./pages/post/Jobpost";
import FreelancerJobPost from "./pages/post/FreelancerJobPost";
import Employer from "./pages/post/Employer";
import Company from "./pages/company/Company";
import NotFoundPage from "./components/NotFoundPage";
import SeekerLayout from "./layout/SeekerLayout";
import AuthGuard from "./store/AuthGuard";
import SeekerDashboard from "./pages/seeker/SeekerDashboard";
import SeekerProfile from "./pages/seeker/SeekerProfile";
import SeekerCVUpload from "./pages/seeker/SeekerCVUpload";
import SeekerAppliedJobs from "./pages/seeker/SeekerAppliedJobs";
import SeekerShortlisted from "./pages/seeker/SeekerShortlisted";
import SeekerChangePassword from "./pages/seeker/SeekerChangePassword";
import CVWriting from "./pages/seeker/features/CVWriting";
import CareerTips from "./pages/seeker/features/CareerTips";
import InterviewTips from "./pages/seeker/features/InterviewTips";
import SkillDevelopment from "./pages/seeker/features/SkillDevelopment";
import SeekerSaveJobs from "./pages/seeker/SeekerSaveJobs";
function App() {
  const isAuthenticated = true;
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public routes (when not authenticated) */}
        {!isAuthenticated && (
          <Route path="/" element={<Layout />}>
            <Route index element={<RootHome />} />
            <Route path="jobs" element={<AllJobs />} />
            <Route path="jobs/:cate" element={<AllJobs />} />
            <Route path="job/:id" element={<SingleJobDescription />} />
            <Route
              path="freelance/:jobId"
              element={<FreelanceJobDescription />}
            />
            <Route path="jobseeker/signup" element={<JobSeekerAuth />} />
            <Route path="jobseeker/login" element={<SeekerSignin />} />
            <Route path="employer/signup" element={<EmployerAuth />} />
            <Route path="employer/login" element={<EmployerLogin />} />
            <Route path="employers/post-job" element={<Jobpost />} />
            <Route path="freelancer/post-job" element={<FreelancerJobPost />} />
            <Route path="companys" element={<Company />} />
            <Route path="employer" element={<Employer />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        )}

        {/* Protected routes (when authenticated) */}
        <Route element={<AuthGuard />}>
          <Route path="/" element={<SeekerLayout />}>
            <Route index element={<RootHome />} />

            {/* IMPORTANT: These routes are relative to root when authenticated */}
            <Route path="jobs">
              <Route index element={<AllJobs />} />
              <Route path=":cate" element={<AllJobs />} />
            </Route>

            <Route path="job/:id" element={<SingleJobDescription />} />
            <Route
              path="freelance/:jobId"
              element={<FreelanceJobDescription />}
            />
            <Route path="companys" element={<Company />} />

            {/* Seeker routes - these should use absolute paths in navigation */}
            <Route path="seeker">
              <Route path="dashboard" element={<SeekerDashboard />} />
              <Route path="profile" element={<SeekerProfile />} />
              <Route path="cv-upload" element={<SeekerCVUpload />} />
              <Route path="saved-jobs" element={<SeekerSaveJobs />} />
              <Route path="applied-jobs" element={<SeekerAppliedJobs />} />
              <Route path="shortlisted" element={<SeekerShortlisted />} />
              <Route
                path="change-password"
                element={<SeekerChangePassword />}
              />
            </Route>

            {/* Features routes */}
            <Route path="features">
              <Route path="cv-writing" element={<CVWriting />} />
              <Route path="career-tips" element={<CareerTips />} />
              <Route path="interview-tips" element={<InterviewTips />} />
              <Route path="skill-development" element={<SkillDevelopment />} />
            </Route>

            {/* Redirect auth routes */}
            <Route
              path="jobseeker/signup"
              element={<Navigate to="/" replace />}
            />
            <Route
              path="jobseeker/login"
              element={<Navigate to="/" replace />}
            />
            <Route
              path="employer/signup"
              element={<Navigate to="/" replace />}
            />
            <Route
              path="employer/login"
              element={<Navigate to="/" replace />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>

        {/* Fallback for when isAuthenticated is false */}
        {!isAuthenticated && (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </>
  );
}

export default App;
