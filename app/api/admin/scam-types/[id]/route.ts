import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ScamType from '@/models/ScamType';
import { requireAuth } from '@/lib/auth';


export const dynamic = "force-dynamic";

// PUT update a single scam type
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAuth();
    await connectDB();

    const { avgRecovery, successRate } = await request.json();

    if (!avgRecovery || !successRate) {
      return NextResponse.json(
        { error: 'avgRecovery and successRate are required' },
        { status: 400 }
      );
    }

    const scamType = await ScamType.findByIdAndUpdate(
      params.id,
      {
        avgRecovery,
        successRate,
      },
      { new: true, runValidators: true }
    );

    if (!scamType) {
      return NextResponse.json(
        { error: 'Scam type not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ scamType });
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error updating scam type:', error);
    return NextResponse.json(
      { error: 'Failed to update scam type' },
      { status: 500 }
    );
  }
}

