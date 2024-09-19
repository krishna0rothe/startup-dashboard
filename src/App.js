import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./styles/themes";
import MainLayout from "./components/MainLayout";
import StartupApprovalPage from "./pages/Dashboard/StartupApprovalPage";
import DashboardHomePage from "./pages/Dashboard/DashboardHomePage";
import ResourceManagementPage from "./pages/Dashboard/ResourceManagementPage";
import MentorAssignmentsPage from "./pages/Dashboard/MentorAssignmentsPage";
import DataInsightsPage from "./pages/Dashboard/DataInsightsPage";
import SettingsPage from "./pages/Dashboard/SettingsPage";
import StartupDashboard from "./pages/StartupDashboard/StartupDashboard";
import FundingRequestsPage from "./pages/StartupDashboard/FundingRequestsPage";
import IPRManagementPage from "./pages/StartupDashboard/IPRManagementPage";
import StartupSettingsPage from "./pages/StartupDashboard/StartupSettingsPage";
import StartupMentorshipPage from "./pages/StartupDashboard/MentorshipPage";
import HomePage from "./pages/GSIPLandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Routes>
          {/* Group all gov-related routes under MainLayout */}
          <Route path="/gov-dashboard" element={<MainLayout/>}>
            {/* Nested Routes for gov */}
            <Route index element={<DashboardHomePage />} />
            <Route path="approval" element={<StartupApprovalPage />} />
            <Route path="home" element={<DashboardHomePage />} />
            <Route
              path="resource-management"
              element={<ResourceManagementPage />}
            />
            <Route
              path="mentor-assignments"
              element={<MentorAssignmentsPage />}
            />
            <Route path="data-insights" element={<DataInsightsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Group all startup-related routes under MainLayout */}
          <Route path="/startupkmvrf" element={<MainLayout />}>
            {/* Nested Routes for startup */}
            <Route path="home vdrnlk" element={<StartupDashboard />} />
            <Route path="fundmmvl;rming" element={<FundingRequestsPage />} />
            <Route path="rkf" element={<IPRManagementPage />} />
            <Route path="settmgrkings" element={<StartupSettingsPage />} />
            <Route path="menvrkktorship" element={<StartupMentorshipPage />} />
            {/* Add your startup-specific pages here */}
          </Route>

          {/* Group all mentor-related routes under MainLayout */}
          <Route path="/mentor" element={<MainLayout />}>
            {/* Nested Routes for mentor */}
            {/* Add your mentor-specific pages here */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
