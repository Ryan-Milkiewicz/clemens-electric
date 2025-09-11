"use server";
import { flattenError, z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY!);

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  address: z.string().min(1, "Address is required"),
  message: z.string().optional(),
});

export type State = {
  errors?: {
    fullName?: string[];
    email?: string[];
    phoneNumber?: string[];
    address?: string[];
    message?: string[];
  };
  message?: string | null;
  status?: "success" | "error";
};

export async function sendEmail(
  previousState: State,
  formData: FormData
): Promise<State> {
  // Validate form using Zod
  const validatedFields = contactFormSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    address: formData.get("address"),
    message: formData.get("message"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: flattenError(validatedFields.error).fieldErrors,
      // message: "Missing Fields.",
      status: "error",
    };
  }

  // Prepare data for email send out
  const { fullName, email, phoneNumber, address, message } =
    validatedFields.data;

  // Send email via Resend
  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_TO!,
      to: [process.env.RESEND_INBOX!],
      replyTo: [email],
      subject: "New Info Request",
      react: EmailTemplate({
        fullName,
        email,
        phoneNumber,
        address,
        message,
      }),
    });
    return { message: "Email Send Successfully.", status: "success" };
  } catch (error) {
    return { message: "Email Error. Email Failed to send.", status: "error" };
  }
}
