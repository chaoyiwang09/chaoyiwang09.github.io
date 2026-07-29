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

<nav class="pub-nav" aria-label="CV sections">
  <a href="#education">Education</a>
  <a href="#experience">Experience</a>
  <a href="#highlights">Highlights</a>
  <a href="#interests">Interests</a>
  <a href="#skills">Skills</a>
  <a href="#awards">Awards</a>
  <a href="#publications">Publications</a>
</nav>

<div id="education" class="content-block content-block--accent" markdown="1">
<div class="content-block__title">Education</div>

<ul class="cv-timeline">
  <li>
    <span class="cv-timeline__when">2024–Present</span>
    <div class="cv-timeline__body">
      <strong>Ph.D. Candidate</strong>, Communication and Information Systems
      <span class="cv-timeline__place">University of Chinese Academy of Sciences, Shanghai</span>
    </div>
  </li>
  <li>
    <span class="cv-timeline__when">2017–2019</span>
    <div class="cv-timeline__body">
      <strong>M.S.</strong>, Electrical and Computer Engineering
      <span class="cv-timeline__place">Johns Hopkins University, Baltimore, USA</span>
    </div>
  </li>
  <li>
    <span class="cv-timeline__when">2012–2017</span>
    <div class="cv-timeline__body">
      <strong>B.S.</strong>, Electrical and Computer Engineering
      <span class="cv-timeline__place">Shanghai Jiao Tong University, Shanghai</span>
    </div>
  </li>
</ul>
</div>

<div id="experience" class="content-block" markdown="1">
<div class="content-block__title">Experience</div>

<ul class="cv-timeline">
  <li>
    <span class="cv-timeline__when">Jul 2020 – Present</span>
    <div class="cv-timeline__body">
      <strong>Sensor Algorithm Engineer</strong>
      <span class="cv-timeline__place">University of Chinese Academy of Sciences, Shanghai</span>
      <p>Multimodal signal processing and target detection for acoustic, vibration, image, and infrared sensing.</p>
    </div>
  </li>
  <li>
    <span class="cv-timeline__when">May 2019 – Jul 2020</span>
    <div class="cv-timeline__body">
      <strong>Speech Algorithm Engineer</strong>
      <span class="cv-timeline__place">Shanghai Leyan Technology Co., Ltd., Shanghai</span>
      <p>ASR and pronunciation assessment systems for K12 English learning.</p>
    </div>
  </li>
</ul>
</div>

<div id="highlights" class="content-block" markdown="1">
<div class="content-block__title">Selected Highlights</div>

<ul class="block-list">
  <li><strong>Submitted</strong> — PERCH &amp; STARE (<em>first author</em>): viewpoint-conditioned aerial ObjectNav and spend-to-verify risk-controlled commitment on edge UAVs.</li>
  <li><strong>ICML 2026 Oral &amp; Spotlight</strong> — CLEAR (<em>equal contribution</em>): mask-free video subtitle removal; 0.77% trainable parameters.</li>
  <li><strong>ICML 2026</strong> — Reasoning to Edit / ReasonBrain: hypothetical instruction-based image editing.</li>
  <li><strong>First-author OCC-MLLM series</strong> — occlusion reasoning with multimodal LLMs (IVC / CVIU / JVCIR).</li>
  <li><strong>First-author sensor work</strong> — real-time vehicle sound detection (<em>Remote Sensing</em>, 2022).</li>
</ul>
</div>

<div id="interests" class="content-block" markdown="1">
<div class="content-block__title">Research Interests</div>

<ul class="interest-tags">
  <li>Sensor Intelligence / Robust Sensing</li>
  <li>Low-resolution Perception</li>
  <li>Generative AI / Video Generation</li>
  <li>Vision-Language Reasoning</li>
  <li>Embodied AI / Occlusion Understanding</li>
  <li>Edge UAV Systems</li>
</ul>
</div>

<div id="skills" class="content-block" markdown="1">
<div class="content-block__title">Skills</div>

<ul class="cv-skill-rows">
  <li>
    <span class="cv-skill-rows__label">AI / ML</span>
    <span class="cv-skill-rows__value">Multimodal LLMs · Diffusion / video generation · Visual reasoning</span>
  </li>
  <li>
    <span class="cv-skill-rows__label">Vision</span>
    <span class="cv-skill-rows__value">Computer vision · Occlusion understanding · Robust perception</span>
  </li>
  <li>
    <span class="cv-skill-rows__label">Sensing</span>
    <span class="cv-skill-rows__value">Acoustic / radar / infrared sensing · Edge-oriented algorithm design</span>
  </li>
  <li>
    <span class="cv-skill-rows__label">Tools</span>
    <span class="cv-skill-rows__value">Python · PyTorch · C/C++ · MATLAB</span>
  </li>
</ul>
</div>

<div id="awards" class="content-block" markdown="1">
<div class="content-block__title">Selected Patents &amp; Awards</div>

<ul class="block-list">
  <li>Selected patents on video generation, field vehicle detection, and sensor-array sensing (2021–2023)</li>
  <li>NVIDIA–Alibaba Cloud TensorRT AI Inference Hackathon Excellence Award, 2021</li>
</ul>
</div>

<div id="publications" class="content-block">
  <div class="content-block__title">Publications</div>
  <p class="demo-note">Grouped by type. Full list also on <a href="/publications/">Publications</a> and <a href="https://scholar.google.com/citations?user=e_wL1LsAAAAJ&hl=en">Google Scholar</a>.</p>

  {% if site.publication_category %}
    {% for category in site.publication_category %}
      {% assign title_shown = false %}
      {% for post in site.publications reversed %}
        {% if post.category != category[0] %}
          {% continue %}
        {% endif %}
        {% unless title_shown %}
          <h3 class="cv-pub-heading">{{ category[1].title }}</h3>
          <ul class="cv-pub-list">
          {% assign title_shown = true %}
        {% endunless %}
        {% include archive-single-cv.html %}
      {% endfor %}
      {% if title_shown %}
          </ul>
      {% endif %}
    {% endfor %}
  {% else %}
    <ul class="cv-pub-list">
      {% for post in site.publications reversed %}
        {% include archive-single-cv.html %}
      {% endfor %}
    </ul>
  {% endif %}
</div>
