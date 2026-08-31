---
permalink: /
title: "Chaoyi Wang"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="home-intro content-block content-block--accent reveal-on-scroll" markdown="1">

I am a Ph.D. candidate at the **University of Chinese Academy of Sciences (UCAS)**, conducting research at the **Shanghai Institute of Microsystem and Information Technology (SIMIT, CAS)**. I received my **M.S.** from **Johns Hopkins University** and my **B.S.** from **Shanghai Jiao Tong University**.

My research focuses on **embodied multimodal intelligence**: building agents that can perceive, reason, and act reliably when evidence is incomplete, noisy, occluded, or ambiguous. I connect **robust sensing**, **multimodal generation & reasoning**, and **edge deployment** on physical platforms such as UAVs. In short: *make perception trustworthy enough for agents to decide what to sense and do next*.

</div>

<div class="project-links reveal-on-scroll">
  <a class="btn btn--primary" href="/projects/">Projects</a>
  <a class="btn btn--primary" href="/research/">Research</a>
  <a class="btn btn--primary" href="/publications/">Publications</a>
  <a class="btn btn--primary" href="https://scholar.google.com/citations?user=e_wL1LsAAAAJ&hl=en">Google Scholar</a>
  <a class="btn btn--primary" href="/files/Chaoyi_Wang_CV.pdf">CV (PDF)</a>
</div>

<div class="content-block reveal-on-scroll">
  <div class="content-block__title">Research path</div>
  <ol class="research-path" aria-label="Research progression">
    <li class="research-path__step">
      <span class="research-path__num">01</span>
      <strong class="research-path__label">Sense</strong>
      <span class="research-path__desc">Robust acoustic &amp; visual perception under noise and limited compute</span>
      <a class="research-path__link" href="/projects/#sensor">Sensor foundations →</a>
    </li>
    <li class="research-path__arrow" aria-hidden="true"></li>
    <li class="research-path__step">
      <span class="research-path__num">02</span>
      <strong class="research-path__label">Reason &amp; Generate</strong>
      <span class="research-path__desc">Multimodal generation and visual reasoning under incomplete evidence</span>
      <a class="research-path__link" href="/projects/#clear">CLEAR / ReasonBrain →</a>
    </li>
    <li class="research-path__arrow" aria-hidden="true"></li>
    <li class="research-path__step">
      <span class="research-path__num">03</span>
      <strong class="research-path__label">Embody</strong>
      <span class="research-path__desc">Close the loop on edge UAVs — decide what to sense and when to act</span>
      <a class="research-path__link" href="/projects/#uav">UAV recon · PERCH / STARE →</a>
    </li>
  </ol>
</div>

<div class="content-block reveal-on-scroll">
  <div class="content-block__title">News</div>
  <ul class="block-list">
    <li><strong>[Aug 2026]</strong> UAV reconnaissance is now a three-module page: approach (PERCH / STARE, submitted), outdoor perch, next = multi-sensor fusion. <a href="/projects/#uav">Play the field clip →</a></li>
    <li><strong>[Jul 28, 2026]</strong> Submitted <a href="/projects/#perch">PERCH</a> and <a href="/projects/#stare">STARE</a> (<em>first author</em>) — embodied edge-UAV viewpoint navigation &amp; risk-controlled commitment. <a href="/projects/#perch">PDFs →</a></li>
    <li><strong>[May 2026]</strong> <a href="https://arxiv.org/abs/2603.21901">CLEAR</a> accepted as an <strong>Oral</strong> (and Spotlight) at <strong>ICML 2026</strong> (<em>equal contribution</em>). <a href="/projects/#clear">Demos →</a></li>
    <li><strong>[May 2026]</strong> <a href="https://arxiv.org/abs/2507.01908">Reasoning to Edit</a> accepted at <strong>ICML 2026</strong>. <a href="/projects/#reasonbrain">Demos →</a></li>
    <li><strong>[2025–2026]</strong> OCC-MLLM series (first author) in <em>IVC</em>, <em>CVIU</em>, and <em>JVCIR</em> — motivated by a State Grid Shanghai unmanned-substation deployment. <a href="/projects/#occ-mllm">Overview →</a></li>
  </ul>
</div>

