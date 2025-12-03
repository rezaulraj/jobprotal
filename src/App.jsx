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
          <Route path="*" element={<UnderDevelopment />} />
          <Route path="/all" element={<AllJobs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
