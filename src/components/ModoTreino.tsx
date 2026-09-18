import { useState } from 'react'
import type { Progresso, Questao, RespostaSalva, Topico } from '../types'
import { QuestaoCard } from './QuestaoCard'

interface Props {
  topico: Topico
  questao: Questao
  posicao: number
  total: number
  progresso: Progresso
  onResponder: (questaoId: string, resposta: RespostaSalva) => void
  onProxima: () => void
}

export function ModoTreino({ topico, questao, posicao, total, progresso, onResponder, onProxima }: Props) {
  const [conceitoAberto, setConceitoAberto] = useState(false)
  const respondida = Boolean(progresso[questao.id])

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span
          className="inline-flex items-center rounded px-3 py-1 text-sm font-medium"
          style={{ background: `${topico.cor}1a`, color: topico.cor }}
        >
          {topico.categoria}
        </span>
        <span className="text-sm text-neutral-500">
          questão {posicao} de {total}
        </span>
      </div>

      <div>
        <button
          type="button"
          onClick={() => setConceitoAberto((v) => !v)}
          className="text-base font-medium text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          {conceitoAberto ? 'ocultar conceito do tópico' : 'ver conceito do tópico'}
        </button>
        {conceitoAberto && (
          <p className="mt-2 whitespace-pre-line rounded border border-neutral-200 bg-neutral-50 p-3 text-base leading-relaxed text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
            {topico.explicacao}
          </p>
        )}
      </div>

      <QuestaoCard key={questao.id} questao={questao} cor={topico.cor} progresso={progresso} onResponder={onResponder} />

      {respondida && (
        <button
          type="button"
          onClick={onProxima}
          className="w-full rounded px-4 py-3 text-base font-medium text-white"
          style={{ background: topico.cor }}
        >
          Próxima questão
        </button>
      )}
    </div>
  )
}