<div class="content-block reveal-on-scroll">
  <div class="content-block__title">Selected Highlights</div>

  <div class="series-grid">
    <article class="series-card">
      <div class="series-card__media">
        <a href="/projects/#uav"><img src="/images/projects/uav/zhuawo_white.jpg" alt="V1 perching UAV with serrated gripper" loading="lazy"></a>
        <a href="/projects/#uav-grasp"><img src="/images/projects/uav/real_outdoor_gasp.jpg" alt="Outdoor perch on a real branch" loading="lazy"></a>
      </div>
      <div class="series-card__body">
        <div class="series-card__meta">
          <span class="pub-badge pub-badge--ongoing">Ongoing</span>
          <span class="pub-badge pub-badge--submitted">Papers submitted</span>
          <span class="pub-badge pub-badge--first">First author</span>
        </div>
        <h3 class="series-card__title">UAV reconnaissance · three modules</h3>
        <p>Approach the target (PERCH &amp; STARE, submitted) · locate a graspable branch (sensor-fusion V2, next) · grasp and hold (outdoor perch). Field clip on the project page.</p>
        <div class="series-card__links">
          <a href="/projects/#uav">Overview &amp; demo</a>
          <a href="/projects/#perch">PERCH</a>
          <a href="/projects/#stare">STARE</a>
        </div>
      </div>
    </article>

    <article class="series-card">
      <div class="series-card__media series-card__media--single">
        <a href="/projects/#occ-mllm"><img src="/images/projects/occ-mllm/visualresults.jpg" alt="OCC-MLLM results" loading="lazy"></a>
      </div>
      <div class="series-card__body">
        <div class="series-card__meta">
          <span class="pub-badge pub-badge--first">First author</span>
          <span class="pub-badge">State Grid Shanghai</span>
        </div>
        <h3 class="series-card__title">OCC-MLLM series</h3>
        <p>From a <strong>State Grid Shanghai</strong> deployment on unmanned substations (copper-cable theft): person detection is not the alarm — an occluded tool in the hand is. Then IVC / CVIU / JVCIR.</p>
        <div class="series-card__links">
          <a href="/projects/#occ-mllm">Overview</a>
          <a href="https://github.com/chaoyiwang09/OCC-MLLM">Code</a>
        </div>
      </div>
    </article>

    <article class="series-card">
      <div class="series-card__media series-card__media--single">
        <a href="/projects/#clear"><img src="/images/projects/clear/preview_english1.jpg" alt="CLEAR demo preview" loading="lazy"></a>
      </div>
      <div class="series-card__body">
        <div class="series-card__meta">
          <span class="pub-badge pub-badge--oral">Oral</span>
          <span class="pub-badge pub-badge--equal">Equal contrib.</span>
        </div>
        <h3 class="series-card__title">CLEAR · ICML 2026</h3>
        <p>Mask-free video subtitle removal with <strong>0.77%</strong> trainable parameters and zero-shot cross-lingual transfer.</p>
        <div class="series-card__links">
          <a href="/projects/#clear">Demos</a>
          <a href="https://arxiv.org/abs/2603.21901">arXiv</a>
          <a href="/publication/2026-clear">Entry</a>
        </div>
      </div>
    </article>

    <article class="series-card">
      <div class="series-card__media series-card__media--single">
        <a href="/projects/#reasonbrain"><img src="/images/projects/reasonbrain/cover.jpg" alt="ReasonBrain cover" loading="lazy"></a>
      </div>
      <div class="series-card__body">
        <div class="series-card__meta">
          <span class="pub-badge">ICML 2026</span>
        </div>
        <h3 class="series-card__title">ReasonBrain</h3>
        <p>Hypothetical instruction-based image editing with physical, temporal, causal, and story-level reasoning.</p>
        <div class="series-card__links">
          <a href="/projects/#reasonbrain">Demos</a>
          <a href="https://arxiv.org/abs/2507.01908">arXiv</a>
        </div>
      </div>
    </article>
  </div>
</div>

<div class="content-block reveal-on-scroll">
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

<p class="research-contact">Feel free to reach out at <a href="mailto:chaoyiwang@aliyun.com">chaoyiwang@aliyun.com</a> or <a href="mailto:chaoyiwang@mail.sim.ac.cn">chaoyiwang@mail.sim.ac.cn</a>.</p>
