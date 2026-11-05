'use client';
import { createClient } from '@/lib/supabase/client';
export default function SignOutButton() {
  return <button className="signout-button" onClick={async()=>{const supabase=createClient(); await supabase.auth.signOut(); window.location.href='/admin/login';}}>Sign out</button>;
}
