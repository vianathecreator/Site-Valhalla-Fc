// ==========================================
// VALHALLA FC — HISTÓRICO DE JOGOS
// Jogos do mais novo para o mais antigo.
//
// gv = gols do Valhalla
// ga = gols do adversário
// r = V (vitória), E (empate), D (derrota)
//
// Escalação:
// pos = GOL, FIX, ALE, ALD ou PIV
// j = ID do jogador
// res = substituto
// num = número utilizado no jogo
// ==========================================

const JOGOS = [

  // ==========================================
  // COPA FJU — 3ª EDIÇÃO
  // ==========================================

  {
    id: 19,
    adversario: 'Astro E.C.',
    gv: 5,
    ga: 8,
    competicao: 'Copa FJU – 3ª edição',
    fase: '3ª rodada – Fase de Grupos',
    data: '01/11/2026',
    horario: '17:30',
    local: 'CEU Alto Alegre',
    gols: [
      { j: 'thiago', nome: 'Thiago Roberto', qtd: 4 },
      { j: 'felipe', nome: 'Felipe Viana', qtd: 1 }
    ],
    desfalques: 'Kelven, Jhow, Vitor Hugo, Edu, Julio Neguinho, Mateus e João Bigode',
    escalacao: [
      { pos: 'GOL', j: 'yago' },
      { pos: 'FIX', j: 'gui' },
      { pos: 'ALD', j: 'felipe' },
      { pos: 'ALE', j: 'gustavo', res: 'rafael' },
      { pos: 'PIV', j: 'thiago' }
    ]
  },

  {
    id: 9,
    adversario: 'Manicos',
    gv: 6,
    ga: 1,
    competicao: 'Copa FJU – 3ª edição',
    fase: '2ª rodada – Fase de Grupos',
    data: '18/10/2026',
    horario: '17:00',
    local: 'CEU Alto Alegre',
    gols: [
      { j: 'thiago', nome: 'Thiago Roberto', qtd: 2 },
      { j: 'neguinho', nome: 'Julio Neguinho', qtd: 4 }
    ],
    desfalques: 'Vitor Hugo e Kelven',
    escalacao: [
      { pos: 'GOL', j: 'jhow' },
      { pos: 'FIX', j: 'gui', res: 'bigode' },
      { pos: 'ALD', j: 'neguinho' },
      { pos: 'ALE', j: 'mateus', res: 'edu' },
      { pos: 'PIV', j: 'felipe', res: 'thiago' }
    ]
  },

  {
    id: 8,
    adversario: 'A. A. Alto Alegre',
    escudo: 'img/escudo_altoalegre.png',
    gv: 4,
    ga: 5,
    competicao: 'Copa FJU – 3ª edição',
    fase: '1ª rodada – Fase de Grupos',
    data: '11/10/2026',
    horario: '16:00',
    local: 'CEU Alto Alegre',
    gols: [
      { j: 'gui', nome: 'Gui', qtd: 3 },
      { j: 'felipe', nome: 'Felipe', qtd: 1 }
    ],
    desfalques: 'Kelven (derrame articular), Jhow (lesão no braço), Vitor Hugo (lesão no braço)',
    escalacao: [
      { pos: 'GOL', j: 'yago' },
      { pos: 'ALD', j: 'neguinho' },
      { pos: 'ALE', j: 'gui', num: 6 },
      { pos: 'PIV', j: 'thiago', res: 'edu' },
      { pos: 'PIV', j: 'felipe', res: 'bigode' }
    ]
  },

  // ==========================================
  // TRIANGULAR LIGA VALHALLA 2026
  // ==========================================

  {
    id: 7,
    adversario: 'Hooligans',
    gv: 4,
    ga: 3,
    competicao: 'Triangular Liga Valhalla 2026',
    data: '06/09/2026',
    horario: '18:00',
    obs: 'Com o empate contra o Manicos, o Valhalla fechou o triangular campeão, com 4 pontos.'
  },

  {
    id: 6,
    adversario: 'Manicos',
    gv: 6,
    ga: 6,
    competicao: 'Triangular Liga Valhalla 2026',
    data: '06/09/2026',
    horario: '17:00'
  },

  // ==========================================
  // AMISTOSOS — 2026
  // ==========================================

  {
    id: 18,
    adversario: 'Boavista FC',
    gv: 1,
    ga: 8,
    competicao: 'Amistoso',
    data: '30/08/2026',
    horario: '17:00',
    local: 'Campo neutro'
  },

  {
    id: 16,
    adversario: 'A. A. Alto Alegre',
    escudo: 'img/escudo_altoalegre.png',
    gv: 3,
    ga: 4,
    competicao: 'Amistoso',
    data: '02/08/2026',
    horario: '17:00',
    local: 'Fora de casa'
  },

  {
    id: 15,
    adversario: 'Astro E.C.',
    gv: 2,
    ga: 2,
    competicao: 'Amistoso',
    data: '19/07/2026',
    horario: '17:00',
    local: 'Campo neutro',
    disputaPenaltis: {
      gv: 3,
      ga: 2
    },
    obs: 'Vitória do Valhalla na disputa de pênaltis por 3 a 2.'
  },

  // ==========================================
  // CONTRAS — 2026
  // ==========================================

  {
    id: 17,
    adversario: 'Hooligans FC',
    gv: 10,
    ga: 12,
    competicao: 'Contra',
    data: '16/08/2026',
    horario: '17:00',
    local: 'Casa'
  },

  {
    id: 14,
    adversario: 'Astro E.C.',
    gv: 19,
    ga: 12,
    competicao: 'Contra',
    data: '21/06/2026',
    horario: '17:00',
    local: 'Casa'
  },

  // ==========================================
  // COPA FJU — 2ª EDIÇÃO
  // ==========================================

  {
    id: 5,
    adversario: 'Sporting Magnatas',
    gv: 6,
    ga: 8,
    competicao: 'Copa FJU 2026 – 2ª edição',
    fase: 'Final',
    data: '31/05/2026',
    horario: '17:00',
    local: 'Campo neutro',
    obs: 'Vice-campeão da Copa FJU 2026 – 2ª edição.'
  },

  {
    id: 13,
    adversario: 'Força Jovem Universal',
    gv: 5,
    ga: 8,
    competicao: 'Copa FJU 2026 – 2ª edição',
    data: '24/05/2026',
    horario: '10:00',
    local: 'Fora de casa'
  },

  {
    id: 12,
    adversario: 'Astro E.C.',
    gv: 9,
    ga: 4,
    competicao: 'Copa FJU 2026 – 2ª edição',
    data: '24/05/2026',
    horario: '00:00',
    local: 'Casa'
  },

  {
    id: 11,
    adversario: 'Sporting Magnatas',
    gv: 11,
    ga: 9,
    competicao: 'Copa FJU 2026 – 2ª edição',
    data: '26/04/2026',
    horario: '10:00',
    local: 'Fora de casa'
  },

  // ==========================================
  // OUTROS JOGOS — 2026
  // ==========================================

  {
    id: 4,
    adversario: 'Sporting Magnatas',
    gv: 5,
    ga: 5,
    competicao: 'Estreia da camisa oficial',
    data: '03/04/2026',
    horario: '10:00',
    local: 'Casa',
    obs: 'Primeiro jogo com a camisa vermelha, preta e dourada.'
  },

  {
    id: 10,
    adversario: 'Astro E.C.',
    gv: 15,
    ga: 20,
    competicao: 'Amistoso',
    data: '22/02/2026',
    horario: '11:00',
    local: 'Casa'
  },

  // ==========================================
  // HISTÓRICO — 2025
  // ==========================================

  {
    id: 3,
    adversario: 'Astro EC',
    gv: 8,
    ga: 3,
    competicao: 'Copa FJU 2025 – 1ª edição',
    fase: 'Final',
    data: '2025',
    gols: [
      { j: 'kelven', nome: 'Kelven' },
      { j: 'thiago', nome: 'Thiago' },
      { nome: 'Allan' }
    ],
    obs: 'Primeiro título da história do clube, depois da desistência das outras equipes.'
  },

  {
    id: 2,
    adversario: 'Astro EC',
    gv: 6,
    ga: 5,
    competicao: 'Astro Cup 2025',
    data: '2025',
    obs: 'Depois deste jogo, o Valhalla deixou o torneio por adiamentos e falta de jogadores.'
  },

  {
    id: 1,
    adversario: 'Fluxo',
    r: 'D',
    competicao: 'Primeiro jogo da história',
    data: '03/08/2025',
    obs: 'Placar não anotado.'
  }

];