import { NextResponse } from "next/server";

const users = [
  { email: "sushobhitsaxena99@gmail.com", password: "1234" },
  { email: "admin@example.com", password: "admin" },
  { email: "user@example.com", password: "password" },
];

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return NextResponse.json(
      { error: "❌ Invalid email or password" },
      { status: 401 }
    );
  }

  return NextResponse.json({ success: true, email: user.email });
}
