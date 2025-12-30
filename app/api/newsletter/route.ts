import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      if (existing.subscribed) {
        return NextResponse.json(
          { message: 'Email already subscribed' },
          { status: 200 }
        );
      } else {
        // Resubscribe
        existing.subscribed = true;
        existing.subscribedAt = new Date();
        existing.unsubscribedAt = undefined;
        await existing.save();
        return NextResponse.json(
          { message: 'Successfully resubscribed' },
          { status: 200 }
        );
      }
    }

    // Create new subscription
    await Newsletter.create({
      email,
      subscribed: true,
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}



