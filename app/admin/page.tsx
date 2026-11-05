import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import SignOutButton from '@/components/SignOutButton';

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');
  const { data: leads, error } = await supabase.from('customer_leads').select('id,full_name,mobile_number,city,interest,lead_status,created_at').order('created_at', { ascending: false }).limit(100);
  const rows = leads ?? [];
  return <main className="dashboard-page"><header className="dashboard-header"><a className="brand" href="/"><span className="brand-mark">A</span><span>ANAS FINANCIAL<small>LEAD MANAGEMENT</small></span></a><div className="dashboard-user">{user.email}<SignOutButton/></div></header><section className="dashboard-content"><p className="eyebrow">PRIVATE WORKSPACE</p><h1>Customer enquiries</h1><p className="dashboard-subtitle">Review and follow up on recent customer requests.</p><div className="metric-grid"><article><span>Total enquiries shown</span><strong>{rows.length}</strong></article><article><span>New enquiries</span><strong>{rows.filter(x=>x.lead_status==='New').length}</strong></article></div><div className="table-wrap"><table><thead><tr><th>Customer</th><th>Mobile</th><th>City</th><th>Interest</th><th>Status</th><th>Received</th></tr></thead><tbody>{rows.map(lead=><tr key={lead.id}><td>{lead.full_name}</td><td><a href={`tel:${lead.mobile_number}`}>{lead.mobile_number}</a></td><td>{lead.city || '—'}</td><td>{lead.interest}</td><td><span className="status-pill">{lead.lead_status}</span></td><td>{new Date(lead.created_at).toLocaleDateString('en-IN')}</td></tr>)}</tbody></table>{!rows.length && <p className="empty-state">{error ? 'Unable to load enquiries. Check your database setup and access policies.' : 'No enquiries received yet.'}</p>}</div></section></main>;
}
