# 🐼 PanduAI — The Panda Intelligence Framework

**PanduAI** is the modular AI framework powering **PanduPandas**.  
It blends **real-time conversation**, **neural voice**, and **generative art** into one cohesive stack.  

> ⚡️ This repo is a **documentation + developer showcase**.  
> It is not the full production source code — but it gives you a taste of the **PanduAI stack**.

---

## ✨ Core Modules

- **PanduCore** → conversational engine with memory & reasoning  
- **PanduVoice** → low-latency speech synthesis & recognition  
- **PanduCanvas** → generative art and avatar pipeline  
- **PanduOS** → modular AI operating system, orchestrating everything  

---

## 🚀 Quick Example

```js
import { PanduCore, PanduVoice, PanduCanvas, PanduOS } from "panduai";

// bootstrap PanduOS
const pandu = new PanduOS({
  core: new PanduCore(),
  voice: new PanduVoice(),
  canvas: new PanduCanvas(),
});

// example loop
async function main() {
  await pandu.voice.say("Hello, I am Pandu, your AI friend 🐼✨");

  const reply = await pandu.core.chat("What do you think about Solana?");
  console.log("Pandu:", reply);

  const img = await pandu.canvas.generate("A panda trading crypto on Solana");
  console.log("Generated artwork at:", img.path);
}

main();
