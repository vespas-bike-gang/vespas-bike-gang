import * as contentful from '@/app/lib/contentful'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const requestBody = await request.json()
    const entries = await contentful.getEntriesByTitle(requestBody)
    if(!entries) return NextResponse.json('Error')
    return NextResponse.json(entries.items[0]?.fields)
}
