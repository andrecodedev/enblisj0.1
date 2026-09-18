import { useState } from 'react'
import type { QuestaoObjetiva, RespostaSalva } from '../types'

interface Props {
  questao: QuestaoObjetiva
  salva?: RespostaSalva
  onResponder: (resposta: RespostaSalva) => void
}

export function QuestaoObjetivaCard({ questao, salva, onResponder }: Props) {
  const [selecionada, setSelecionada] = useState(salva?.resposta ?? '')
  const conferida = Boolean(salva)

  function conferir() {
    if (!selecionada) return
    onResponder({
      status: selecionada === questao.gabarito ? 'certo' : 'errado',
      resposta: selecionada,
      respondidaEm: Date.now(),
    })
  }

  return (
    <div className="space-y-4">
      <p className="whitespace-pre-line text-base leading-relaxed text-neutral-800 dark:text-neutral-200">{questao.enunciado}</p>

      <div className="space-y-2">
        {questao.alternativas.map((alt) => {
          const éGabarito = alt.letra === questao.gabarito
          const éEscolhida = alt.letra === selecionada

          let estilo = 'border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500'
          if (conferida && éGabarito) {
            estilo = 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40'
          } else if (conferida && éEscolhida && !éGabarito) {
            estilo = 'border-red-600 bg-red-50 dark:bg-red-950/40'
          } else if (éEscolhida) {
            estilo = 'border-neutral-900 dark:border-neutral-100'
          }

          return (
            <label
              key={alt.letra}
              className={`flex cursor-pointer items-start gap-3 rounded border px-3 py-2.5 text-base ${estilo}`}
            >
              <input
                type="radio"
                name={questao.id}
                value={alt.letra}
                checked={éEscolhida}
                disabled={conferida}
                onChange={() => setSelecionada(alt.letra)}
                className="mt-1.5 h-4 w-4"
              />
              <span className="min-w-0 flex-1">
                <span className="font-medium">{alt.letra})</span>{' '}
                {alt.texto.includes('\n') ? (
                  <pre className="mt-1 overflow-x-auto whitespace-pre font-mono text-sm">{alt.texto}</pre>
                ) : (
                  alt.texto
                )}
              </span>
            </label>
          )
        })}
      </div>

      {!conferida ? (
        <button
          type="button"
          onClick={conferir}
          disabled={!selecionada}
          className="rounded bg-neutral-900 px-5 py-2.5 text-base font-medium text-white disabled:opacity-40 dark:bg-neutral-100 dark:text-neutral-900"
        >
          Conferir resposta
        </button>
      ) : (
        <div className="rounded border border-neutral-200 bg-neutral-50 p-4 text-base dark:border-neutral-800 dark:bg-neutral-900">
          <p className="mb-1 font-medium">
            {salva?.status === 'certo' ? 'Acertou.' : `Errou, gabarito é ${questao.gabarito}.`}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">{questao.explicacao}</p>
        </div>
      )}
    </div>
  )
}
