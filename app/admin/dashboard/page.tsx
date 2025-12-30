'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from '@/components/admin/AdminHeader';
import DashboardMetrics from '@/components/admin/DashboardMetrics';
import ContactsTable from '@/components/admin/ContactsTable';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if admin is logged in (simple check)
    // In production, use proper session management
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/stats');
        if (!response.ok && response.status === 401) {
          router.push('/admin/login');
        }
      } catch (error) {
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage contacts and view analytics</p>
          </div>

          <DashboardMetrics />
          <div className="mt-8">
            <ContactsTable />
          </div>
        </div>
      </main>
    </div>
  );
}

