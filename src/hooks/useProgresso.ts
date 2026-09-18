import { useCallback, useEffect, useState } from 'react'
import type { Progresso, RespostaSalva } from '../types'

const CHAVE = 'enblisj-progresso-v1'

function carregar(): Progresso {
  try {
    const bruto = localStorage.getItem(CHAVE)
    return bruto ? (JSON.parse(bruto) as Progresso) : {}
  } catch {
    return {}
  }
}

export function useProgresso() {
  const [progresso, setProgresso] = useState<Progresso>(() => carregar())

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(progresso))
    } catch {
      // localStorage indisponível (aba privada, storage bloqueado): segue só em memória
    }
  }, [progresso])

  const registrar = useCallback((questaoId: string, resposta: RespostaSalva) => {
    setProgresso((atual) => ({ ...atual, [questaoId]: resposta }))
  }, [])

  const limpar = useCallback(() => {
    setProgresso({})
  }, [])

  return { progresso, registrar, limpar }
}
