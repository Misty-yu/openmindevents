import { supabase } from './supabase';
import { uploadSpeakerPhoto, uploadSponsorLogo } from './storage';
import {
  Speaker,
  Sponsor,
  EventRegistration,
  ContactSubmission,
} from './types';

// ============= SPEAKERS =============

export async function getSpeakers(): Promise<Speaker[]> {
  const { data, error } = await supabase
    .from('speakers')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getFeaturedSpeakers(): Promise<Speaker[]> {
  const { data, error } = await supabase
    .from('speakers')
    .select('*')
    .eq('is_featured', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getSpeaker(id: string): Promise<Speaker | null> {
  const { data, error } = await supabase
    .from('speakers')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function createSpeaker(speaker: Omit<Speaker, 'id' | 'created_at' | 'updated_at'>): Promise<Speaker> {
  const { data, error } = await supabase
    .from('speakers')
    .insert([speaker])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function createSpeakerWithPhoto(
  speaker: Omit<Speaker, 'id' | 'created_at' | 'updated_at' | 'photo_url'>,
  photoFile?: File
): Promise<Speaker> {
  // Create speaker first
  const { data, error } = await supabase
    .from('speakers')
    .insert([speaker])
    .select()
    .single();

  if (error) throw error;

  // Upload photo if provided
  if (photoFile && data.id) {
    try {
      const photoUrl = await uploadSpeakerPhoto(photoFile, data.id);

      // Update speaker with photo URL
      const { data: updated, error: updateError } = await supabase
        .from('speakers')
        .update({ photo_url: photoUrl, updated_at: new Date().toISOString() })
        .eq('id', data.id)
        .select()
        .single();

      if (updateError) throw updateError;
      return updated;
    } catch (uploadError) {
      // Photo upload failed, but speaker was created
      console.error('Photo upload failed:', uploadError);
      return data;
    }
  }

  return data;
}

// ============= SPONSORS =============

export async function getSponsors(): Promise<Sponsor[]> {
  const { data, error } = await supabase
    .from('sponsors')
    .select('*')
    .eq('is_active', true)
    .order('tier', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getSponsorsByTier(tier: string): Promise<Sponsor[]> {
  const { data, error } = await supabase
    .from('sponsors')
    .select('*')
    .eq('tier', tier)
    .eq('is_active', true);

  if (error) throw error;
  return data || [];
}

export async function createSponsor(sponsor: Omit<Sponsor, 'id' | 'created_at' | 'updated_at'>): Promise<Sponsor> {
  const { data, error } = await supabase
    .from('sponsors')
    .insert([sponsor])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function createSponsorWithLogo(
  sponsor: Omit<Sponsor, 'id' | 'created_at' | 'updated_at' | 'logo_url'>,
  logoFile?: File
): Promise<Sponsor> {
  // Create sponsor first
  const { data, error } = await supabase
    .from('sponsors')
    .insert([sponsor])
    .select()
    .single();

  if (error) throw error;

  // Upload logo if provided
  if (logoFile && data.id) {
    try {
      const logoUrl = await uploadSponsorLogo(logoFile, data.id);

      // Update sponsor with logo URL
      const { data: updated, error: updateError } = await supabase
        .from('sponsors')
        .update({ logo_url: logoUrl, updated_at: new Date().toISOString() })
        .eq('id', data.id)
        .select()
        .single();

      if (updateError) throw updateError;
      return updated;
    } catch (uploadError) {
      // Logo upload failed, but sponsor was created
      console.error('Logo upload failed:', uploadError);
      return data;
    }
  }

  return data;
}

// ============= EVENT REGISTRATIONS =============

export async function registerForEvent(
  registration: Omit<EventRegistration, 'id' | 'created_at' | 'updated_at' | 'status'>
): Promise<EventRegistration> {
  const { data, error } = await supabase
    .from('event_registrations')
    .insert([{ ...registration, status: 'registered' }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getRegistrations(status?: string): Promise<EventRegistration[]> {
  let query = supabase.from('event_registrations').select('*');

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getRegistrationCount(): Promise<number> {
  const { count, error } = await supabase
    .from('event_registrations')
    .select('*', { count: 'exact', head: true });

  if (error) throw error;
  return count || 0;
}

// ============= CONTACT SUBMISSIONS =============

export async function submitContact(
  contact: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at' | 'status'>
): Promise<ContactSubmission> {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([{ ...contact, status: 'new' }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getContactSubmissions(status?: string): Promise<ContactSubmission[]> {
  let query = supabase.from('contact_submissions').select('*');

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function updateContactStatus(
  id: string,
  status: 'new' | 'reviewed' | 'responded'
): Promise<ContactSubmission> {
  const { data, error } = await supabase
    .from('contact_submissions')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
