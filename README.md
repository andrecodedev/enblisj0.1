# ENADE Treino

App pra treinar questões do ENADE (TADS): sorteio aleatório ou treino direto por tópico, questão objetiva ou discursiva/código, dica opcional e revisão com o padrão de resposta depois de responder.

Conteúdo baseado no plano de ensino, workshops e provas antigas do Obsidian (`Faculdade ADS/ENAD`).

## Rodar local

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173` (ou na porta que o Vite escolher).

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Sem backend: progresso fica salvo no `localStorage` do navegador

## Estrutura

- `src/types.ts`: modelo de tópico e questão (objetiva, discursiva, código)
- `src/data/topicos.ts`: tópicos, cada um com área, categoria, cor e explicação
- `src/data/questoes/*.ts`: banco de questões, um arquivo por categoria
- `src/hooks/useProgresso.ts`: progresso de resposta (localStorage)
- `src/hooks/useTema.ts`: tema claro/escuro/sistema
- `src/components/`: `FiltroPainel` (filtro + sorteio), `ModoTreino` (questão atual), `QuestaoCard` + `QuestaoObjetivaCard`/`QuestaoAbertaCard` (tipos de questão)

## Adicionar questão nova

Editar o arquivo da categoria em `src/data/questoes/` seguindo o formato de `Questao` em `src/types.ts`. Pra criar categoria nova, adicionar o tópico em `src/data/topicos.ts` (com uma `cor` própria) e criar o arquivo de questões correspondente, importando em `src/data/index.ts`.
