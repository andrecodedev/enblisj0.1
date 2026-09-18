import { useState } from 'react'
import type { Progresso, Questao, RespostaSalva } from '../types'
import { QuestaoAbertaCard } from './QuestaoAbertaCard'
import { QuestaoObjetivaCard } from './QuestaoObjetivaCard'

interface Props {
  questao: Questao
  cor: string
  progresso: Progresso
  onResponder: (questaoId: string, resposta: RespostaSalva) => void
}

const rotuloTipo: Record<Questao['tipo'], string> = {
  objetiva: 'Objetiva',
  discursiva: 'Discursiva',
  codigo: 'Código',
}

export function QuestaoCard({ questao, cor, progresso, onResponder }: Props) {
  const salva = progresso[questao.id]
  const [dicaAberta, setDicaAberta] = useState(false)

  return (
    <article
      className="rounded-lg border border-neutral-200 border-l-4 p-4 sm:p-5 dark:border-neutral-800"
      style={{ borderLeftColor: cor }}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-sm uppercase tracking-wide text-neutral-500">
        <span>{rotuloTipo[questao.tipo]}</span>
        <span>{questao.fonte}</span>
      </div>

      {questao.tipo === 'objetiva' ? (
        <QuestaoObjetivaCard
          questao={questao}
          salva={salva}
          onResponder={(resposta) => onResponder(questao.id, resposta)}
        />
      ) : (
        <QuestaoAbertaCard
          questao={questao}
          salva={salva}
          onResponder={(resposta) => onResponder(questao.id, resposta)}
        />
      )}

      {questao.dica && !salva && (
        <div className="mt-4 border-t border-neutral-200 pt-3 dark:border-neutral-800">
          {!dicaAberta ? (
            <button
              type="button"
              onClick={() => setDicaAberta(true)}
              className="text-base font-medium text-neutral-500 underline decoration-dotted hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              não sei responder, quero uma dica
            </button>
          ) : (
            <p className="text-base text-neutral-600 dark:text-neutral-400">
              <span className="font-medium text-neutral-800 dark:text-neutral-200">Dica: </span>
              {questao.dica}
            </p>
          )}
        </div>
      )}
    </article>
  )
}
