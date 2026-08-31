(function () {
  function initDemoLoaders() {
    document.querySelectorAll('.demo-load').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var src = btn.getAttribute('data-src');
        if (!src) return;
        var original = btn.textContent;
        btn.textContent = 'Loading…';
        btn.disabled = true;
        var img = document.createElement('img');
        img.alt = original;
        img.onload = function () {
          var host = btn.closest('.demo-preview') || btn;
          host.replaceWith(img);
        };
        img.onerror = function () {
          btn.textContent = 'Failed — open GitHub';
          btn.disabled = false;
          btn.onclick = function () {
            window.open('https://github.com/silent-commit/CLEAR', '_blank');
          };
        };
        img.src = src;
      });
    });
  }

  function initFieldDemos() {
    document.querySelectorAll('.field-demo__stage[data-video-src]').forEach(function (stage) {
      if (stage.getAttribute('data-bound') === '1') return;
      stage.setAttribute('data-bound', '1');

      var start = function (e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        if (stage.classList.contains('is-playing')) return;
        var src = stage.getAttribute('data-video-src');
        if (!src) return;

        var video = document.createElement('video');
        video.className = 'field-demo__video';
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('preload', 'auto');

        stage.classList.add('is-playing');
        Array.prototype.forEach.call(stage.children, function (child) {
          if (child.tagName !== 'VIDEO') child.hidden = true;
        });
        stage.appendChild(video);

        var playAttempt = video.play();
        if (playAttempt && playAttempt.catch) {
          playAttempt.catch(function () {});
        }
      };

      var btn = stage.querySelector('.field-demo__play');
      if (btn) btn.addEventListener('click', start);
      stage.addEventListener('click', function (e) {
        if (stage.classList.contains('is-playing')) return;
        start(e);
      });
      stage.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') start(e);
      });
      if (!stage.hasAttribute('tabindex')) stage.setAttribute('tabindex', '0');
      if (!stage.hasAttribute('role')) stage.setAttribute('role', 'button');
    });
  }

  function boot() {
    initDemoLoaders();
    initFieldDemos();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
