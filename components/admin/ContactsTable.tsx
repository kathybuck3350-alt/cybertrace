'use client';

import { useEffect, useState } from 'react';
import { Trash2, Edit2, Mail, Calendar, AlertCircle, CheckCircle2, Clock, Flag, Eye } from 'lucide-react';
import { format } from 'date-fns';

interface Contact {
  _id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  aiSentiment?: string;
  aiPriority?: string;
  aiInsights?: string;
  adminNotes?: string;
  createdAt: string;
}

const statusColors: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700 border-blue-200',
  'in-progress': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  resolved: 'bg-green-100 text-green-700 border-green-200',
  closed: 'bg-gray-100 text-gray-700 border-gray-200',
  flagged: 'bg-red-100 text-red-700 border-red-200',
};

const statusIcons: Record<string, any> = {
  new: Clock,
  'in-progress': AlertCircle,
  resolved: CheckCircle2,
  closed: CheckCircle2,
  flagged: Flag,
};

export default function ContactsTable() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [editStatus, setEditStatus] = useState<string>('');
  const [editNotes, setEditNotes] = useState<string>('');

  useEffect(() => {
    fetchContacts();
  }, [statusFilter]);

  const fetchContacts = async () => {
    try {
      const url = statusFilter === 'all' 
        ? '/api/admin/contacts' 
        : `/api/admin/contacts?status=${statusFilter}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setContacts(data.contacts || []);
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const response = await fetch(`/api/admin/contacts?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchContacts();
      }
    } catch (error) {
      console.error('Failed to delete contact:', error);
      alert('Failed to delete contact');
    }
  };

  const handleUpdateStatus = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: editStatus,
          adminNotes: editNotes,
        }),
      });
      if (response.ok) {
        setSelectedContact(null);
        fetchContacts();
      }
    } catch (error) {
      console.error('Failed to update contact:', error);
      alert('Failed to update contact');
    }
  };

  const openEditModal = (contact: Contact) => {
    setSelectedContact(contact);
    setEditStatus(contact.status);
    setEditNotes(contact.adminNotes || '');
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
        <div className="text-center text-gray-600">Loading contacts...</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Contacts</h2>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
        >
          <option value="all">All Statuses</option>
          <option value="new">New</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
          <option value="flagged">Flagged</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Email</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Subject</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Priority</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              const StatusIcon = statusIcons[contact.status] || Clock;
              return (
                <tr key={contact._id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900">{contact.fullName}</td>
                  <td className="py-3 px-4 text-gray-600">{contact.email}</td>
                  <td className="py-3 px-4 text-gray-700">{contact.subject}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold border ${statusColors[contact.status] || statusColors.new}`}>
                      <StatusIcon className="w-3 h-3" />
                      <span>{contact.status}</span>
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {contact.aiPriority && (
                      <span className="text-xs text-gray-600 capitalize">{contact.aiPriority}</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {format(new Date(contact.createdAt), 'MMM d, yyyy')}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => openEditModal(contact)}
                        className="p-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {contacts.length === 0 && (
          <div className="text-center py-12 text-gray-600">No contacts found</div>
        )}
      </div>

      {/* Edit Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Edit Contact</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                  {selectedContact.fullName}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                  {selectedContact.email}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                  {selectedContact.subject}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 min-h-[100px]">
                  {selectedContact.message}
                </div>
              </div>
              {selectedContact.aiInsights && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">AI Insights</label>
                  <div className="px-4 py-2 bg-accent-50 border border-accent-200 rounded-lg text-accent-700">
                    {selectedContact.aiInsights}
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                >
                  <option value="new">New</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                  <option value="flagged">Flagged</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Admin Notes</label>
                <textarea
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 resize-none"
                  placeholder="Add notes..."
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4">
              <button
                onClick={() => setSelectedContact(null)}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdateStatus(selectedContact._id)}
                className="px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg text-white hover:from-primary-500 hover:to-secondary-500 transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

