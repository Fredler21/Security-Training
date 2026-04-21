// generate-module-images.mjs
// Generates cybersecurity training images for each module using Gemini Imagen API
// Run: node generate-module-images.mjs

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const API_KEY = "AIzaSyAY9yEjGQcUlCBTkjnsy0aCW3zcA6V-J3g";
const MODEL = "imagen-4.0-generate-001";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict?key=${API_KEY}`;

const OUTPUT_DIR = path.join(
  __dirname,
  "edlight-security-training",
  "public",
  "images",
  "modules"
);

const modules = [
  {
    filename: "password-security.png",
    prompt:
      "Create a high-quality, realistic image showing a person working on a laptop while creating a strong password. The screen should display a password field with a complex password (mix of letters, numbers, and symbols) and a visible strength indicator showing Strong. In the background, subtly include a blurred warning of a hacker or security alert to contrast weak vs strong security. The environment should look modern and professional, like an office workspace. Lighting should be clean and premium. Focus on cybersecurity awareness and protection.",
  },
  {
    filename: "phishing-awareness.png",
    prompt:
      "Create a realistic image of a computer screen displaying an email inbox where one email is clearly a phishing attempt. The phishing email should have signs like urgent language such as Your account will be locked, a suspicious link, and a fake sender address. Highlight the phishing email visually with a subtle red glow or warning icon. The rest of the inbox should look normal. The scene should feel like a real office environment with a person slightly visible analyzing the email. Style should be clean, modern, and educational.",
  },
  {
    filename: "safe-browsing.png",
    prompt:
      "Create a high-quality image showing a person browsing the internet on a laptop. The screen should display a secure website with a visible HTTPS lock icon in the browser bar. In contrast, include a faded or warning overlay showing a dangerous website with pop-ups or malware alerts. The environment should look modern and minimal. The image should clearly communicate the difference between safe and unsafe browsing. Use clean lighting and a professional tone.",
  },
  {
    filename: "company-access-policy.png",
    prompt:
      "Create a professional image showing an employee working on a company laptop with a secure login screen. The screen should display a company login portal and a Do not share your password message. Include visual elements like a lock icon and a protected system interface. In the background, subtly show another scenario blurred where someone tries to access a device without permission to contrast good vs bad behavior. The setting should be an office environment with a clean and modern look.",
  },
  {
    filename: "device-and-network-security.png",
    prompt:
      "Create a realistic image showing a person using a laptop and smartphone connected to a secure Wi-Fi network. The screen should display a secure network symbol. In contrast, include a faded warning scene of public Wi-Fi with a hacker icon or warning sign. The environment could be a cafe or public space transitioning into a secure workspace. The image should clearly show the importance of secure devices and networks. Use a clean, premium style with strong lighting and clarity.",
  },
];

async function generateImage(prompt, filename) {
  console.log(`\n⏳ Generating: ${filename}`);

  const body = JSON.stringify({
    instances: [{ prompt }],
    parameters: {
      sampleCount: 1,
      aspectRatio: "16:9",
      safetyFilterLevel: "block_some",
      personGeneration: "allow_adult",
    },
  });

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error for ${filename}: ${res.status} — ${err}`);
  }

  const data = await res.json();
  const b64 = data?.predictions?.[0]?.bytesBase64Encoded;

  if (!b64) {
    throw new Error(`No image data returned for ${filename}. Response: ${JSON.stringify(data)}`);
  }

  const outputPath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(outputPath, Buffer.from(b64, "base64"));
  console.log(`✅ Saved: ${outputPath}`);
  return outputPath;
}

async function main() {
  console.log("🚀 EdLight Module Image Generator");
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  console.log(`🔑 Using Imagen model: ${MODEL}\n`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = [];

  for (const mod of modules) {
    try {
      const outPath = await generateImage(mod.prompt, mod.filename);
      results.push({ filename: mod.filename, status: "success", path: outPath });
      // Brief pause between requests to be respectful to rate limits
      await new Promise((r) => setTimeout(r, 1500));
    } catch (err) {
      console.error(`❌ Failed: ${mod.filename} — ${err.message}`);
      results.push({ filename: mod.filename, status: "error", error: err.message });
    }
  }

  console.log("\n📊 Summary:");
  results.forEach((r) => {
    const icon = r.status === "success" ? "✅" : "❌";
    console.log(`  ${icon} ${r.filename}`);
    if (r.error) console.log(`     Error: ${r.error}`);
  });

  const successCount = results.filter((r) => r.status === "success").length;
  console.log(`\n${successCount}/${modules.length} images generated successfully.`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
