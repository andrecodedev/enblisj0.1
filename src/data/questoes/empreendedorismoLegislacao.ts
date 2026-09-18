import type { Questao } from '../../types'

export const questoesEmpreendedorismoLegislacao: Questao[] = [
  {
    id: 'empreendedorismo-1',
    topicoId: 'empreendedorismo-legislacao',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 26 (oficial)',
    enunciado:
      'A Lei Geral de Proteção de Dados Pessoais (LGPD, Lei 13.709/2018) dispõe sobre o tratamento de dados pessoais no Brasil, com o objetivo de proteger os direitos fundamentais de liberdade e privacidade e o livre desenvolvimento da personalidade da pessoa natural.\n\n' +
      'Acerca das providências dispostas no art. 2º da LGPD, assinale os fundamentos da disciplina da proteção de dados pessoais.',
    dica:
      'O texto oficial da lei junta proteção individual (privacidade, intimidade) com valores econômicos (inovação, livre concorrência) e coletivos (direitos humanos, cidadania). Procure a alternativa que cobre esses três lados sem inventar conceito que não é da LGPD.',
    alternativas: [
      {
        letra: 'A',
        texto:
          'O direito ao usuário; das obrigações das organizações nacionais ou estrangeiras; obrigatoriedade do consentimento; a livre iniciativa, a livre concorrência e a defesa do consumidor; os direitos humanos, o livre desenvolvimento da personalidade, a dignidade e o exercício da cidadania pelas pessoas naturais e regulação da Autoridade Nacional de Proteção de Dados Pessoais (ANPD).',
      },
      {
        letra: 'B',
        texto:
          'O direito à revogação de um consentimento; a transferência de dados para outro fornecedor de serviços; a solicitação da remoção de dados pessoais; a inviolabilidade da intimidade, da honra e da imagem; o desenvolvimento econômico e tecnológico e inovação; a preservação da vida e da integridade física de uma pessoa.',
      },
      {
        letra: 'C',
        texto:
          'O respeito à privacidade; obrigatoriedade do consentimento; os deveres e obrigações dos usuários finais; os deveres e obrigações das organizações nacionais ou estrangeiras; a observação ao código de defesa do consumidor; e, a obrigatoriedade do respeito à honra e à imagem.',
      },
      {
        letra: 'D',
        texto:
          'O direito ao anonimato; a liberdade de expressão; a inviolabilidade da intimidade; a adoção de medidas preventivas de segurança; o direito ao recurso e revisão; a administração de riscos e falhas; o estabelecimento de agentes de tratamento; e, regulação da Autoridade Nacional de Proteção de Dados Pessoais (ANPD).',
      },
      {
        letra: 'E',
        texto:
          'O respeito à privacidade; a autodeterminação informativa; a liberdade de expressão, de informação, de comunicação e de opinião; a inviolabilidade da intimidade, da honra e da imagem; o desenvolvimento econômico e tecnológico e a inovação; a livre iniciativa, a livre concorrência e a defesa do consumidor; e, os direitos humanos, o livre desenvolvimento da personalidade, dignidade e o exercício da cidadania pelas pessoas naturais.',
      },
    ],
    gabarito: 'E',
    explicacao:
      'E reproduz literalmente os fundamentos do art. 2º da LGPD: privacidade, autodeterminação informativa, liberdade de expressão/informação/comunicação/opinião, inviolabilidade da intimidade/honra/imagem, desenvolvimento econômico/tecnológico/inovação, livre iniciativa/concorrência/defesa do consumidor, e direitos humanos/dignidade/cidadania. ' +
      'As outras alternativas misturam conceitos de outros artigos da lei (consentimento, direitos do titular, agentes de tratamento) que não são os "fundamentos" listados no art. 2º.',
  },
  {
    id: 'empreendedorismo-2',
    topicoId: 'empreendedorismo-legislacao',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 32 (oficial)',
    enunciado:
      'O Business Model Canvas (Osterwalder) é uma ferramenta de modelagem de negócios muito usada por startups, dividida em 9 componentes que cobrem clientes, oferta, infraestrutura e viabilidade financeira: segmentos de clientes, proposta de valor, canais, relacionamento com cliente, fontes de receita, recursos principais, atividades-chave, parcerias principais e estrutura de custo.\n\n' +
      'Diante desse contexto, conclui-se que as startups:',
    dica: 'O Canvas serve pra validar a ideia de negócio antes de formalizar um plano de negócios completo, em qualquer segmento, sem exceção.',
    alternativas: [
      { letra: 'A', texto: 'financeiras desenvolvem primeiro o plano de negócios, para em seguida partir para o Canvas.' },
      { letra: 'B', texto: 'de big data utilizam o Canvas para a modelagem da validação da ideia de negócio, ou seja, do problema a ser resolvido.' },
      { letra: 'C', texto: 'de educação dispensam a utilização do Canvas, ou seja, os modelos de negócios deste segmento já nascem validados.' },
      { letra: 'D', texto: 'de logística utilizam o plano de negócios ao invés do Canvas, ou seja, elas nascem a partir de um produto mínimo viável (MVP).' },
      { letra: 'E', texto: 'de impacto social podem desconsiderar o componente 1 (segmentos de clientes), pois possuem somente um segmento.' },
    ],
    gabarito: 'B',
    explicacao:
      'O Canvas é usado justamente pra validar a ideia/problema de negócio antes de qualquer plano formal, em qualquer segmento (inclusive big data). ' +
      'As demais alternativas inventam exceções que contrariam essa lógica: nenhum segmento (financeiro, educação, logística, impacto social) fica de fora do uso do Canvas ou dos seus 9 componentes, incluindo segmentos de clientes.',
  },
]
