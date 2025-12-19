import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../lib/db';
import Complaint from '../../models/Complaint';

export async function GET() {
  try {
    await connectDB();
    const complaints = await Complaint.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ complaints });
  } catch (err) {
    console.error('GET /api/complaints error', err);
    return NextResponse.json(
      { error: 'Failed to load complaints' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { userId, title, description, imageUrl, location, projectName } = body;

    if (!userId || !title || !description) {
      return NextResponse.json(
        { error: 'userId, title and description are required' },
        { status: 400 }
      );
    }

    const complaint = await Complaint.create({
      userId,
      title,
      description,
      imageUrl: imageUrl || '',
      location: location || 'Kolkata',
      projectName: projectName || '',
    });

    return NextResponse.json({ complaint }, { status: 201 });
  } catch (err) {
    console.error('POST /api/complaints error', err);
    return NextResponse.json(
      { error: 'Failed to create complaint' },
      { status: 500 }
    );
  }
}
