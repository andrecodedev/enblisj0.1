import type { Progresso, Questao } from '../types'

interface Props {
  questoes: Questao[]
  progresso: Progresso
}

export function ProgressoStats({ questoes, progresso }: Props) {
  const respondidas = questoes.filter((q) => progresso[q.id])
  const certas = respondidas.filter((q) => progresso[q.id]?.status === 'certo')
  const percentualAcerto = respondidas.length > 0 ? Math.round((certas.length / respondidas.length) * 100) : null

  return (
    <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
      <span>
        {respondidas.length}/{questoes.length} respondidas
      </span>
      {percentualAcerto !== null && (
        <span>
          <span className="font-medium text-neutral-900 dark:text-neutral-100">{percentualAcerto}%</span> de acerto
        </span>
      )}
    </div>
  )
}
