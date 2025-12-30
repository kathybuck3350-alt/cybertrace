import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ScamType from '@/models/ScamType';

// GET all scam types (public endpoint for frontend)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const scamTypes = await ScamType.find({}).sort({ createdAt: 1 });
    return NextResponse.json({ scamTypes });
  } catch (error: any) {
    console.error('Error fetching scam types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch scam types' },
      { status: 500 }
    );
  }
}

