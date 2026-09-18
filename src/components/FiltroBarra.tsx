import { topicos } from '../data'

interface Props {
  selecionados: Set<string>
  onToggle: (id: string) => void
}

export function FiltroBarra({ selecionados, onToggle }: Props) {
  const todosSelecionados = selecionados.size === topicos.length

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => topicos.forEach((t) => (selecionados.has(t.id) === todosSelecionados ? onToggle(t.id) : null))}
        className={`rounded border px-3 py-1.5 text-sm font-medium ${
          todosSelecionados
            ? 'border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900'
            : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-900'
        }`}
      >
        Todos
      </button>

      {topicos.map((topico) => {
        const ativo = selecionados.has(topico.id)
        return (
          <button
            key={topico.id}
            type="button"
            onClick={() => onToggle(topico.id)}
            className={`rounded border px-3 py-1.5 text-sm font-medium transition-colors ${
              ativo ? '' : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-900'
            }`}
            style={ativo ? { background: `${topico.cor}1f`, borderColor: topico.cor, color: topico.cor } : undefined}
          >
            {topico.rotuloCurto}
          </button>
        )
      })}
    </div>
  )
}
