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

  function initProjectJump() {
    var nav = document.querySelector('.proj-jump');
    if (!nav) return;

    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    var sections = links
      .map(function (a) {
        var id = a.getAttribute('href').slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    function setActive(id) {
      links.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
      });
    }

    links.forEach(function (a) {
      a.addEventListener('click', function () {
        setActive(a.getAttribute('href').slice(1));
      });
    });

    if (!('IntersectionObserver' in window) || !sections.length) {
      if (location.hash) setActive(location.hash.slice(1));
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (e) { return e.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
        if (visible[0] && visible[0].target.id) setActive(visible[0].target.id);
      },
      { rootMargin: '-120px 0px -55% 0px', threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach(function (sec) { io.observe(sec); });
    if (location.hash) setActive(location.hash.slice(1));
  }

  function boot() {
    initReveal();
    initBibtexCopy();
    initProjectJump();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
