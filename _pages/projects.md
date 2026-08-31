---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
toc: false
redirect_from:
  - /demos/
  - /demos.html
---

Selected projects with papers, code, and visual demos. The UAV page is built so a visitor can **scan the three tasks, see what is done, and play the outdoor clip** without hunting.

<nav class="proj-jump reveal-on-scroll" aria-label="Jump to a project">
  <span class="proj-jump__label">On this page</span>
  <a href="#uav">UAV recon</a>
  <a href="#perch">PERCH</a>
  <a href="#stare">STARE</a>
  <a href="#occ-mllm">OCC-MLLM</a>
  <a href="#clear">CLEAR</a>
  <a href="#reasonbrain">ReasonBrain</a>
  <a href="#sensor">Sensors</a>
</nav>

<nav class="project-index reveal-on-scroll" aria-label="Projects by research area">
  <div class="project-index__row">
    <div class="project-index__domain">Embodied AI</div>
    <ul class="project-index__items">
      <li>
        <span class="project-index__name"><a href="#uav">UAV reconnaissance</a></span>
        <span class="project-index__venue">Flagship · ongoing</span>
        <span class="project-index__blurb">Approach · locate a branch · grasp — status and field demo</span>
      </li>
      <li>
        <span class="project-index__name"><a href="#perch">PERCH</a></span>
        <span class="project-index__venue">Submitted</span>
        <span class="project-index__blurb">Aerial ObjectNav → usable viewpoints (V-SR / V-SPL)</span>
      </li>
      <li>
        <span class="project-index__name"><a href="#stare">STARE</a></span>
        <span class="project-index__venue">Submitted</span>
        <span class="project-index__blurb">Spend-to-verify · risk-controlled UAV commitment</span>
      </li>
      <li>
        <span class="project-index__name"><a href="#occ-mllm">OCC-MLLM</a></span>
        <span class="project-index__venue">IVC / CVIU / JVCIR</span>
        <span class="project-index__blurb">State Grid Shanghai substations · occluded tools · +11.14%</span>
      </li>
    </ul>
  </div>
  <div class="project-index__row">
    <div class="project-index__domain">Generative &amp; Reasoning</div>
    <ul class="project-index__items">
      <li>
        <span class="project-index__name"><a href="#clear">CLEAR</a></span>
        <span class="project-index__venue">ICML 2026 Oral</span>
        <span class="project-index__blurb">Mask-free removal · 0.77% params · +6.77 dB PSNR</span>
      </li>
      <li>
        <span class="project-index__name"><a href="#reasonbrain">ReasonBrain</a></span>
        <span class="project-index__venue">ICML 2026</span>
        <span class="project-index__blurb">Hypothetical instruction-based image editing</span>
      </li>
    </ul>
  </div>
  <div class="project-index__row">
    <div class="project-index__domain">Sensor Foundations</div>
    <ul class="project-index__items">
      <li>
        <span class="project-index__name"><a href="#sensor">Sensor perception</a></span>
        <span class="project-index__venue">Remote Sensing / Neurocomputing</span>
        <span class="project-index__blurb">Acoustic &amp; low-resolution visual sensing</span>
      </li>
    </ul>
  </div>
</nav>

<div class="project-domain" id="domain-embodied">
  <h2>Embodied AI</h2>
</div>

