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
* Ph.D. Student, Communication and Information Systems, University of Chinese Academy of Sciences, Shanghai, 2024–2027
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
* Sensor Intelligence / UAV Perception / Robust Sensing
* Generative AI / Multimodal Reasoning / Vision-Language Models
* Embodied AI / Active Perception / Real-World Deployment

Selected Research Directions
======
* **Sensor perception foundations** — vehicle sound detection, multichannel acoustic detection, radar-based multi-target tracking, low-resolution recognition, infrared–visible image fusion, and small object detection.
* **Multimodal generation and reasoning** — CLEAR (ICML 2026 Oral), Reasoning to Edit (ICML 2026), video generation, digital human / dubbing benchmarks, and the *OCC-MLLM* series on occlusion reasoning with multimodal LLMs.
* **Embodied intelligence and real-world deployment** — active perception, multimodal reasoning under uncertainty, and edge-UAV testbeds for sensor-grounded decision-making under partial observation.

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
