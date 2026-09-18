interface Props {
  tamanho?: 'grande' | 'pequeno'
}

export function Logo({ tamanho = 'grande' }: Props) {
  return (
    <p className={`font-semibold tracking-tight ${tamanho === 'grande' ? 'text-5xl sm:text-6xl' : 'text-3xl'}`}>
      ENADE <span className="font-normal text-neutral-400 dark:text-neutral-600">treino</span>
    </p>
  )
}