<div class="uav-flagship reveal-on-scroll" id="uav">
  <div class="uav-flagship__intro">
    <div class="uav-flagship__kicker">
      Flagship project
      <span class="status-pill status-pill--next">Ongoing</span>
      <span class="status-pill status-pill--done">Module 1 submitted</span>
    </div>
    <h2 class="uav-flagship__title">Autonomous UAV reconnaissance</h2>
    <p class="uav-flagship__lead">Unattended sensors still have to be carried, placed, and retrieved. This project asks whether the sensing platform can <strong>deploy itself</strong>: fly to the named target, find a branch the gripper can close on, perch, and hold watch.</p>
    <p class="uav-flagship__path">Two-minute path: scan the three modules → <a href="#uav-demo">play the outdoor clip</a> → open <a href="#perch">PERCH</a> / <a href="#stare">STARE</a> PDFs.</p>
    <ul class="uav-legend">
      <li><span class="status-pill status-pill--done">Done</span> shipped as papers, with outdoor flights</li>
      <li><span class="status-pill status-pill--manual">Manual now</span> hardware holds; a person still flies and closes</li>
      <li><span class="status-pill status-pill--next">Next</span> multi-sensor fusion so the robot can find the branch itself</li>
    </ul>
  </div>
  <ul class="uav-pipeline">
    <li>
          <a class="uav-pipe uav-pipe--product" href="#uav-approach">
        <div class="uav-pipe__media">
          <img src="/images/projects/uav/uav_platform.jpg" alt="Hexacopter platform for approaching the target" loading="lazy">
        </div>
        <div class="uav-pipe__body">
          <span class="uav-pipe__num">Module 01</span>
          <span class="status-pill status-pill--done">Done · submitted 2026</span>
          <h3 class="uav-pipe__title">Approach the target</h3>
          <p class="uav-pipe__task">Navigate, disambiguate similar candidates, and stop at a pose that can actually see the object.</p>
          <p class="uav-pipe__now">Now: STARE + PERCH on Pixhawk 6C + Orin Nano Super. Real outdoor flights.</p>
          <span class="uav-pipe__go">Hardware, numbers, papers →</span>
        </div>
      </a>
    </li>
    <li>
      <a class="uav-pipe uav-pipe--next" href="#uav-branch">
        <div class="uav-pipe__media">
          <img src="/images/projects/uav/v2_product_callouts.jpg" alt="Planned V2 sensor stack: LiDAR, stereo, structured light" loading="lazy">
        </div>
        <div class="uav-pipe__body">
          <span class="uav-pipe__num">Module 02</span>
          <span class="status-pill status-pill--next">Next · to do</span>
          <h3 class="uav-pipe__title">Locate a graspable branch</h3>
          <p class="uav-pipe__task">On an unmarked outdoor tree, find a site the serrated gripper can actually close on (Ø50–150 mm).</p>
          <p class="uav-pipe__now">Now: a person still chooses the branch. Next: LiDAR + stereo + structured light fusion.</p>
          <span class="uav-pipe__go">V2 sensor stack →</span>
        </div>
      </a>
    </li>
    <li>
      <a class="uav-pipe" href="#uav-grasp">
        <div class="uav-pipe__media">
          <img src="/images/projects/uav/real_outdoor_gasp.jpg" alt="UAV perched on a real outdoor branch" loading="lazy">
        </div>
        <div class="uav-pipe__body">
          <span class="uav-pipe__num">Module 03</span>
          <span class="status-pill status-pill--manual">Mechanism ready · still manual</span>
          <h3 class="uav-pipe__title">Grasp and hold</h3>
          <p class="uav-pipe__task">Clamp the branch, stay, and watch. Recovery is later; perching is the research.</p>
          <p class="uav-pipe__now">Now: V1 already holds outdoors. Flight and close are still by hand.</p>
          <span class="uav-pipe__go">Photos and clip →</span>
        </div>
      </a>
    </li>
  </ul>
  <div class="uav-demo-band" id="uav-demo">
    <figure class="field-demo">
      <div class="field-demo__stage" data-video-src="/images/projects/uav/perching.mp4" aria-label="Play 14-second outdoor perch recording">
        <img class="field-demo__poster" src="/images/projects/uav/real_outdoor_gasp.jpg" alt="Poster for the outdoor perch recording">
        <button class="field-demo__play" type="button">
          <span class="field-demo__play-icon" aria-hidden="true"></span>
          <span>Play outdoor perch · 14 s</span>
        </button>
        <span class="field-demo__tag">Manual flight · manual close</span>
      </div>
      <figcaption>Current grasp progress, on a real outdoor branch. The mechanism holds; a person is still flying and closing it. Not autonomous site selection (that is module 02).</figcaption>
    </figure>
  </div>
</div>

