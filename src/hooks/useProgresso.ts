import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Progresso, RespostaSalva } from '../types'

export function useProgresso(userId: string | undefined) {
  const [progresso, setProgresso] = useState<Progresso>({})
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    if (!userId) {
      setProgresso({})
      setCarregando(false)
      return
    }

    let ativo = true
    setCarregando(true)

    supabase
      .from('progresso')
      .select('dados')
      .eq('user_id', userId)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!ativo) return
        if (error) {
          console.error('falha ao carregar progresso', error)
        }
        setProgresso((data?.dados as Progresso) ?? {})
        setCarregando(false)
      })

    return () => {
      ativo = false
    }
  }, [userId])

  const registrar = useCallback(
    (questaoId: string, resposta: RespostaSalva) => {
      if (!userId) return
      setProgresso((atual) => {
        const novo = { ...atual, [questaoId]: resposta }
        supabase
          .from('progresso')
          .upsert({ user_id: userId, dados: novo, atualizado_em: new Date().toISOString() })
          .then(({ error }) => {
            if (error) console.error('falha ao salvar progresso', error)
          })
        return novo
      })
    },
    [userId],
  )

  const limpar = useCallback(() => {
    if (!userId) return
    setProgresso({})
    supabase
      .from('progresso')
      .upsert({ user_id: userId, dados: {}, atualizado_em: new Date().toISOString() })
      .then(({ error }) => {
        if (error) console.error('falha ao limpar progresso', error)
      })
  }, [userId])

  return { progresso, carregando, registrar, limpar }
}
