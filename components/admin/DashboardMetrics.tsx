'use client';

import { useEffect, useState } from 'react';
import { Users, Mail, CheckCircle2, Clock } from 'lucide-react';

export default function DashboardMetrics() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12 text-gray-600">Loading metrics...</div>;
  }

  if (!stats) {
    return <div className="text-center py-12 text-red-600">Failed to load metrics</div>;
  }

  return (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-primary-600" />
            <div className="text-2xl font-bold text-gray-900">{stats.contacts.total}</div>
          </div>
          <div className="text-sm text-gray-600">Total Contacts</div>
          <div className="text-xs text-primary-600 mt-1">
            +{stats.contacts.recent} in last 7 days
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Mail className="w-8 h-8 text-secondary-600" />
            <div className="text-2xl font-bold text-gray-900">{stats.newsletter.total}</div>
          </div>
          <div className="text-sm text-gray-600">Newsletter Subscribers</div>
          <div className="text-xs text-secondary-600 mt-1">
            +{stats.newsletter.new} new this month
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8 text-accent-600" />
            <div className="text-2xl font-bold text-gray-900">
              {stats.contacts.byStatus?.new || 0}
            </div>
          </div>
          <div className="text-sm text-gray-600">New Contacts</div>
          <div className="text-xs text-accent-600 mt-1">Awaiting review</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
            <div className="text-2xl font-bold text-gray-900">
              {stats.contacts.byStatus?.resolved || 0}
            </div>
          </div>
          <div className="text-sm text-gray-600">Resolved</div>
          <div className="text-xs text-green-600 mt-1">Completed cases</div>
        </div>
      </div>

    </div>
  );
}