<div class="uav-module reveal-on-scroll" id="uav-approach">
  <div class="uav-module__head">
    <h3 class="uav-module__title">01 · Approach the target</h3>
    <span class="status-pill status-pill--done">Done · submitted 2026</span>
    <span class="status-pill status-pill--done">First author</span>
  </div>
  <p class="uav-module__meta">Papers: <a href="#stare">STARE</a> (which target, when to commit) and <a href="#perch">PERCH</a> (where to stop in order to see it). GPS-aided now; GPS-denied is next.</p>
  <div class="uav-split">
    <div>
      <p>Proximity is not the mission. Several similar trees can match the instruction; a reachable pose can still leave the object occluded or too far. Module 1 is the autonomy we already fly:</p>
      <ul>
        <li><strong>STARE</strong> — spend sensing effort only when belief is insufficient; commit with a calibrated error bound. Outdoor: <strong>18/18 commits correct</strong>, two honest abstentions; up to <strong>+0.52</strong> success vs. look-once.</li>
        <li><strong>PERCH</strong> — map to see, see to trust, trust to stop. Viewpoint success × path efficiency (V-SPL) <strong>0.40 → 0.82</strong> on distractor-dense forests; <strong>0.68 → 0.80</strong> in city scenes.</li>
      </ul>
      <ul class="uav-facts">
        <li><strong>Platform</strong> Pixhawk 6C + Jetson Orin Nano Super (67 TOPS)</li>
        <li><strong>Status</strong> Submitted 2026 · real outdoor flights</li>
        <li><strong>Papers</strong> <a href="/files/papers/STARE.pdf">STARE PDF</a> · <a href="/files/papers/PERCH.pdf">PERCH PDF</a></li>
      </ul>
    </div>
    <figure class="uav-figure">
      <a href="/images/projects/uav/uav_platform.jpg"><img src="/images/projects/uav/uav_platform.jpg" alt="Approach platform: Pixhawk 6C, Orin Nano Super, cameras, GNSS"></a>
      <figcaption>Approach airframe used for STARE / PERCH flights — compute, cameras, and GNSS on a carbon-fiber hexacopter.</figcaption>
    </figure>
  </div>
</div>

<div class="uav-module reveal-on-scroll" id="uav-branch">
  <div class="uav-module__head">
    <h3 class="uav-module__title">02 · Locate a graspable branch</h3>
    <span class="status-pill status-pill--next">Next · to do</span>
  </div>
  <p class="uav-module__meta">This is the missing perception step. The gripper already exists; the robot does not yet choose the site by itself.</p>
  <div class="uav-split uav-split--wide-media">
    <div>
      <p>Module 1 gets the vehicle near the right tree. Module 3 can already clamp if a person lines it up. What is not autonomous yet: <strong>finding an unmarked outdoor branch</strong> whose axis and diameter the serrated gripper can take, and <strong>refusing</strong> the close when that estimate is still uncertain.</p>
      <div class="uav-todo">
        <span class="uav-todo__label">To do · multi-sensor fusion V2</span>
        <p>Keep the V1 ducted airframe and Ø50–150 mm gripper. Stack four modules: <strong>LiDAR</strong> (search and corridor), <strong>stereo</strong> (outdoor metric depth), <strong>3D structured light</strong> (axis and diameter in the last metre), <strong>Jetson Orin NX</strong> (100 TOPS). Close only if uncertainty is below a threshold.</p>
        <p>Six-month target: centimetre alignment, then a close that can refuse.</p>
      </div>
    </div>
    <figure class="uav-figure">
      <a href="/images/projects/uav/v2_product_callouts.jpg"><img src="/images/projects/uav/v2_product_callouts.jpg" alt="V2 planned stack: 360° LiDAR, Orin NX, stereo, structured light, V1 gripper"></a>
      <figcaption>V2 planned sensor stack on the V1 gripper airframe — not yet the flown configuration. This is the next build, not a completed result.</figcaption>
    </figure>
  </div>
</div>

