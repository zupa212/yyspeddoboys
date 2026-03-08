import { z } from "zod";

export const partnerFormSchema = z.object({
    fullName: z
        .string()
        .min(2, "Full name must be at least 2 characters")
        .max(100, "Full name is too long"),
    businessName: z
        .string()
        .min(2, "Business name must be at least 2 characters")
        .max(200, "Business name is too long"),
    phone: z
        .string()
        .min(6, "Please enter a valid phone number")
        .max(20, "Phone number is too long"),
    email: z
        .string()
        .email("Please enter a valid email address"),
    city: z.string().max(100).optional().default(""),
    locationsNum: z.string().optional().default(""),
    deliveryVolume: z.string().optional().default(""),
    currentSetup: z.string().optional().default(""),
    notes: z.string().max(1000, "Notes must be under 1000 characters").optional().default(""),
});

export type PartnerFormData = z.infer<typeof partnerFormSchema>;

export const riderFormSchema = z.object({
    fullName: z
        .string()
        .min(2, "Full name must be at least 2 characters")
        .max(100, "Full name is too long"),
    phone: z
        .string()
        .min(6, "Please enter a valid phone number")
        .max(20, "Phone number is too long"),
    email: z
        .string()
        .email("Please enter a valid email address"),
    city: z.string().max(100).optional().default(""),
    vehicleType: z.string().optional().default(""),
    licenseStatus: z.string().optional().default(""),
    availability: z.string().optional().default(""),
    experience: z.string().optional().default(""),
    notes: z.string().max(1000, "Notes must be under 1000 characters").optional().default(""),
});

export type RiderFormData = z.infer<typeof riderFormSchema>;
