import { connectDB } from '@/lib/db';
import Post from '@/models/Post';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import User from '@/models/User';

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { title, content } = await req.json();
  await connectDB();

  const user = await User.findOne({ username: session.user.name });
  if (!user) return new Response("User not found", { status: 404 });

  await Post.create({ title, content, author: user._id });

  return new Response("Post created", { status: 201 });
}