<div class="uav-module reveal-on-scroll" id="uav-grasp">
  <div class="uav-module__head">
    <h3 class="uav-module__title">03 · Grasp and hold</h3>
    <span class="status-pill status-pill--manual">Mechanism ready</span>
    <span class="status-pill status-pill--manual">Flight &amp; close still by hand</span>
  </div>
  <p class="uav-module__meta">Studio and field stills. The same 14 s clip also sits in the <a href="#uav-demo">overview</a> so a visitor can play it without scrolling this far.</p>
  <div class="uav-split">
    <div>
      <p>V1 is a ducted cinewhoop with a serrated gripper. On a real outdoor branch the clamp <strong>already holds</strong>. What a person still does: fly the approach and close the hand. Whole vehicle about <strong>600 USD</strong>.</p>
      <ul class="uav-facts">
        <li><strong>Scene</strong> Outdoor tree, unmarked bark</li>
        <li><strong>Clip</strong> ~14 s · click play in the <a href="#uav-demo">overview</a> or below</li>
        <li><strong>Not shown</strong> Autonomous site selection (that is module 02)</li>
      </ul>
    </div>
    <div class="uav-pair">
      <figure class="uav-figure">
        <a href="/images/projects/uav/zhuawo_white.jpg"><img src="/images/projects/uav/zhuawo_white.jpg" alt="Studio view of the V1 ducted UAV and serrated gripper"></a>
        <figcaption>V1 gripper, studio view.</figcaption>
      </figure>
      <figure class="uav-figure">
        <a href="/images/projects/uav/real_outdoor_gasp.jpg"><img src="/images/projects/uav/real_outdoor_gasp.jpg" alt="V1 UAV holding a real outdoor branch"></a>
        <figcaption>Same mechanism, outdoor branch.</figcaption>
      </figure>
    </div>
  </div>
  <figure class="field-demo">
    <div class="field-demo__stage" data-video-src="/images/projects/uav/perching.mp4" aria-label="Play 14-second outdoor perch recording">
      <img class="field-demo__poster" src="/images/projects/uav/real_outdoor_gasp.jpg" alt="Poster for the outdoor perch recording">
      <button class="field-demo__play" type="button">
        <span class="field-demo__play-icon" aria-hidden="true"></span>
        <span>Play outdoor perch · 14 s</span>
      </button>
      <span class="field-demo__tag">Manual flight · manual close</span>
    </div>
    <figcaption>Outdoor perch on a real branch. The mechanism holds; a person is still flying and closing it. This is the current grasp progress — not the V2 fusion stack.</figcaption>
  </figure>
</div>

<div class="series-banner reveal-on-scroll">
  <div class="series-banner__label">Papers under module 01</div>
  <div class="series-banner__body">
    <strong>PERCH &amp; STARE</strong> are the submitted first-author pair behind “approach the target”: <em>where to look / whom to trust / when to stop</em> (PERCH), and <em>what evidence to buy under a risk certificate</em> (STARE). Back to the <a href="#uav">three-module overview</a>.
  </div>
</div>

<div class="project-section reveal-on-scroll" markdown="1" id="perch">
<a id="embodied"></a>

<h2 class="project-section__title">PERCH — Perception–Evidence–Reinforcement CHain</h2>

<p class="project-section__meta"><strong>Submitted</strong> (2026-07-28) · <strong>First author</strong> · UAV module 01 · edge multirotor deployment</p>

Proximity success overestimates usable aerial navigation: an agent can stop *near* the target yet end behind a tree. **PERCH** keeps the SR/SPL metric family but replaces the proximity-only predicate with viewpoint-conditioned **V-SR / V-SPL**, then repairs the gap with a closed chain:

1. **Map to see** — Occupancy-Driven Viewpoint Affordance (OVA) scores which observation poses can actually see the target.
2. **See to trust** — VLM-Verified Candidate Belief (VCB) gates commitment behind attribute-level verification.
3. **Trust to stop** — Verifiable-Reward Viewpoint Policy (VRP) decides when the terminal pose is worth holding (GRPO on programmatic geometric rewards).

Across closed-loop AirSim environments and photorealistic replays, modules form a monotone ablation ladder; e.g. V-SPL rises from **0.675 → 0.803** on CityEnviron and **0.395 → 0.816** on TartanAir distractor-dense forests. On an edge multirotor, PERCH **perches and holds watch** over real outdoor targets.

