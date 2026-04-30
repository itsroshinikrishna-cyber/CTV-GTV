/* Big Screen Stories — minor enhancements.
   - Reveal blocks on scroll
   - Mark nav as scrolled
*/
(function () {
  const targets = document.querySelectorAll(
    '.story, .tv-frame, .stats, .sequence, .meta, .gallery, .g-card'
  );

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    targets.forEach((t) => io.observe(t));
  } else {
    targets.forEach((t) => t.classList.add('is-in'));
  }

  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Gallery carousels — arrow nav + edge fade state */
  document.querySelectorAll('.gallery__carousel').forEach((carousel) => {
    const track = carousel.querySelector('.gallery__grid');
    const prev = carousel.querySelector('[data-dir="prev"]');
    const next = carousel.querySelector('[data-dir="next"]');
    if (!track) return;

    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 1;
      const x = track.scrollLeft;
      const canPrev = x > 1;
      const canNext = x < max;
      carousel.dataset.canPrev = canPrev ? 'true' : 'false';
      carousel.dataset.canNext = canNext ? 'true' : 'false';
      if (prev) prev.disabled = !canPrev;
      if (next) next.disabled = !canNext;
    };

    const step = (dir) => {
      const card = track.querySelector('.g-card');
      const cardW = card ? card.getBoundingClientRect().width : 400;
      const gap = parseFloat(getComputedStyle(track).columnGap || '32') || 32;
      track.scrollBy({ left: dir * (cardW + gap), behavior: 'smooth' });
    };

    prev && prev.addEventListener('click', () => step(-1));
    next && next.addEventListener('click', () => step(1));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
})();
