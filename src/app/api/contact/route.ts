import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phoneNumber, address, message } = await req.json();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_TO!,
      to: process.env.RESEND_INBOX!,
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

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 500 });
    }
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
