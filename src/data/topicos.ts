import type { Topico } from '../types'

export const topicos: Topico[] = [
  {
    id: 'logica-matematica',
    area: 'Componente Específico',
    categoria: 'Lógica e Matemática Discreta',
    rotuloCurto: 'Lógica',
    titulo: 'Lógica Proposicional, Conjuntos e Bases Numéricas',
    cor: '#2563eb',
    explicacao:
      'Proposição é uma sentença avaliável só como verdadeira ou falsa, nunca as duas ao mesmo tempo. ' +
      'Os operadores: NOT (~, !, ¬) inverte o valor. AND (^, *) só é verdadeiro se os dois lados forem verdadeiros. ' +
      'OR (v, +) é verdadeiro se pelo menos um lado for verdadeiro. XOR (⊕) é verdadeiro só quando os dois lados são diferentes. ' +
      'Ordem de precedência igual à matemática: NOT primeiro, depois AND, depois OR, salvo parênteses. ' +
      'Numa tabela-verdade, o número de linhas é 2 elevado ao número de variáveis. ' +
      'Em teoria dos conjuntos, A − (B ∪ C) equivale por De Morgan a A ∧ ¬B ∧ ¬C, o mesmo que A ∧ ¬(B ∪ C). ' +
      'Conversão de base: multiplica cada dígito pela base elevada à posição (da direita pra esquerda, começando em 0) e soma tudo.',
  },
  {
    id: 'estruturas-dados',
    area: 'Componente Específico',
    categoria: 'Estruturas de Dados e Recursão',
    rotuloCurto: 'Estruturas de Dados',
    titulo: 'Ponteiros, Estruturas de Dados e Recursão',
    cor: '#7c3aed',
    explicacao:
      'Ponteiro (char *x) como parâmetro de função recebe um endereço: mudar *x dentro da função altera o dado original, ' +
      'e essa mudança sobrevive depois que a função retorna. Um parâmetro comum (char x) recebe cópia, e a mudança morre no fim da função. ' +
      '&x pega o endereço de x. *x, quando x é ponteiro, acessa (dereferencia) o valor guardado nesse endereço. ' +
      'Pilha (LIFO): inserir e remover sempre pelo topo. Fila (FIFO): insere no fim, remove do início. ' +
      'Recursão precisa de caso base (senão nunca para) e caso recursivo que caminha em direção ao caso base. ' +
      'Fibonacci recursivo ingênuo (fib(n) = fib(n-1) + fib(n-2)) refaz o mesmo cálculo várias vezes: o número total de chamadas cresce exponencialmente com n.',
  },
  {
    id: 'engenharia-software',
    area: 'Componente Específico',
    categoria: 'Engenharia de Software',
    rotuloCurto: 'Engenharia de Software',
    titulo: 'Requisitos Funcionais x Não Funcionais',
    cor: '#0d9488',
    explicacao:
      'Requisito funcional descreve uma ação de negócio que o sistema executa pro usuário: cadastrar, calcular, emitir, consultar, gerar, permitir fazer algo. ' +
      'Requisito não funcional descreve como ou sob que condição o sistema faz isso, não a ação em si. Categorias mais comuns: desempenho (tempo de resposta, capacidade), ' +
      'disponibilidade/confiabilidade (uptime, tolerância a falha), segurança (autenticação, criptografia, LGPD), portabilidade (sistema operacional, navegador) e restrição de projeto (prazo, custo, tecnologia obrigatória). ' +
      'Teste rápido: se der pra reescrever como "o sistema deve [verbo de negócio]" e isso fizer sentido pro usuário final, é funcional. ' +
      'Se a frase fala de quão rápido, quão seguro ou quão disponível o sistema é, é não funcional, mesmo com verbo de ação no meio (ex: "deve criptografar").',
  },
  {
    id: 'etica-cidadania-digital',
    area: 'Conhecimentos Gerais',
    categoria: 'Ética, Legislação e Sustentabilidade',
    rotuloCurto: 'Conhecimentos Gerais',
    titulo: 'Cidadania Digital, Cibercultura e Interpretação de Texto',
    cor: '#d97706',
    explicacao:
      'No ENADE, o textão é padrão: o principal é identificar o que realmente impacta a resposta e ignorar o que é só contextualização. ' +
      'Em questão com afirmações agrupadas (I, II, III...), eliminar primeiro as claramente erradas já corta metade das alternativas. ' +
      'Cuidado com afirmação que soa plausível mas contradiz o texto: a prova cobra a leitura do texto, não conhecimento de mundo pra "corrigir" o autor. ' +
      'Se o enunciado não menciona "na prática" ou "efetividade real", a leitura é conceitual, não factual. ' +
      'Em questão de asserção-razão, as 5 alternativas seguem sempre o mesmo modelo: I e II verdadeiras com II justificando I; I e II verdadeiras sem II justificar I; só I verdadeira; só II verdadeira; ou as duas falsas. ' +
      'Em questão com dado numérico, somar os percentuais do texto quando a alternativa fizer uma afirmação agregada.',
  },
  {
    id: 'banco-dados',
    area: 'Componente Específico',
    categoria: 'Banco de Dados',
    rotuloCurto: 'Banco de Dados',
    titulo: 'Modelo Relacional e SQL',
    cor: '#16a34a',
    explicacao:
      'Modelo relacional organiza dado em tabelas (entidades) ligadas por chave estrangeira (FK) apontando pra chave primária (PK) de outra tabela. ' +
      'JOIN combina linhas de tabelas relacionadas pela FK. GROUP BY agrupa linhas que têm o mesmo valor numa coluna, pra aplicar função agregada (AVG, SUM, COUNT) por grupo. ' +
      'Toda coluna que aparece solta no SELECT junto de uma função agregada precisa estar no GROUP BY, senão o banco não sabe qual valor mostrar entre as várias linhas do grupo. ' +
      'ORDER BY ... DESC ordena do maior pro menor. LEFT OUTER JOIN mantém linhas do lado esquerdo mesmo sem correspondência do lado direito; INNER JOIN só mantém quando os dois lados batem.',
  },
  {
    id: 'redes-sistemas',
    area: 'Componente Específico',
    categoria: 'Redes e Sistemas Operacionais',
    rotuloCurto: 'Redes e SO',
    titulo: 'Endereçamento IP e Gerenciamento de Sistema Operacional',
    cor: '#0891b2',
    explicacao:
      'Sistema operacional é gerenciador de recursos: decide quem acessa o quê no hardware. Gerenciamento de memória é o que impede um programa de escrever na memória de outro programa (isolamento de processos). ' +
      'Em rede, dois hosts só se enxergam diretamente se estiverem na mesma sub-rede, o que é definido pela máscara de sub-rede aplicada ao IP: hosts com máscara diferente calculam sub-redes diferentes, mesmo com IPs parecidos, e não se enxergam sem passar pelo gateway.',
  },
  {
    id: 'uml-modelagem',
    area: 'Componente Específico',
    categoria: 'UML e Modelagem de Sistemas',
    rotuloCurto: 'UML',
    titulo: 'Diagramas de Caso de Uso e Sequência',
    cor: '#4f46e5',
    explicacao:
      'Caso de uso: ator se conecta ao caso de uso que ele executa. <<include>> é obrigatório: o caso de uso base sempre executa o incluído (ex: matricular sempre inclui validar aluno). ' +
      '<<extend>> é opcional: o caso de uso estendido só roda em certas condições, e o caso base funciona sozinho sem ele (ex: matrícula fora do prazo estende matrícula, mas matrícula comum não depende disso). ' +
      'Diagrama de sequência mostra troca de mensagem entre objetos (lifelines) em ordem de tempo, de cima pra baixo. Um retângulo laranja/objeto criado no meio do diagrama indica que aquele objeto só passa a existir naquele ponto, não antes.',
  },
  {
    id: 'empreendedorismo-legislacao',
    area: 'Componente Específico',
    categoria: 'Empreendedorismo e Legislação',
    rotuloCurto: 'Empreendedorismo',
    titulo: 'LGPD e Modelo de Negócios Canvas',
    cor: '#65a30d',
    explicacao:
      'LGPD (Lei 13.709/2018) regula tratamento de dado pessoal no Brasil. O art. 2º lista os fundamentos da lei: respeito à privacidade, autodeterminação informativa, liberdade de expressão/informação, ' +
      'inviolabilidade da intimidade/honra/imagem, desenvolvimento econômico e inovação, livre iniciativa/concorrência/defesa do consumidor, e direitos humanos/dignidade/cidadania. ' +
      'Business Model Canvas (Osterwalder) tem 9 blocos que cobrem 4 áreas: cliente (segmentos, relacionamento, canais), oferta (proposta de valor), infraestrutura (recursos, atividades-chave, parcerias) e viabilidade financeira (custo, receita). ' +
      'É ferramenta de validação de ideia de negócio antes de um plano de negócios formal, muito usada por startups.',
  },
  {
    id: 'discursivas-programacao',
    area: 'Componente Específico',
    categoria: 'Discursivas',
    rotuloCurto: 'Discursivas',
    titulo: 'Discursivas: Pseudocódigo e Código',
    cor: '#e11d48',
    explicacao:
      'Discursiva do ENADE é corrigida contra um padrão de resposta, não por múltipla escolha: precisa cobrir os pontos que o padrão pede, não decorar o texto exato. ' +
      'Em exercício de algoritmo, resolve por partes: primeiro o que precisa ser lido/armazenado, depois o cálculo, depois a saída. ' +
      'Em estrutura de dados encadeada, a lógica de inserir com prioridade é sempre a mesma ideia: andar pela lista até achar o ponto certo de encaixe e reconectar os ponteiros ao redor do novo nó.',
  },
]
