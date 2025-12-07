import { BrowserRouter, Routes, Route } from "react-router-dom";
import { landings } from "./landings";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Seller app */}
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/notifications" element={<SellerNotifications />} />
        <Route path="/seller/analytics" element={<SellerAnalytics />} />
      </Routes>
    </BrowserRouter>
  );
}
