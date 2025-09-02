function copy(){navigator.clipboard.writeText("gabrielhenriquegemelli@gmail.com")}
function exibirAlerta(){copy();document.getElementById('alerta').style.display='block';document.getElementById('overlay').style.display='block';document.body.style.overflow='hidden'}
function fecharAlerta(){document.getElementById('alerta').style.display='none';document.getElementById('overlay').style.display='none';document.body.style.overflow='auto'}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){fecharAlerta();closeCertModal()}})

/* ==== CERTIFICADOS (use pdf: 'caminho/arquivo.pdf') ==== */
const CERTS=[
  
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
  {name:'A Arte de se Relacionar (1h)',issuer:'Alfasig Experience',year:'2025',url:'',pdf:'assets/Certificados/A arte de se relacionar.pdf'}
];

/* ==== I18N ==== */
const i18n={
  pt:{
    doc_title:'Portfólio • Gabriel Henrique Gemelli',
    subtitle_pt:'Desenvolvedor em formação • Back-end',
    location_pt:'Passo Fundo, RS • Português/English',
    chip_copy:'Copiar e-mail',
    chip_whatsapp:'WhatsApp',
    chip_github:'GitHub',
    chip_cv:'Baixar CV',
    about_title:'Sobre mim',
    about_body_pt:'Sou apaixonado por computação, focado em programação e raciocínio lógico. Curso Ciência da Computação na <strong>ATITUS</strong> e sigo determinado a me tornar um desenvolvedor back-end. Comecei estudando online e hoje avanço com projetos práticos na faculdade e fora dela.',
    goal_title:'Objetivo',
    goal_list_pt:'<li>Tornar-me um desenvolvedor <strong>back-end</strong> sólido, entregando APIs escaláveis e bem testadas.</li><li>Concluir a graduação com alta performance acadêmica.</li><li>Contribuir em projetos que ajudem pessoas em escala.</li>',
    xp_title:'Experiência Profissional',
    xp_compass_role:'<strong>Estagiário de Desenvolvimento Back-end (AWS)</strong> • Compass UOL',
    xp_compass_list_pt:'<li>Atuação no desenvolvimento de serviços back-end utilizando AWS.</li><li>Implementação de endpoints e rotinas server-side com foco em qualidade e boas práticas.</li><li>Colaboração em revisão de código e rotinas de versionamento com Git/GitHub.</li>',
    xp_inotek_role:'<strong>Desenvolvedor Full-Stack</strong> • Inotek',
    xp_inotek_date:'mai/2023 — atual',
    xp_inotek_list_pt:'<li>Desenvolvimento de aplicações web com Angular.</li><li>Foco em melhorar a experiência em dispositivos Android.</li><li>Apoio à manutenção do produto principal.</li>',
    langs_title:'Idiomas',
    langs_list_pt:'<li>Português — Nativo</li><li>Inglês — Fluente</li>',
    edu_title:'Educação',
    edu_list_pt:'<li><strong>ATITUS Educação</strong> — Ciência da Computação</li><li><strong>Hammond High school</strong> — High school</li><li><strong>Escola Scalabrini</strong> — Ensino Médio</li><li><strong>Escola Conceição</strong> — Ensino Fundamental</li>',
    tech_title:'Tecnologias',
    projects_title:'Projetos em destaque',
    projects_list_pt:'',
    certs_title:'Certificados',
    certs_empty:'Nenhum certificado adicionado ainda.',
    cert_view:'ver',
    footer_email:'E-mail',
    footer_github:'GitHub',
    alert_title:'Pronto!',
    alert_msg:'E-mail copiado com sucesso.',
    alert_ok:'OK'
  },
  en:{
    doc_title:'Portfolio • Gabriel Henrique Gemelli',
    subtitle_pt:'Developer in training • Back-end',
    location_pt:'Passo Fundo, Brazil • Portuguese/English',
    chip_copy:'Copy email',
    chip_whatsapp:'WhatsApp',
    chip_github:'GitHub',
    chip_cv:'Download CV',
    about_title:'About',
    about_body_pt:'I am passionate about CS, focused on programming and logical thinking. I study Computer Science at <strong>ATITUS</strong> and I’m determined to become a back-end developer. I started online and now keep progressing with practical projects.',
    goal_title:'Goal',
    goal_list_pt:'<li>Become a solid <strong>back-end</strong> developer, delivering scalable and well-tested APIs.</li><li>Graduate with strong academic performance.</li><li>Contribute to projects that help people at scale.</li>',
    xp_title:'Experience',
    xp_compass_role:'<strong>Back-end Development Intern (AWS)</strong> • Compass UOL',
    xp_compass_list_pt:'<li>Worked on back-end services using AWS.</li><li>Implemented endpoints and server-side routines emphasizing quality and best practices.</li><li>Collaborated on code reviews and version control with Git/GitHub.</li>',
    xp_inotek_role:'<strong>Full-Stack Developer</strong> • Inotek',
    xp_inotek_date:'May/2023 — present',
    xp_inotek_list_pt:'<li>Web app development with Angular.</li><li>Improving UX on Android devices.</li><li>Support maintaining the main product.</li>',
    langs_title:'Languages',
    langs_list_pt:'<li>Portuguese — Native</li><li>English — Fluent</li>',
    edu_title:'Education',
    edu_list_pt:'<li><strong>ATITUS Education</strong> — Computer Science</li> <li><strong>Hammond High school</strong> — High school</li><li><strong>Escola Scalabrini</strong> — High School</li><li><strong>Escola Conceição</strong> — Elementary School</li>',
    tech_title:'Technologies',
    projects_title:'Featured projects',
    projects_list_pt:'',
    certs_title:'Certificates',
    certs_empty:'No certificates added yet.',
    cert_view:'view',
    footer_email:'Email',
    footer_github:'GitHub',
    alert_title:'Done!',
    alert_msg:'Email copied successfully.',
    alert_ok:'OK'
  }
};

