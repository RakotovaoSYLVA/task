import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./boot/pages/LoginPage";
import { useAuthStore } from "./modules/Auth/viewModel/auth.store";

export default function App() {
  const { user } = useAuthStore();

  return (
    <Router>
      <Routes>
        {/* Route publique */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route protégée */}
        {/* <Route
          path="/dashboard"
          element={user ? <DashboardPage /> : <Navigate to="/login" replace />}
        /> */}

        {/* Redirection par défaut */}
        <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}
