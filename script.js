/* Edite aqui: cada item tem id (sem espaços), n (nome), k (palavras de busca extras), tag, txt (descrição) e f (pares campo/valor). */
const DB={
personagens:{t:'Personagens',ph:'Digite o nome de um NPC',hint:'Digite o nome de um NPC para ver o card.',items:[
{id:'doutor',n:'Dr. Henrique Valença',img: 'images/doutor.jpg',tag:'Médico da Ilha',txt:'O único médico do vilarejo que cuida dos moradores, aparentemente confiável.',f:[['Local','Vila de Santa Áurea'],['Atitude','Confiável']]},
{id:'jornalista',n:'Jornalista Helena Duarte',img: 'images/jornalista.jpg',tag:'Jornalista',txt:'Costumava andar com uma câmera fotográfica.',f:[['Local','Desconhecido'],['Atitude','Desconhecido']]},
{id:'pescador',n:'Pescador Augusto Meireles',img: 'images/pescador.jpg',tag:'Pescador do Vilarejo',txt:'Provavelmente o homem que mais sai e volta para a Ilha.',f:[['Local','Cais'],['Atitude','Desconfiado sempre']]},
{id:'hoteleira',n:'Hoteleira Clara Vasconcelos',img: 'images/hoteleira.jpg',tag:'Hoteleira',txt:'Ajuda bastante seus hóspedes, talvez até demais.',f:[['Local','Hospedaria'],['Atitude','Gentil e simpática']]},
{id:'guarda',n:'Guarda Marcelo Siqueira',img: 'images/guarda.jpg',tag:'Guarda da Vila',txt:'Sempre vigilante, atento a tudo.',f:[['Local','Indefinido'],['Atitude','Reto e direto']]},
{id:'radio',n:'Samuel Reis',img: 'images/radio.jpg',tag:'Operador da Rádio',txt:'Extrovertido sempre',f:[['Local','Estação de rádio'],['Atitude','Fala muito']]}
]},
antagonistas:{t:'Antagonistas',ph:'Digite o nome de um vilão',hint:'Digite o nome de um vilão para ver o card.',items:[
{id:'vilao-exemplo',n:'Vilão de exemplo',img: 'images/mapa-vilarejo.jpg',tag:'Antagonista',txt:'Exemplo: substitua este texto pela descrição do vilão.',f:[['Motivação','A definir'],['Fraqueza','A definir']]}
]},
segredos:{t:'Segredos',ph:'Digite o que os jogadores descobriram',hint:'Digite o que os jogadores descobriram para revelar o segredo.',items:[
{id:'foto-misteriosa',n:'Foto Misteriosa',k:'estacao de pesquisa',img: 'images/laboratorio.jpg',tag:'Foto de Helena',txt:'Existe alguma coisa lá dentro, mas quanto mais fundo eu vou na investigação mais me parece que estou cometendo um erro. Não me sinto segura, desde que fui naquele maldito farol.',f:[['Nota:','Não vá até lá sozinho, esse foi o meu erro.']]},
{id:'diario',n:'Diário',k:'diario do farol',img: 'images/diario.jpg',tag:'Diário do Faroleiro',txt:'DIÁRIO DO FAROLEIRO — 17 DE OUTUBRO DE 1980 <br> Faz três semanas desde que começaram as movimentações estranhas no farol. No início, pensei que fossem apenas embarcações de pesca chegando durante a madrugada, mas logo percebi que havia algo errado.<br><br>Os barcos não utilizam as rotas convencionais. Aproximam-se pelo lado norte da ilha, sempre depois da meia-noite, quando a neblina está mais densa. Não possuem identificação e seus tripulantes nunca desembarcam pela vila.<br><br>Encontrei algumas caixas escondidas no depósito inferior. Todas possuíam o símbolo: <strong>N-17</strong>. Não sei exatamente o que transportam, mas ouvi dois homens conversando sobre uma substância experimental que não deveria existir fora dos laboratórios. Um deles mencionou que a carga precisava chegar à estação de pesquisa antes do amanhecer.<br><br>Acho que estou me envolvendo em algo muito maior do que imaginava. Não pretendo ficar aqui por muito mais tempo.',f:[['Nota:','Nenhuma.']]},
{id:'prontuario',n:'Prontuários',k:'estacao de pesquisa',img: 'images/prontuario.jpg',tag:'Prontuários dos Pacientes',txt:'PRONTUÁRIO Nº 003<br>Paciente: Roberto Almeida<br>Idade: 34 anos.<br>Condição inicial: Saudável.<br>Data de admissão: 14/06/1980.<br>Experimento: Exposição controlada ao Composto N-17.<br>O paciente apresentou recuperação acelerada após lesões musculares. Entretanto, demonstrou aumento significativo de agressividade e dificuldade de reconhecer pessoas próximas. Durante a última avaliação, atacou dois funcionários da equipe médica.<br>Status: ÓBITO DECLARADO.<br><br><br>PRONTUÁRIO Nº 005<br>Paciente: [NOME RISCADO]<br>Idade: 27 anos.<br>Condição inicial: Saudável.<br>Experimento: Exposição prolongada ao N-17.<br>O paciente começou a apresentar episódios de repetição involuntária de palavras e frases ouvidas durante os procedimentos. Em determinado momento, reproduziu com precisão a voz de um funcionário que havia falecido três dias antes. Apresenta comportamento imprevisível e episódios de desorientação.<br>Status: TRANSFERIDO.<br><br><br>PRONTUÁRIO Nº 008<br>Paciente: [NOME RISCADO]<br>Idade: 41 anos.<br>Condição inicial: Histórico de problemas respiratórios.<br>Experimento: Aplicação intravenosa de N-17.<br>O paciente apresentou alterações significativas na estrutura muscular e crescimento irregular de tecidos. Demonstra resistência incomum à dor, porém apresenta dificuldades respiratórias após esforço físico. O comportamento tornou-se extremamente violento.<br>Status: ISOLAMENTO PERMANENTE.<br><br><br>PRONTUÁRIO Nº 012<br>Paciente: [NOME RISCADO]<br>Idade: NÃO INFORMADA.<br>Data de admissão: NÃO REGISTRADA.<br>Experimento: N-17 — Fase avançada.<br>O paciente apresentou desenvolvimento físico acima dos parâmetros observados nos demais indivíduos. Demonstrou capacidade de permanecer imóvel por longos períodos, reagindo apenas à aproximação de pessoas. Foram registrados episódios de perseguição a funcionários dentro das instalações.<br>Status: NÃO LOCALIZADO.',f:[['Nota:',' "Não estamos mais conseguindo mantê-lo dentro da contenção."']]},
{id:'relatorio',n:'Relatório N-17',k:'estacao de pesquisa',img: 'images/relatorio.jpg',tag:'Composto N-17',txt:'INSTITUTO VÉRTICE<br>RELATÓRIO CONFIDENCIAL — COMPOSTO N-17<br>Projeto: Pesquisa de Regeneração Celular<br>Local: Estação de Pesquisa de Santa Áurea<br>Responsável: Dr. Álvaro Montenegro<br>Classificação: Acesso Restrito<br><br>O Composto N-17 foi desenvolvido a partir de organismos microscópicos encontrados nas cavernas submarinas da Ilha de Santa Áurea. Seu objetivo é acelerar a regeneração celular e aumentar a resistência física de indivíduos submetidos ao tratamento.<br><br>RESULTADOS<br>Os testes demonstraram:Regeneração acelerada de tecidos, Aumento da resistência muscular, Redução da sensibilidade à dor. Entretanto, foram identificados efeitos colaterais graves, incluindo perda de memória, agressividade extrema, alterações físicas e comportamentos predatórios.<br><br>CONCLUSÃO<br>Apesar dos resultados promissores, o composto apresenta riscos neurológicos ainda não controlados. A continuidade dos experimentos foi autorizada pela direção do Instituto, mesmo após incidentes envolvendo pacientes e funcionários.',f:[['Nota:','Não estamos mais conseguindo prever as alterações causadas pelo composto. Alguns pacientes já não demonstram comportamentos humanos convencionais.']]},
{id:'autorizacao',n:'Autorização',k:'estacao de pesquisa',img: 'images/autorizacao.jpg',tag:'Documento de Autorização',txt:'INSTITUTO VÉRTICE<br>AUTORIZAÇÃO PARA EXPERIMENTAÇÃO HUMANA<br>Projeto: Pesquisa com o Composto N-17<br>Local: Estação de Pesquisa de Santa Áurea<br>Responsável: Dr. Henrique Valença<br>Classificação: Confidencial — Acesso Restrito<br><br>Autorizo o início dos testes experimentais em seres humanos utilizando o Composto N-17, desenvolvido pelo Instituto Vértice. Os participantes serão submetidos à administração controlada da substância para avaliação de seus efeitos sobre a regeneração celular, resistência física e atividade neurológica. Estou ciente dos riscos envolvidos, incluindo alterações comportamentais, danos neurológicos e possíveis deformações físicas. Ainda assim, autorizo a continuidade dos procedimentos, considerando os resultados obtidos até o momento. Todos os registros dos participantes deverão permanecer sob sigilo absoluto. Qualquer incidente deverá ser comunicado diretamente à direção do Instituto.<br><br>A autorização entra em vigor imediatamente.<br><br>Assinatura:<br>Dr. Henrique Valença<br>Responsável pelos procedimentos experimentais<br>Data: 12 de março de 1980',f:[['Nota:','Nenhuma']]}
]},
equipamentos:{t:'Equipamentos',all:1,ph:'Filtrar equipamentos',items:[
{id:'mapa-vilarejo',n:'Mapa do Vilarejo',img: 'images/mapa-vilarejo.jpg',tag:'Documento',txt:'Mapa do vilarejo mostrando os pontos principais',f:[['Efeito','Nenhum'],['Peso','1']]},
{id:'radios',n:'Rádio de Comunicação',img: 'images/radios.png',tag:'Item',txt:'Equipamento de comunicação a longas distâncias. Apenas 2 rádios.',f:[['Efeito','Nenhum'],['Peso','1']]}
]}
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