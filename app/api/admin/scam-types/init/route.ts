import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import ScamType from '@/models/ScamType';
import { requireAuth } from '@/lib/auth';

// POST initialize scam types (only run once to seed the database)
export async function POST(request: NextRequest) {
  try {
    await requireAuth();
    await connectDB();

    // Check if scam types already exist
    const existingCount = await ScamType.countDocuments();
    if (existingCount > 0) {
      return NextResponse.json(
        { message: 'Scam types already initialized', count: existingCount },
        { status: 200 }
      );
    }

    const defaultScamTypes = [
      {
        title: 'Crypto & Investment Scams',
        description: 'Fraudulent cryptocurrency investments and fake trading platforms',
        recoveryMethods: ['Blockchain transaction tracing', 'Exchange cooperation', 'Legal action'],
        avgRecovery: '$45,000',
        successRate: '78%',
        icon: 'TrendingUp',
        color: 'from-blue-500 to-blue-600',
      },
      {
        title: 'Romance Scams',
        description: 'Scammers using fake identities to build relationships and steal money',
        recoveryMethods: ['Communication analysis', 'Identity verification', 'Payment tracing'],
        avgRecovery: '$15,000',
        successRate: '65%',
        icon: 'Heart',
        color: 'from-pink-500 to-pink-600',
      },
      {
        title: 'Financial Scams',
        description: 'Fraudulent financial schemes, Ponzi schemes, and investment fraud',
        recoveryMethods: ['Bank account tracing', 'Transaction analysis', 'Asset recovery'],
        avgRecovery: '$85,000',
        successRate: '72%',
        icon: 'DollarSign',
        color: 'from-green-500 to-green-600',
      },
      {
        title: 'Estate Scams',
        description: 'Fraudulent inheritance schemes and estate-related fraud',
        recoveryMethods: ['Document verification', 'Legal investigation', 'Asset recovery'],
        avgRecovery: '$120,000',
        successRate: '70%',
        icon: 'Gift',
        color: 'from-purple-500 to-purple-600',
      },
      {
        title: 'Government Impersonation',
        description: 'Scammers pretending to be government officials to extract money',
        recoveryMethods: ['Identity verification', 'Communication tracing', 'Legal action'],
        avgRecovery: '$25,000',
        successRate: '68%',
        icon: 'UserCheck',
        color: 'from-red-500 to-red-600',
      },
      {
        title: 'Lottery Scams',
        description: 'Fake lottery winnings requiring upfront fees or personal information',
        recoveryMethods: ['Payment method tracing', 'Communication analysis', 'Legal recovery'],
        avgRecovery: '$8,000',
        successRate: '62%',
        icon: 'Ticket',
        color: 'from-yellow-500 to-yellow-600',
      },
      {
        title: 'Employment Scams',
        description: 'Fake job offers requiring upfront payments or personal information',
        recoveryMethods: ['Company verification', 'Payment tracing', 'Identity protection'],
        avgRecovery: '$12,000',
        successRate: '60%',
        icon: 'Briefcase',
        color: 'from-indigo-500 to-indigo-600',
      },
      {
        title: 'Scholarship Scams',
        description: 'Fraudulent scholarship offers requiring fees or personal information',
        recoveryMethods: ['Program verification', 'Payment recovery', 'Documentation'],
        avgRecovery: '$5,000',
        successRate: '58%',
        icon: 'GraduationCap',
        color: 'from-teal-500 to-teal-600',
      },
    ];

    const created = await ScamType.insertMany(defaultScamTypes);

    return NextResponse.json({
      message: 'Scam types initialized successfully',
      count: created.length,
      scamTypes: created,
    });
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Error initializing scam types:', error);
    return NextResponse.json(
      { error: 'Failed to initialize scam types' },
      { status: 500 }
    );
  }
}

