import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TimeSheetPage from "./component/pages/timeSheetDisplayPage/TimeSheetPage";
import DashboardPage from "./component/pages/dashboardPage/DashboardPage";
import AddCandidatePage from "./component/pages/addCandidatePage/AddCandidatePage";
import AssignmentDashboardPage from "./component/pages/assignementDashboardPage/AssignmentDashboardPage";
import MyTimeSheetPage from "./component/pages/myTimeSheetPage/MyTimeSheetPage";
import ApproveTimeSheetPage from "./component/pages/approveTimeSheetPage/ApproveTimeSheetPage";
import LoginToHRMSPage from "./component/pages/loginToHRMSPage/LoginToHRMSPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>          
          <Route path="/" element={<TimeSheetPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/addCandidate" element={<AddCandidatePage/>} />
          <Route path="/assignementDashboard" element={<AssignmentDashboardPage/>} />
          <Route path="/myTimeSheet" element={<MyTimeSheetPage/>} />
          <Route path="/approveTimesheet" element={<ApproveTimeSheetPage/>} />
          <Route path="/login" element={<LoginToHRMSPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
