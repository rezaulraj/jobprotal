import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RootHome from "./pages/roothome/RootHome";
import UnderDevelopment from "./components/UnderDevelopment";
import AllJobs from "./pages/jobs/AllJobs";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<RootHome />} />
          <Route path="jobs" element={<AllJobs />} />
          <Route path="jobs/:cate" element={<AllJobs />} />
          <Route path="*" element={<UnderDevelopment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
