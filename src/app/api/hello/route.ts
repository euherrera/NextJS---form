import { NextResponse } from 'next/server'
// export async function GET() {
//   return new Response('Hello, Next.js!')
// }

export async function GET() {
  return NextResponse.json({'message': 'Helloo, Next.js!'})
}
//static route