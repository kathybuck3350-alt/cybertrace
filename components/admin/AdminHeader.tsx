'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LogOut, Shield, LayoutDashboard, DollarSign } from 'lucide-react';

export default function AdminHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    // Clear session cookie
    document.cookie = 'admin-session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/admin/login');
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-white border-b border-gray-200 py-4 px-6 mb-8 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="CyberRecovery Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="text-xl font-bold gradient-text">CyberRecovery</span>
            <span className="text-sm text-gray-600">Admin</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-red-200 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
        <nav className="flex space-x-4">
          <Link
            href="/admin/dashboard"
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isActive('/admin/dashboard')
                ? 'bg-primary-100 text-primary-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/admin/scam-types"
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isActive('/admin/scam-types')
                ? 'bg-primary-100 text-primary-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Scam Types</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

