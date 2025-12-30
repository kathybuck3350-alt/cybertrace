'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminHeader from '@/components/admin/AdminHeader';
import { Save, Loader2, DollarSign, TrendingUp } from 'lucide-react';

interface ScamType {
  _id: string;
  title: string;
  description: string;
  avgRecovery: string;
  successRate: string;
  recoveryMethods: string[];
  icon: string;
  color: string;
}

export default function ScamTypesPage() {
  const router = useRouter();
  const [scamTypes, setScamTypes] = useState<ScamType[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState<{ avgRecovery: string; successRate: string }>({
    avgRecovery: '',
    successRate: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchScamTypes();
  }, []);

  const fetchScamTypes = async () => {
    try {
      const response = await fetch('/api/admin/scam-types');
      if (!response.ok) {
        if (response.status === 401) {
          router.push('/admin/login');
          return;
        }
        throw new Error('Failed to fetch scam types');
      }
      const data = await response.json();
      const types = data.scamTypes || [];
      setScamTypes(types);
      
      // Initialize database if empty
      if (types.length === 0) {
        await initScamTypes();
      }
    } catch (error) {
      console.error('Error fetching scam types:', error);
      setError('Failed to load scam types');
    } finally {
      setLoading(false);
    }
  };

  const initScamTypes = async () => {
    try {
      const response = await fetch('/api/admin/scam-types/init', {
        method: 'POST',
      });
      if (response.ok) {
        const data = await response.json();
        setScamTypes(data.scamTypes || []);
      }
    } catch (error) {
      console.error('Error initializing scam types:', error);
    }
  };

  const handleEdit = (scamType: ScamType) => {
    setEditing(scamType._id);
    setFormData({
      avgRecovery: scamType.avgRecovery,
      successRate: scamType.successRate,
    });
    setError('');
    setSuccess('');
  };

  const handleCancel = () => {
    setEditing(null);
    setFormData({ avgRecovery: '', successRate: '' });
    setError('');
    setSuccess('');
  };

  const handleSave = async (id: string) => {
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`/api/admin/scam-types/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update scam type');
      }

      const data = await response.json();
      
      // Update the scam type in the list
      setScamTypes((prev) =>
        prev.map((st) => (st._id === id ? data.scamType : st))
      );

      setSuccess('Scam type updated successfully!');
      setEditing(null);
      setFormData({ avgRecovery: '', successRate: '' });

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error('Error updating scam type:', error);
      setError('Failed to update scam type. Please try again.');
    } finally {
      setSaving(false);
    }
  };

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
            <h1 className="text-4xl font-bold gradient-text mb-2">Manage Scam Types</h1>
            <p className="text-gray-600">Edit prices and success rates for each scam type</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              {success}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scamTypes.map((scamType) => (
              <div
                key={scamType._id}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${scamType.color} mb-4`}>
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{scamType.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{scamType.description}</p>

                {editing === scamType._id ? (
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Average Recovery
                      </label>
                      <input
                        type="text"
                        value={formData.avgRecovery}
                        onChange={(e) =>
                          setFormData({ ...formData, avgRecovery: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        placeholder="$45,000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Success Rate
                      </label>
                      <input
                        type="text"
                        value={formData.successRate}
                        onChange={(e) =>
                          setFormData({ ...formData, successRate: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        placeholder="78%"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSave(scamType._id)}
                        disabled={saving}
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {saving ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <Save className="w-4 h-4 mr-2" />
                            Save
                          </>
                        )}
                      </button>
                      <button
                        onClick={handleCancel}
                        disabled={saving}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500 font-medium">Avg. Recovery</span>
                      <span className="text-sm font-bold text-gray-900">{scamType.avgRecovery}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs text-gray-500 font-medium">Success Rate</span>
                      <span className="text-sm font-bold text-primary-600">{scamType.successRate}</span>
                    </div>
                    <button
                      onClick={() => handleEdit(scamType)}
                      className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Edit
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {scamTypes.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No scam types found.</p>
              <button
                onClick={initScamTypes}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Initialize Scam Types
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

