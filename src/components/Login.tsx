import { useState, type FormEvent } from 'react'

interface Props {
  onEntrar: (email: string, senha: string) => Promise<string | null>
}

export function Login({ onEntrar }: Props) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState<string | null>(null)
  const [enviando, setEnviando] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setEnviando(true)
    setErro(null)
    const mensagem = await onEntrar(email, senha)
    setEnviando(false)
    if (mensagem) setErro(mensagem)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-5 rounded-xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
      >
        <p className="text-center text-2xl font-semibold tracking-tight">
          ENADE <span className="font-normal text-neutral-400 dark:text-neutral-600">treino</span>
        </p>

        <div className="space-y-2">
          <input
            type="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-base text-neutral-900 outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100"
          />
          <input
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="senha"
            className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-base text-neutral-900 outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100"
          />
        </div>

        {erro && <p className="text-sm text-red-600 dark:text-red-400">{erro}</p>}

        <button
          type="submit"
          disabled={enviando}
          className="w-full rounded bg-neutral-900 px-4 py-2.5 text-base font-medium text-white disabled:opacity-40 dark:bg-neutral-100 dark:text-neutral-900"
        >
          entrar
        </button>
      </form>
    </div>
  )
}
