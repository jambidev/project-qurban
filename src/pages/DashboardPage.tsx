import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "animate.css";

const DashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate__animated animate__fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate__animated animate__fadeInDown">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Dashboard
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Selamat datang, {user?.name}!
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="bg-white overflow-hidden shadow rounded-lg animate__animated animate__fadeInUp animate__delay-1s">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Profil Pengguna
              </h3>
              <div className="mt-5">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Nama</dt>
                    <dd className="mt-1 text-sm text-gray-900">{user?.name}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {user?.email}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Telepon
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {user?.phone}
                    </dd>
                  </div>
                  {user?.address && (
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Alamat
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {user?.address}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg animate__animated animate__fadeInUp animate__delay-2s">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Pesanan Terbaru
              </h3>
              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Belum ada pesanan terbaru.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg animate__animated animate__fadeInUp animate__delay-3s">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Notifikasi
              </h3>
              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Tidak ada notifikasi baru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
