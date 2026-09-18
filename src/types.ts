export type Area = 'Conhecimentos Gerais' | 'Componente Específico'

export interface Topico {
  id: string
  area: Area
  categoria: string
  rotuloCurto: string
  titulo: string
  explicacao: string
  cor: string
}

export type QuestaoTipo = 'objetiva' | 'discursiva' | 'codigo'

export interface Alternativa {
  letra: string
  texto: string
}

interface QuestaoBase {
  id: string
  topicoId: string
  fonte: string
  enunciado: string
  dica?: string
}

export interface QuestaoObjetiva extends QuestaoBase {
  tipo: 'objetiva'
  alternativas: Alternativa[]
  gabarito: string
  explicacao: string
}

export interface QuestaoAberta extends QuestaoBase {
  tipo: 'discursiva' | 'codigo'
  linguagem?: string
  respostaEsperada: string
  explicacao?: string
}

export type Questao = QuestaoObjetiva | QuestaoAberta

export interface RespostaSalva {
  status: 'certo' | 'errado'
  resposta: string
  respondidaEm: number
}

export type Progresso = Record<string, RespostaSalva>
