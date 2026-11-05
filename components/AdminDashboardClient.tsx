'use client';

import { useState, useMemo } from 'react';
import { Phone, Trash2, Calendar, Search, Filter, RefreshCw, CheckCircle, Clock } from 'lucide-react';

interface Lead {
  id: string;
  full_name: string;
  mobile_number: string;
  city: string;
  interest: string;
  lead_status: string;
  created_at: string;
}

interface AdminDashboardClientProps {
  initialLeads: Lead[];
  userEmail: string;
}

export default function AdminDashboardClient({ initialLeads, userEmail }: AdminDashboardClientProps) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Statistics Calculation
  const stats = useMemo(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    
    const todayCount = leads.filter(l => {
      const leadDateStr = new Date(l.created_at).toISOString().split('T')[0];
      return leadDateStr === todayStr;
    }).length;

    const newCount = leads.filter(l => l.lead_status === 'New').length;

    return {
      total: leads.length,
      today: todayCount,
      newLeads: newCount,
    };
  }, [leads]);

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter(lead => {
      // Search matching (name, mobile, city, interest)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        lead.full_name.toLowerCase().includes(q) ||
        lead.mobile_number.includes(q) ||
        (lead.city && lead.city.toLowerCase().includes(q)) ||
        lead.interest.toLowerCase().includes(q);

      // Status filter
      const matchesStatus = statusFilter === 'All' || lead.lead_status === statusFilter;

      // Date Range Filter
      const leadDate = new Date(lead.created_at);
      let matchesDate = true;

      if (startDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        if (leadDate < start) matchesDate = false;
      }

      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        if (leadDate > end) matchesDate = false;
      }

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [leads, searchQuery, statusFilter, startDate, endDate]);

  // Delete Action
  async function handleDelete(id: string, name: string) {
    const confirmDelete = window.confirm(`Are you sure you want to delete the enquiry from "${name}"?`);
    if (!confirmDelete) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/leads/delete?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete lead');
      setLeads(prev => prev.filter(l => l.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error deleting lead');
    } finally {
      setDeletingId(null);
    }
  }

  // Clear filters
  const resetFilters = () => {
    setSearchQuery('');
    setStartDate('');
    setEndDate('');
    setStatusFilter('All');
  };

  return (
    <div className="admin-container">
      {/* Metric Cards Grid */}
      <div className="metric-grid-pro">
        <div className="metric-card-pro">
          <div className="metric-icon-pro icon-blue">
            <Filter size={22} />
          </div>
          <div>
            <span className="metric-label-pro">Total Enquiries</span>
            <strong className="metric-val-pro">{stats.total}</strong>
          </div>
        </div>

        <div className="metric-card-pro card-today">
          <div className="metric-icon-pro icon-emerald">
            <Clock size={22} />
          </div>
          <div>
            <span className="metric-label-pro">Today&apos;s Enquiries</span>
            <strong className="metric-val-pro text-emerald">{stats.today}</strong>
          </div>
        </div>

        <div className="metric-card-pro">
          <div className="metric-icon-pro icon-red">
            <CheckCircle size={22} />
          </div>
          <div>
            <span className="metric-label-pro">New / Uncontacted</span>
            <strong className="metric-val-pro text-red">{stats.newLeads}</strong>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="admin-filter-bar">
        <div className="search-input-box">
          <Search size={16} className="text-muted" />
          <input
            type="text"
            placeholder="Search by name, phone, city, or plan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="admin-search-input"
          />
        </div>

        <div className="date-filter-group">
          <div className="date-input-wrap">
            <Calendar size={14} className="text-muted" />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              title="From date"
              className="admin-date-input"
            />
          </div>
          <span className="date-sep">to</span>
          <div className="date-input-wrap">
            <Calendar size={14} className="text-muted" />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              title="To date"
              className="admin-date-input"
            />
          </div>
        </div>

        {(searchQuery || startDate || endDate || statusFilter !== 'All') && (
          <button onClick={resetFilters} className="btn-reset-filters">
            <RefreshCw size={13} />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Leads Table */}
      <div className="table-wrap-pro">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Direct Mobile</th>
              <th>City</th>
              <th>Interested Plan</th>
              <th>Status</th>
              <th>Date &amp; Time</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => {
              const formattedDate = new Date(lead.created_at).toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              });
              const formattedTime = new Date(lead.created_at).toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit'
              });

              return (
                <tr key={lead.id}>
                  <td>
                    <strong className="customer-name-text">{lead.full_name}</strong>
                  </td>
                  <td>
                    <a href={`tel:${lead.mobile_number}`} className="phone-click-link" title="Tap to call customer">
                      <Phone size={13} />
                      <span>{lead.mobile_number}</span>
                    </a>
                  </td>
                  <td>{lead.city || '—'}</td>
                  <td>
                    <span className="badge-interest">{lead.interest}</span>
                  </td>
                  <td>
                    <span className="status-pill-pro">{lead.lead_status}</span>
                  </td>
                  <td>
                    <div className="date-time-cell">
                      <span>{formattedDate}</span>
                      <small>{formattedTime}</small>
                    </div>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => handleDelete(lead.id, lead.full_name)}
                      disabled={deletingId === lead.id}
                      className="btn-delete-lead"
                      title="Delete this enquiry"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredLeads.length === 0 && (
          <div className="empty-state-pro">
            <p>No enquiries found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

