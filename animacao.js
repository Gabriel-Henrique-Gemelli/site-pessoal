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
  // CARDS EMPILHADOS (trajeto e projetos)
  // Desktop: sticky (CSS) + o card de trás encolhe e escurece. Celular: só uma entrada leve.
  // =====================
  function empilhar(desktop) {
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 64;
    ['#trajeto-cards', '#projects'].forEach(sel => {
      const cards = $$('.card', $(sel));
      if (!desktop) {
        cards.forEach(c => gsap.from(c, { y: 40, opacity: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: c, start: 'top 92%', once: true } }));
        return;
      }
      cards.forEach((c, i) => {
        c.style.setProperty('--i', i);
        const sombra = document.createElement('div');
        sombra.className = 'card-shade';
        sombra.setAttribute('aria-hidden', 'true');
        c.appendChild(sombra);
      });
      cards.forEach((c, i) => {
        const proximo = cards[i + 1];
        if (!proximo) return;
        const st = { trigger: proximo, start: 'top bottom', end: 'top ' + (navH + 20 + (i + 1) * 14) + 'px', scrub: true };
        gsap.to(c, { scale: 0.94, ease: 'none', scrollTrigger: st });
        gsap.to($('.card-shade', c), { opacity: 0.55, ease: 'none', scrollTrigger: st });
      });
    });
  }

  // =====================
  // FAIXA DAS FERRAMENTAS (corre com o scroll, duas linhas em sentidos opostos)
  // =====================
  function faixa(desktop) {
    const band = $('#tools-band');
    if (!band) return;
    const dist = desktop ? 30 : 20; // % da largura da linha (que tem a lista duplicada)
    const st = { trigger: band, start: 'top bottom', end: 'bottom top', scrub: 0.6 };
    gsap.fromTo($('[data-band="1"]', band), { xPercent: 0 }, { xPercent: -dist, ease: 'none', scrollTrigger: st });
    gsap.fromTo($('[data-band="2"]', band), { xPercent: -dist }, { xPercent: 0, ease: 'none', scrollTrigger: st });
  }

  // =====================
  // CONTADORES DO SOBRE (3, 400, 55)
  // =====================
  function contadores() {
    $$('.stat-n').forEach(el => {
      const alvo = parseInt(el.textContent, 10);
      if (!alvo) return;
      const o = { v: 0 };
      el.textContent = '0';
      gsap.to(o, {
        v: alvo, duration: 1.8, ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(o.v); },
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
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
        empilhar(desktop);
        faixa(desktop);
        contadores();
        return () => document.documentElement.classList.remove('js-anim');
      }
    );
    ScrollTrigger.refresh();
  }

  window.initAnimacoes = iniciar;
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
})();
