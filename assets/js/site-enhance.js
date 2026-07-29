(function () {
  function initReveal() {
    var nodes = document.querySelectorAll('.reveal-on-scroll');
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    nodes.forEach(function (el) { io.observe(el); });
  }

  function initBibtexCopy() {
    document.querySelectorAll('.bibtex-copy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wrap = btn.closest('.bibtex-wrap');
        var src = wrap && wrap.querySelector('.bibtex-source');
        var text = src ? src.textContent.trim() : '';
        if (!text) return;
        var done = function () {
          var prev = btn.textContent;
          btn.textContent = 'Copied';
          btn.classList.add('is-copied');
          setTimeout(function () {
            btn.textContent = prev;
            btn.classList.remove('is-copied');
          }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(function () {
            fallbackCopy(text, done);
          });
        } else {
          fallbackCopy(text, done);
        }
      });
    });
  }

  function fallbackCopy(text, done) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    area.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    document.body.removeChild(area);
  }

  function boot() {
    initReveal();
    initBibtexCopy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
