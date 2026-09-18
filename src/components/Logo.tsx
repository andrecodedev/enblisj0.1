import { topicos } from '../data'

interface Props {
  tamanho?: 'grande' | 'pequeno'
}

export function Logo({ tamanho = 'grande' }: Props) {
  return (
    <div className={`flex flex-col items-center ${tamanho === 'grande' ? 'gap-3' : 'gap-1.5'}`}>
      <p className={`font-semibold tracking-tight ${tamanho === 'grande' ? 'text-4xl sm:text-5xl' : 'text-2xl'}`}>
        ENADE <span className="font-normal text-neutral-400 dark:text-neutral-600">treino</span>
      </p>
      <div className="flex gap-1">
        {topicos.map((topico) => (
          <span key={topico.id} className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: topico.cor }} />
        ))}
      </div>
    </div>
  )
}
