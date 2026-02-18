import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Activities from "../pages/Activities";
import Groups from "../pages/Groups";
import Resources from "../pages/Resources";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activites" element={<Activities />} />
      <Route path="/groupes" element={<Groups />} />
      <Route path="/ressources" element={<Resources />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />

      {/* route inconnue => retour accueil */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}