// ===== CONTEÚDO DO SITE (edite aqui) =====
const CLUBE = {
  local: 'Recanto Verde do Sol, São Mateus – São Paulo/SP',
  // Preencha o link ou e-mail para a rede aparecer no site (rodapé e Sobre nós).
  redes: { Instagram: 'https://www.instagram.com/valhallafcbr/', TikTok: '', YouTube: '', WhatsApp: '', Email: '' }
};
const NOTICIAS = [
  { data: '11/10/2026', titulo: 'Valhalla estreia na Copa FJU com derrota por 5 a 4', texto: 'No CEU Alto Alegre, o time perdeu para a A. A. Alto Alegre. Gui fez três gols e Felipe marcou o outro.', link: 'jogos.html#8' },
  { data: '11/10/2026', titulo: 'Três desfalques por lesão na estreia', texto: 'Kelven (joelho), Jhow e Vitor Hugo (braço) ficaram fora do jogo contra o Alto Alegre.', link: 'jogos.html#8' },
  { data: '2026', titulo: 'Valhalla é campeão da Liga Valhalla', texto: 'No triangular organizado pelo clube, empate com o Manicos e vitória sobre o Hooligans garantiram o título com 4 pontos.', link: 'titulos.html' }
];
// ===== FIM DO CONTEÚDO =====

const $ = s => document.querySelector(s), pg = document.body.dataset.p;
const J = id => JOGADORES.find(p => p.id === id);
const curto = p => p.apelido || p.nome.split(' ')[0];
const NR = { V: 'Vitória', E: 'Empate', D: 'Derrota' };
const res = j => j.r || (j.gv > j.ga ? 'V' : j.gv < j.ga ? 'D' : 'E');
const placar = j => j.gv == null ? '– x –' : `${j.gv} x ${j.ga}`;
const vesc = '<img class="esc" src="img/escudo_valhalla.png" alt="Valhalla">';
const esc = j => j.escudo ? `<img class="esc" src="${j.escudo}" alt="${j.adversario}">` : `<span class="inic">${j.adversario[0]}</span>`;
const cardJogo = j => `<a class="card jogo" href="jogos.html#${j.id}"><div class="l">${j.data}<br>${j.competicao}</div><div class="p">${vesc}<span>${placar(j)}</span>${esc(j)}</div><div class="l"><b>Valhalla x ${j.adversario}</b> <span class="tag ${res(j)}">${NR[res(j)]}</span></div></a>`;
const redes = (c = 'btn o') => Object.entries(CLUBE.redes).filter(([, v]) => v).map(([k, v]) => `<a class="${c}" href="${v.includes('@') && !v.startsWith('http') ? 'mailto:' + v : v}" target="_blank" rel="noopener">${k}</a>`).join('');

// Cabeçalho e rodapé (iguais em todas as páginas)
const NAV = [['index', 'Início'], ['jogos', 'Jogos'], ['elenco', 'Elenco'], ['titulos', 'Títulos'], ['torcedor', 'Área do torcedor'], ['sobre', 'Sobre nós']];
let at = location.pathname.split('/').pop().replace('.html', '') || 'index';
if (at === 'jogador') at = 'elenco';
$('#topo').innerHTML = `<div class="hd"><a class="marca" href="index.html"><img src="img/escudo_valhalla.png" alt="Escudo do Valhalla">VALHALLA FC</a><button class="menu" aria-label="Abrir menu">☰</button><nav>${NAV.map(([a, t]) => `<a href="${a}.html"${a === at ? ' class="ativo"' : ''}>${t}</a>`).join('')}</nav></div>`;
$('.menu').onclick = () => $('nav').classList.toggle('aberto');
$('#rodape').innerHTML = `<div class="ft"><div><h3>Valhalla FC</h3><p>Guerreiros da Quebrada.<br>Clube amador de futebol e futsal, desde 2025.</p></div><div><h3>Contato</h3><p>${CLUBE.local}</p>${redes('')}</div><div><h3>Navegue</h3>${NAV.map(([a, t]) => `<a href="${a}.html">${t}</a>`).join('')}</div></div><div class="copy">© 2025–2026 Valhalla FC. Todos os direitos reservados.</div>`;

// Início
if (pg === 'inicio') {
  $('#res').innerHTML = JOGOS.slice(0, 3).map(cardJogo).join('');
  $('#nots').innerHTML = NOTICIAS.map(n => `<a class="card" href="${n.link}"><div class="l">${n.data}</div><h3>${n.titulo}</h3><p>${n.texto}</p></a>`).join('');
}

