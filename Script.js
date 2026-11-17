// =====================
// EMAIL / ALERT
// =====================
function copy() { navigator.clipboard.writeText('gabrielhenriquegemelli@gmail.com'); }

function exibirAlerta() {
  copy();
  const m = document.getElementById('alerta');
  m.style.display = 'flex';
  m.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function fecharAlerta() {
  const m = document.getElementById('alerta');
  m.style.display = 'none';
  m.classList.remove('active');
  document.body.style.overflow = '';
}

// =====================
// CERTIFICADOS DATA
// =====================
const CERTS = [
  {name:'AWS Certified Cloud Practitioner',issuer:'AWS',year:'2025',url:'',pdf:'assets/Certificados/AWS Certified Cloud Practitioner certificate.pdf'},
  {name:'AWS Certified Cloud Practitioner — Exam Result',issuer:'AWS',year:'2025',url:'',pdf:'assets/Certificados/AWS Certified Cloud Practitioner (1).pdf'},
  {name:'Java Fundamentals',issuer:'Oracle/Alura',year:'2024',url:'',pdf:'assets/Certificados/Java.pdf'},
  {name:'Scholarship Program — Back-end Development (Spring Boot) for Commerce on AWS',issuer:'Compass UOL',year:'2025',url:'',pdf:'assets/Certificados/Gabriel Henrique Gemelli.pdf'},
  {name:'Qualificação em Desenvolvimento de Aplicações Júnior (400h)',issuer:'ATITUS Educação',year:'2024',url:'',pdf:'assets/Certificados/Aplicaçoes.pdf'},
  {name:'Qualificação em Desenvolvimento de Soluções (400h)',issuer:'ATITUS Educação',year:'2024',url:'',pdf:'assets/Certificados/Soluçoes.pdf'},
  {name:'Workshop Hackday (8h)',issuer:'ATITUS Educação',year:'2023',url:'',pdf:'assets/Certificados/Certificado gabriel henrique gemelli 01_04_2023.pdf'},
  {name:'Como Construir e Acelerar sua Carreira (1h)',issuer:'Even3',year:'2023',url:'',pdf:'assets/Certificados/Acelerar carreira.pdf'},
  {name:'Comunicação Não Violenta (CNV)',issuer:'Alfasig Experience',year:'2025',url:'',pdf:'assets/Certificados/Certificado cnv.pdf'},
  {name:'Atendimento ao Cliente: Presencial e Telefônico (2h)',issuer:'Alfasig Experience',year:'2025',url:'',pdf:'assets/Certificados/Atendimento ao cliente.pdf'},
  {name:'Atendimento ao Cliente, Vendas e Negociação (1h)',issuer:'Alfasig Experience',year:'2025',url:'',pdf:'assets/Certificados/mpdf.pdf'},
  {name:'A Arte de se Relacionar (1h)',issuer:'Alfasig Experience',year:'2025',url:'',pdf:'assets/Certificados/A arte de se relacionar.pdf'},
  {name:'Entendendo e Documentando REST / RESTful APIs (5h)',issuer:'Udemy',year:'2026',url:'',pdf:'assets/Certificados/api rest.pdf'},
  {name:'Aprenda a Criar Servidores Virtuais com EC2 na Amazon AWS (3h)',issuer:'Udemy',year:'2026',url:'',pdf:'assets/Certificados/Aprenda a criar servidor virtual com ec2.pdf'},
  {name:'Design Patterns em TypeScript — Entendendo Padrões de Projetos (6.5h)',issuer:'Udemy',year:'2026',url:'',pdf:'assets/Certificados/Desing patterns.pdf'},
  {name:'DOCKER Completo do Zero ao Avançado (5.5h)',issuer:'Udemy',year:'2025',url:'',pdf:'assets/Certificados/Docker.pdf'},
  {name:'Git e GitHub: Aprenda em 3 Dias com Projetos Reais (2.5h)',issuer:'Udemy',year:'2025',url:'',pdf:'assets/Certificados/Git github.pdf'},
  {name:'Node.js Microservices: NestJS, RabbitMQ and Cloud Services (22.5h)',issuer:'Udemy',year:'2026',url:'',pdf:'assets/Certificados/Microservices.pdf'},
  {name:'Dominando Banco de Dados com MySQL (4h)',issuer:'Udemy',year:'2025',url:'',pdf:'assets/Certificados/My SQL.pdf'},
  {name:'NestJS 10 Fundamentos (15h)',issuer:'Udemy',year:'2026',url:'',pdf:'assets/Certificados/Nestjs 10 fundamentos.pdf'},
  {name:'Node JS Curso Completo do Básico ao Avançado (10h)',issuer:'Udemy',year:'2025',url:'',pdf:'assets/Certificados/Node js.pdf'},
  {name:'Aprenda Postman em 1 Hora — Iniciante (1h)',issuer:'Udemy',year:'2026',url:'',pdf:'assets/Certificados/PostMan.pdf'},
  {name:'Aprenda TYPESCRIPT em 7 Dias com Projetos Práticos (5.5h)',issuer:'Udemy',year:'2025',url:'',pdf:'assets/Certificados/typescript.pdf'}
];

// =====================
// TEXTOS (conteudo/portfolio-textos.md, aprovado)
// =====================
const t = o => (o && (o[currentLang] ?? o.pt)) || '';

const TRAJETO = [
  { color: 'orange', company: 'AI/R',
    date: { pt: '2026.07 → agora', en: 'Jul 2026 → now' },
    role: { pt: 'Backend Developer', en: 'Backend Developer' },
    sub:  { pt: 'Java e Spring Boot', en: 'Java and Spring Boot' },
    points: { pt: ['Back end com Java e Spring Boot, a stack principal', 'Promovido de Programmer I em jul 2026'],
              en: ['Back end with Java and Spring Boot, the main stack', 'Promoted from Programmer I in Jul 2026'] },
    tags: ['Java', 'Spring Boot'] },
  { color: 'ink', company: 'AI/R',
    date: { pt: '2026.02 → 2026.06', en: 'Feb 2026 → Jun 2026' },
    role: { pt: 'Programmer I', en: 'Programmer I' },
    sub:  { pt: 'Java e Spring Boot', en: 'Java and Spring Boot' },
    points: { pt: ['Back end com Java e Spring Boot'], en: ['Back end with Java and Spring Boot'] },
    tags: ['Java', 'Spring Boot'] },
  { color: 'sand', company: 'AI/R',
    date: { pt: '2025.11 → 2026.02', en: 'Nov 2025 → Feb 2026' },
    role: { pt: 'Estágio back-end, Node.js', en: 'Backend Development Intern, Node.js' },
    sub:  { pt: 'estágio, APIs REST', en: 'internship, REST APIs' },
    points: { pt: ['APIs REST em Node.js com integração a banco de dados', 'Endpoints documentados e testados com Swagger/OpenAPI e Postman', 'Git e AWS no dia a dia'],
              en: ['REST APIs in Node.js with database integration', 'Endpoints documented and tested with Swagger/OpenAPI and Postman', 'Git and AWS in daily work'] },
    tags: ['Node.js', 'Swagger/OpenAPI', 'Postman', 'Git', 'AWS'] },
  { color: 'forest', company: 'Compass UOL',
    date: { pt: '2025.02 → 2025.07', en: 'Feb 2025 → Jul 2025' },
    role: { pt: 'Estágio back-end, Spring Boot e AWS', en: 'Backend Development Intern, Spring Boot and AWS' },
    sub:  { pt: 'programa intensivo', en: 'intensive program' },
    points: { pt: ['Aplicações back-end com Java e Spring Boot', 'Bancos relacionais, Git e deploy na AWS', '400 horas de treinamento prático'],
              en: ['Backend applications with Java and Spring Boot', 'Relational databases, Git and deployment to AWS', '400 hours of hands-on training'] },
    tags: ['Java', 'Spring Boot', 'AWS', 'Git'] },
  { color: 'orange', company: 'Inotek',
    date: { pt: '2024.03 → 2024.06', en: 'Mar 2024 → Jun 2024' },
    role: { pt: 'Desenvolvedor júnior', en: 'Junior Developer' },
    sub:  { pt: 'web e Android', en: 'web and Android' },
    points: { pt: ['App Android em Java, feito no Android Studio', 'Front end em Angular e TypeScript', 'Consumo de APIs REST e testes de usabilidade'],
              en: ['Android app in Java, built in Android Studio', 'Angular and TypeScript front end', 'REST API consumption and usability tests'] },
    tags: ['Java', 'Android', 'Angular', 'TypeScript'] }
];

const FERRAMENTAS = [
  { cat: { pt: 'Linguagens', en: 'Languages' }, items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Dart'] },
  { cat: { pt: 'Back end', en: 'Back end' }, items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring AI', 'Spring Cloud', 'Node.js', 'NestJS'] },
  { cat: { pt: 'IA', en: 'AI' }, items: ['Amazon Bedrock', 'RAG', 'pgvector', 'Ollama'] },
  { cat: { pt: 'Bancos', en: 'Databases' }, items: ['PostgreSQL', 'MySQL', 'Flyway'] },
  { cat: { pt: 'Nuvem e infra', en: 'Cloud and infra' }, items: ['AWS (EC2, S3, SQS, Lambda, Textract, Transcribe, Cognito)', 'Docker', 'Nginx', 'GitHub Actions'] },
  { cat: { pt: 'Front end', en: 'Front end' }, items: ['Flutter', 'Angular', 'Android'] },
  { cat: { pt: 'Qualidade e versão', en: 'Quality and versioning' }, items: ['Swagger/OpenAPI', 'Postman', 'Testcontainers', 'Git/GitHub'] }
];

const FORMACAO = [
  { label: { pt: 'Atual', en: 'Current' }, name: 'ATITUS Educação',
    sub: { pt: 'Ciência da Computação, 2023 a 2026', en: 'B.Sc. Computer Science, 2023 to 2026' } },
  { label: { pt: 'Antes', en: 'Before' }, name: { pt: 'Hammond High School (EUA)', en: 'Hammond High School (USA)' },
    sub: { pt: 'High school, ago 2018 a abr 2019', en: 'High school diploma, Aug 2018 to Apr 2019' } },
  { label: { pt: 'Antes', en: 'Before' }, name: 'Escola Scalabrini',
    sub: { pt: 'Ensino médio', en: 'High school' } }
];
const IDIOMAS = { pt: 'Português nativo, inglês fluente (C1+)', en: 'Native Portuguese, fluent English (C1+)' };
const TITULOS = {
  tools: { pt: 'Caixa de <em>ferramentas</em>', en: 'Toolbox' },
  edu:   { pt: 'Formação<span class="dot">.</span>', en: 'Education<span class="dot">.</span>' }
};

// =====================
// I18N
// =====================
let currentLang = 'pt';

const i18n = {
  pt: {
    doc_title:            'Portfólio • Gabriel Henrique Gemelli',
    subtitle_pt:          'Desenvolvedor Back-end',
    location_pt:          '📍 Passo Fundo, RS • Português/English',
    chip_copy:            'Copiar e-mail',
    chip_whatsapp:        'WhatsApp',
    chip_github:          'GitHub',
    chip_cv:              'Baixar CV',
    nav_about:            'Sobre',
    nav_xp:               'Trajeto',
    nav_tools:            'Ferramentas',
    nav_contact:          'Contato',
    nav_edu:              'Educação',
    nav_certs:            'Certificados',
    nav_projects:         'Projetos',
    about_title:          'Sobre mim',
    about_body_pt:        'Sou apaixonado por computação, focado em programação e raciocínio lógico. Curso Ciência da Computação na <strong>ATITUS</strong> e sigo determinado a me tornar um desenvolvedor back-end. Comecei estudando online e hoje avanço com projetos práticos na faculdade e fora dela.',
    goal_title:           'Objetivo',
    goal_list_pt:         '<li>Tornar-me um desenvolvedor <strong>back-end</strong> sólido, entregando APIs escaláveis e bem testadas.</li><li>Concluir a graduação com alta performance acadêmica.</li><li>Contribuir em projetos que ajudem pessoas em escala.</li>',
    xp_title:             'Trajeto<span class="dot">.</span>',
    xp_air_dev1_role_title:'Desenvolvedor 1 (Node.js / NestJS)',
    xp_air_dev1_company:  'AI/R — Part-time (Remoto)',
    xp_air_dev1_date:     'fev/2026 — presente',
    xp_air_dev1_list_pt:  '<li>Desenvolvimento e manutenção de APIs REST prontas para produção com Node.js e NestJS.</li><li>Padronização de testes, revisão de código e padrões de integração para elevar qualidade e performance.</li><li>Entregas com Swagger/OpenAPI e Docker, garantindo confiabilidade em produção.</li>',
    xp_air_intern_role_title:'Estagiário de Desenvolvimento Back-end (Node.js) — Contexto AWS',
    xp_air_intern_company:'AI/R — Estágio (Remoto)',
    xp_air_intern_date:   'nov/2025 — fev/2026',
    xp_air_intern_list_pt:'<li>Desenvolvimento back-end com Node.js em contexto de nuvem AWS.</li><li>Implementação de endpoints e rotinas server-side com foco em qualidade e boas práticas.</li><li>Colaboração em revisão de código e versionamento com Git/GitHub.</li>',
    xp_compass_role_title:'Estagiário de Desenvolvimento Back-end (AWS)',
    xp_compass_company:   'Compass UOL',
    xp_compass_date:      'fev/2025 — jul/2025',
    xp_compass_list_pt:   '<li>Atuação no desenvolvimento de serviços back-end utilizando AWS.</li><li>Implementação de endpoints e rotinas server-side com foco em qualidade e boas práticas.</li><li>Colaboração em revisão de código e rotinas de versionamento com Git/GitHub.</li>',
    xp_inotek_role_title: 'Desenvolvedor Full-Stack',
    xp_inotek_company:    'Inotek',
    xp_inotek_date:       'mar/2024 — jul/2024',
    xp_inotek_list_pt:    '<li>Desenvolvimento de aplicações web com Angular.</li><li>Foco em melhorar a experiência em dispositivos Android.</li><li>Apoio à manutenção do produto principal.</li>',
    langs_title:          'Idiomas',
    langs_grid_pt:        '<div class="language-item"><span class="language-name">Português</span><span class="language-level">Nativo</span></div><div class="language-item"><span class="language-name">Inglês</span><span class="language-level">Fluente</span></div>',
    edu_title:            'Educação',
    edu_items_pt:         '<div class="education-item"><h3>ATITUS Educação</h3><p>Ciência da Computação</p></div><div class="education-item"><h3>Hammond High school</h3><p>High school</p></div><div class="education-item"><h3>Escola Scalabrini</h3><p>Ensino Médio</p></div><div class="education-item"><h3>Escola Conceição</h3><p>Ensino Fundamental</p></div>',
    tech_title:           'Tecnologias',
    projects_title:       'Projetos<span class="dot">.</span>',
    certs_title:          'Certificados<span class="dot">.</span>',
    certs_empty:          'Nenhum certificado adicionado ainda.',
    footer_email:         'E-mail',
    footer_github:        'GitHub',
    alert_title:          'Pronto!',
    alert_msg:            'E-mail copiado com sucesso.',
    alert_ok:             'OK'
  },
  en: {
    doc_title:            'Portfolio • Gabriel Henrique Gemelli',
    subtitle_pt:          'Back-end Developer',
    location_pt:          '📍 Passo Fundo, Brazil • Portuguese/English',
    chip_copy:            'Copy email',
    chip_whatsapp:        'WhatsApp',
    chip_github:          'GitHub',
    chip_cv:              'Download CV',
    nav_about:            'About',
    nav_xp:               'Path',
    nav_tools:            'Tools',
    nav_contact:          'Contact',
    nav_edu:              'Education',
    nav_certs:            'Certificates',
    nav_projects:         'Projects',
    about_title:          'About',
    about_body_pt:        'I am passionate about CS, focused on programming and logical thinking. I study Computer Science at <strong>ATITUS</strong> and I\'m determined to become a back-end developer. I started studying online and now keep progressing with practical projects.',
    goal_title:           'Goal',
    goal_list_pt:         '<li>Become a solid <strong>back-end</strong> developer, delivering scalable and well-tested APIs.</li><li>Graduate with strong academic performance.</li><li>Contribute to projects that help people at scale.</li>',
    xp_title:             'Path<span class="dot">.</span>',
    xp_air_dev1_role_title:'Developer 1 (Node.js / NestJS)',
    xp_air_dev1_company:  'AI/R — Part-time (Remote)',
    xp_air_dev1_date:     'Feb/2026 — Present',
    xp_air_dev1_list_pt:  '<li>Building and maintaining production-ready REST APIs with Node.js and NestJS.</li><li>Standardizing testing, code review practices, and integration patterns to raise quality and performance.</li><li>Delivering with Swagger/OpenAPI and Docker, strengthening reliability in production.</li>',
    xp_air_intern_role_title:'Back-end Development Intern (Node.js) — AWS Cloud Context',
    xp_air_intern_company:'AI/R — Internship (Remote)',
    xp_air_intern_date:   'Nov/2025 — Feb/2026',
    xp_air_intern_list_pt:'<li>Back-end development with Node.js in an AWS cloud context.</li><li>Implemented endpoints and server-side routines emphasizing quality and best practices.</li><li>Collaborated on code reviews and version control with Git/GitHub.</li>',
    xp_compass_role_title:'Back-end Development Intern (AWS)',
    xp_compass_company:   'Compass UOL',
    xp_compass_date:      'Feb/2025 — Jul/2025',
    xp_compass_list_pt:   '<li>Worked on back-end services using AWS.</li><li>Implemented endpoints and server-side routines emphasizing quality and best practices.</li><li>Collaborated on code reviews and version control with Git/GitHub.</li>',
    xp_inotek_role_title: 'Full-Stack Developer',
    xp_inotek_company:    'Inotek',
    xp_inotek_date:       'Mar/2024 — Jul/2024',
    xp_inotek_list_pt:    '<li>Web app development with Angular.</li><li>Improving UX on Android devices.</li><li>Support maintaining the main product.</li>',
    langs_title:          'Languages',
    langs_grid_pt:        '<div class="language-item"><span class="language-name">Portuguese</span><span class="language-level">Native</span></div><div class="language-item"><span class="language-name">English</span><span class="language-level">Fluent</span></div>',
    edu_title:            'Education',
    edu_items_pt:         '<div class="education-item"><h3>ATITUS Education</h3><p>Computer Science</p></div><div class="education-item"><h3>Hammond High school</h3><p>High school</p></div><div class="education-item"><h3>Escola Scalabrini</h3><p>High School</p></div><div class="education-item"><h3>Escola Conceição</h3><p>Elementary School</p></div>',
    tech_title:           'Technologies',
    projects_title:       'Projects<span class="dot">.</span>',
    certs_title:          'Certificates<span class="dot">.</span>',
    certs_empty:          'No certificates added yet.',
    footer_email:         'Email',
    footer_github:        'GitHub',
    alert_title:          'Done!',
    alert_msg:            'Email copied successfully.',
    alert_ok:             'OK'
  }
};

// =====================
// RENDER CERTIFICADOS
// =====================
function renderCertCards() {
  const grid = document.getElementById('cert-grid');
  const empty = document.getElementById('cert-empty');
  if (!grid || !empty) return;
  grid.innerHTML = '';
  if (!CERTS.length) { empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  CERTS.forEach(c => {
    const card = document.createElement('div');
    card.className = 'certificate-card';
    card.dataset.certName   = c.name   || '';
    card.dataset.certIssuer = c.issuer || '';
    card.dataset.certYear   = c.year   || '';
    if (c.url) card.dataset.certUrl = c.url;
    if (c.img) card.dataset.certImg = c.img;
    if (c.pdf) card.dataset.certPdf = c.pdf;
    const metaTxt = [c.issuer, c.year].filter(Boolean).join(' • ');
    card.innerHTML = `<h3>${c.name}</h3><p class="cert-org">${metaTxt}</p>`;
    card.addEventListener('click', previewCert);
    grid.appendChild(card);
  });
}

// =====================
// RENDER TRAJETO
// =====================
function renderTrajeto() {
  const box = document.getElementById('trajeto-cards');
  if (!box) return;
  box.innerHTML = TRAJETO.map(j => `
    <article class="card card--${j.color}">
      <div class="card-main">
        <p class="label card-date">${t(j.date)}</p>
        <div>
          <p class="card-company">${j.company}</p>
          <p class="serif-note">${t(j.sub)}</p>
        </div>
      </div>
      <div class="card-side">
        <h3 class="card-role">${t(j.role)}</h3>
        <ul class="card-points">${t(j.points).map(p => `<li>${p}</li>`).join('')}</ul>
        <ul class="tags">${j.tags.map(g => `<li>${g}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
}

// =====================
// RENDER FERRAMENTAS E FORMAÇÃO
// =====================
function renderTools() {
  const title = document.getElementById('tools-title');
  const grid = document.getElementById('tools-grid');
  if (!title || !grid) return;
  title.innerHTML = t(TITULOS.tools);
  grid.innerHTML = FERRAMENTAS.map(g => `
    <li class="tool-group">
      <p class="label">${t(g.cat)}</p>
      <ul class="tool-items">${g.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </li>`).join('');
}

function renderEdu() {
  const title = document.getElementById('edu-title');
  const list = document.getElementById('edu-list');
  const langs = document.getElementById('langs-line');
  if (!title || !list || !langs) return;
  title.innerHTML = t(TITULOS.edu);
  list.innerHTML = FORMACAO.map(f => `
    <div class="edu-item">
      <p class="label">${t(f.label)}</p>
      <p class="edu-name">${typeof f.name === 'string' ? f.name : t(f.name)}</p>
      <p class="serif-note">${t(f.sub)}</p>
    </div>`).join('');
  langs.textContent = t(IDIOMAS);
}

// =====================
// RENDER PROJETOS
// =====================
const PROJETOS = [
  { color: 'ink', name: 'OrganizAI',
    desc: { pt: 'Assistente de documentos para construtoras. Lê contratos, alvarás e áudios de diário de obra, classifica cada arquivo, extrai campos e responde citando documento e página. Projeto de TCC em grupo: fiz o back end, o front end e a integração com a AWS. Roda na AWS EC2, com cobrança por Asaas.',
            en: 'A document assistant for construction companies. It reads contracts, permits and site-diary audio, classifies each file, extracts fields and answers citing the document and page. Final-year group project: I built the back end, the front end and the AWS integration. It runs on AWS EC2, with billing through Asaas.' },
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'pgvector', 'Spring AI', 'Amazon Bedrock', 'AWS', 'Flutter'],
    url: 'https://organizaii.com.br', link: { pt: 'Ver o site', en: 'Visit the site' } },
  { color: 'sand', name: 'Microservices_java',
    desc: { pt: 'Doze módulos Maven: Config, Eureka e Gateway, mais nove serviços de domínio. Usa OpenFeign, circuit breaker com Resilience4j, JWT, Flyway e PostgreSQL. O Docker Compose sobe 8 serviços de domínio, 3 de infraestrutura e 5 bancos.',
            en: 'Twelve Maven modules: Config, Eureka and Gateway, plus nine domain services. It uses OpenFeign, a Resilience4j circuit breaker, JWT, Flyway and PostgreSQL. Docker Compose starts 8 domain services, 3 infrastructure services and 5 databases.' },
    tags: ['Spring Cloud', 'Resilience4j', 'JWT', 'Flyway', 'PostgreSQL', 'Docker'],
    url: 'https://github.com/Gabriel-Henrique-Gemelli/Microservices_java', link: { pt: 'Ver o código', en: 'View the code' } },
  { color: 'forest', name: 'GlicoHouse',
    sub: { pt: 'Back end de e-commerce', en: 'E-commerce back end' },
    desc: { pt: 'Back end em Java 21 e Spring Boot. Login com JWT, papéis de admin e cliente, redefinição de senha por e-mail, carrinho com baixa de estoque, histórico de compras e relatórios para o admin. Banco MySQL.',
            en: 'Back end in Java 21 and Spring Boot. JWT login, admin and customer roles, password reset by email, a cart that updates stock on purchase, purchase history and admin reports. MySQL database.' },
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
    url: 'https://github.com/Gabriel-Henrique-Gemelli/GlicoHouse', link: { pt: 'Ver o código', en: 'View the code' } }
];

function renderProjectCards() {
  const box = document.getElementById('projects');
  if (!box) return;
  box.innerHTML = PROJETOS.map(p => `
    <article class="card card--${p.color}">
      <div class="card-main">
        <p class="card-company card-company--project">${p.name}</p>
        ${p.sub ? `<p class="serif-note">${t(p.sub)}</p>` : ''}
      </div>
      <div class="card-side">
        <p class="card-desc">${t(p.desc)}</p>
        <ul class="tags">${p.tags.map(g => `<li>${g}</li>`).join('')}</ul>
        <a class="card-link" href="${p.url}" target="_blank" rel="noopener">${t(p.link)} ↗</a>
      </div>
    </article>`).join('');
}

// =====================
// MODAL DE CERTIFICADO
// =====================
function previewCert(e) {
  const el = e.currentTarget || e.target;
  const d  = el.dataset;
  const m  = document.getElementById('cert-modal');
  m.querySelector('[data-field="name"]').textContent = d.certName || '';
  const issuer = d.certIssuer ? ` — ${d.certIssuer}` : '';
  const year   = d.certYear   ? ` (${d.certYear})`   : '';
  m.querySelector('[data-field="meta"]').textContent = `${issuer}${year}`;

  const pdf  = m.querySelector('[data-field="pdf"]');
  const img  = m.querySelector('[data-field="img"]');
  const link = m.querySelector('[data-field="link"]');

  if (d.certPdf) {
    pdf.src = d.certPdf; pdf.style.display = 'block';
    img.removeAttribute('src'); img.style.display = 'none';
  } else if (d.certImg) {
    img.src = d.certImg; img.alt = d.certName || 'Certificado'; img.style.display = 'block';
    pdf.removeAttribute('src'); pdf.style.display = 'none';
  } else {
    pdf.removeAttribute('src'); pdf.style.display = 'none';
    img.removeAttribute('src'); img.style.display = 'none';
  }

  if (d.certUrl) { link.href = d.certUrl; link.style.display = 'inline-block'; }
  else           { link.removeAttribute('href'); link.style.display = 'none'; }

  m.style.display = 'flex';
  m.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  const m = document.getElementById('cert-modal');
  if (m) { m.style.display = 'none'; m.classList.remove('active'); }
  const viewer = document.getElementById('certificate-viewer');
  if (viewer) viewer.src = '';
  document.body.style.overflow = '';
}

// =====================
// SISTEMA DE IDIOMA
// =====================
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!dict[key]) return;
    el.innerHTML = dict[key];
  });
  document.title = dict.doc_title || document.title;
  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
  });
  localStorage.setItem('lang', lang);
  renderTrajeto();
  renderTools();
  renderEdu();
  renderCertCards();
  renderProjectCards();
}

