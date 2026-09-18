import type { Questao } from '../../types'

export const questoesEngenhariaSoftware: Questao[] = [
  {
    id: 'engenharia-1',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'Treino (baseado no padrão da Questão 9 do ENADE 2021)',
    enunciado:
      'Um aplicativo de banco tem os seguintes itens no documento de requisitos:\n\n' +
      'I. O aplicativo deve permitir que o cliente transfira dinheiro entre contas.\n' +
      'II. Essa transferência deve ser processada em até 3 segundos.\n' +
      'III. O aplicativo deve criptografar os dados bancários armazenados no dispositivo.\n' +
      'IV. O aplicativo deve funcionar em Android e iOS.\n\n' +
      'Qual alternativa classifica corretamente os itens em requisito funcional (RF) ou não funcional (RNF)?',
    dica:
      'Teste cada item reescrevendo como "o sistema deve [verbo de negócio]". Se a frase inteira faz sentido pro cliente final, é funcional. Se ela só descreve uma condição técnica (tempo, segurança, plataforma), é não funcional, mesmo tendo um verbo de ação.',
    alternativas: [
      { letra: 'A', texto: 'I é RF; II, III e IV são RNF.' },
      { letra: 'B', texto: 'I e III são RF; II e IV são RNF.' },
      { letra: 'C', texto: 'I e II são RF; III e IV são RNF.' },
      { letra: 'D', texto: 'Todos são RF, porque todos usam um verbo de ação.' },
      { letra: 'E', texto: 'I e IV são RF; II e III são RNF.' },
    ],
    gabarito: 'A',
    explicacao:
      'Só o item I fala de uma ação de negócio que faz sentido pro cliente final (transferir dinheiro), então é o único requisito funcional. ' +
      'II fala de desempenho (tempo de resposta), III fala de segurança (criptografia), IV fala de portabilidade (sistema operacional): os três são não funcionais, mesmo III tendo um verbo de ação ("deve criptografar"). ' +
      'O teste "o sistema deve [verbo de negócio]" só faz sentido pro usuário final no item I; nos outros, o verbo descreve uma condição técnica, não uma ação que o cliente pede.',
  },
  {
    id: 'engenharia-2',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'Treino (baseado no padrão da Questão 9 do ENADE 2021)',
    enunciado:
      'Um e-commerce tem os seguintes itens no documento de requisitos:\n\n' +
      'I. O sistema deve gerar a nota fiscal eletrônica de cada pedido.\n' +
      'II. O sistema deve suportar 10 mil usuários simultâneos sem queda de desempenho.\n' +
      'III. O sistema deve permitir que o cliente acompanhe o status da entrega.\n' +
      'IV. O sistema deve manter 99,9% de disponibilidade mensal.\n\n' +
      'Qual alternativa classifica corretamente os itens em requisito funcional (RF) ou não funcional (RNF)?',
    dica:
      'Dois dos quatro itens descrevem uma ação de negócio que o cliente pede diretamente. Os outros dois falam de capacidade e de disponibilidade, categorias clássicas de requisito não funcional.',
    alternativas: [
      { letra: 'A', texto: 'I e III são RF; II e IV são RNF.' },
      { letra: 'B', texto: 'I e II são RF; III e IV são RNF.' },
      { letra: 'C', texto: 'Todos são RF.' },
      { letra: 'D', texto: 'I é RF; II, III e IV são RNF.' },
      { letra: 'E', texto: 'III e IV são RF; I e II são RNF.' },
    ],
    gabarito: 'A',
    explicacao:
      'I (gerar nota fiscal) e III (acompanhar status da entrega) são ações de negócio que o cliente pede diretamente, então são funcionais. ' +
      'II fala de capacidade (10 mil usuários simultâneos), categoria de desempenho. IV fala de disponibilidade (99,9% mensal). Os dois são não funcionais, mesmo com verbo de ação no meio.',
  },
  {
    id: 'engenharia-3',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 9 (oficial)',
    enunciado:
      'Requisitos de software podem ser classificados como funcionais e não funcionais. Assinale a alternativa em que o item é um requisito funcional.',
    dica: 'Só um dos cinco itens descreve uma ação de negócio de verdade; os outros quatro falam de plataforma, prazo, desempenho ou segurança.',
    alternativas: [
      { letra: 'A', texto: 'O software deve ser operacionalizado no sistema Linux.' },
      { letra: 'B', texto: 'O tempo de desenvolvimento não deve ultrapassar seis meses.' },
      { letra: 'C', texto: 'O software deve emitir relatórios de compras a cada quinze dias.' },
      { letra: 'D', texto: 'O tempo de resposta do sistema não deve ultrapassar 30 segundos.' },
      { letra: 'E', texto: 'A base de dados deve ser protegida para acesso apenas de usuários autorizados.' },
    ],
    gabarito: 'C',
    explicacao:
      'Emitir relatório de compras é uma ação de negócio que o sistema executa pro usuário: requisito funcional. A é portabilidade, B é restrição de projeto (prazo), D é desempenho, E é segurança: todos não funcionais.',
  },
  {
    id: 'engenharia-4',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 12 (oficial)',
    enunciado:
      'Uma equipe usa processos ágeis como Scrum e Extreme Programming (XP), com acompanhamento por quadro Kanban. Avalie as afirmações:\n\n' +
      'I. Métodos ágeis são baseados em ciclos iterativo e incremental, com foco no desenvolvimento rápido e flexibilidade a mudanças, com participação do cliente no processo.\n' +
      'II. Uma forte característica da XP é a garantia de qualidade do código: os desenvolvedores produzem testes automatizados antes mesmo de codificar uma funcionalidade.\n' +
      'III. O planejamento no Scrum é baseado no product backlog, uma lista de funcionalidades desejadas pelo cliente, sendo o Scrum Master o responsável por gerenciá-lo.\n' +
      'IV. O quadro Kanban permite monitorar a evolução das tarefas durante o processo ágil, possibilitando acompanhamento visual das atividades em construção.\n\n' +
      'É correto apenas o que se afirma em:',
    dica: 'No Scrum, quem é dono e gerencia o product backlog não é o Scrum Master. Isso já derruba uma das quatro afirmações.',
    alternativas: [
      { letra: 'A', texto: 'II.' },
      { letra: 'B', texto: 'I e III.' },
      { letra: 'C', texto: 'I, II e IV.' },
      { letra: 'D', texto: 'I, III e IV.' },
      { letra: 'E', texto: 'II, III e IV.' },
    ],
    gabarito: 'C',
    explicacao:
      'I, II e IV descrevem corretamente ágil, XP (TDD: testes antes do código) e Kanban. III erra: quem gerencia o product backlog é o Product Owner, não o Scrum Master.',
  },
  {
    id: 'engenharia-5',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 14 (oficial)',
    enunciado:
      'Um projeto de integração ERP-CRM não implementou todos os serviços esperados e há falhas nos já implementados. Uma auditoria identificou: desentendimentos entre membros da equipe; membros da qualidade que não entendem o que deve ser avaliado; demandas de novos solicitantes aparecendo constantemente; e o patrocinador demorando muito a responder solicitações da equipe. O projeto ficou atrasado e com orçamento excedido.\n\n' +
      'O gerente de projeto deve priorizar o gerenciamento de:',
    dica: 'Todos os sintomas descritos envolvem pessoas e comunicação (equipe, qualidade, solicitantes, patrocinador), não uma métrica técnica isolada.',
    alternativas: [
      { letra: 'A', texto: 'custo.' },
      { letra: 'B', texto: 'tempo.' },
      { letra: 'C', texto: 'escopo.' },
      { letra: 'D', texto: 'qualidade.' },
      { letra: 'E', texto: 'partes interessadas.' },
    ],
    gabarito: 'E',
    explicacao:
      'Desentendimento na equipe, falta de alinhamento com a qualidade, novos solicitantes aparecendo e patrocinador lento pra responder são todos sintomas de comunicação/expectativa mal gerenciada entre os envolvidos no projeto: gerenciamento de partes interessadas (stakeholders).',
  },
  {
    id: 'engenharia-6',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 18 (oficial)',
    enunciado:
      'A engenharia de requisitos inclui subprocessos de alto nível: estudo de viabilidade, elicitação, especificação e validação de requisitos. Uma equipe já aprovou o estudo de viabilidade de um software de Suporte Técnico e seguirá os subprocessos de elicitação, especificação e validação.\n\n' +
      'Para esses três subprocessos, quais artefatos podem ser utilizados pela equipe?',
    dica: 'Pense num artefato pra cada etapa: um pra coletar informação com o usuário, um pra formalizar o requisito funcional, e um pra validar visualmente com o cliente antes de codificar.',
    alternativas: [
      { letra: 'A', texto: 'Documento de entrevista com usuários; modelo de caso de uso para os requisitos funcionais; prototipação de telas.' },
      { letra: 'B', texto: 'Documento de estudo de viabilidade; modelo de caso de uso para os requisitos funcionais; prototipação de telas.' },
      { letra: 'C', texto: 'Matriz de rastreabilidade; modelo de caso de uso para os requisitos não-funcionais; prototipação de telas.' },
      { letra: 'D', texto: 'Documento de entrevista com usuários; modelo de caso de uso para os requisitos não-funcionais; matriz de rastreabilidade.' },
      { letra: 'E', texto: 'Documento de estudo de viabilidade; modelo de caso de uso para os requisitos funcionais; matriz de rastreabilidade.' },
    ],
    gabarito: 'A',
    explicacao:
      'Elicitação usa entrevista com usuário; especificação formaliza requisito funcional em modelo de caso de uso; validação usa prototipação de tela pra confirmar com o cliente antes de construir de verdade. ' +
      'B e E erram ao citar o documento de estudo de viabilidade, que já foi concluído numa etapa anterior. C e D erram ao falar de requisito não-funcional (caso de uso modela funcional) ou matriz de rastreabilidade (não é o artefato central dessas três etapas).',
  },
  {
    id: 'engenharia-7',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 19 (oficial)',
    enunciado:
      'Sobre estilos e padrões arquiteturais em engenharia de software, avalie:\n\n' +
      'I. Em arquiteturas orientadas a objetos, a comunicação entre componentes é feita por troca de mensagens.\n' +
      'II. Arquiteturas monolíticas consistem de um sistema dividido em pequenas partes, possibilitando manutenção, execução e evolução individual.\n' +
      'III. No padrão MVC, a camada de Modelo armazena as interações realizadas no Controle, podendo ser apresentadas/manipuladas posteriormente na Visão.\n' +
      'IV. Nas arquiteturas de microsserviços, o software possui componentes altamente acoplados, dificultando a manutenção.\n\n' +
      'É correto apenas o que se afirma em:',
    dica: 'Monolítico é literalmente o oposto de "dividido em pequenas partes independentes". E microsserviços busca exatamente o oposto de "altamente acoplado".',
    alternativas: [
      { letra: 'A', texto: 'I e III.' },
      { letra: 'B', texto: 'II e III.' },
      { letra: 'C', texto: 'II e IV.' },
      { letra: 'D', texto: 'I, II e IV.' },
      { letra: 'E', texto: 'I, III e IV.' },
    ],
    gabarito: 'A',
    explicacao:
      'I é a definição padrão de comunicação orientada a objetos (mensagens entre objetos). III descreve corretamente o fluxo MVC (Controle interage, Modelo guarda estado, Visão apresenta). ' +
      'II inverte o conceito de monolítico (que é um bloco único, não dividido). IV inverte o objetivo de microsserviços (que busca baixo acoplamento, não alto).',
  },
  {
    id: 'engenharia-8',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 21 (oficial)',
    enunciado:
      'A Gestão de Configuração de Software estabelece um conjunto de atividades para gerenciar alterações durante todo o ciclo de vida de um software. Assinale a alternativa correta sobre essas atividades.',
    dica: 'São 5 atividades clássicas, na ordem: identificar o quê está sendo controlado, controlar versão, controlar mudança, auditar, e reportar status.',
    alternativas: [
      { letra: 'A', texto: 'Identificação de itens na configuração de software, gerenciamento de alterações, validação de versões e controle de qualidade.' },
      { letra: 'B', texto: 'Identificação de objetos na configuração de software, controle de versão, controle de alterações, auditoria de configuração e relatório de status.' },
      { letra: 'C', texto: 'Gerência de projeto, gerência de configuração de software, ciclo de vida do projeto, processo de software e evolução das configurações.' },
      { letra: 'D', texto: 'Construção de modelo de requisitos, métricas para modelo de projeto, métricas de controle de versão e relatório de manutenção.' },
      { letra: 'E', texto: 'Identificação de alterações, controle de versão, mapeamento de alteração e notificação da alteração aos envolvidos.' },
    ],
    gabarito: 'B',
    explicacao:
      'As cinco atividades clássicas de Gestão de Configuração de Software (Pressman) são: identificação, controle de versão, controle de alterações, auditoria de configuração e relatório de status — exatamente a alternativa B.',
  },
  {
    id: 'engenharia-9',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 22 (oficial)',
    enunciado:
      'Sobre o processo de Gestão de Configuração de Software (GCS), avalie:\n\n' +
      'I. O controle de versão possibilita compartilhamento de dados e edição colaborativa, permitindo gestão de diferentes ramos de desenvolvimento e diferentes versões simultâneas.\n' +
      'II. A auditoria de configuração é uma atividade de garantia de qualidade que assegura que a qualidade do software seja mantida quando feitas alterações requisitadas.\n' +
      'III. O relatório de status de configuração mantém o cliente informado sobre as alterações, e deve ser gerado ao final do processo.\n' +
      'IV. A GCS proporciona atividades de acompanhamento e controle de mudanças que se iniciam logo depois que o software é fornecido ao cliente e colocado em operação.\n\n' +
      'É correto apenas o que se afirma em:',
    dica: 'Relatório de status não faz sentido só "no final" (a mudança precisa ser rastreada o tempo todo), e GCS não começa só depois da entrega, ela acompanha o software desde o início.',
    alternativas: [
      { letra: 'A', texto: 'I e II.' },
      { letra: 'B', texto: 'II e III.' },
      { letra: 'C', texto: 'III e IV.' },
      { letra: 'D', texto: 'I, II e IV.' },
      { letra: 'E', texto: 'I, III e IV.' },
    ],
    gabarito: 'A',
    explicacao:
      'I e II descrevem corretamente controle de versão e auditoria de configuração. III erra ao dizer que o relatório de status "deve ser gerado ao final do processo" (é contínuo, não só no fim). ' +
      'IV erra ao dizer que a GCS só começa depois da entrega ao cliente (ela acompanha o software desde o desenvolvimento).',
  },
  {
    id: 'engenharia-10',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 23 (oficial)',
    enunciado:
      'A evolução de sistemas legados se divide em manutenção, modernização e substituição. Um ERP (conjunto de módulos que integra todos os departamentos de uma empresa) já implantado precisa de um novo relatório gerencial de comissão da equipe de vendas, uma necessidade de negócio que surgiu depois da implantação.\n\n' +
      'Nesse contexto, a manutenção a ser realizada é:',
    dica: 'Não é um defeito sendo corrigido, nem uma adaptação a um novo ambiente técnico, nem prevenção: é uma funcionalidade nova pedida pelo negócio.',
    alternativas: [
      { letra: 'A', texto: 'corretiva.' },
      { letra: 'B', texto: 'evolutiva.' },
      { letra: 'C', texto: 'funcional.' },
      { letra: 'D', texto: 'preventiva.' },
      { letra: 'E', texto: 'adaptativa.' },
    ],
    gabarito: 'B',
    explicacao:
      'Criar um relatório novo por causa de uma necessidade de negócio que surgiu é manutenção evolutiva (adiciona funcionalidade nova). Corretiva corrige defeito, adaptativa ajusta a um novo ambiente/tecnologia, preventiva antecipa problema futuro: nenhuma delas é o caso aqui.',
  },
  {
    id: 'engenharia-11',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 24 (oficial)',
    enunciado:
      'Um sistema de delivery foi modelado em UML. O analista de teste definiu:\n\n' +
      '01. Verificar se o método "Finalizar Pedido" da classe "Pedido" funciona corretamente.\n' +
      '02. Garantir que o sistema funcione corretamente em diferentes navegadores de internet.\n' +
      '03. O sistema deve passar por testes rigorosos na estrutura lógica interna do software.\n' +
      '04. O sistema deve garantir, no mínimo, o registro de 100 pedidos simultâneos.\n' +
      '05. O usuário deve testar o sistema em ambiente controlado, sob supervisão dos desenvolvedores.\n\n' +
      'Avalie:\n' +
      'I. A descrição 01 deve ser verificada com teste unitário.\n' +
      'II. A descrição 02 deve ser executada com a abordagem caixa-branca.\n' +
      'III. A descrição 03 deve ser executada com a abordagem caixa-preta.\n' +
      'IV. A descrição 04 deve ser verificada com teste de carga.\n' +
      'V. A descrição 05 deve ser classificada como teste alfa.\n\n' +
      'É correto apenas o que se afirma em:',
    dica: 'Caixa-branca olha a estrutura interna do código; caixa-preta olha só o comportamento externo. Compatibilidade entre navegadores é comportamento externo, não estrutura interna.',
    alternativas: [
      { letra: 'A', texto: 'II e III.' },
      { letra: 'B', texto: 'I, II e IV.' },
      { letra: 'C', texto: 'I, III e V.' },
      { letra: 'D', texto: 'I, IV e V.' },
      { letra: 'E', texto: 'II, III, IV e V.' },
    ],
    gabarito: 'D',
    explicacao:
      'I: testar um método isolado é teste unitário, correto. IV: garantir 100 pedidos simultâneos é teste de carga, correto. V: teste supervisionado pelos desenvolvedores em ambiente controlado é teste alfa, correto. ' +
      'II e III estão trocadas: compatibilidade de navegador (comportamento externo) é caixa-preta, e estrutura lógica interna é caixa-branca, o oposto do que as afirmações dizem.',
  },
  {
    id: 'engenharia-12',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 25 (oficial)',
    enunciado:
      'Uma empresa de piscicultura precisa, com extrema urgência, de um sistema pra gerenciar a criação de peixes (alevino, engorda, venda), sem nenhuma solução existente ainda.\n\n' +
      'Avalie:\n' +
      'I. Deve-se adotar um processo baseado no modelo cascata, pois ele se adapta melhor a cenários com muitas mudanças.\n' +
      'II. Por ser uma aplicação de escopo pequeno, o modelo espiral deve ser usado, já que reduz riscos por prototipação e diminui o tempo de entrega.\n' +
      'III. O modelo incremental deve ser usado, já que partes do sistema (fase inicial dos peixes) podem ser entregues enquanto outras partes ainda estão em concepção/desenvolvimento.\n' +
      'IV. Pela extrema urgência, a empresa deve usar o modelo RAD (Rapid Application Development).\n\n' +
      'É correto apenas o que se afirma em:',
    dica: 'Cascata é justamente o modelo que NÃO lida bem com muita mudança. E espiral é mais associado a projeto grande e de alto risco, não a "escopo pequeno".',
    alternativas: [
      { letra: 'A', texto: 'I.' },
      { letra: 'B', texto: 'IV.' },
      { letra: 'C', texto: 'I e II.' },
      { letra: 'D', texto: 'II e III.' },
      { letra: 'E', texto: 'III e IV.' },
    ],
    gabarito: 'E',
    explicacao:
      'III (incremental permite entregar partes prontas enquanto o resto é construído) e IV (RAD é voltado pra entrega rápida sob urgência) descrevem corretamente os modelos indicados. ' +
      'I erra: cascata é rígido, ruim pra cenário de muita mudança. II erra: espiral é associado a projetos grandes/de alto risco, não a escopo pequeno.',
  },
  {
    id: 'engenharia-13',
    topicoId: 'engenharia-software',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 33 (oficial)',
    enunciado:
      'O Modelo de Maturidade da Capacidade (CMMi) descreve práticas, processos e atividades de gestão, guiando o melhoramento do processo de software. Avalie:\n\n' +
      'I. A maturidade implica no crescimento da capacidade e indica a efetividade do processo de software e o grau de consistência com que é aplicado nos diferentes projetos da organização.\n' +
      'II. A maturidade do processo de software implica melhorias contínuas baseadas em etapas evolutivas caracterizadas pela capacidade de inovação e absorção de novas tecnologias.\n' +
      'III. A maturidade implica institucionalização por meio de políticas e padrões organizacionais, levando a uma cultura corporativa de métodos, práticas e procedimentos com efetividade plenamente reconhecida.\n' +
      'IV. Cada nível do CMMi implica na satisfação de um conjunto de metas de processo que estabilizam um componente importante do processo de software e representa seu estágio de maturidade.\n\n' +
      'É correto apenas o que se afirma em:',
    dica: 'CMMi é sobre disciplina e institucionalização de processo, não especificamente sobre "quão rápido a empresa adota tecnologia nova". Uma das quatro afirmações confunde essas duas ideias.',
    alternativas: [
      { letra: 'A', texto: 'III.' },
      { letra: 'B', texto: 'I e II.' },
      { letra: 'C', texto: 'II e IV.' },
      { letra: 'D', texto: 'I, III e IV.' },
      { letra: 'E', texto: 'I, II, III e IV.' },
    ],
    gabarito: 'D',
    explicacao:
      'I, III e IV descrevem corretamente o conceito de maturidade de processo do CMMi (consistência entre projetos, institucionalização via políticas, e níveis com metas de processo). ' +
      'II erra ao definir maturidade como "capacidade de inovação e absorção de tecnologia", que não é o critério central do CMMi (o foco é disciplina e institucionalização de processo, não velocidade de adoção tecnológica).',
  },
]
