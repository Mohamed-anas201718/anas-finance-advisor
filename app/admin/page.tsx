import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import SignOutButton from '@/components/SignOutButton';
import AdminDashboardClient from '@/components/AdminDashboardClient';

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  const { data: leads } = await supabase
    .from('customer_leads')
    .select('id, full_name, mobile_number, city, interest, lead_status, created_at')
    .order('created_at', { ascending: false });

  const rows = leads ?? [];

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <a className="brand" href="/">
          <span className="brand-mark">A</span>
          <span>
            ANAS FINANCIAL
            <small>TATA AIA ADVISOR DASHBOARD</small>
          </span>
        </a>
        <div className="dashboard-user">
          <span className="user-email-badge">{user.email}</span>
          <SignOutButton />
        </div>
      </header>

      <section className="dashboard-content">
        <div className="dashboard-title-row">
          <div>
            <p className="eyebrow">PORTAL OVERVIEW</p>
            <h1>Customer Enquiries &amp; Leads</h1>
            <p className="dashboard-subtitle">
              Monitor, filter by date, call clients, and manage incoming consultation requests.
            </p>
          </div>
        </div>

        <AdminDashboardClient initialLeads={rows} userEmail={user.email || ''} />
      </section>
    </main>
  );
}
