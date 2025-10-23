// Scroll reveal đơn giản
(function () {
  const els = document.querySelectorAll('.post-content > *, .page-content > *, .post-entry');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
    })
  }, {threshold: .08});
  els.forEach(el => { el.classList.add('reveal'); io.observe(el); });
})();
