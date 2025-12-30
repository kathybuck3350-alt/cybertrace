import { cookies } from 'next/headers';

export async function getAdminSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('admin-session')?.value;

  if (!sessionToken) {
    return null;
  }

  try {
    const sessionData = JSON.parse(Buffer.from(sessionToken, 'base64').toString());
    // Verify session is valid (has authenticated flag)
    if (sessionData.authenticated === true) {
      return sessionData;
    }
    return null;
  } catch (error) {
    return null;
  }
}

export async function requireAuth() {
  const session = await getAdminSession();
  if (!session || !session.authenticated) {
    throw new Error('Unauthorized');
  }
  return session;
}

