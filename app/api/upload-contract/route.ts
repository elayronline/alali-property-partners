import { put } from "@vercel/blob"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file = formData.get("file") as File | null
  const fileName = formData.get("fileName") as string | null

  if (!file || !fileName) {
    return NextResponse.json({ error: "Missing file or fileName" }, { status: 400 })
  }

  const blob = await put(`contracts/${fileName}`, file, {
    access: "public",
    addRandomSuffix: true,
  })

  return NextResponse.json({ url: blob.url })
}
