import fs from "fs";

export class PanduCanvas {
  async generate(prompt) {
    console.log(`[PanduCanvas] Generating: "${prompt}"`);
    // placeholder: save fake image
    const out = `./out/${Date.now()}-pandu.png`;
    fs.writeFileSync(out, `FAKE_IMAGE:${prompt}`);
    return { path: out };
  }
}