import { useState } from 'react'
import type { QuestaoAberta, RespostaSalva } from '../types'

interface Props {
  questao: QuestaoAberta
  salva?: RespostaSalva
  onResponder: (resposta: RespostaSalva) => void
}

export function QuestaoAbertaCard({ questao, salva, onResponder }: Props) {
  const [resposta, setResposta] = useState(salva?.resposta ?? '')
  const [revelada, setRevelada] = useState(Boolean(salva))
  const éCodigo = questao.tipo === 'codigo'

  function autoavaliar(status: 'certo' | 'errado') {
    onResponder({ status, resposta, respondidaEm: Date.now() })
  }

  return (
    <div className="space-y-4">
      <p className="whitespace-pre-line text-base leading-relaxed text-neutral-800 sm:text-lg dark:text-neutral-200">{questao.enunciado}</p>

      <textarea
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        disabled={Boolean(salva)}
        placeholder={éCodigo ? `escreva o ${questao.linguagem ?? 'código'} aqui` : 'escreva sua resposta aqui'}
        rows={éCodigo ? 10 : 5}
        spellCheck={!éCodigo}
        className={`w-full resize-y rounded border border-neutral-300 bg-white p-3 text-base text-neutral-900 outline-none focus:border-neutral-500 disabled:bg-neutral-50 disabled:text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:disabled:bg-neutral-950 ${
          éCodigo ? 'font-mono text-sm' : ''
        }`}
      />

      {!revelada ? (
        <button
          type="button"
          onClick={() => setRevelada(true)}
          className="rounded bg-neutral-900 px-5 py-2.5 text-base font-medium text-white dark:bg-neutral-100 dark:text-neutral-900"
        >
          Ver padrão de resposta
        </button>
      ) : (
        <div className="space-y-3">
          <div className="rounded border border-neutral-200 bg-neutral-50 p-4 text-base dark:border-neutral-800 dark:bg-neutral-900">
            <p className="mb-1 font-medium">Padrão de resposta</p>
            <pre className={`overflow-x-auto whitespace-pre-wrap ${éCodigo ? 'font-mono text-sm' : ''} text-neutral-700 dark:text-neutral-300`}>
              {questao.respostaEsperada}
            </pre>
            {questao.explicacao && (
              <p className="mt-2 border-t border-neutral-200 pt-2 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
                {questao.explicacao}
              </p>
            )}
          </div>

          {!salva ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-base text-neutral-600 dark:text-neutral-400">sua resposta bateu com o padrão?</span>
              <button
                type="button"
                onClick={() => autoavaliar('certo')}
                className="rounded border border-emerald-600 px-3 py-1.5 text-base font-medium text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
              >
                acertei
              </button>
              <button
                type="button"
                onClick={() => autoavaliar('errado')}
                className="rounded border border-red-600 px-3 py-1.5 text-base font-medium text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40"
              >
                errei
              </button>
            </div>
          ) : (
            <p className="text-base font-medium">{salva.status === 'certo' ? 'Marcado como acerto.' : 'Marcado como erro.'}</p>
          )}
        </div>
      )}
    </div>
  )
}
