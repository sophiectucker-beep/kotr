import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const pdfPath = path.join(
    process.cwd(),
    "app",
    "forms",
    "Identity Card Application Form.pdf"
  );

  const pdfBytes = await readFile(pdfPath);

  return Response.json({
    pdf: Buffer.from(pdfBytes).toString("base64"),
  });
}
