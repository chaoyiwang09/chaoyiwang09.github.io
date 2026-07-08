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

Education
======
* Ph.D. Student, Communication and Information Systems, University of Chinese Academy of Sciences, Shanghai, 2024–2027 (research at the Shanghai Institute of Microsystem and Information Technology, CAS)
* M.S., Electrical and Computer Engineering, Johns Hopkins University, Baltimore, USA, 2017–2018 (GPA: 3.7/4.0)
* B.S., Electrical and Computer Engineering, Shanghai Jiao Tong University, Shanghai, 2012–2017

Work Experience
======
* **Sensor Algorithm Engineer**, Research Department, Shanghai Institute of Microsystem and Information Technology, Chinese Academy of Sciences, Shanghai, Jul 2020 – Present
  * Multimodal signal processing for acoustic, vibration, image, and infrared sensing under complex environments
  * Designed and deployed target detection algorithms achieving over 90% detection rate in field conditions
  * Implemented prototype algorithms in Python/MATLAB and migrated high-performance models to embedded platforms (C libraries) for national key projects
  * Organized field experiments and built a multimodal sensor dataset with tens of thousands of annotated samples

* **Speech Algorithm Engineer**, AI Education Department, Shanghai Leyan Technology Co., Ltd., Shanghai, May 2019 – Jul 2020
  * Led development of Mandarin/English ASR and pronunciation assessment (GOP) systems on Kaldi for K12 reading evaluation
  * Optimized acoustic model training over 10,000+ hours of youth speech data across 10+ iterations, reducing CER below 5%
  * Applied data augmentation (speed perturbation, reverberation, noise injection, spectral augmentation) and domain-specific language models

Research Interests
======
* Embodied Artificial Intelligence; Embodied Perception and Reasoning
* Multimodal Large Language Models; Occlusion Reasoning and Partial Observation
* UAV Perception and Autonomous Systems; Sensor Intelligence and Signal Processing
* Generative AI and Video Generation; Vision-Language Reasoning

Selected Research Directions
======
* **Embodied multimodal reasoning & occlusion understanding** — the *OCC-MLLM* series: occlusion reasoning with multimodal large language models, 3D-aware supervision, chain-of-thought guidance, self-correction, and joint understanding–generation.
* **Sensor intelligence & robust perception** — vehicle sound detection, multichannel acoustic detection, radar-based multi-target tracking, low-resolution recognition, infrared–visible image fusion, and small object detection.
* **Generative AI & video intelligence** — mask-free video subtitle removal, consistency tuning for video generation, moving-dubbing benchmarks, whole-body digital human generation, multi-conditional text-to-image generation, and reasoning-guided image editing.

Skills
======
* Deep learning & multimodal large language models
* Computer vision, video generation, and image editing
* Signal processing, acoustic and radar sensing, robust perception
* Python, PyTorch; model training, evaluation, and benchmark design

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
