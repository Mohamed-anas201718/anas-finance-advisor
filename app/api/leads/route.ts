import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const full_name = String(body.full_name ?? '').trim();
    const mobile_number = String(body.mobile_number ?? '').trim();
    const city = String(body.city ?? '').trim();
    const interest = String(body.interest ?? '').trim();
    const consent = body.consent === 'true' || body.consent === true;
    const allowed = [
      'Life Protection',
      'Wealth Planning',
      'Child Future Planning',
      'Retirement Planning',
      'Health & Critical Illness',
      'Tax Saving Solutions',
      'Need Financial Guidance'
    ];

    if (full_name.length < 2 || full_name.length > 80) return NextResponse.json({ error: 'Please enter a valid name.' }, { status: 400 });
    if (!/^[6-9]\d{9}$/.test(mobile_number)) return NextResponse.json({ error: 'Please enter a valid 10-digit Indian mobile number.' }, { status: 400 });
    if (city.length > 80 || !allowed.includes(interest) || !consent) return NextResponse.json({ error: 'Please check your details and consent.' }, { status: 400 });

    const supabase = await createClient();
    const { error } = await supabase.from('customer_leads').insert({ full_name, mobile_number, city, interest, consent, lead_status: 'New' });
    if (error) return NextResponse.json({ error: 'We could not save your enquiry. Please try again later.' }, { status: 500 });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
