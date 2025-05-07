import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
  useRoutes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "tempo-routes";
import "animate.css";
import LoadingAnimation from "./components/LoadingAnimation";

// Context Providers
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// Layout components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Page components
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrderPage from "./pages/OrderPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import GallerySapiPage from "./pages/GallerySapiPage";
import GalleryKambingPage from "./pages/GalleryKambingPage";
import OrderGuidePage from "./pages/OrderGuidePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

// Extract TempoRoutes to a separate component outside of App
const TempoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/gallery/sapi" element={<GallerySapiPage />} />
      <Route path="/gallery/kambing" element={<GalleryKambingPage />} />
      <Route path="/order-guide" element={<OrderGuidePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

function App() {
  const history = createBrowserHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading animation will automatically hide after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <HistoryRouter
          history={history}
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          {loading && <LoadingAnimation />}
          <div
            className="flex flex-col min-h-screen animate__animated animate__fadeIn"
            style={{ animationDelay: "3s" }}
          >
            <Header />
            <main className="flex-grow">
              {/* Tempo routes */}
              {import.meta.env.VITE_TEMPO ? (
                <TempoRoutes />
              ) : (
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:id" element={<ProductDetailPage />} />
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/gallery/sapi" element={<GallerySapiPage />} />
                  <Route
                    path="/gallery/kambing"
                    element={<GalleryKambingPage />}
                  />
                  <Route path="/order-guide" element={<OrderGuidePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              )}
            </main>
            <Footer />
          </div>
        </HistoryRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
