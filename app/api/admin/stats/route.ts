import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import Newsletter from '@/models/Newsletter';
import { requireAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await requireAuth();
    await connectDB();

    // Contact statistics
    const totalContacts = await Contact.countDocuments();
    const contactsByStatus = await Contact.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);
    
    const contactsByPriority = await Contact.aggregate([
      { $group: { _id: '$aiPriority', count: { $sum: 1 } } },
    ]);

    const contactsBySentiment = await Contact.aggregate([
      { $group: { _id: '$aiSentiment', count: { $sum: 1 } } },
    ]);

    const recentContacts = await Contact.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }, // Last 7 days
    });

    // Newsletter statistics
    const totalSubscribers = await Newsletter.countDocuments({ subscribed: true });
    const newSubscribers = await Newsletter.countDocuments({
      subscribed: true,
      subscribedAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }, // Last 30 days
    });

    // Format status counts
    const statusCounts: Record<string, number> = {};
    contactsByStatus.forEach((item: any) => {
      statusCounts[item._id || 'unknown'] = item.count;
    });

    const priorityCounts: Record<string, number> = {};
    contactsByPriority.forEach((item: any) => {
      priorityCounts[item._id || 'unknown'] = item.count;
    });

    const sentimentCounts: Record<string, number> = {};
    contactsBySentiment.forEach((item: any) => {
      sentimentCounts[item._id || 'unknown'] = item.count;
    });

    return NextResponse.json({
      contacts: {
        total: totalContacts,
        recent: recentContacts,
        byStatus: statusCounts,
        byPriority: priorityCounts,
        bySentiment: sentimentCounts,
      },
      newsletter: {
        total: totalSubscribers,
        new: newSubscribers,
      },
    });
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Get stats error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}



