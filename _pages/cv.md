---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="project-links cv-actions">
  <a class="btn btn--primary" href="/files/Chaoyi_Wang_CV.pdf">Full CV (PDF)</a>
  <a class="btn btn--primary" href="/files/Chaoyi_Wang_CV_1page_CN.pdf">1-page CV (中文)</a>
  <a class="btn btn--primary" href="/projects/">Projects</a>
  <a class="btn btn--primary" href="https://scholar.google.com/citations?user=e_wL1LsAAAAJ&hl=en">Google Scholar</a>
</div>

Education
======
* Ph.D. Candidate, Communication and Information Systems, University of Chinese Academy of Sciences, Shanghai, 2024–Present
* M.S., Electrical and Computer Engineering, Johns Hopkins University, Baltimore, USA, 2017–2019
* B.S., Electrical and Computer Engineering, Shanghai Jiao Tong University, Shanghai, 2012–2017

Experience
======
* **Sensor Algorithm Engineer**, University of Chinese Academy of Sciences, Shanghai, Jul 2020 – Present
  * Multimodal signal processing and target detection for acoustic, vibration, image, and infrared sensing.
* **Speech Algorithm Engineer**, Shanghai Leyan Technology Co., Ltd., Shanghai, May 2019 – Jul 2020
  * ASR and pronunciation assessment systems for K12 English learning.

Research Interests
======
* Sensor Intelligence / Robust Sensing / Low-resolution Perception
* Generative AI / Video Generation / Vision-Language Reasoning
* Embodied AI / Occlusion Understanding / Edge UAV Systems

Selected Highlights
======
* **ICML 2026 Oral & Spotlight** — CLEAR (*equal contribution*): mask-free video subtitle removal; 0.77% trainable parameters.
* **ICML 2026** — Reasoning to Edit / ReasonBrain: hypothetical instruction-based image editing.
* **First-author OCC-MLLM series** — occlusion reasoning with multimodal LLMs (IVC / CVIU / JVCIR).
* **First-author sensor work** — real-time vehicle sound detection (*Remote Sensing*, 2022).

Skills
======
* Multimodal LLMs, diffusion / video generation, visual reasoning
* Computer vision, occlusion understanding, robust perception
* Acoustic / radar / infrared sensing; edge-oriented algorithm design
* Python, PyTorch, C/C++, MATLAB

Selected Patents & Awards
======
* Selected patents on video generation, field vehicle detection, and sensor-array sensing (2021–2023)
* NVIDIA–Alibaba Cloud TensorRT AI Inference Hackathon Excellence Award, 2021

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
