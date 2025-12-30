import { NextRequest, NextResponse } from 'next/server';

// Hardcoded admin credentials
const ADMIN_USERNAME = 'vico';
const ADMIN_PASSWORD = '1404174';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Support both 'email' and 'username' field names
    const username = body.username || email;

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Check credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Create a simple session token
      const sessionToken = Buffer.from(JSON.stringify({ username: ADMIN_USERNAME, authenticated: true })).toString('base64');

      const response = NextResponse.json(
        { message: 'Login successful', admin: { username: ADMIN_USERNAME } },
        { status: 200 }
      );

      // Set session cookie
      response.cookies.set('admin-session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error: any) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to login' },
      { status: 500 }
    );
  }
}