/* ==== PREVIEW MODAL (PDF/IMG) ==== */
function previewCert(e){
  const el=(e&&(e.currentTarget||e.target))||(event&&(event.currentTarget||event.target))
  const d=el.dataset
  const m=document.getElementById('cert-modal')
  m.querySelector('[data-field="name"]').textContent=d.certName||''
  const issuer=d.certIssuer?` — ${d.certIssuer}`:''
  const year=d.certYear?` (${d.certYear})`:''
  m.querySelector('[data-field="meta"]').textContent=`${issuer}${year}`

  const pdf=m.querySelector('[data-field="pdf"]')
  const img=m.querySelector('[data-field="img"]')
  const link=m.querySelector('[data-field="link"]')

  if(d.certPdf){ pdf.src=d.certPdf; pdf.style.display='block'; img.removeAttribute('src'); img.style.display='none' }
  else if(d.certImg){ img.src=d.certImg; img.alt=d.certName||'Certificado'; img.style.display='block'; pdf.removeAttribute('src'); pdf.style.display='none' }
  else { pdf.removeAttribute('src'); pdf.style.display='none'; img.removeAttribute('src'); img.style.display='none' }

  if(d.certUrl){ link.href=d.certUrl; link.style.display='inline-flex' } else { link.removeAttribute('href'); link.style.display='none' }

  m.style.display='block'
  document.getElementById('overlay').style.display='block'
  document.body.style.overflow='hidden'
}
function closeCertModal(){
  const m=document.getElementById('cert-modal')
  if(m){ m.style.display='none' }
  document.getElementById('overlay').style.display='none'
  document.body.style.overflow='auto'
}

/* ==== CARDS DE CERTIFICADOS (layout = Projetos) ==== */
function renderCertCards(lang){
  const grid=document.getElementById('cert-grid')
  const empty=document.getElementById('cert-empty')
  if(!grid||!empty) return
  grid.innerHTML=''
  if(!CERTS.length){ empty.style.display='block'; return }
  empty.style.display='none'
  CERTS.forEach(c=>{
    const card=document.createElement('a')
    card.href='#'
    card.className='project'
    card.setAttribute('role','button')
    card.dataset.certName=c.name||''
    card.dataset.certIssuer=c.issuer||''
    card.dataset.certYear=c.year||''
    if(c.url) card.dataset.certUrl=c.url
    if(c.img) card.dataset.certImg=c.img
    if(c.pdf) card.dataset.certPdf=c.pdf
    const metaTxt=[c.issuer,c.year].filter(Boolean).join(' • ')
    card.innerHTML=`<h3>${c.name}</h3><p>${metaTxt}</p><span class="stack">${metaTxt||' '}</span>`
    card.addEventListener('click',e=>{e.preventDefault();previewCert(e)})
    grid.appendChild(card)
  })
}

/* ==== LÍNGUA ==== */
function setLang(lang){
  const root=document.documentElement
  root.lang=lang==='pt'?'pt-BR':'en'
  const dict=i18n[lang]
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n'); if(!dict[key]) return; el.innerHTML=dict[key]
  })
  document.title=dict.doc_title||document.title
  document.querySelectorAll('[data-set-lang]').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('data-set-lang')===lang)
  })
  localStorage.setItem('lang',lang)
  renderCertCards(lang)
}

/* ==== INIT ==== */
document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear()
  const saved=localStorage.getItem('lang')||'pt'; setLang(saved)
  document.querySelectorAll('[data-set-lang]').forEach(a=>{
    a.addEventListener('click',e=>{ e.preventDefault(); setLang(a.getAttribute('data-set-lang')) })
  })
  const ov=document.getElementById('overlay')
  if(ov){ ov.addEventListener('click',()=>{ closeCertModal(); fecharAlerta() }) }
})
