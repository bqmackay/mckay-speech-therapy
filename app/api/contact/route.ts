import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const DATA_DIR = join(process.cwd(), 'data');
const DATA_FILE = join(DATA_DIR, 'contacts.json');

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  childAge: string;
  message: string;
  submittedAt: string;
}

async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

async function getSubmissions(): Promise<ContactSubmission[]> {
  try {
    const data = await readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSubmission(submission: ContactSubmission) {
  await ensureDataDir();
  const submissions = await getSubmissions();
  submissions.push(submission);
  await writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const submission: ContactSubmission = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      childAge: body.childAge || '',
      message: body.message,
      submittedAt: new Date().toISOString(),
    };

    await saveSubmission(submission);

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    console.error('Error saving contact submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save submission' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await getSubmissions();
    return NextResponse.json({ submissions });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
