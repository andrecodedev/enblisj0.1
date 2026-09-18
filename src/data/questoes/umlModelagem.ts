import type { Questao } from '../../types'

export const questoesUmlModelagem: Questao[] = [
  {
    id: 'uml-1',
    topicoId: 'uml-modelagem',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 16 (oficial)',
    enunciado:
      'Diagrama de sequência de um Sistema de Suporte à Decisão para Gestão Hospitalar, com 4 lifelines: Paciente, Registro, Leito, Profissional.\n\n' +
      'Mensagens em ordem: 1) Paciente → Registro: registraPaciente(). 2) Registro → Paciente: retorna número do paciente. ' +
      '3) Registro → Leito: consultaLeitos(). 4) Registro → Profissional: consultaUTI(). 5) Profissional → Leito: UTI gerada (cria objeto UTI). ' +
      '6) Leito → Registro: Leito Gerado. 7) Paciente → Profissional: realizaIntervencao(). ' +
      'Dentro de um laço: 8) Profissional (automensagem): realizaIntervencao(), gerando um objeto Intervenção. 9) retorno Intervenção Realizada (dentro do laço). ' +
      '10) Profissional → Paciente: Intervenção Realizada (fora do laço). 11) Paciente (automensagem): liberaPaciente(). 12) Paciente → Leito: Libera Leito. ' +
      'Ao final, as quatro lifelines terminam destruídas (X), sem mensagem de retorno após a destruição.\n\n' +
      'Assinale a alternativa correta sobre esse diagrama.',
    dica:
      'Vá eliminando pelas mais óbvias: o diagrama não mostra herança nenhuma entre Leito e UTI; quem responde a uma mensagem enviada a Registro é o próprio Registro, não Paciente; e nem todo objeto do diagrama é criado durante essas mensagens (alguns já existem como participante desde o início).',
    alternativas: [
      { letra: 'A', texto: 'Leito é uma subclasse de UTI.' },
      { letra: 'B', texto: 'O método registraPaciente() é implementado por Paciente.' },
      { letra: 'C', texto: 'Todos os objetos foram criados no instante de execução do Caso de Uso representado.' },
      { letra: 'D', texto: 'O diagrama apresenta um erro ao não representar as mensagens de retorno depois da destruição dos objetos.' },
      { letra: 'E', texto: 'A mensagem 4 pode ser substituída pelo estereótipo <<create>> sem causar prejuízo à interpretação correta do Diagrama de Sequência representado.' },
    ],
    gabarito: 'E',
    explicacao:
      'A é falsa: o diagrama não representa nenhuma generalização entre Leito e UTI, UTI aparece como objeto criado, não como superclasse. B é falsa: quem implementa o método é o receptor da mensagem (Registro), não quem a envia (Paciente). ' +
      'C é falsa: Paciente, Registro, Leito e Profissional já existem como lifelines desde o início do diagrama; só objetos como UTI e Intervenção são criados durante a execução. D é falsa: não representar mensagem de retorno após a destruição de um objeto não é erro, é notação UML normal (objeto destruído não responde mais). Por eliminação, E é a correta.',
  },
  {
    id: 'uml-2',
    topicoId: 'uml-modelagem',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 31 (oficial)',
    enunciado:
      'Diagrama de caso de uso de um sistema de matrícula universitária: ator "Aluno" ligado a "Realizar Matrícula". ' +
      '"Realizar Matrícula Fora do Prazo" tem uma relação <<extend>> apontando para "Realizar Matrícula" (estende o caso base). ' +
      '"Realizar Matrícula" tem uma relação <<include>> apontando para "Validar Aluno" (inclui obrigatoriamente). ' +
      '"Validar via Retina" e "Validar via Digital" são dois casos de uso separados, cada um ligado a "Validar Aluno".\n\n' +
      'Avalie as afirmações:\n' +
      'I. O aluno poderá realizar a matrícula fora do prazo e as tratativas são as mesmas da matrícula feita dentro do prazo.\n' +
      'II. O aluno poderá, opcionalmente, realizar a matrícula fora do prazo.\n' +
      'III. O sistema, obrigatoriamente, deverá validar o aluno que realizar a matrícula fora do prazo.\n' +
      'IV. A validação do aluno deverá ser feita a partir da sua matrícula informada no sistema.\n' +
      'V. A validação do aluno, a ser feita por retina, é diferente da validação feita pela digital.\n\n' +
      'É correto apenas o que se afirma em:',
    dica:
      '<<extend>> é sempre opcional, nunca obrigatório. <<include>> é sempre obrigatório: se o caso base roda, o incluído roda junto, não importa por qual caminho se chegou até o caso base.',
    alternativas: [
      { letra: 'A', texto: 'I e IV.' },
      { letra: 'B', texto: 'I, II e IV.' },
      { letra: 'C', texto: 'I, III e V.' },
      { letra: 'D', texto: 'II, III e V.' },
      { letra: 'E', texto: 'II, III, IV e V.' },
    ],
    gabarito: 'D',
    explicacao:
      'II é verdadeira: extend é sempre uma extensão opcional do caso base. III é verdadeira: como "Realizar Matrícula Fora do Prazo" estende "Realizar Matrícula", e este inclui obrigatoriamente "Validar Aluno", a validação roda mesmo no caminho fora do prazo. ' +
      'V é verdadeira: o diagrama modela retina e digital como dois casos de uso distintos, ou seja, duas formas diferentes de validação. ' +
      'I é falsa: sendo um caso de uso separado que estende o base, a matrícula fora do prazo pressupõe tratamento adicional/diferente, não idêntico. IV é falsa: o diagrama não relaciona a validação a nenhum "número de matrícula informado", isso não está representado.',
  },
]
