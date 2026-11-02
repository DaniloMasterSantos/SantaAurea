/* Edite aqui: cada item tem id (sem espaços), n (nome), k (palavras de busca extras), tag, txt (descrição) e f (pares campo/valor). */
const DB={
personagens:{t:'Personagens',ph:'Digite o nome de um NPC',hint:'Digite o nome de um NPC para ver o card.',items:[
{id:'npc-exemplo',n:'NPC de exemplo',tag:'Morador',txt:'Exemplo: substitua este texto pela descrição do NPC.',f:[['Local','Vila de Santa Áurea'],['Atitude','Desconfiado']]}]},
antagonistas:{t:'Antagonistas',ph:'Digite o nome de um vilão',hint:'Digite o nome de um vilão para ver o card.',items:[
{id:'vilao-exemplo',n:'Vilão de exemplo',tag:'Antagonista',txt:'Exemplo: substitua este texto pela descrição do vilão.',f:[['Motivação','A definir'],['Fraqueza','A definir']]}]},
segredos:{t:'Segredos',ph:'Digite o que os jogadores descobriram',hint:'Digite o que os jogadores descobriram para revelar o segredo.',items:[
{id:'segredo-exemplo',n:'Segredo de exemplo',k:'farol',tag:'Segredo',txt:'Exemplo: aparece quando alguém digita “segredo” ou “farol”.',f:[['Como descobrir','Investigar o farol']]}]},
equipamentos:{t:'Equipamentos',all:1,ph:'Filtrar equipamentos',items:[
{id:'mapa-vilarejo',n:'Mapa do Vilarejo',img: 'images/mapa-vilarejo.jpg',tag:'Documento',txt:'Mapa do vilarejo mostrando os pontos principais',f:[['Efeito','Nenhum'],['Peso','1']]}]}
};
const app=document.getElementById('app');
let sec=app.dataset.sec;
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
/* Retorna a <img> se o item tiver imagem, senão um placeholder estilizado */
const imgOrFallback = (i, cls) => i.img
  ? `<img class="${cls}" src="${i.img}" alt="${i.n}" loading="lazy"
        data-zoom="${i.img}" data-alt="${i.n}" data-cap="${i.n}"
        onerror="this.classList.add('broken')">`
  : `<div class="${cls} ph" aria-hidden="true"><span>${i.tag || ''}</span></div>`;

const card = (s, i) => `
  <a class="card" href="item.html?s=${s}&id=${i.id}">
    <div class="card-media">${imgOrFallback(i, 'card-img')}</div>
    <h3>${i.n}</h3>
    <p>${i.tag}</p>
  </a>`;
function list(s){
const d=DB[s];
app.innerHTML=`<div class="wrap"><h2>${d.t}</h2><input id="q" type="search" placeholder="${d.ph}" aria-label="${d.ph}" autocomplete="off"><div id="res" class="grid list" aria-live="polite"></div></div>`;
const q=document.getElementById('q'),res=document.getElementById('res');
const go=()=>{const v=norm(q.value);
const m=d.items.filter(i=>norm(i.n+' '+(i.k||'')).includes(v));
res.innerHTML=(!v&&!d.all)?`<p class="empty">${d.hint}</p>`:m.length?m.map(i=>card(s,i)).join(''):`<p class="empty">Nada encontrado para “${q.value.replace(/</g,'&lt;')}”. Confira a grafia.</p>`;};
q.oninput=go;go();}
function detail(s, id) {
  const d = DB[s], i = d && d.items.find(x => x.id === id);
  if (!i) {
    app.innerHTML = '<div class="wrap detail"><h2>Não encontrado</h2><a href="index.html">Voltar ao início</a></div>';
    return;
  }
  app.dataset.sec = s;
  app.innerHTML = `
    <div class="wrap detail">
      <a href="${s}.html">Voltar para ${d.t}</a>
      <div class="detail-head">
        <div class="detail-media">${imgOrFallback(i, 'detail-img')}</div>
        <div>
          <h2>${i.n}</h2>
          <p class="tag">${i.tag}</p>
        </div>
      </div>
      <p>${i.txt}</p>
      <dl>${i.f.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl>
    </div>`;
}
if(app.dataset.view==='list')list(sec);
if(app.dataset.view==='detail'){const p=new URLSearchParams(location.search);sec=p.get('s');detail(sec,p.get('id'));}
document.querySelectorAll('nav a[data-s]').forEach(a=>a.classList.toggle('on',a.dataset.s===sec));

/* ===== FICHA DO JOGADOR =====
   Cada campo é [id, rótulo, tipo, editável]. Tipos: text, num, area. Editável: 1 = sim, 0 = travado.
   Para criar um campo novo, adicione uma linha em uma seção. Para criar uma seção nova, copie um bloco {t,g,c}.
   g (layout): 'cols' = colunas, 'attrs' = caixas de atributo, 'one' = largura total. */
