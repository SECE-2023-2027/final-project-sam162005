import { connectDB } from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { username, password } = await req.json();
  await connectDB();
  const userExist = await User.findOne({ username });
  if (userExist) return new Response("User already exists", { status: 400 });

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, password: hashedPassword });
  return new Response("User created", { status: 201 });
}
