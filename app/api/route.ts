import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
// To handle a GET request to /api
export async function GET(req:NextApiRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(req:NextApiRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
