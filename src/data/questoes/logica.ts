import type { Questao } from '../../types'

export const questoesLogica: Questao[] = [
  {
    id: 'logica-1',
    topicoId: 'logica-matematica',
    tipo: 'objetiva',
    fonte: 'ENADE 2017 (oficial)',
    enunciado:
      'A álgebra booleana possui um operador unário ~ (NÃO) e os operadores binários * (E) e + (OU). ' +
      'Dada a tabela-verdade para as proposições p, q, r e a fórmula G (V=verdadeiro, F=falso):\n\n' +
      'p=V q=V r=V → G=V\n' +
      'p=V q=V r=F → G=F\n' +
      'p=V q=F r=V → G=F\n' +
      'p=V q=F r=F → G=F\n' +
      'p=F q=V r=V → G=V\n' +
      'p=F q=V r=F → G=V\n' +
      'p=F q=F r=V → G=V\n' +
      'p=F q=F r=F → G=V\n\n' +
      'Qual fórmula reproduz essa tabela?',
    dica:
      'Olha só a coluna de p: quando p = F, G é sempre V. Isso só é possível se a fórmula tiver ~p solto no OR (sem estar preso a outra condição). Já elimina duas alternativas de cara.',
    alternativas: [
      { letra: 'A', texto: 'p + ~q * r' },
      { letra: 'B', texto: 'p + q * ~r' },
      { letra: 'C', texto: '~p + q * r' },
      { letra: 'D', texto: '~p + ~q * r' },
      { letra: 'E', texto: '~p + q * ~r' },
    ],
    gabarito: 'C',
    explicacao:
      'Quando p = F, G é sempre V, então a fórmula precisa isolar ~p no OR (isso já elimina A e B, que trazem p puro, sem negar). ' +
      'Entre C, D e E, só ~p + q*r bate nas 4 linhas com p = V: nelas G só é V quando q e r também são V, exatamente q*r.',
  },
  {
    id: 'logica-2',
    topicoId: 'logica-matematica',
    tipo: 'objetiva',
    fonte: 'ENADE (oficial)',
    enunciado:
      'Pesquisa de renda média cruza três variáveis: A = possui ensino superior, B = possui pós-graduação, C = possui pelo menos 5 anos de experiência na área. ' +
      'Três expressões de subconjunto:\n\n' +
      'Expressão 1: x ∈ A ∧ x ∉ (B ∪ C)\n' +
      'Expressão 2: x ∈ A − (B ∪ C)\n' +
      'Expressão 3: x ∈ A ∧ x ∈ B ∧ x ∈ C\n\n' +
      'Programa em C equivalente:\n\n' +
      'void determina_renda(pessoa *p) {\n' +
      '    /* condição 1 */\n' +
      '    if (contem(A, p) && !contem(B, p) && !contem(C, p)) { ... }\n' +
      '    /* condição 2 */\n' +
      '    else if (contem(A, p) || contem(B, p) || contem(C, p)) { ... }\n' +
      '}\n\n' +
      'Qual alternativa está correta?',
    dica:
      'Lembra da Lei de De Morgan: ¬(B ∪ C) é a mesma coisa que ¬B ∧ ¬C. Reescreva a condição 1 do programa nessa forma e compare com a expressão 1 e com a expressão 2 (diferença de conjuntos).',
    alternativas: [
      { letra: 'A', texto: 'A condição 2 do programa é equivalente à expressão 3.' },
      { letra: 'B', texto: 'Pessoas com pós-graduação pertencem ao conjunto definido pela expressão 2.' },
      { letra: 'C', texto: 'A condição 1 do programa é verdadeira para todas as pessoas com ensino superior.' },
      {
        letra: 'D',
        texto: 'A condição 1 do programa e as expressões 1 e 2, que representam o mesmo subconjunto, são equivalentes.',
      },
      {
        letra: 'E',
        texto:
          'A condição 2 do programa define o conjunto de pessoas que tem ensino superior, pós-graduação e pelo menos cinco anos de experiência em sua área de atuação.',
      },
    ],
    gabarito: 'D',
    explicacao:
      'Condição 1 é A ∧ ¬B ∧ ¬C. Por De Morgan, ¬(B∪C) = ¬B ∧ ¬C, então a expressão 1 é idêntica à condição 1. ' +
      'A diferença de conjuntos A − (B∪C) também se define como A ∧ ¬(B∪C), então a expressão 2 bate igual. ' +
      'Condição 1, expressão 1 e expressão 2 descrevem o mesmo subconjunto: só ensino superior, sem pós-graduação e sem experiência.',
  },
  {
    id: 'logica-3',
    topicoId: 'logica-matematica',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 27 (oficial)',
    enunciado: 'Somando (1001)₂ + (15)₈ + (FF)₁₆, qual o valor equivalente na base decimal?',
    dica:
      'Converta cada número pra decimal separado antes de somar. Pra converter, multiplica cada dígito pela base elevada à posição dele (posição 0 é o dígito mais à direita) e soma tudo.',
    alternativas: [
      { letra: 'A', texto: '188' },
      { letra: 'B', texto: '215' },
      { letra: 'C', texto: '277' },
      { letra: 'D', texto: '316' },
      { letra: 'E', texto: '345' },
    ],
    gabarito: 'C',
    explicacao: '(1001)₂ = 9. (15)₈ = 1·8 + 5 = 13. (FF)₁₆ = 15·16 + 15 = 255. Soma: 9 + 13 + 255 = 277.',
  },
  {
    id: 'logica-4',
    topicoId: 'logica-matematica',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 35 (oficial)',
    enunciado:
      'Critérios de uma seguradora: I(x) = maior de idade, R(x) = possui residência própria, P(x,y) = x e y são parentes, S(x) = já possui seguro da companhia.\n\n' +
      '¬I(x) → Inviável\n' +
      'I(x) ∧ R(x) ∧ ∃y (S(y) ∧ P(x,y)) → Viável, R$200\n' +
      'I(x) ∧ ¬R(x) ∧ ∃y (S(y) ∧ P(x,y)) → Viável, R$300\n' +
      '¬I(x) ∨ (R(x) ∧ I(x)) → Viável, R$500\n\n' +
      'Programa em C (cadeia if / else if, só um branch roda por pessoa):\n\n' +
      'void obtem_resultado(pessoa *p) {\n' +
      '    pessoa *y = NULL;\n' +
      '    if (!I(p)) printf("Inviável");\n' +
      '    else if (I(p) && R(p) && (y = obtem(p))) printf("Viável, R$200");\n' +
      '    else if (I(p) && !R(p) && (y = obtem(p))) printf("Viável, R$300");\n' +
      '    else if (!I(p) || (R(p) && I(p))) printf("Viável, R$500");\n' +
      '}\n\n' +
      'Afirmações:\n' +
      'I. A tabela é ambígua: há pessoas para as quais a análise resultaria em dois resultados diferentes.\n' +
      'II. Mesmo ambígua, não existe a possibilidade de o programa exibir mais de um resultado para uma pessoa.\n' +
      'III. Segundo a tabela, não existe a possibilidade de pessoas sem residência própria serem contempladas com o seguro.\n' +
      'IV. Segundo o programa, o seguro para uma pessoa menor de idade e sem residência própria é viável e custará R$500.\n\n' +
      'Quais estão corretas?',
    dica:
      'Trate a tabela e o código separado. Na tabela, veja se uma mesma pessoa pode satisfazer duas linhas ao mesmo tempo (isso é ambiguidade). No código, lembra que é uma cadeia if/else if: só o primeiro if verdadeiro roda, os outros nem são avaliados.',
    alternativas: [
      { letra: 'A', texto: 'I e II' },
      { letra: 'B', texto: 'II e III' },
      { letra: 'C', texto: 'III e IV' },
      { letra: 'D', texto: 'I, II e IV' },
      { letra: 'E', texto: 'I, III e IV' },
    ],
    gabarito: 'A',
    explicacao:
      'I é verdadeira: pra qualquer menor de idade, a linha 1 (¬I(x)) diz Inviável, mas a linha 4 (¬I(x) ∨ ...) também fica satisfeita só com ¬I(x), a mesma pessoa cai em dois critérios com resultado diferente. ' +
      'II é verdadeira: o código é if/else if em cadeia, só o primeiro if verdadeiro executa, nunca dois printf rodam pra mesma pessoa. ' +
      'III é falsa: a terceira linha permite seguro (R$300) pra quem não tem residência própria, desde que maior de idade e com parente já segurado. ' +
      'IV é falsa: no programa, menor de idade cai no primeiro if (!I(p)) e imprime Inviável, nunca chega no último else if.',
  },
  {
    id: 'logica-5',
    topicoId: 'logica-matematica',
    tipo: 'objetiva',
    fonte: 'Treino (conceito de Oficina1_Logica_Teoria_Conjuntos)',
    enunciado:
      'Um sistema de prescrição médica bloqueia a liberação de um tratamento quando os medicamentos A e B são exatamente diferentes entre si em relação à prescrição ' +
      '(ou só A foi prescrito, ou só B foi prescrito, nunca os dois juntos e nunca nenhum dos dois). Qual operador lógico representa essa regra?',
    dica: 'Pense em quando o resultado é verdadeiro: só quando os dois lados têm valores diferentes um do outro.',
    alternativas: [
      { letra: 'A', texto: 'AND (^)' },
      { letra: 'B', texto: 'OR (v)' },
      { letra: 'C', texto: 'NOT (~)' },
      { letra: 'D', texto: 'XOR (⊕)' },
    ],
    gabarito: 'D',
    explicacao:
      'XOR (ou exclusivo) só é verdadeiro quando os dois operandos são diferentes entre si (um V e um F). Se forem iguais, verdadeiro os dois ou falso os dois, o resultado é falso. ' +
      'É exatamente a regra descrita: bloquear quando os dois são prescritos juntos ou quando nenhum dos dois é prescrito.',
  },
  {
    id: 'logica-6',
    topicoId: 'logica-matematica',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 34 (oficial)',
    enunciado:
      'Sistema especialista de diagnóstico usa a seguinte regra de produção:\n\n' +
      'Se ((temperatura > 38º) e (dores musculares intensas))\n' +
      'então (quadro de dengue, com 70% de chance);\n' +
      'senão (quadro de resfriado comum, com 30% de chance);\n\n' +
      'Levando em conta essa regra de produção, é correto afirmar que:',
    dica:
      'A porcentagem é uma chance por pessoa, não uma fração fixa do grupo. Isso já derruba as alternativas que tratam o percentual como se fosse "quantidade exata de pessoas doentes" num grupo.',
    alternativas: [
      { letra: 'A', texto: 'Cada pessoa que procura atendimento apresentando ambos os sintomas possui a probabilidade 0,7 de estar contaminada pela dengue.' },
      { letra: 'B', texto: 'Se 50 pessoas procurarem o atendimento apresentando um dos dois sintomas, provavelmente 15 pessoas estarão com resfriado comum.' },
      { letra: 'C', texto: 'Se 100 pessoas procurarem o atendimento apresentando ambos os sintomas, a quantidade de pessoas com dengue será igual a 70.' },
      { letra: 'D', texto: 'Cada pessoa que chega apresentando um dos dois sintomas estará com resfriado comum.' },
      { letra: 'E', texto: 'A cada 100 pessoas que procuram atendimento, no máximo 30 estarão doentes.' },
    ],
    gabarito: 'A',
    explicacao:
      'A regra dá uma probabilidade individual (70% de chance de dengue para quem tem os dois sintomas), não uma proporção garantida de um grupo. ' +
      'C erra ao tratar 70% como "exatamente 70 de 100" (a regra é probabilística, não determinística). B, D e E também tratam a porcentagem como contagem fixa ou aplicam a regra a quem só tem um dos dois sintomas, o que a regra nem cobre.',
  },
]
