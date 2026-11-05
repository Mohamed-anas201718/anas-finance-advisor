'use client';

import { FormEvent, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function AdminLogin() {
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError('');
    const data = new FormData(event.currentTarget);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({ email: String(data.get('email')), password: String(data.get('password')) });
      if (error) throw error;
      window.location.href = '/admin';
    } catch (e) { setError(e instanceof Error ? e.message : 'Unable to sign in.'); }
    finally { setBusy(false); }
  }
  return <main className="auth-page"><form className="auth-card" onSubmit={login}><a className="brand" href="/"><span className="brand-mark">A</span><span>ANAS FINANCIAL<small>PRIVATE ADMIN</small></span></a><h1>Admin sign in</h1><p>Sign in to manage customer enquiries.</p><label>Email<input name="email" type="email" required autoComplete="username"/></label><label>Password<input name="password" type="password" required autoComplete="current-password"/></label><button className="button button-primary" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button><p role="alert" className="form-status">{error}</p><a className="text-link" href="/">← Back to website</a></form></main>;
}