// =====================
// NAVBAR SCROLL
// =====================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// =====================
// ACTIVE NAV LINK ON SCROLL
// =====================
function updateActiveNav() {
  const sections  = document.querySelectorAll('.section');
  const navLinks  = document.querySelectorAll('.nav-link');
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - navbar.offsetHeight - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// =====================
// SMOOTH SCROLL
// =====================
function initSmoothScroll() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop - navbar.offsetHeight - 20, behavior: 'smooth' });
      }
      // Fecha menu mobile se aberto
      closeMobileMenu();
    });
  });
}

// =====================
// MENU MOBILE
// =====================
let mobileMenuOpen = false;

function closeMobileMenu() {
  if (!mobileMenuOpen) return;
  const navLinks = document.getElementById('nav-links');
  const btn      = document.getElementById('mobile-menu-btn');
  navLinks.classList.remove('open');
  btn.classList.remove('open');
  mobileMenuOpen = false;
}

function initMobileMenu() {
  const btn      = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  btn.addEventListener('click', () => {
    mobileMenuOpen = !mobileMenuOpen;
    navLinks.classList.toggle('open', mobileMenuOpen);
    btn.classList.toggle('open', mobileMenuOpen);
  });
}

// =====================
// ESC KEY
// =====================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeCertModal(); fecharAlerta(); }
});

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
  // Ano no footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Idioma salvo
  const savedLang = localStorage.getItem('lang') || 'pt';
  setLang(savedLang);

  // Botões de idioma
  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-set-lang')));
  });

  // Fechar modais ao clicar no overlay
  document.getElementById('cert-overlay').addEventListener('click', closeCertModal);
  document.getElementById('alerta-overlay').addEventListener('click', fecharAlerta);

  initSmoothScroll();
  initMobileMenu();
});
