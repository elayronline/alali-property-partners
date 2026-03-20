import { put } from "@vercel/blob"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file = formData.get("file") as File | null
  const fileName = formData.get("fileName") as string | null

  if (!file || !fileName) {
    return NextResponse.json({ error: "Missing file or fileName" }, { status: 400 })
  }

  // Validate file size (max 10MB)
  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json({ error: "File too large. Maximum 10MB." }, { status: 400 })
  }

  const blob = await put(`documents/${fileName}`, file, {
    access: "public",
    addRandomSuffix: true,
  })

  return NextResponse.json({ url: blob.url })
}
