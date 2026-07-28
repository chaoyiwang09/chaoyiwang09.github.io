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
Newest: [PERCH](#perch) & [STARE](#stare) (**submitted to AAAI 2027**, first author). Also [CLEAR](#clear) (ICML 2026 Oral) and [OCC-MLLM](#occ-mllm). Narrative: [Research](/research/).
</div>

| Project | Venue / Status | Role | One-line |
|---|---|---|---|
| [PERCH](#perch) | **Submitted to AAAI 2027** | First author | Aerial ObjectNav → usable viewpoints (V-SR/V-SPL) |
| [STARE](#stare) | **Submitted to AAAI 2027** | First author | Spend-to-verify · risk-controlled UAV commitment |
| [CLEAR](#clear) | **ICML 2026 Oral** | Equal first author | Mask-free removal · 0.77% params · +6.77dB PSNR |
| [ReasonBrain](#reasonbrain) | **ICML 2026** | Author | Hypothetical instruction-based image editing |
| [OCC-MLLM](#occ-mllm) | IVC / CVIU / JVCIR | First author | Occlusion MLLM reasoning · +11.14% decision score |
| [Sensor foundations](#sensor) | Remote Sensing / Neurocomputing | First / co-author | Acoustic & low-resolution visual sensing |

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
<a id="perch"></a>
PERCH — Perception–Evidence–Reinforcement CHain
======
**Submitted to AAAI 2027** (2026-07-28) · **First author** · edge multirotor deployment

Proximity success overestimates usable aerial navigation: an agent can stop *near* the target yet end behind a tree. **PERCH** keeps the SR/SPL metric family but replaces the proximity-only predicate with viewpoint-conditioned **V-SR / V-SPL**, then repairs the gap with a closed chain:

1. **Map to see** — Occupancy-Driven Viewpoint Affordance (OVA) scores which observation poses can actually see the target.
2. **See to trust** — VLM-Verified Candidate Belief (VCB) gates commitment behind attribute-level verification.
3. **Trust to stop** — Verifiable-Reward Viewpoint Policy (VRP) decides when the terminal pose is worth holding (GRPO on programmatic geometric rewards).

Across closed-loop AirSim environments and photorealistic replays, modules form a monotone ablation ladder; e.g. V-SPL rises from **0.675 → 0.803** on CityEnviron and **0.395 → 0.816** on TartanAir distractor-dense forests. On an edge multirotor, PERCH **perches and holds watch** over real outdoor targets.

<div class="project-links">
  <a class="btn btn--primary" href="/files/papers/PERCH.pdf">PDF</a>
  <a class="btn btn--primary" href="/publication/2026-perch">Site entry</a>
  <a class="btn btn--primary" href="/projects/#stare">Sister paper: STARE →</a>
</div>

<figure class="half">
  <a href="/images/projects/perch/fig1.jpg"><img src="/images/projects/perch/fig1.jpg" alt="PERCH inference loop"></a>
  <a href="/images/projects/perch/qualitative.jpg"><img src="/images/projects/perch/qualitative.jpg" alt="PERCH qualitative results"></a>
</figure>
<p class="demo-note">Left: PERCH inference loop (OVA → VCB → VRP). Right: qualitative / field results. Full manuscript: <a href="/files/papers/PERCH.pdf">PDF</a>.</p>

<a id="stare"></a>
STARE — Spend To Acquire Reliable Evidence
======
**Submitted to AAAI 2027** (2026-07-28) · **First author** · risk-controlled commitment on edge UAVs

Instructed target selection asks a UAV to pick the correct instance under tight compute, time, and motion budgets—a premature wrong commitment can forfeit the mission. **STARE** treats reliability as a resource acquired by *spending*:

1. **Verify by spending** — Cascaded Evidential Introspection (CEI): reliability probe + wealth accumulator → commit-or-defer.
2. **Spend by learning** — Budget-Constrained Evidence Allocation (BEA): Lagrangian-PPO decides whether further evidence is worth its cost.
3. **Learn with guarantees** — Distribution-Free Risk Certification (DRC): Learn-then-Test calibration of the dual-channel commit gate.

Across six aerial datasets, four frozen depth backbones, and three target categories, STARE raises end-to-end success by up to **+0.52 absolute** over look-once commitment while keeping selective-error estimates below calibrated targets. The same agent commits correctly on **real outdoor flights** and abstains when evidence stays thin.

<div class="project-links">
  <a class="btn btn--primary" href="/files/papers/STARE.pdf">PDF</a>
  <a class="btn btn--primary" href="/publication/2026-stare">Site entry</a>
  <a class="btn btn--primary" href="/projects/#perch">Sister paper: PERCH →</a>
</div>

<figure class="half">
  <a href="/images/projects/stare/fig1.jpg"><img src="/images/projects/stare/fig1.jpg" alt="STARE inference loop"></a>
  <a href="/images/projects/stare/qualitative.jpg"><img src="/images/projects/stare/qualitative.jpg" alt="STARE qualitative results"></a>
</figure>
<p class="demo-note">Left: STARE spend-to-verify loop (CEI → DRC → BEA). Right: qualitative / field results. Full manuscript: <a href="/files/papers/STARE.pdf">PDF</a>.</p>

**Shared question.** Both papers close the loop from partial observability to action on edge UAVs: *where to look / whom to trust / when to stop* (**PERCH**), and *what evidence to buy under a risk certificate* (**STARE**).