<div class="project-links">
  <a class="btn btn--primary" href="/files/papers/PERCH.pdf">PDF</a>
  <a class="btn btn--primary" href="/publication/2026-perch">Site entry</a>
  <a class="btn btn--primary" href="/projects/#stare">Sister paper: STARE →</a>
  <a class="btn btn--primary" href="/projects/#uav">UAV overview →</a>
</div>

<figure class="half">
  <a href="/images/projects/perch/fig1.jpg"><img src="/images/projects/perch/fig1.jpg" alt="PERCH inference loop"></a>
  <a href="/images/projects/perch/qualitative.jpg"><img src="/images/projects/perch/qualitative.jpg" alt="PERCH qualitative results"></a>
</figure>
<p class="demo-note">Left: PERCH inference loop (OVA → VCB → VRP). Right: qualitative / field results. Full manuscript: <a href="/files/papers/PERCH.pdf">PDF</a>.</p>
</div>

<div class="project-section reveal-on-scroll" markdown="1" id="stare">

<h2 class="project-section__title">STARE — Spend To Acquire Reliable Evidence</h2>

<p class="project-section__meta"><strong>Submitted</strong> (2026-07-28) · <strong>First author</strong> · UAV module 01 · risk-controlled commitment on edge UAVs</p>

Instructed target selection asks a UAV to pick the correct instance under tight compute, time, and motion budgets—a premature wrong commitment can forfeit the mission. **STARE** treats reliability as a resource acquired by *spending*:

1. **Verify by spending** — Cascaded Evidential Introspection (CEI): reliability probe + wealth accumulator → commit-or-defer.
2. **Spend by learning** — Budget-Constrained Evidence Allocation (BEA): Lagrangian-PPO decides whether further evidence is worth its cost.
3. **Learn with guarantees** — Distribution-Free Risk Certification (DRC): Learn-then-Test calibration of the dual-channel commit gate.

Across six aerial datasets, four frozen depth backbones, and three target categories, STARE raises end-to-end success by up to **+0.52 absolute** over look-once commitment while keeping selective-error estimates below calibrated targets. The same agent commits correctly on **real outdoor flights** and abstains when evidence stays thin.

<div class="project-links">
  <a class="btn btn--primary" href="/files/papers/STARE.pdf">PDF</a>
  <a class="btn btn--primary" href="/publication/2026-stare">Site entry</a>
  <a class="btn btn--primary" href="/projects/#perch">Sister paper: PERCH →</a>
  <a class="btn btn--primary" href="/projects/#uav">UAV overview →</a>
</div>

<figure class="half">
  <a href="/images/projects/stare/fig1.jpg"><img src="/images/projects/stare/fig1.jpg" alt="STARE inference loop"></a>
  <a href="/images/projects/stare/qualitative.jpg"><img src="/images/projects/stare/qualitative.jpg" alt="STARE qualitative results"></a>
</figure>
<p class="demo-note">Left: STARE spend-to-verify loop (CEI → DRC → BEA). Right: qualitative / field results. Full manuscript: <a href="/files/papers/STARE.pdf">PDF</a>.</p>

**Shared question.** Both papers close the loop from partial observability to action on edge UAVs: *where to look / whom to trust / when to stop* (**PERCH**), and *what evidence to buy under a risk certificate* (**STARE**).
</div>

<div class="project-section reveal-on-scroll" markdown="1" id="occ-mllm">

<div class="series-banner series-banner--inner">
  <div class="series-banner__label">Field → thesis</div>
  <div class="series-banner__body">Commissioned by State Grid Shanghai on unmanned substations. Person detection is not the alarm; an occluded tool in the hand is — that gap is the OCC-MLLM series (IVC / CVIU / JVCIR).</div>
</div>

<h2 class="project-section__title">OCC-MLLM Series — Occlusion Reasoning with MLLMs</h2>

<p class="project-section__meta"><strong>First author</strong> · <i>Image and Vision Computing</i> · <i>CVIU</i> · <i>JVCIR</i> · fielded with State Grid Shanghai</p>

<div class="field-callout">
  <span class="field-callout__label">Deployed · State Grid Shanghai</span>
  <p>Order and on-site deployment: unattended sensors on <strong>unmanned substations</strong>, to stop <strong>copper-cable theft</strong>. The sensing stack is already in the field. Completing the alarm logic still needs to know what is in the hand.</p>
