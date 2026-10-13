(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const root = document.documentElement;
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
    });
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navigation.classList.contains("is-open")) {
        menuToggle.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
        menuToggle.focus();
      }
    });
  }

  function updateDemandMetrics() {
    const chart = document.querySelector(".demand-graphic[data-model-wape][data-baseline-wape]");
    if (!chart) return;
    const model = Number(chart.dataset.modelWape);
    const baseline = Number(chart.dataset.baselineWape);
    const max = Number(chart.dataset.chartMax || 50);
    if (![model, baseline, max].every(Number.isFinite) || model <= 0 || baseline <= 0 || max <= 0) return;

    const reduction = ((baseline - model) / baseline) * 100;
    document.querySelectorAll('[data-wape-value="model"]').forEach((node) => { node.textContent = `${model.toFixed(2)}%`; });
    document.querySelectorAll('[data-wape-value="baseline"]').forEach((node) => { node.textContent = `${baseline.toFixed(1)}%`; });
    document.querySelectorAll("[data-wape-reduction]").forEach((node) => {
      node.textContent = `≈${reduction.toFixed(1)}%`;
    });
    chart.querySelectorAll("[data-wape-bar]").forEach((bar) => {
      const value = bar.dataset.wapeBar === "model" ? model : baseline;
      bar.style.width = `${Math.min(100, (value / max) * 100).toFixed(2)}%`;
    });
    const comparison = chart.querySelector(".bar-comparison");
    if (comparison) {
      comparison.setAttribute("aria-label", `WAPE comparison: seasonal baseline ${baseline.toFixed(1)}%; EventHorizon Demand ${model.toFixed(2)}%; approximately ${reduction.toFixed(1)}% relative reduction compared with baseline. Benchmark result, not a customer outcome.`);
    }
  }
  updateDemandMetrics();

  const stages = [
    {
      title: "Start with a comparison.",
      copy: "A model score is hard to interpret in isolation. Compare it with a clearly defined baseline on aligned evaluation data before describing an improvement.",
      caveat: "A better score is an observation — not, by itself, proof of generalization or business value.",
      graphic: [36,54,45,72,61,84,68,92,74,58,80,66]
    },
    {
      title: "Keep the timeline honest.",
      copy: "Walk-forward evaluation respects the order of events. A temporal embargo separates training and evaluation windows to reduce the risk of information leaking across the cutoff.",
      caveat: "Temporal splits help address leakage; they cannot correct every source of bias or guarantee future performance.",
      graphic: [30,42,55,38,61,70,48,78,63,83,74,90]
    },
    {
      title: "Estimate uncertainty.",
      copy: "Block bootstrap resamples groups of adjacent dates to better respect temporal dependence. Paired gap bootstrap evaluates the model-versus-baseline difference on aligned observations.",
      caveat: "Inference depends on assumptions, sample design, and implementation. Confidence intervals are not guarantees.",
      graphic: [43,59,37,67,51,72,45,80,61,75,53,86]
    },
    {
      title: "Challenge the apparent signal.",
      copy: "Permutation testing constructs a null comparison by shuffling targets or labels and re-evaluating. It helps ask whether the observed result is unusual under that specific null setup.",
      caveat: "A test only speaks to the null and exchangeability assumptions it actually uses.",
      graphic: [42,36,49,41,57,45,52,39,61,46,55,43]
    },
    {
      title: "Ask whether it matters in practice.",
      copy: "Even a robust forecast may not improve a real decision. Practical validation investigates operational constraints, the cost of errors, existing processes, and whether better forecasts can change outcomes.",
      caveat: "For EventHorizon Demand, commercial validation with real businesses remains open.",
      graphic: [25,45,35,60,47,71,55,80,65,74,88,78]
    }
  ];

  const tabs = Array.from(document.querySelectorAll(".validation-step"));
  const panel = document.querySelector("#step-panel");
  const panelIndex = document.querySelector("#panel-index");
  const panelTitle = document.querySelector("#panel-title");
  const panelCopy = document.querySelector("#panel-copy");
  const panelCaveat = document.querySelector("#panel-caveat");
  const bars = document.querySelector(".sample-bars");

  function selectStage(index, moveFocus = false) {
    const stage = stages[index];
    if (!stage || !panel) return;

    tabs.forEach((tab, tabIndex) => {
      const selected = tabIndex === index;
      tab.classList.toggle("is-active", selected);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });

    panel.setAttribute("aria-labelledby", tabs[index].id);
    if (panelIndex) panelIndex.textContent = `STAGE ${String(index + 1).padStart(2, "0")} / 05`;
    if (panelTitle) panelTitle.textContent = stage.title;
    if (panelCopy) panelCopy.textContent = stage.copy;
    if (panelCaveat) panelCaveat.textContent = stage.caveat;

    if (bars) {
      const existingBars = Array.from(bars.querySelectorAll("i"));
      stage.graphic.forEach((height, barIndex) => {
        const bar = existingBars[barIndex];
        if (bar) bar.style.height = `${height}%`;
      });
    }
    if (!reduceMotion.matches) {
      panel.classList.remove("is-updating");
      void panel.offsetWidth;
      panel.classList.add("is-updating");
    }
    if (moveFocus) tabs[index].focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectStage(index));
    tab.addEventListener("keydown", (event) => {
      let next = index;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else return;
      event.preventDefault();
      selectStage(next, true);
    });
  });
  selectStage(0);

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const headerMark = document.querySelector(".site-header .brand-mark");
  if (headerMark && !reduceMotion.matches) {
    requestAnimationFrame(() => {
      headerMark.classList.add("is-glowing");
      headerMark.addEventListener("animationend", () => headerMark.classList.remove("is-glowing"), { once: true });
    });
  }

  let revealObserver = null;
  let motionTargets = [];
  let animatedPaths = [];

  function clearMotionEnhancements() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = null;
    root.classList.remove("motion-ready");
    motionTargets.forEach((element) => element.classList.remove("reveal-on-scroll", "is-visible", "line-visible"));
    animatedPaths.forEach((path) => {
      path.classList.remove("animated-line", "is-visible");
      path.style.removeProperty("stroke-dasharray");
      path.style.removeProperty("stroke-dashoffset");
    });
    motionTargets = [];
    animatedPaths = [];
  }

  function setupMotionEnhancements() {
    clearMotionEnhancements();
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;

    const selectors = [
      ".hero-copy", ".hero-visual", ".ticker-inner", ".section-heading", ".project",
      ".validation-layout", ".validation-footnote", ".toolkit-mark", ".toolkit-copy",
      ".toolkit-aside", ".log-empty", ".about-copy", ".closing-inner", ".footer-top"
    ];
    motionTargets = Array.from(new Set(selectors.flatMap((selector) => Array.from(document.querySelectorAll(selector)))));
    motionTargets.forEach((element) => element.classList.add("reveal-on-scroll"));

    const paths = Array.from(document.querySelectorAll(".signal-path, .signal-forecast, .price-path"));
    paths.forEach((path) => {
      try {
        const length = path.getTotalLength();
        if (!Number.isFinite(length) || length <= 0) return;
        path.classList.add("animated-line");
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);
        animatedPaths.push(path);
        const svg = path.closest("svg");
        if (svg && !motionTargets.includes(svg)) {
          svg.classList.add("reveal-on-scroll");
          motionTargets.push(svg);
        }
      } catch (_error) {
        
      }
    });

    root.classList.add("motion-ready");
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        entry.target.querySelectorAll(".animated-line").forEach((path) => path.classList.add("is-visible"));
        if (entry.target.matches("svg")) {
          const ownPath = entry.target.querySelectorAll(".animated-line");
          ownPath.forEach((path) => path.classList.add("is-visible"));
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });

    motionTargets.forEach((element) => revealObserver.observe(element));
  }

  setupMotionEnhancements();
  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", setupMotionEnhancements);
  } else if (typeof reduceMotion.addListener === "function") {
    reduceMotion.addListener(setupMotionEnhancements);
  }
})();