const PLAYERS=[['hacker','Hacker'],['quimica','Química'],['especialista','Especialista'],['fotografa','Fotógrafa'],['ex-militar','Ex-militar'],['veterano','Veterano'],['medico','Médico'],['detetive','Detetive']];
const FICHA=[
{t:'Identidade',g:'cols',c:[['nome','Nome','text',1],['classe','Profissão','text',1],['idade','Idade','text',1],['origem','Origem','text',1]]},
{t:'Atributos',g:'attrs',c:[['forca','Força','num',1],['destreza','Destreza','num',1],['constituicao','Constituição','num',1],['inteligencia','Inteligência','num',1],['percepcao','Percepção','num',1],['carisma','Carisma','num',1]]},
{t:'Status',g:'cols',c:[['pv','Vida (PV)','text',1],['san','Sanidade','text',1],['defesa','Defesa','num',1],['desloc','Deslocamento','text',1]]},
{t:'Perícias',g:'one',c:[['pericias','Perícias','area',1]]},
{t:'Equipamentos',g:'one',c:[['equip','Equipamentos e inventário','area',1]]},
{t:'História',g:'one',c:[['historia','História do personagem','area',1],['notas','Anotações','area',1]]}
];
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
function player(id){
const P=PLAYERS.find(x=>x[0]===id);
if(!P){app.innerHTML='<div class="wrap ficha"><h2>Jogador não encontrado</h2><a href="index.html">Voltar aos players</a></div>';return;}
const key='santa-aurea:ficha:'+id,def={nome:P[1],classe:P[1]};
let saved={};try{saved=JSON.parse(localStorage.getItem(key))||{};}catch(e){}
const val=k=>saved[k]??def[k]??'';
const fld=([k,l,t,ed])=>`<label class="fl"><span>${l}</span>${t==='area'?`<textarea data-k="${k}" rows="4"${ed?'':' readonly'}>${esc(val(k))}</textarea>`:`<input data-k="${k}" type="${t==='num'?'number':'text'}" value="${esc(val(k))}"${ed?'':' readonly'}>`}</label>`;
app.innerHTML=`<div class="wrap ficha"><a href="index.html">Voltar aos players</a><div class="fgrid"><img src="images/${id}.jpg" alt="${P[1]}"><div><h2 id="hn">${esc(val('nome'))}</h2><form onsubmit="return false">${FICHA.map(s=>`<fieldset><legend>${s.t}</legend><div class="${s.g}">${s.c.map(fld).join('')}</div></fieldset>`).join('')}</form><div class="bar"><button type="button" id="sv">Salvar ficha</button><button type="button" id="rs" class="ghost">Restaurar padrão</button><span id="msg" role="status"></span></div></div></div></div>`;
const msg=t=>document.getElementById('msg').textContent=t;
document.querySelector('[data-k=nome]').addEventListener('input',e=>document.getElementById('hn').textContent=e.target.value);
document.getElementById('sv').onclick=()=>{const o={};document.querySelectorAll('[data-k]').forEach(e=>o[e.dataset.k]=e.value);
try{localStorage.setItem(key,JSON.stringify(o));msg('Ficha salva neste navegador.');}catch(e){msg('Não foi possível salvar neste navegador.');}};
document.getElementById('rs').onclick=()=>{if(confirm('Apagar as alterações salvas e voltar ao padrão?')){try{localStorage.removeItem(key);}catch(e){}player(id);}};
}
if(app.dataset.view==='player')player(new URLSearchParams(location.search).get('p'));
/* ===== Lightbox de imagem ===== */
(function setupLightbox(){
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Imagem ampliada');
  lb.hidden = true;
  lb.innerHTML = `
    <button class="lb-close" type="button" aria-label="Fechar imagem">&times;</button>
    <img class="lb-img" alt="">
    <p class="lb-cap"></p>`;
  document.body.appendChild(lb);

  const img = lb.querySelector('.lb-img');
  const cap = lb.querySelector('.lb-cap');
  const btn = lb.querySelector('.lb-close');
  let lastFocus = null;

  function open(src, alt, caption){
    lastFocus = document.activeElement;
    img.src = src;
    img.alt = alt || '';
    cap.textContent = caption || '';
    lb.hidden = false;
    document.body.classList.add('lb-open');
    btn.focus();
  }
  function close(){
    lb.hidden = true;
    document.body.classList.remove('lb-open');
    img.removeAttribute('src');
    if (lastFocus) lastFocus.focus();
  }

  btn.addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.hidden && e.key === 'Escape') close();
  });

  /* Delegação: qualquer elemento com [data-zoom] abre o lightbox */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-zoom]');
    if (!t) return;
    /* Se estiver dentro de um <a> (card), não navega */
    if (t.closest('a')) e.preventDefault();
    const src = t.dataset.zoom || t.src || t.querySelector('img')?.src;
    if (!src) return;
    open(src, t.dataset.alt || t.alt || '', t.dataset.cap || '');
  });
})();