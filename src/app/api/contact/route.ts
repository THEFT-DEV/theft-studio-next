import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Send email using your preferred service
    // Options:
    // 1. Resend API: https://resend.com/docs/send-with-nextjs
    // 2. SendGrid API: https://sendgrid.com/docs/api-reference/
    // 3. Nodemailer with SMTP
    //
    // For now, we'll log the submission and return success
    // Replace this with actual email sending in production

    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending success
    // In production, you would actually send the email here
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
