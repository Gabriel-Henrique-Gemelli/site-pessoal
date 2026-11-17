// Animações de scroll (GSAP 3 + ScrollTrigger, carregados por CDN em index.html).
// Só transform, opacity e clip-path. Sem GSAP ou com prefers-reduced-motion: o site fica estático e visível.
(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  let mm = null;

  // =====================
  // DIVIDIR TEXTO EM PALAVRAS E LETRAS (manual, sem plugin pago)
  // =====================
  function dividir(el) {
    if (!el.querySelector('.char')) {
      el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
      percorrer(el);
    }
    return { palavras: $$('.word', el), letras: $$('.char', el) };
  }

  function percorrer(pai) {
    let ultima = null; // última palavra criada, para colar o ponto final nela
    Array.from(pai.childNodes).forEach(no => {
      if (no.nodeType === 3) {
        const frag = document.createDocumentFragment();
        no.textContent.split(/(\s+)/).forEach(parte => {
          if (!parte) return;
          if (/^\s+$/.test(parte)) { frag.appendChild(document.createTextNode(parte)); ultima = null; return; }
          const w = document.createElement('span');
          w.className = 'word';
          w.setAttribute('aria-hidden', 'true');
          Array.from(parte).forEach(c => {
            const s = document.createElement('span');
            s.className = 'char';
            s.textContent = c;
            w.appendChild(s);
          });
          frag.appendChild(w);
          ultima = w;
        });
        pai.replaceChild(frag, no);
      } else if (no.classList && no.classList.contains('dot')) {
        no.classList.add('char');
        no.setAttribute('aria-hidden', 'true');
        if (ultima) ultima.appendChild(no); // evita quebra de linha antes do ponto
      } else if (no.nodeType === 1) {
        percorrer(no);
      }
    });
  }

  // =====================
  // TÍTULOS GIGANTES ENTRANDO POR LETRA (celular: por palavra)
  // =====================
  function titulos(desktop) {
    $$('.about-big, .section-title').forEach(el => {
      const { palavras, letras } = dividir(el);
      gsap.fromTo(desktop ? letras : palavras,
        { yPercent: 110, rotate: desktop ? 6 : 0, opacity: 0 },
        {
          yPercent: 0, rotate: 0, opacity: 1, ease: 'none',
          stagger: desktop ? 0.04 : 0.12,
          scrollTrigger: { trigger: el, start: 'top 92%', end: desktop ? 'top 42%' : 'top 62%', scrub: 0.6 }
        });
    });
  }

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

    const { palavras, letras } = dividir($('.hero-title'));
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
      .fromTo(desktop ? letras : palavras,
        { yPercent: 120, rotate: desktop ? 8 : 0, opacity: 0 },
        { yPercent: 0, rotate: 0, opacity: 1, ease: 'power3.out', stagger: desktop ? 0.015 : 0.08, duration: 0.5 }, 0.5)
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
        titulos(desktop);
        return () => document.documentElement.classList.remove('js-anim');
      }
    );
    ScrollTrigger.refresh();
  }

  window.initAnimacoes = iniciar;
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
})();
