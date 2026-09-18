import { useState } from 'react'
import { FiltroBarra } from './components/FiltroBarra'
import { Login } from './components/Login'
import { Logo } from './components/Logo'
import { ModoTreino } from './components/ModoTreino'
import { ProgressoStats } from './components/ProgressoStats'
import { TemaToggle } from './components/TemaToggle'
import { todasQuestoes, topicos } from './data'
import { useAuth } from './hooks/useAuth'
import { useProgresso } from './hooks/useProgresso'
import { useTema } from './hooks/useTema'
import type { Questao } from './types'

function embaralhar<T>(lista: T[]): T[] {
  const copia = [...lista]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

function poolAleatorio(topicoIds: Set<string>): Questao[] {
  return embaralhar(todasQuestoes.filter((q) => topicoIds.has(q.topicoId)))
}

function App() {
  const { session, carregando: carregandoAuth, entrar, sair } = useAuth()
  const { tema, setTema } = useTema()

  if (carregandoAuth) return null
  if (!session) return <Login onEntrar={entrar} />

  return <AppTreino userId={session.user.id} tema={tema} onMudarTema={setTema} onSair={sair} />
}

interface AppTreinoProps {
  userId: string
  tema: ReturnType<typeof useTema>['tema']
  onMudarTema: (tema: ReturnType<typeof useTema>['tema']) => void
  onSair: () => void
}

function AppTreino({ userId, tema, onMudarTema, onSair }: AppTreinoProps) {
  const { progresso, carregando: carregandoProgresso, registrar } = useProgresso(userId)

  const [topicosSelecionados, setTopicosSelecionados] = useState(() => new Set(topicos.map((t) => t.id)))
  const [fila, setFila] = useState<Questao[]>([])
  const [indice, setIndice] = useState(0)

  const emTreino = fila.length > 0
  const questaoAtual = fila[indice]
  const topicoAtual = topicos.find((t) => t.id === questaoAtual?.topicoId)

  function toggleTopico(id: string) {
    setTopicosSelecionados((atual) => {
      const novo = new Set(atual)
      novo.has(id) ? novo.delete(id) : novo.add(id)
      return novo
    })
  }

  function sortear() {
    setFila(poolAleatorio(topicosSelecionados))
    setIndice(0)
  }

  function proxima() {
    const proximoIndice = indice + 1
    if (proximoIndice >= fila.length) {
      setFila(poolAleatorio(topicosSelecionados))
      setIndice(0)
    } else {
      setIndice(proximoIndice)
    }
  }

  if (carregandoProgresso) return null

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <header className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-2 px-4 py-4 sm:px-6">
        <ProgressoStats questoes={todasQuestoes} progresso={progresso} />
        <div className="flex items-center gap-2">
          <TemaToggle tema={tema} onMudar={onMudarTema} />
          <button
            type="button"
            onClick={onSair}
            className="rounded border border-neutral-300 px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-900"
          >
            sair
          </button>
        </div>
      </header>

      {!emTreino ? (
        <div className="flex flex-col items-center justify-center gap-8 px-4 pt-[10vh] sm:pt-[14vh]">
          <Logo />
          <FiltroBarra selecionados={topicosSelecionados} onToggle={toggleTopico} />
          <button
            type="button"
            onClick={sortear}
            disabled={topicosSelecionados.size === 0}
            className="rounded bg-neutral-900 px-7 py-3 text-base font-medium text-white disabled:opacity-40 dark:bg-neutral-100 dark:text-neutral-900"
          >
            Sortear questão
          </button>
        </div>
      ) : (
        <div className="px-4 pb-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 py-6">
            <Logo tamanho="pequeno" />
            <FiltroBarra selecionados={topicosSelecionados} onToggle={toggleTopico} />
            <button
              type="button"
              onClick={sortear}
              disabled={topicosSelecionados.size === 0}
              className="rounded border border-neutral-300 px-5 py-2 text-base font-medium text-neutral-700 disabled:opacity-40 dark:border-neutral-700 dark:text-neutral-300"
            >
              Sortear outra questão
            </button>
          </div>

          {questaoAtual && topicoAtual && (
            <ModoTreino
              topico={topicoAtual}
              questao={questaoAtual}
              posicao={indice + 1}
              total={fila.length}
              progresso={progresso}
              onResponder={registrar}
              onProxima={proxima}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default App
