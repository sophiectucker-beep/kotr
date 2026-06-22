import fs from "node:fs/promises";
import sharp from "sharp";

const [baseCard, art, goldplayAltBold, goldplayRegular] = await Promise.all([
  fs.readFile(
    new URL("../public/blog/free-things-to-do-with-kids-in-gibraltar-og.png", import.meta.url)
  ),
  fs.readFile(
    new URL("../public/blog/pregnancy-breathe-doodle.svg", import.meta.url),
    "utf8"
  ),
  fs.readFile(
    new URL("../public/fonts/GoldplayAlt-Bold.woff2", import.meta.url)
  ),
  fs.readFile(
    new URL("../public/fonts/Goldplay-Regular.woff2", import.meta.url)
  ),
]);

const cleanedArt = art
  .replace(/<\?xml[^>]*>/g, "")
  .replace(/<!DOCTYPE[^>]*>/g, "")
  .replace(/\n/g, " ");

const goldplayAltBoldBase64 = goldplayAltBold.toString("base64");
const goldplayRegularBase64 = goldplayRegular.toString("base64");

const titleLines = [
  "Pregnant in Gibraltar?",
  "What to do after the",
  "positive test",
];

const excerptLines = [
  "A practical guide on what to do after a",
  "positive pregnancy test in Gibraltar.",
];

const titleText = titleLines
  .map(
    (line, index) =>
      `<tspan x="62" dy="${index === 0 ? 0 : 74}">${line}</tspan>`
  )
  .join("");

const excerptText = excerptLines
  .map(
    (line, index) =>
      `<tspan x="62" dy="${index === 0 ? 0 : 36}">${line}</tspan>`
  )
  .join("");

const overlay = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <style>
    @font-face {
      font-family: 'Goldplay Alt';
      src: url(data:font/woff2;base64,${goldplayAltBoldBase64}) format('woff2');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Goldplay';
      src: url(data:font/woff2;base64,${goldplayRegularBase64}) format('woff2');
      font-weight: 400;
      font-style: normal;
    }
  </style>

  <rect x="54" y="136" width="500" height="365" fill="#FFF0E3"/>
  <rect x="610" y="130" width="430" height="320" fill="#FFF0E3"/>

  <text x="62" y="170" font-family="Goldplay Alt, Arial, sans-serif" font-size="54" font-weight="700" fill="#2d384d">
    ${titleText}
  </text>

  <text x="62" y="438" font-family="Goldplay, Arial, sans-serif" font-size="24" font-weight="400" fill="rgba(45,56,77,0.78)">
    ${excerptText}
  </text>

  <g transform="translate(715 165) scale(0.43)">
    ${cleanedArt}
  </g>
</svg>`;

await sharp(baseCard)
  .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
  .png()
  .toFile("/tmp/pregnant-share-card.png");

console.log("Generated /tmp/pregnant-share-card.png");