// Elenco
if (pg === 'elenco') $('#grade').innerHTML = JOGADORES.map(p => `<a class="card atleta" href="jogador.html?id=${p.id}"><img src="${p.foto}" alt="${p.nome}" loading="lazy"><span class="n">${p.num ?? ''}</span><div class="i"><h3>${p.nome}</h3><p>${p.pos.join(', ')}</p></div></a>`).join('');

// Jogador individual: uma única página (jogador.html?id=...) serve para todos
if (pg === 'jogador') {
  const p = J(new URLSearchParams(location.search).get('id'));
  if (!p) $('#app').innerHTML = '<div class="wrap"><h1>Jogador não encontrado</h1><p><a href="elenco.html">Voltar ao elenco</a></p></div>';
  else {
    document.title = p.nome + ' – Valhalla FC';
    const ps = JOGOS.filter(j => (j.escalacao || []).some(e => e.j === p.id || e.res === p.id) || (j.gols || []).some(g => g.j === p.id));
    let g = 0, mais = false;
    ps.forEach(j => (j.gols || []).forEach(x => { if (x.j === p.id) { if (x.qtd) g += x.qtd; else { g++; mais = true; } } }));
    $('#app').innerHTML = `<div class="wrap"><a class="voltar" href="elenco.html">‹ Elenco</a><div class="perfil"><img src="${p.foto}" alt="${p.nome}"><div><div class="big">${p.num ?? '–'}</div><h1>${p.nome}</h1><p class="sub">${p.pos.join(' / ')}</p>${p.bio ? `<p style="margin-top:12px">${p.bio}</p>` : ''}<div class="stats"><div class="card"><b>${ps.length}</b>Partidas registradas</div><div class="card"><b>${g}${mais ? '+' : ''}</b>Gols registrados</div></div></div></div>${ps.length ? `<h2 class="t">Partidas</h2><div class="grade">${ps.map(cardJogo).join('')}</div>` : ''}</div>`;
  }
}

// Jogos: lista e detalhe da partida (jogos.html#8)
const COURT = '<svg viewBox="0 0 300 400" fill="none" stroke="#f2eee855" stroke-width="2"><path d="M0 200h300"/><circle cx="150" cy="200" r="38"/><path d="M75 0a75 75 0 0 0 150 0M75 400a75 75 0 0 1 150 0"/></svg>';
const BASE = { GOL: [50, 86], FIX: [50, 64], ALE: [16, 44], ALD: [84, 44], PIV: [50, 18] };
function quadra(e) {
  const n = {}, k = {};
  e.forEach(p => n[p.pos] = (n[p.pos] || 0) + 1);
  return `<div class="quadra">${COURT}${e.map(p => {
    const [x, y] = BASE[p.pos], i = k[p.pos] = k[p.pos] || 0; k[p.pos]++;
    const dx = n[p.pos] > 1 ? (i - (n[p.pos] - 1) / 2) * 32 : 0, a = J(p.j), r = p.res && J(p.res);
    return `<div class="atl" style="left:${x + dx}%;top:${y}%"><b>${p.num ?? a.num ?? ''}</b><span>${curto(a)}</span>${r ? `<i>↻ ${r.num ?? ''} ${curto(r)}</i>` : ''}</div>`;
  }).join('')}</div><p class="l" style="text-align:center">↻ indica o reserva que ocupou a posição.</p>`;
}
const detalhe = j => `<a class="voltar" href="jogos.html">‹ Todos os jogos</a><div class="pl">${vesc}<span>${placar(j)}</span>${esc(j)}</div><p class="sub" style="text-align:center">Valhalla x ${j.adversario} – <span class="${res(j)}">${NR[res(j)]}</span></p><div class="meta">${[['Competição', j.competicao + (j.fase ? ' – ' + j.fase : '')], ['Data', j.data + (j.horario ? ' às ' + j.horario : '')], ['Local', j.local], ['Gols do Valhalla', (j.gols || []).map(x => x.nome + (x.qtd > 1 ? ` (${x.qtd}x)` : '')).join(', ')], ['Desfalques', j.desfalques], ['Observação', j.obs]].filter(m => m[1]).map(([a, b]) => `<div><small>${a}</small>${b}</div>`).join('')}</div><h2 class="t">Escalação</h2>${j.escalacao ? quadra(j.escalacao) : '<p class="l">A escalação desta partida ainda não foi registrada.</p>'}`;
if (pg === 'jogos') {
  const ver = () => {
    const j = JOGOS.find(x => x.id == location.hash.slice(1));
    $('#app').innerHTML = j ? detalhe(j) : `<h2 class="t">Todos os jogos</h2><div class="grade">${JOGOS.map(cardJogo).join('')}</div>`;
    scrollTo(0, 0);
  };
  addEventListener('hashchange', ver); ver();
}

// Sobre nós
if (pg === 'sobre') $('#redes').innerHTML = redes();
