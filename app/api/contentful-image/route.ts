import * as contentful from '@/lib/contentful/contentful'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const requestBody = await request.json()
    const specificPhoto = await contentful.getSpecifImage()
    if(!specificPhoto) return NextResponse.json('Error')
    return NextResponse.json(specificPhoto)
}
