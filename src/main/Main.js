import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import LogIn from "../pages/signin/LogIn";
import Register from "../pages/signup/Register";
import UploadResumePage from "../pages/uploadResumePage/UploadResumePage";
import CandidateReportPage from "../pages/candidateReportPage/CandidateReportPage";
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<LogIn />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/resume-section" element={<UploadResumePage />} />
        <Route exact path="/resume-report" element={<CandidateReportPage />} />
      </Routes>
    </Router>
  );
};

export default Main;
