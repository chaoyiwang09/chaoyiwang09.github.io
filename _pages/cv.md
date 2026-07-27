---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download my full CV (PDF)](/files/Chaoyi_Wang_CV.pdf){: .btn .btn--primary}
[1-page CV (中文)](/files/Chaoyi_Wang_CV_1page_CN.pdf){: .btn .btn--primary}
[Projects & Demos](/projects/){: .btn .btn--primary}
[Google Scholar](https://scholar.google.com/citations?user=e_wL1LsAAAAJ&hl=zh-CN){: .btn .btn--primary}

Education
======
* Ph.D. Candidate, Communication and Information Systems, University of Chinese Academy of Sciences, Shanghai, 2024–Present
* M.S., Electrical and Computer Engineering, Johns Hopkins University, Baltimore, USA, 2017–2019
* B.S., Electrical and Computer Engineering, Shanghai Jiao Tong University, Shanghai, 2012–2017

Work Experience
======
* **Sensor Algorithm Engineer**, University of Chinese Academy of Sciences, Shanghai, Jul 2020 – Present
  * Multimodal signal processing and target detection for acoustic, vibration, image, and infrared sensing in real-world environments.
* **Speech Algorithm Engineer**, Shanghai Leyan Technology Co., Ltd., Shanghai, May 2019 – Jul 2020
  * ASR and pronunciation assessment systems for K12 English learning.

Research Interests
======
* Sensor Intelligence / Robust Sensing / Low-resolution Perception
* Generative AI / Video Generation / Vision-Language Reasoning
* Embodied AI / Occlusion Understanding / Edge UAV Systems

Selected Highlights
======
* **ICML 2026 Oral & Spotlight** — CLEAR (equal contribution): mask-free video subtitle removal; **0.77%** trainable parameters; **+6.77 dB PSNR**.
* **ICML 2026** — Reasoning to Edit / ReasonBrain: hypothetical instruction-based image editing with visual reasoning.
* **First-author OCC-MLLM series** — occlusion reasoning with multimodal LLMs (IVC / CVIU / JVCIR); CoT variant **+11.14%** decision score.
* **First-author sensor work** — real-time vehicle sound detection (*Remote Sensing*, 2022).
* **Industry + systems experience** — sensor algorithm deployment and speech ASR/GOP systems.

Selected Research Directions
======
* **Sensor perception foundations** — acoustic and visual sensing under noise and resource constraints (*Remote Sensing*, *Neurocomputing*, *IEEE Sensors / IoTJ / TIM*).
* **Multimodal generation and reasoning** — CLEAR (**ICML 2026 Oral**, equal contribution), ReasonBrain (**ICML 2026**), and related generative vision systems.
* **Embodied intelligence and deployment** — OCC-MLLM series (first author), plus ongoing **PERCH** / **STARE** work on edge-UAV testbeds.

Skills
======
* Multimodal LLMs, diffusion / video generation, visual reasoning
* Computer vision, occlusion understanding, robust perception
* Acoustic / radar / infrared sensing; edge-oriented algorithm design
* Python, PyTorch, C/C++, MATLAB; dataset construction and system deployment

Selected Patents
======
* A long-video generation method based on background transition, 2023
* Field moving-vehicle detection based on convolutional recurrent neural networks, 2023
* Pixel-robust fine-grained classification with large convolution kernels, 2023
* DOA estimation with wavelet denoising and MUSIC, 2021
* Robust moving-target counting with sensor arrays, 2021

Awards
======
* NVIDIA–Alibaba Cloud Heterogeneous Computing TensorRT AI Inference Hackathon Excellence Award, 2021

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