</div>

<div class="decision-chain" aria-label="Alarm logic">
  <div class="decision-chain__step">
    <span class="decision-chain__kicker">Not enough</span>
    <p>Person detected <strong>≠</strong> alarm</p>
    <small>Technicians enter the yard too; a person-only detector false-alarms.</small>
  </div>
  <div class="decision-chain__step decision-chain__step--go">
    <span class="decision-chain__kicker">What should fire</span>
    <p>Person + cutting tool + location → <strong>priority</strong></p>
    <small>The tool is often occluded. That is the research problem.</small>
  </div>
</div>

The **OCC-MLLM** series is the Ph.D. answer to that gap: infer properties of **occluded / partially observed** hand-held objects with 3D-aware supervision, chain-of-thought guidance, self-correction, and joint understanding–generation. First: is the current view enough? If not: reconstruct, then reason. Across the series, occlusion decision quality rises substantially (e.g., OCC-MLLM-CoT reports **+11.14%** decision score over SOTA MLLMs). The same question — *is my evidence enough?* — later returns on the UAV.

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
<p class="demo-note">Figures from <a href="https://github.com/chaoyiwang09/OCC-MLLM">chaoyiwang09/OCC-MLLM</a>. Field story: State Grid Shanghai unmanned substations; the papers address the occluded hand-held tool.</p>
</div>

<div class="project-domain" id="domain-generative">
  <h2>Generative &amp; Reasoning</h2>
</div>

<div class="project-section reveal-on-scroll" markdown="1" id="clear">

<h2 class="project-section__title">CLEAR — Mask-Free Video Subtitle Removal</h2>

<p class="project-section__meta"><strong>ICML 2026 Oral &amp; Spotlight</strong> · <em>Equal contribution</em> with Qingdong He</p>

**CLEAR** removes video subtitles **without inference-time masks**. A two-stage design learns self-supervised priors, then adapts a diffusion backbone with LoRA (**0.77%** trainable parameters). On Chinese benchmarks it improves over mask-dependent baselines by **+6.77 dB PSNR** and **−74.7% VFID**, with zero-shot generalization across languages.

**Role in my research arc:** parameter-efficient video understanding–generation under incomplete evidence — a practical building block for agents that must clean or edit sensory streams without heavy annotation.

<div class="project-links">
  <a class="btn btn--primary" href="https://arxiv.org/abs/2603.21901">Paper</a>
  <a class="btn btn--primary" href="https://github.com/silent-commit/CLEAR">Code</a>
  <a class="btn btn--primary" href="https://huggingface.co/charlesw09/CLEAR-mask-free-video-subtitle-removal">Model</a>
  <a class="btn btn--primary" href="/publication/2026-clear">Site entry</a>
</div>

<h3>Zero-shot demos (static preview · click to load animation)</h3>

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
</div>

<div class="project-section reveal-on-scroll" markdown="1" id="reasonbrain">

<h2 class="project-section__title">ReasonBrain — Reasoning to Edit</h2>

<p class="project-section__meta"><strong>ICML 2026</strong> · Hypothetical instruction-based image editing</p>

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
</div>

<div class="project-domain" id="domain-sensor">
  <h2>Sensor Foundations</h2>
</div>

<div class="project-section reveal-on-scroll" markdown="1" id="sensor">

<h2 class="project-section__title">Sensor Perception Foundations</h2>

<p class="project-section__meta"><strong>First-author</strong> acoustic sensing · low-resolution recognition</p>

Early work on robust perception under noise and limited resources — the sensing substrate for later multimodal and embodied research.

- [Real-Time Vehicle Sound Detection](/publication/2022-vehicle-sound-detection) — *Remote Sensing*, 2022 (**first author**): depthwise separable CNNs + spectrogram augmentation for real-time vehicle acoustics.
- [Transformer-Based Low-Resolution Face Recognition](/publication/2022-transformer-lr-face) — *Neurocomputing*, 2022: on-/offline knowledge distillation for low-resolution recognition.
</div>
