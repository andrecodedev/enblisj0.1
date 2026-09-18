import type { Questao } from '../../types'

export const questoesBancoDados: Questao[] = [
  {
    id: 'banco-1',
    topicoId: 'banco-dados',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 17 (oficial)',
    enunciado:
      'Modelo relacional simplificado de um sistema bancário: CLIENTE (COD_CLIENTE, NOM_CLIENTE, ...) 1:N com CONTA (NUM_CONTA, COD_CLIENTE, ...), e CONTA 1:N com HISTORICO_MOVIMENTACAO (NUM_CONTA, VAL_MOVIMENTACAO, ...).\n\n' +
      'Escreva a consulta SQL que recupera o nome dos clientes e o valor médio movimentado por eles em sua conta até o momento, exibindo primeiro os clientes com maior média de valor movimentado.',
    dica:
      'Toda coluna que aparece no SELECT ao lado de uma função agregada (como AVG) precisa estar no GROUP BY. E "exibir primeiro os maiores" pede ORDER BY ... DESC na própria expressão agregada.',
    alternativas: [
      {
        letra: 'A',
        texto:
          'SELECT CL.NOME, HM.VAL_MOVIMENTADO\nFROM CLIENTE CL INNER JOIN CONTA CO ON CL.COD_CLIENTE = CO.COD_CLIENTE\nINNER JOIN HISTORICO_MOVIMENTACAO HM ON CO.NUM_CONTA = HM.NUM_CONTA\nORDER BY HM.VAL_MOVIMENTADO',
      },
      {
        letra: 'B',
        texto:
          'SELECT CL.NOME, AVG(HM.VAL_MOVIMENTADO)\nFROM CLIENTE CL INNER JOIN CONTA CO ON CL.COD_CLIENTE = CO.COD_CLIENTE\nINNER JOIN HISTORICO_MOVIMENTACAO HM ON CO.NUM_CONTA = HM.NUM_CONTA\nORDER BY HM.VAL_MOVIMENTADO DESC',
      },
      {
        letra: 'C',
        texto:
          'SELECT CL.NOME, AVG(HM.VAL_MOVIMENTADO)\nFROM CLIENTE CL INNER JOIN CONTA CO ON CL.COD_CLIENTE = CO.COD_CLIENTE\nINNER JOIN HISTORICO_MOVIMENTACAO HM ON CO.NUM_CONTA = HM.NUM_CONTA\nGROUP BY CL.COD_CLIENTE, CL.NOME\nORDER BY AVG(HM.VAL_MOVIMENTADO) DESC',
      },
      {
        letra: 'D',
        texto:
          'SELECT CL.NOME, AVG(HM.VAL_MOVIMENTADO)\nFROM CLIENTE CL LEFT OUTER JOIN CONTA CO ON CL.COD_CLIENTE = CO.NUM_CONTA\nLEFT OUTER JOIN HISTORICO_MOVIMENTACAO HM ON CO.NUM_CONTA = HM.COD_HISTORICO_MOVIMENTACAO\nGROUP BY CL.NOME\nORDER BY AVG(HM.VAL_MOVIMENTADO) DESC',
      },
      {
        letra: 'E',
        texto:
          'SELECT CL.NOME, AVG(HM.VAL_MOVIMENTADO)\nFROM CLIENTE CL LEFT OUTER JOIN CONTA CO ON CL.COD_CLIENTE = CO.COD_CLIENTE\nLEFT OUTER JOIN HISTORICO_MOVIMENTACAO HM ON CO.NUM_CONTA = HM.NUM_CONTA\nGROUP BY CL.NOME\nORDER BY AVG(HM.VAL_MOVIMENTADO) DESC',
      },
    ],
    gabarito: 'C',
    explicacao:
      'C usa AVG corretamente com GROUP BY pela chave do cliente (evitando ambiguidade de nomes repetidos) e ORDER BY na expressão agregada DESC. ' +
      'A nem usa AVG. B usa AVG sem GROUP BY, que é erro de sintaxe/semântica em SQL padrão. D erra as condições de JOIN (compara colunas que não correspondem, ex: COD_CLIENTE = NUM_CONTA). ' +
      'E é quase igual a C, mas usa LEFT OUTER JOIN (traria cliente sem movimentação, o que foge do pedido) e agrupa só por nome, arriscando juntar clientes homônimos.',
  },
]
