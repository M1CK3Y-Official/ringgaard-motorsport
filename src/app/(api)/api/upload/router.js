import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import multer from "multer";
import { promisify } from "util";

// Konfigurer Cloudinary med dine API-oplysninger
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer middleware til at håndtere filuploads
const upload = multer({ storage: multer.memoryStorage() });
const uploadMiddleware = promisify(upload.single("file"));

export async function POST(req) {
  try {
    await uploadMiddleware(req);

    if (!req.file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Upload filen til Cloudinary
    const result = await cloudinary.v2.uploader.upload_stream(
      { folder: "cars" }, // Gem billeder i en "cars" mappe
      (error, result) => {
        if (error) {
          console.error(error);
          return NextResponse.json({ error: "Upload failed" }, { status: 500 });
        }
        return NextResponse.json({ url: result.secure_url }, { status: 200 });
      }
    ).end(req.file.buffer);

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
