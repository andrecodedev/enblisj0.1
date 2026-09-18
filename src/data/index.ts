import { topicos } from './topicos'
import { questoesLogica } from './questoes/logica'
import { questoesEstruturasDados } from './questoes/estruturasDados'
import { questoesEngenhariaSoftware } from './questoes/engenhariaSoftware'
import { questoesEticaLegislacao } from './questoes/eticaLegislacao'
import { questoesDiscursivas } from './questoes/discursivas'
import { questoesBancoDados } from './questoes/bancoDados'
import { questoesRedesSistemas } from './questoes/redesSistemas'
import { questoesUmlModelagem } from './questoes/umlModelagem'
import { questoesEmpreendedorismoLegislacao } from './questoes/empreendedorismoLegislacao'
import type { Questao, Topico } from '../types'

export const todasQuestoes: Questao[] = [
  ...questoesLogica,
  ...questoesEstruturasDados,
  ...questoesEngenhariaSoftware,
  ...questoesEticaLegislacao,
  ...questoesDiscursivas,
  ...questoesBancoDados,
  ...questoesRedesSistemas,
  ...questoesUmlModelagem,
  ...questoesEmpreendedorismoLegislacao,
]

export { topicos }

export function questoesDoTopico(topicoId: string): Questao[] {
  return todasQuestoes.filter((q) => q.topicoId === topicoId)
}

export function topicosPorArea(): Map<Topico['area'], Topico[]> {
  const mapa = new Map<Topico['area'], Topico[]>()
  for (const topico of topicos) {
    const lista = mapa.get(topico.area) ?? []
    lista.push(topico)
    mapa.set(topico.area, lista)
  }
  return mapa
}
