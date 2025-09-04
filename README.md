# 🐼 PanduAI — The Panda Intelligence Framework

**PanduAI** is the modular AI framework powering **PanduPandas**.  
It blends **real-time conversation**, **neural voice**, and **generative art** into one cohesive stack.  

---

## ✨ Core Modules

- **PanduCore** → conversational engine with memory & reasoning  
- **PanduVoice** → low-latency speech synthesis & recognition  
- **PanduCanvas** → generative art and avatar pipeline  
- **PanduOS** → modular AI operating system, orchestrating everything  

---

## 🚀 Quick Example

```js
import PanduAI from "./panduai.js";

const core = PanduAI.PanduCore.init({ personality: "Cheerful" });
const chat = PanduAI.PanduCore.chat("Hello Pandu!", core.memory);
console.log(chat.reply);

await PanduAI.PanduVoice.speak("Welcome to PanduAI!");
const img = await PanduAI.PanduCanvas.generate("panda in bamboo forest");
console.log("Generated image:", img);

const full = await PanduAI.PanduOS.multiModal("Tell me a joke", "panda meme");
console.log(full);
```
# 🏗  Architecture

PanduAI is designed as a **modular AI framework** — every layer is independent but composable.  
This means developers can plug into PanduCore, PanduVoice, PanduCanvas, or PanduOS without needing the full stack.

---

## Core Modules

### PanduCore
- Conversational engine with personality profiles  
- Memory persistence for context  
- Lightweight reasoning pipeline  

```
flowchart TD
  U[User Input] --> C[PanduCore]
  C -->|Reasoning| M[Memory Store]
  C --> R[Assistant Reply]

### PanduVoice
- Real-time TTS (text → voice) & ASR (voice → text)
- Audio hooks for visualization (mouth-sync, meters)
- Ultra-low latency voice pipeline

flowchart TD
  T[Text Input] --> V[PanduVoice Engine]
  V -->|TTS| A[Audio Out]
  A -->|Visualization| M[Mouth Sync]

### PanduOS
- The orchestrator connecting all modules
- Routes user input → Core → Voice → Canvas
- Modular plugin system for future AI tools

flowchart TD
  U[User] --> OS[PanduOS]
  OS --> Core[PanduCore]
  OS --> Voice[PanduVoice]
  OS --> Canvas[PanduCanvas]
  OS --> Reply[Unified Output]
