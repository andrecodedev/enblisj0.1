import { useEffect, useState } from 'react'

export type Tema = 'claro' | 'escuro'

const CHAVE = 'enblisj-tema'

function temaInicial(): Tema {
  try {
    const salvo = localStorage.getItem(CHAVE)
    if (salvo === 'claro' || salvo === 'escuro') return salvo
  } catch {
    // localStorage indisponível: cai no padrao claro
  }
  return 'claro'
}

export function useTema() {
  const [tema, setTema] = useState<Tema>(temaInicial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'escuro')
    try {
      localStorage.setItem(CHAVE, tema)
    } catch {
      // localStorage indisponível: tema só vale pra sessão atual
    }
  }, [tema])

  return { tema, setTema }
}
