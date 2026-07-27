---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
toc: true
toc_label: "Projects"
toc_icon: "cog"
redirect_from:
  - /demos/
  - /demos.html
---

Selected projects with papers, code, and visual demos. CLEAR animations are **click-to-load** from GitHub.

<div class="notice--info" markdown="1">
Start with [CLEAR](#clear) (ICML 2026 Oral, equal first author) and the [OCC-MLLM series](#occ-mllm) (first author). Narrative: [Research](/research/).
</div>

| Project | Venue / Status | Role | One-line |
|---|---|---|---|
| [CLEAR](#clear) | **ICML 2026 Oral** | Equal first author | Mask-free removal · 0.77% params · +6.77dB PSNR |
| [ReasonBrain](#reasonbrain) | **ICML 2026** | Author | Hypothetical instruction-based image editing |
| [OCC-MLLM](#occ-mllm) | IVC / CVIU / JVCIR | First author | Occlusion MLLM reasoning · +11.14% decision score |
| [Sensor foundations](#sensor) | Remote Sensing / Neurocomputing | First / co-author | Acoustic & low-resolution visual sensing |
| [PERCH & STARE](#embodied) | Ongoing | Lead | Embodied edge-UAV perception & reasoning |

<a id="clear"></a>
CLEAR — Mask-Free Video Subtitle Removal
======
**ICML 2026 Oral & Spotlight** · *Equal contribution* with Qingdong He

**CLEAR** removes video subtitles **without inference-time masks**. A two-stage design learns self-supervised priors, then adapts a diffusion backbone with LoRA (**0.77%** trainable parameters). On Chinese benchmarks it improves over mask-dependent baselines by **+6.77 dB PSNR** and **−74.7% VFID**, with zero-shot generalization across languages.

**Role in my research arc:** parameter-efficient video understanding–generation under incomplete evidence — a practical building block for agents that must clean or edit sensory streams without heavy annotation.

<div class="project-links">
  <a class="btn btn--primary" href="https://arxiv.org/abs/2603.21901">Paper</a>
  <a class="btn btn--primary" href="https://github.com/silent-commit/CLEAR">Code</a>
  <a class="btn btn--primary" href="https://huggingface.co/charlesw09/CLEAR-mask-free-video-subtitle-removal">Model</a>
  <a class="btn btn--primary" href="/publication/2026-clear">Site entry</a>
</div>

### Zero-shot demos (static preview · click to load animation)

<div class="demo-grid">
  <figure class="demo-card">
    <div class="demo-preview">
      <img src="/images/projects/clear/preview_english1.jpg" alt="CLEAR English preview 1">
      <button class="demo-load" type="button" data-src="https://raw.githubusercontent.com/silent-commit/CLEAR/main/assets/demo_videos/english1_demo.gif">Load animation</button>
    </div>
    <figcaption>English · zero-shot</figcaption>
  </figure>
  <figure class="demo-card">
    <div class="demo-preview">
      <img src="/images/projects/clear/preview_english2.jpg" alt="CLEAR English preview 2">
      <button class="demo-load" type="button" data-src="https://raw.githubusercontent.com/silent-commit/CLEAR/main/assets/demo_videos/english2_demo.gif">Load animation</button>
    </div>
    <figcaption>English · zero-shot</figcaption>
  </figure>
  <figure class="demo-card">
    <div class="demo-preview">
      <img src="/images/projects/clear/preview_english3.jpg" alt="CLEAR English preview 3">
      <button class="demo-load" type="button" data-src="https://raw.githubusercontent.com/silent-commit/CLEAR/main/assets/demo_videos/english3_demo.gif">Load animation</button>
    </div>
    <figcaption>English · zero-shot</figcaption>
  </figure>
  <figure class="demo-card">
    <div class="demo-preview">
      <img src="/images/projects/clear/preview_japanese.jpg" alt="CLEAR Japanese preview">
      <button class="demo-load" type="button" data-src="https://raw.githubusercontent.com/silent-commit/CLEAR/main/assets/demo_videos/japanese_demo.gif">Load animation</button>
    </div>
    <figcaption>Japanese · zero-shot</figcaption>
  </figure>
  <figure class="demo-card">
    <div class="demo-preview">
      <img src="/images/projects/clear/preview_arabic.jpg" alt="CLEAR Arabic preview">
      <button class="demo-load" type="button" data-src="https://raw.githubusercontent.com/silent-commit/CLEAR/main/assets/demo_videos/arabic_demo.gif">Load animation</button>
    </div>
    <figcaption>Arabic · zero-shot</figcaption>
  </figure>
</div>

<p class="demo-note">Demos are served on demand from <a href="https://github.com/silent-commit/CLEAR">silent-commit/CLEAR</a> (files are large). Full-resolution MP4s live in the repository.</p>

<a id="reasonbrain"></a>
ReasonBrain — Reasoning to Edit
======
**ICML 2026** · Hypothetical instruction-based image editing

**ReasonBrain** executes *implicit* editing instructions that require physical, temporal, causal, or story-level reasoning. It pairs an MLLM with a diffusion backbone, Fine-grained Reasoning Cue Extraction (FRCE), and a Cross-Modal Enhancer, trained/evaluated with **Reason50K** (~50K samples).

<div class="project-links">
  <a class="btn btn--primary" href="https://arxiv.org/abs/2507.01908">Paper</a>
  <a class="btn btn--primary" href="https://github.com/hithqd/ReasonBrain">Code</a>
  <a class="btn btn--primary" href="/publication/2025-reasoning-to-edit">Site entry</a>
</div>

<figure class="demo-hero">
  <img loading="lazy" src="/images/projects/reasonbrain/cover.jpg" alt="ReasonBrain cover figure">
  <figcaption>Cover figure adapted from the ReasonBrain repository.</figcaption>
</figure>

<a id="occ-mllm"></a>
OCC-MLLM Series — Occlusion Reasoning with MLLMs
======
**First author** · *Image and Vision Computing* · *CVIU* · *JVCIR* · arXiv

The **OCC-MLLM** series studies how multimodal LLMs infer properties of **occluded / partially observed** objects using 3D-aware supervision, chain-of-thought guidance, self-correction, and joint understanding–generation — a core capability for embodied agents under incomplete visual evidence. Across the series, models improve occlusion decision quality substantially (e.g., OCC-MLLM-CoT reports **+11.14%** decision score over SOTA MLLMs).

<div class="project-links">
  <a class="btn btn--primary" href="https://github.com/chaoyiwang09/OCC-MLLM">Code</a>
  <a class="btn btn--primary" href="https://arxiv.org/abs/2504.04781">OCC-MLLM-CoT-Alpha</a>
  <a class="btn btn--primary" href="/publication/2025-occ-mllm-cot">OCC-MLLM-CoT (IVC)</a>
  <a class="btn btn--primary" href="/publication/2026-occ-mllm-v1-cviu">OCC-MLLM-V1 (CVIU)</a>
  <a class="btn btn--primary" href="/publication/2026-occ-mllm-v2">OCC-MLLM-V2 (JVCIR)</a>
</div>

<figure class="half">
  <a href="/images/projects/occ-mllm/visualresults.jpg"><img src="/images/projects/occ-mllm/visualresults.jpg" alt="OCC-MLLM visual results"></a>
  <a href="/images/projects/occ-mllm/dataset.jpg"><img src="/images/projects/occ-mllm/dataset.jpg" alt="OCC-MLLM dataset samples"></a>
</figure>
<p class="demo-note">Figures from <a href="https://github.com/chaoyiwang09/OCC-MLLM">chaoyiwang09/OCC-MLLM</a>.</p>

<a id="sensor"></a>
Sensor Perception Foundations
======
**First-author** acoustic sensing · low-resolution recognition

Early work on robust perception under noise and limited resources — the sensing substrate for later multimodal and embodied research.

- [Real-Time Vehicle Sound Detection](/publication/2022-vehicle-sound-detection) — *Remote Sensing*, 2022 (**first author**): depthwise separable CNNs + spectrogram augmentation for real-time vehicle acoustics.
- [Transformer-Based Low-Resolution Face Recognition](/publication/2022-transformer-lr-face) — *Neurocomputing*, 2022: on-/offline knowledge distillation for low-resolution recognition.

<a id="embodied"></a>
PERCH & STARE — Embodied UAV Directions
======
**Ongoing** · edge UAV testbeds

Building on occlusion-aware multimodal reasoning and robust sensing:

- **PERCH** — actively acquiring better viewpoints / evidence under motion and compute constraints (closer sensing when passive observation is insufficient).
- **STARE** — sustained multimodal observation and reasoning under partial observability, connecting OCC-MLLM-style occlusion understanding to longer-horizon sensing on edge UAVs.

These directions ask a common question: *how should an embodied agent decide what to sense next when the world is only partially observed?* Demos and write-ups will be added here as the projects mature.
