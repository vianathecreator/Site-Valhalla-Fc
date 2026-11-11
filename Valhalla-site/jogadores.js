// Para cadastrar um jogador novo, copie uma linha e mude os dados.
// A página dele (jogador.html?id=...) é criada sozinha.

const F = 'img elenco/';

const JOGADORES = [
  {
    id: 'felipe',
    nome: 'Felipe Viana',
    num: 14,
    pos: ['Zagueiro', 'Pivô'],
    foto: F + 'felipe.jpeg',
    bio: 'Fundador do Valhalla FC, em 29 de julho de 2025. Está no elenco desde os primeiros jogos.'
  },
  {
    id: 'kelven',
    nome: 'Kelven Rhuan',
    num: 10,
    pos: ['Meia-atacante', 'Fixo'],
    foto: F + 'kelven.jpeg',
    bio: 'Chegou como reforço e virou um dos grandes destaques da equipe. Marcou na final da Copa FJU 2025.'
  },
  {
    id: 'thiago',
    nome: 'Thiago Roberto',
    num: 9,
    pos: ['Centroavante', 'Pivô'],
    foto: F + 'THIAGO.jfif',
    bio: 'Chegou como reforço e virou um dos grandes destaques da equipe. Marcou na final da Copa FJU 2025.'
  },
  {
    id: 'edu',
    nome: 'Eduardo Pinheiro',
    apelido: 'Edu',
    num: 11,
    pos: ['Volante', 'Ala'],
    foto: F + 'edu.jpeg'
  },
  {
    id: 'bigode',
    nome: 'João Henrique',
    apelido: 'Bigode',
    num: 46,
    pos: ['Ponta', 'Ala'],
    foto: F + 'bigode.jpeg'
  },
  {
    id: 'gui',
    nome: 'Guilherme Santana',
    apelido: 'Gui',
    num: 6,
    pos: ['Meia', 'Lateral', 'Ala'],
    foto: F + 'gui.png',
    bio: 'Está no elenco desde os primeiros jogos do clube.'
  },
  {
    id: 'neguinho',
    nome: 'Júlio Silva',
    apelido: 'Neguinho',
    num: 77,
    pos: ['Meia', 'Ala'],
    foto: F + 'neguin.jfif'
  },
  {
    id: 'vitor',
    nome: 'Vitor Andrade',
    num: 8,
    pos: ['Meia', 'Ala'],
    foto: F + 'vitao.png'
  },
  {
    id: 'jhow',
    nome: 'Jhonata Ribeiro',
    apelido: 'Jhow',
    num: 4,
    pos: ['Zagueiro', 'Goleiro'],
    foto: F + 'jhow.png'
  },
  {
    id: 'yago',
    nome: 'Yago Farias',
    num: 28,
    pos: ['Goleiro'],
    foto: F + 'Yago.png',
    bio: 'Chegou como reforço depois dos primeiros jogos do clube.'
  },
  {
    id: 'mateus',
    nome: 'Mateus Gonçalves',
    num: 22,
    pos: ['Lateral', 'Ala'],
    foto: F + 'mateus.png'
  },
  {
    id: 'calebe',
    nome: 'Calebe Ferreira',
    num: 6,
    pos: ['Meia', 'Lateral', 'Ala'],
    foto: F + 'default.jfif'
  },
  {
    id: 'jonas',
    nome: 'Jonas Marcelo',
    num: 1,
    pos: ['Goleiro'],
    foto: F + 'default.jfif'
  },
  {
    id: 'caio',
    nome: 'Caio Silva',
    num: null,
    pos: ['Zagueiro', 'Volante'],
    foto: F + 'default.jfif'
  },
  {
    id: 'tavares',
    nome: 'Felipe Tavares',
    num: 3,
    pos: ['Zagueiro', 'Volante'],
    foto: F + 'default.jfif'
  },
  {
    id: 'isaque',
    nome: 'Isaque Lopes',
    num: 12,
    pos: ['Lateral', 'Ponta'],
    foto: F + 'default.jfif'
  },
  {
    id: 'gustavo',
    nome: 'Gustavo Araújo',
    num: 7,
    pos: ['Zagueiro', 'Ala'],
    foto: F + 'default.jfif'
  },
  {
    id: 'rafael',
    nome: 'Rafael Santos',
    num: 17,
    pos: ['Ala'],
    foto: F + 'default.jfif'
  }
];