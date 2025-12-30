import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ScamType from '@/models/ScamType';
import { requireAuth } from '@/lib/auth';

// GET all scam types
export async function GET(request: NextRequest) {
  try {
    await requireAuth();
    await connectDB();

    const scamTypes = await ScamType.find({}).sort({ createdAt: 1 });
    return NextResponse.json({ scamTypes });
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error fetching scam types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch scam types' },
      { status: 500 }
    );
  }
}

// PUT update scam types (bulk update)
export async function PUT(request: NextRequest) {
  try {
    await requireAuth();
    await connectDB();

    const { scamTypes } = await request.json();

    if (!Array.isArray(scamTypes)) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    // Update each scam type
    const updatePromises = scamTypes.map((scamType: any) =>
      ScamType.findByIdAndUpdate(
        scamType._id,
        {
          avgRecovery: scamType.avgRecovery,
          successRate: scamType.successRate,
        },
        { new: true, runValidators: true }
      )
    );

    const updated = await Promise.all(updatePromises);

    return NextResponse.json({ scamTypes: updated });
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error updating scam types:', error);
    return NextResponse.json(
      { error: 'Failed to update scam types' },
      { status: 500 }
    );
  }
}

