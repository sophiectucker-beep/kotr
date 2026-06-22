import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const outputPdfPath = path.join(
    process.cwd(),
    "app",
    "forms",
    "Gibraltar Passport Application.pdf"
  );
  const templatePdfPath = path.join(
    process.cwd(),
    "app",
    "forms",
    "Gibraltar Passport Application.template.pdf"
  );
  const [pdf, templatePdf] = await Promise.all([
    readFile(outputPdfPath),
    readFile(templatePdfPath),
  ]);

  return new Response(
    JSON.stringify({
      pdf: Buffer.from(pdf).toString("base64"),
      templatePdf: Buffer.from(templatePdf).toString("base64"),
    }),
    {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
