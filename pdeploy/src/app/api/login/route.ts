import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email === "admin@teste.com" && password === "123456") {
    return NextResponse.json({ message: "Login realizado com sucesso!" }, { status: 200 });
  }

  return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
}
