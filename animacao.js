// Animações de scroll (GSAP 3 + ScrollTrigger, carregados por CDN em index.html).
// Só transform, opacity e clip-path. Sem GSAP ou com prefers-reduced-motion: o site fica estático e visível.
(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  let mm = null;

  // =====================
  // ABERTURA "role para abrir"
  // =====================
  function abertura(desktop) {
    const hero = $('#hero');
    const conteudo = $('#hero .container');
    const nome = $('.intro-name');
    const resto = $$('.intro-sub, .intro-hint');
    const intro = $('.intro');
    if (!hero || !conteudo || !nome || !intro) return null;

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: desktop ? '+=140%' : '+=90%',
        pin: true,
        scrub: 0.7,
        anticipatePin: 1
      }
    });
    tl.to(nome, { scale: desktop ? 9 : 4, opacity: 0, ease: 'power2.in', duration: 0.6 }, 0)
      .to(resto, { opacity: 0, y: -30, duration: 0.25 }, 0)
      .fromTo(conteudo,
        { clipPath: 'circle(0% at 50% 55%)' },
        { clipPath: 'circle(150% at 50% 55%)', ease: 'power1.inOut', duration: 0.7 }, 0.2)
      .set(intro, { autoAlpha: 0 }, 0.95)
      .to({}, { duration: 0.15 });
    return tl;
  }

  // =====================
  // INICIALIZAÇÃO (refeita a cada troca de idioma, pois o texto é renderizado por Script.js)
  // =====================
  function iniciar() {
    if (mm) mm.kill();
    mm = gsap.matchMedia();
    mm.add(
      {
        desktop: '(min-width: 769px) and (prefers-reduced-motion: no-preference)',
        mobile: '(max-width: 768px) and (prefers-reduced-motion: no-preference)'
      },
      ctx => {
        const { desktop, mobile } = ctx.conditions;
        if (!desktop && !mobile) return;
        document.documentElement.classList.add('js-anim');
        abertura(desktop);
        return () => document.documentElement.classList.remove('js-anim');
      }
    );
    ScrollTrigger.refresh();
  }

  window.initAnimacoes = iniciar;
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
})();
