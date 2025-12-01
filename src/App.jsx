import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RootHome from "./pages/roothome/RootHome";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<RootHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
