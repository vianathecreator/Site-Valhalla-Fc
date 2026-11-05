// Jogos do mais novo para o mais antigo. Campos opcionais podem ser apagados.
// gv = gols do Valhalla, ga = gols do adversário (use r:'V'|'E'|'D' se o placar não foi anotado).
// escalacao: pos GOL, FIX, ALE, ALD ou PIV | j = id do jogador | res = quem entrou no lugar | num = número só nesse jogo.
const JOGOS = [
  { id: 8, adversario: 'A. A. Alto Alegre', escudo: 'img/escudo_altoalegre.png', gv: 4, ga: 5, competicao: 'Copa FJU – 3ª edição', fase: 'Primeira rodada – Fase de Grupos', data: '11/10/2026', horario: '16:00', local: 'CEU Alto Alegre',
    gols: [{ j: 'gui', nome: 'Gui', qtd: 3 }, { j: 'felipe', nome: 'Felipe', qtd: 1 }],
    desfalques: 'Kelven (lesão no joelho), Jhow (lesão no braço), Vitor Hugo (lesão no braço)',
    escalacao: [{ pos: 'GOL', j: 'yago' }, { pos: 'ALD', j: 'neguinho' }, { pos: 'ALE', j: 'gui', num: 6 }, { pos: 'PIV', j: 'thiago', res: 'edu' }, { pos: 'PIV', j: 'felipe', res: 'bigode' }] },
  { id: 7, adversario: 'Hooligans', gv: 4, ga: 3, competicao: 'Triangular Liga Valhalla 2026', data: '2026', obs: 'Com o empate contra o Manicos, o Valhalla fechou o triangular campeão, com 4 pontos.' },
  { id: 6, adversario: 'Manicos', gv: 6, ga: 6, competicao: 'Triangular Liga Valhalla 2026', data: '2026' },
  { id: 5, adversario: 'Sporting Magnatas', gv: 6, ga: 8, competicao: 'Copa FJU 2026 – 2ª edição', fase: 'Final', data: '2026', obs: 'Vice-campeão. Na fase de grupos, o Valhalla eliminou o time da FJU e o Astro.' },
  { id: 4, adversario: 'Sporting Magnatas', gv: 5, ga: 5, competicao: 'Estreia da camisa oficial', data: 'Início de 2026', obs: 'Primeiro jogo com a camisa vermelha, preta e dourada.' },
  { id: 3, adversario: 'Astro EC', gv: 8, ga: 3, competicao: 'Copa FJU 2025 – 1ª edição', fase: 'Final', data: '2025', gols: [{ j: 'kelven', nome: 'Kelven' }, { j: 'thiago', nome: 'Thiago' }, { nome: 'Allan' }], obs: 'Primeiro título da história do clube, depois da desistência das outras equipes.' },
  { id: 2, adversario: 'Astro EC', gv: 6, ga: 5, competicao: 'Astro Cup 2025', data: '2025', obs: 'Depois deste jogo, o Valhalla deixou o torneio por adiamentos e falta de jogadores.' },
  { id: 1, adversario: 'Fluxo', r: 'D', competicao: 'Primeiro jogo da história', data: '03/08/2025', obs: 'Placar não anotado.' }
];
