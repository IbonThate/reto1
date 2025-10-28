window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const logo = document.querySelector('.splash-logo');

  if (!sessionStorage.getItem('splashShown')) {
    sessionStorage.setItem('splashShown', 'true');

    const minDuration = 1500;
    const startTime = Date.now();

    window.addEventListener('load', () => {
      const elapsed = Date.now() - startTime;
      const remaining = minDuration - elapsed;

      setTimeout(() => {
        splash.style.backdropFilter = 'blur(0px)';
        splash.style.background = 'transparent';
        logo.classList.add('move-to-header');

        setTimeout(() => {
          splash.remove();
        }, 800);
      }, remaining > 0 ? remaining : 0);
    });
  } else {
    splash.remove();
  }
});
