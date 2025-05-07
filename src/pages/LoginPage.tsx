import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "animate.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const success = await login(email, password);
      if (success) {
        navigate("/dashboard"); // Redirect to dashboard after successful login
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("Fitur pendaftaran belum tersedia.");
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-md w-full space-y-8 relative">
        <div className="text-center">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 animate__animated animate__fadeInDown">
            {isLogin ? "Login ke Surya Ternak" : "Daftar Akun Baru"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 animate__animated animate__fadeIn animate__delay-1s">
            {isLogin ? "Masuk untuk melanjutkan" : "Buat akun untuk memulai"}
          </p>
        </div>

        <div className="relative mt-8">
          <div className="absolute inset-0 flex">
            <div
              className={`w-1/2 bg-white transition-all duration-700 ease-in-out transform ${isLogin ? "translate-x-0" : "translate-x-full"}`}
            ></div>
            <div
              className={`w-1/2 bg-primary transition-all duration-700 ease-in-out transform ${isLogin ? "translate-x-full" : "translate-x-0"}`}
            ></div>
          </div>

          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex">
              <div
                className={`w-1/2 py-6 px-8 transition-all duration-700 ease-in-out transform ${isLogin ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
              >
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="login-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="login-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="login-password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      id="login-password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && (
                    <div className="text-red-500 text-sm text-center animate__animated animate__shakeX">
                      {error}
                    </div>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>

              <div
                className={`w-1/2 py-6 px-8 bg-primary text-white transition-all duration-700 ease-in-out transform ${isLogin ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
              >
                <h3 className="text-xl font-bold mb-4">Belum punya akun?</h3>
                <p className="mb-6 text-sm">
                  Daftar sekarang untuk menikmati kemudahan berbelanja hewan
                  ternak berkualitas.
                </p>
                <button
                  onClick={toggleForm}
                  className="w-full py-2 px-4 border border-white text-sm font-medium rounded-md text-primary bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300"
                >
                  Daftar
                </button>
              </div>

              <div
                className={`absolute w-1/2 py-6 px-8 transition-all duration-700 ease-in-out transform ${isLogin ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
              >
                <form className="space-y-6" onSubmit={handleRegisterSubmit}>
                  <div>
                    <label
                      htmlFor="register-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="register-name"
                      name="name"
                      type="text"
                      required
                      className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="register-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="register-email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="register-password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      id="register-password"
                      name="password"
                      type="password"
                      required
                      className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  {error && (
                    <div className="text-red-500 text-sm text-center animate__animated animate__shakeX">
                      {error}
                    </div>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
                    >
                      Daftar
                    </button>
                  </div>
                </form>
              </div>

              <div
                className={`absolute right-0 w-1/2 py-6 px-8 bg-primary text-white transition-all duration-700 ease-in-out transform ${isLogin ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
              >
                <h3 className="text-xl font-bold mb-4">Sudah punya akun?</h3>
                <p className="mb-6 text-sm">
                  Masuk untuk melanjutkan belanja dan melihat status pesanan
                  Anda.
                </p>
                <button
                  onClick={toggleForm}
                  className="w-full py-2 px-4 border border-white text-sm font-medium rounded-md text-primary bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
