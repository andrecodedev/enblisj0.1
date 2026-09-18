import type { Tema } from '../hooks/useTema'

interface Props {
  tema: Tema
  onMudar: (tema: Tema) => void
}

export function TemaToggle({ tema, onMudar }: Props) {
  return (
    <button
      type="button"
      onClick={() => onMudar(tema === 'claro' ? 'escuro' : 'claro')}
      className="rounded border border-neutral-300 px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-900"
    >
      {tema === 'claro' ? 'escuro' : 'claro'}
    </button>
  )
}
