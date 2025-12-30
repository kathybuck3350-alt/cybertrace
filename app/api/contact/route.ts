import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { analyzeContactForm } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { fullName, email, subject, message } = body;

    // Validate input
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // AI Analysis
    const aiAnalysis = await analyzeContactForm(message, subject);

    // Create contact entry
    const contact = await Contact.create({
      fullName,
      email,
      subject,
      message,
      status: 'new',
      aiSentiment: aiAnalysis.sentiment,
      aiPriority: aiAnalysis.priority,
      aiInsights: aiAnalysis.insights,
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully', contactId: contact._id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}



