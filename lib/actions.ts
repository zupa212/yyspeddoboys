"use server";

import { partnerFormSchema, riderFormSchema } from "@/lib/schemas";
import type { PartnerFormData, RiderFormData } from "@/lib/schemas";

export type FormState = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
};

export async function submitPartnerLead(
    _prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const raw = {
        fullName: formData.get("fullName"),
        businessName: formData.get("businessName"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        city: formData.get("city"),
        locationsNum: formData.get("locationsNum"),
        deliveryVolume: formData.get("deliveryVolume"),
        currentSetup: formData.get("currentSetup"),
        notes: formData.get("notes"),
    };

    const result = partnerFormSchema.safeParse(raw);

    if (!result.success) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors: result.error.flatten().fieldErrors as Record<string, string[]>,
        };
    }

    const data: PartnerFormData = result.data;

    try {
        // ===== SUPABASE INSERT (uncomment when credentials are set) =====
        // import { createClient } from '@supabase/supabase-js';
        // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
        // const { error } = await supabase.from('partner_leads').insert({
        //   full_name: data.fullName,
        //   business_name: data.businessName,
        //   phone: data.phone,
        //   email: data.email,
        //   city: data.city,
        //   locations_num: data.locationsNum,
        //   delivery_volume: data.deliveryVolume,
        //   current_setup: data.currentSetup,
        //   notes: data.notes,
        // });
        // if (error) throw error;

        // ===== RESEND EMAIL (uncomment when API key is set) =====
        // import { Resend } from 'resend';
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'SpeedBoys <noreply@speedboys.gr>',
        //   to: ['team@speedboys.gr'],
        //   subject: `New Partner Lead: ${data.businessName}`,
        //   html: `<h2>New Partner Lead</h2>
        //     <p><strong>Name:</strong> ${data.fullName}</p>
        //     <p><strong>Business:</strong> ${data.businessName}</p>
        //     <p><strong>Phone:</strong> ${data.phone}</p>
        //     <p><strong>Email:</strong> ${data.email}</p>
        //     <p><strong>City:</strong> ${data.city || 'N/A'}</p>
        //     <p><strong>Locations:</strong> ${data.locationsNum || 'N/A'}</p>
        //     <p><strong>Volume:</strong> ${data.deliveryVolume || 'N/A'}</p>
        //     <p><strong>Setup:</strong> ${data.currentSetup || 'N/A'}</p>
        //     <p><strong>Notes:</strong> ${data.notes || 'N/A'}</p>`,
        // });

        // For now, just log (remove in production)
        console.log("[Partner Lead]", data);

        return {
            success: true,
            message: "Application submitted successfully!",
        };
    } catch (error) {
        console.error("[Partner Lead Error]", error);
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}

export async function submitRiderLead(
    _prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const raw = {
        fullName: formData.get("fullName"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        city: formData.get("city"),
        vehicleType: formData.get("vehicleType"),
        licenseStatus: formData.get("licenseStatus"),
        availability: formData.get("availability"),
        experience: formData.get("experience"),
        notes: formData.get("notes"),
    };

    const result = riderFormSchema.safeParse(raw);

    if (!result.success) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors: result.error.flatten().fieldErrors as Record<string, string[]>,
        };
    }

    const data: RiderFormData = result.data;

    try {
        // ===== SUPABASE INSERT (uncomment when credentials are set) =====
        // import { createClient } from '@supabase/supabase-js';
        // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
        // const { error } = await supabase.from('rider_leads').insert({
        //   full_name: data.fullName,
        //   phone: data.phone,
        //   email: data.email,
        //   city: data.city,
        //   vehicle_type: data.vehicleType,
        //   license_status: data.licenseStatus,
        //   availability: data.availability,
        //   experience: data.experience,
        //   notes: data.notes,
        // });
        // if (error) throw error;

        // ===== RESEND EMAIL (uncomment when API key is set) =====
        // import { Resend } from 'resend';
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'SpeedBoys <noreply@speedboys.gr>',
        //   to: ['team@speedboys.gr'],
        //   subject: `New Rider Application: ${data.fullName}`,
        //   html: `<h2>New Rider Application</h2>
        //     <p><strong>Name:</strong> ${data.fullName}</p>
        //     <p><strong>Phone:</strong> ${data.phone}</p>
        //     <p><strong>Email:</strong> ${data.email}</p>
        //     <p><strong>City:</strong> ${data.city || 'N/A'}</p>
        //     <p><strong>Vehicle:</strong> ${data.vehicleType || 'N/A'}</p>
        //     <p><strong>License:</strong> ${data.licenseStatus || 'N/A'}</p>
        //     <p><strong>Availability:</strong> ${data.availability || 'N/A'}</p>
        //     <p><strong>Experience:</strong> ${data.experience || 'N/A'}</p>
        //     <p><strong>Notes:</strong> ${data.notes || 'N/A'}</p>`,
        // });

        console.log("[Rider Lead]", data);

        return {
            success: true,
            message: "Application submitted successfully!",
        };
    } catch (error) {
        console.error("[Rider Lead Error]", error);
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}
