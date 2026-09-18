import type { Questao } from '../../types'

export const questoesEstruturasDados: Questao[] = [
  {
    id: 'estruturas-1',
    topicoId: 'estruturas-dados',
    tipo: 'codigo',
    linguagem: 'c',
    fonte: 'ENADE 2021 - Questão 10 (oficial, gabarito D)',
    enunciado:
      'O código abaixo tenta desenhar um padrão xadrez numa matriz molde[l][c], alternando um caractere de estampa:\n\n' +
      'char alternar_estampa(char estampa, char *proxima) {\n' +
      "    *proxima = *proxima == estampa ? ' ' : estampa;\n" +
      '    return *proxima;\n' +
      '}\n' +
      'void criar_molde(char molde[][50], int c, int l, char estampa) {\n' +
      '    char proxima = estampa;\n' +
      '    for (int i = 0; i < l; i++)\n' +
      '        for (int j = 0; j < c; j++)\n' +
      '            molde[i][j] = alternar_estampa(estampa, &proxima);\n' +
      '}\n\n' +
      'Sem nenhum ajuste, o código só forma um xadrez correto quando o número de colunas é ímpar; com número par de colunas, a linha de baixo nasce igual à de cima e o desenho vira zebra. ' +
      'Escreva a linha que falta acrescentar no fim do loop de i (dentro de criar_molde) pra garantir o xadrez certo não importa se o número de colunas é par ou ímpar, e explique por que ela resolve o problema.',
    dica:
      'O problema é que "proxima" chega no início de cada linha carregando o valor que sobrou do fim da linha anterior. Pra cada linha começar de forma independente, você precisa resetar "proxima" com um valor que já está gravado na matriz, não um valor arbitrário fixo.',
    respostaEsperada:
      'proxima = molde[i][0];\n\n' +
      'Explicação: no fim de cada linha, essa atribuição pega o valor real que ficou gravado na primeira coluna daquela linha e usa como ponto de partida da próxima linha, ' +
      'garantindo a inversão certa independente de quantas colunas existem. Sem essa linha, "proxima" simplesmente carrega o valor que sobrou do fim da linha anterior, e com número par de colunas esse valor é igual ao que já começou a linha, gerando zebra em vez de xadrez.',
    explicacao:
      'Ponteiro (char *proxima) como parâmetro de função recebe um endereço: mudar *proxima dentro de alternar_estampa altera o valor real da variável, e essa mudança sobrevive de uma chamada pra outra dentro do mesmo laço. ' +
      'O reset no fim de cada linha (proxima = molde[i][0]) é o que desacopla o início de uma linha do que sobrou da anterior.',
  },
  {
    id: 'estruturas-2',
    topicoId: 'estruturas-dados',
    tipo: 'discursiva',
    fonte: 'Treino (a partir do ponto levantado em aula)',
    enunciado:
      'No algoritmo recursivo ingênuo fib(n) = fib(n-1) + fib(n-2), com fib(0) = fib(1) = 1, quantas chamadas à função fib são feitas ao todo pra resolver fib(5) (contando a chamada inicial)? ' +
      'Mostre o raciocínio (pode montar a árvore de chamadas ou a fórmula recursiva do número de chamadas).',
    dica:
      'Cada chamada de fib(n), com n maior que 1, gera duas chamadas filhas: fib(n-1) e fib(n-2), mais ela própria. Monte uma fórmula recursiva pra contar chamadas, do mesmo jeito que fib conta valores.',
    respostaEsperada:
      '15 chamadas ao todo.\n\n' +
      'Raciocínio: seja chamadas(n) o total de chamadas pra resolver fib(n). Caso base: chamadas(0) = chamadas(1) = 1 (só a própria chamada, sem filhos). ' +
      'Caso recursivo: chamadas(n) = chamadas(n-1) + chamadas(n-2) + 1 (a própria chamada mais as duas subárvores). ' +
      'chamadas(2) = 1+1+1 = 3. chamadas(3) = 3+1+1 = 5. chamadas(4) = 5+3+1 = 9. chamadas(5) = 9+5+1 = 15.',
    explicacao:
      'É esse recálculo repetido (fib(3) é chamado duas vezes dentro de fib(5), fib(2) três vezes etc) que faz o número de chamadas crescer exponencialmente com n na versão ingênua, sem memoização.',
  },
  {
    id: 'estruturas-3',
    topicoId: 'estruturas-dados',
    tipo: 'objetiva',
    fonte: 'Treino (conceito revisado em aula, ver Pontos-de-Revisao-Aula)',
    enunciado:
      'Numa fila de atendimento bancário, o primeiro cliente a chegar é o primeiro a ser atendido. Numa pilha de pratos, o último prato colocado é o primeiro a ser retirado. ' +
      'Qual alternativa nomeia corretamente essas duas políticas de acesso?',
    dica: 'Pensa nas siglas em inglês: uma delas descreve quem chega primeiro sai primeiro, a outra quem chega por último sai primeiro.',
    alternativas: [
      { letra: 'A', texto: 'Fila é LIFO e pilha é FIFO.' },
      { letra: 'B', texto: 'Fila é FIFO e pilha é LIFO.' },
      { letra: 'C', texto: 'As duas são FIFO, só muda a implementação.' },
      { letra: 'D', texto: 'As duas são LIFO, só muda a implementação.' },
    ],
    gabarito: 'B',
    explicacao:
      'Fila é FIFO (First In, First Out): insere no fim, remove do início, igual à fila do banco. Pilha é LIFO (Last In, First Out): insere e remove sempre pelo topo, igual à pilha de pratos.',
  },
  {
    id: 'estruturas-4',
    topicoId: 'estruturas-dados',
    tipo: 'objetiva',
    fonte: 'Treino (ponto levantado em aula: "Árvore AVL, qual a principal característica")',
    enunciado: 'Qual é a principal característica que define uma árvore AVL, diferenciando-a de uma árvore binária de busca comum?',
    dica: 'O nome "AVL" vem dos criadores (Adelson-Velsky e Landis) e a ideia central deles era evitar que a árvore ficasse "torta" demais pra um lado.',
    alternativas: [
      { letra: 'A', texto: 'Todo nó tem exatamente dois filhos, sem exceção.' },
      { letra: 'B', texto: 'É uma árvore que se autobalanceia: a diferença de altura entre as subárvores esquerda e direita de qualquer nó nunca passa de 1.' },
      { letra: 'C', texto: 'Os elementos são armazenados em ordem alfabética, não numérica.' },
      { letra: 'D', texto: 'Não permite remoção de nós depois de inseridos.' },
    ],
    gabarito: 'B',
    explicacao:
      'Uma árvore AVL é uma árvore binária de busca que se rebalanceia sozinha a cada inserção ou remoção, garantindo que a diferença de altura entre as subárvores de qualquer nó (o fator de balanceamento) fique sempre entre -1 e 1. ' +
      'Isso mantém as buscas em tempo logarítmico, evitando que a árvore degenere numa lista encadeada.',
  },
  {
    id: 'estruturas-5',
    topicoId: 'estruturas-dados',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 11 (oficial)',
    enunciado:
      'Uma Pilha encadeada em Java é implementada assim:\n\n' +
      'public class No {\n' +
      '    public int dado;\n' +
      '    public No prox;\n' +
      '    public No(int dado) { this.dado = dado; }\n' +
      '}\n' +
      'public class PilhaEncadeada {\n' +
      '    private No topo;\n' +
      '    public int pop() {\n' +
      '        if (topo == null) return -1;\n' +
      '        No lixo = topo;\n' +
      '        topo = topo.prox;\n' +
      '        lixo.prox = null;\n' +
      '        return lixo.dado;\n' +
      '    }\n' +
      '    public int top() {\n' +
      '        if (topo == null) return -1;\n' +
      '        return topo.dado;\n' +
      '    }\n' +
      '}\n\n' +
      'Qual alternativa implementa corretamente o método push dessa pilha?',
    dica:
      'O novo elemento tem que virar o novo topo, e o antigo topo vira o "próximo" dele. Pensa na ordem: primeiro liga o novo nó no que já existia, só depois troca a referência do topo.',
    alternativas: [
      {
        letra: 'A',
        texto:
          'public void push(int elemento){\n    No novo = new No(elemento);\n    if(topo == null)\n        topo = novo;\n    else\n        topo.prox = novo;\n}',
      },
      {
        letra: 'B',
        texto: 'public void push(int elemento){\n    No novo = new No(elemento);\n    topo = novo;\n}',
      },
      {
        letra: 'C',
        texto: 'public void push(int elemento){\n    topo.dado = elemento;\n}',
      },
      {
        letra: 'D',
        texto:
          'public void push(int elemento){\n    No novo = new No(elemento);\n    while (topo != null)\n        topo = topo.prox;\n    topo.prox = novo;\n}',
      },
      {
        letra: 'E',
        texto: 'public void push(int elemento){\n    No novo = new No(elemento);\n    novo.prox = topo;\n    topo = novo;\n}',
      },
    ],
    gabarito: 'E',
    explicacao:
      'Push precisa: 1) criar o novo nó, 2) apontar o "prox" dele pro topo atual (preservando a pilha existente), 3) só então tornar o novo nó o topo. ' +
      'A alternativa E faz exatamente essa ordem. B perde a pilha inteira (não liga o novo nó a nada). A e C nem sempre encadeiam certo. D percorre até o fim da lista, tratando a pilha como fila, o que é errado.',
  },
  {
    id: 'estruturas-6',
    topicoId: 'estruturas-dados',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 13 (oficial)',
    enunciado:
      'Dadas as variáveis pilha (tipo Pilha) e fila (tipo Fila), um programador executa, nessa ordem:\n\n' +
      "pilha.push('A');\n" +
      "pilha.push('B');\n" +
      "pilha.push('C');\n" +
      'fila.enqueue(pilha.top());\n' +
      'fila.enqueue(pilha.top());\n' +
      "fila.enqueue('D');\n" +
      'pilha.push(fila.dequeue());\n' +
      'fila.enqueue(fila.dequeue());\n' +
      'fila.enqueue(pilha.pop());\n' +
      "pilha.push('E');\n" +
      "fila.enqueue('E');\n" +
      'pilha.pop();\n\n' +
      'Ao final, o que fica em pilha (do topo pra base) e em fila (do início pro fim)?',
    dica:
      'Vai anotando linha por linha o estado das duas estruturas num papel. "top()" só olha o topo, não remove. "pop()" e "dequeue()" removem de verdade.',
    alternativas: [
      { letra: 'A', texto: 'pilha: topo → C → A → E. fila: início → D → A → A → E.' },
      { letra: 'B', texto: 'pilha: topo → A. fila: início → D → B → C → E.' },
      { letra: 'C', texto: 'pilha: topo → C → B → A. fila: início → D → C → C → E.' },
      { letra: 'D', texto: 'pilha: topo → B → A. fila: início → D → B → C → E.' },
      { letra: 'E', texto: 'pilha: topo → C → B → A. fila: início → D → B → C → E.' },
    ],
    gabarito: 'C',
    explicacao:
      "Passo a passo: push A,B,C deixa a pilha C,B,A (topo C). top() duas vezes empilha 'C','C' na fila (top não remove). enqueue 'D': fila = C,C,D. " +
      "dequeue tira o C da frente (fila vira C,D) e esse C é empilhado (pilha: C,C,B,A). Em seguida dequeue tira o C da frente (fila vira D) e o mesmo C volta ao fim (fila: D,C). " +
      "pop() tira o C do topo (pilha volta a C,B,A) e esse C vai pra fila (fila: D,C,C). push 'E' (pilha: E,C,B,A), enqueue 'E' (fila: D,C,C,E), pop() final tira o E (pilha: C,B,A). " +
      'Resultado: pilha topo→C→B→A, fila início→D→C→C→E.',
  },
  {
    id: 'estruturas-7',
    topicoId: 'estruturas-dados',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 29 (oficial)',
    enunciado:
      'Considere o algoritmo:\n\n' +
      'Algoritmo Calcular\n' +
      '   var\n' +
      '      mat [1..3][1..5] de inteiro =\n' +
      '      {{1, 2, -1, 2, 3}, {1, -3, 4, 2, 0}, {-3, 5, 2, 3, 4}}\n' +
      '      sl[1..3] de inteiro = {0, 0, 0}\n' +
      '      x, i, j : inteiro\n' +
      '      x <- 0\n' +
      '   início\n' +
      '      para i <- 1 até 3 faça\n' +
      '          para j <- 1 até 5 faça\n' +
      '             sl[i] <- sl[i] + mat[i][j]\n' +
      '          fimpara\n' +
      '          x <- x + sl[i]\n' +
      '      fimpara\n' +
      '      imprima x\n' +
      '   fim\n\n' +
      'No fim da execução, qual valor será exibido?',
    dica: 'sl[i] soma cada linha inteira da matriz. x vai acumulando a soma de cada linha, uma linha de cada vez.',
    alternativas: [
      { letra: 'A', texto: '4' },
      { letra: 'B', texto: '7' },
      { letra: 'C', texto: '11' },
      { letra: 'D', texto: '22' },
      { letra: 'E', texto: '30' },
    ],
    gabarito: 'D',
    explicacao:
      'Soma da linha 1: 1+2-1+2+3 = 7 (x=7). Soma da linha 2: 1-3+4+2+0 = 4 (x=7+4=11). Soma da linha 3: -3+5+2+3+4 = 11 (x=11+11=22). Resultado final: x = 22.',
  },
]
