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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDemoLoaders);
  } else {
    initDemoLoaders();
  }
})();
