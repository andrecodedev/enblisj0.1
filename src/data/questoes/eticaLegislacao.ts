import type { Questao } from '../../types'

export const questoesEticaLegislacao: Questao[] = [
  {
    id: 'etica-1',
    topicoId: 'etica-cidadania-digital',
    tipo: 'discursiva',
    fonte: 'Workshop ENADE - Oficina 2 (a partir de questão real de prova)',
    enunciado:
      'Texto de referência: exclusão digital é a falta de acesso a Tecnologias de Informação e Comunicação (TICs) por motivos sociais, econômicos, políticos ou culturais. ' +
      'Avalie cada afirmação abaixo como correta ou errada, com justificativa:\n\n' +
      '1. O mapeamento da exclusão digital ajuda gestores a escolher o público-alvo de políticas de inclusão digital.\n' +
      '2. As TICs cumprem papel social ao dar acesso a quem teve o direito negado, permitindo mobilidade social e econômica.\n' +
      '3. O direito à informação seria diferente dos direitos sociais (um trataria da relação indivíduo-indivíduo, outro de indivíduo-conhecimento).\n' +
      '4. O maior problema de acesso digital no Brasil é a falta de tecnologia disponível no país.',
    dica:
      'Duas afirmações contradizem o texto de referência (que fala em direito social e em problema de acesso, não de existência de tecnologia). Ache essas duas primeiro, as outras duas seguem o raciocínio direto do texto.',
    respostaEsperada:
      '1. Correta: mapear a exclusão digital é o que permite direcionar política pública pra quem precisa.\n' +
      '2. Correta: TICs dão acesso a educação e oportunidade de empreendedorismo, funcionando como fator de mobilidade social.\n' +
      '3. Errada: direito à informação é um direito social (ver LGPD, dados abertos do governo), não uma categoria à parte.\n' +
      '4. Errada: o Brasil tem a tecnologia disponível, o problema é de acesso e inclusão, não de existência da tecnologia no país.',
    explicacao:
      'Esse é o formato "julgue as afirmativas" comum no ENADE: eliminar rápido as que contradizem o texto (3 e 4) já facilita achar o padrão certo entre as restantes.',
  },
  {
    id: 'etica-2',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'Workshop ENADE - Oficina 2 (a partir de questão real de prova)',
    enunciado:
      'Texto de referência: a cibercultura é comparada aos ideais do Iluminismo (séc. XVII/XVIII): liberdade, igualdade, fraternidade. ' +
      'Igualdade seria a possibilidade de cada um transmitir a todos (mídias eletrônicas); liberdade, os softwares de codificação e acesso a múltiplas comunidades virtuais; fraternidade, a interconexão mundial. ' +
      'Qual alternativa reflete o texto?',
    dica:
      'O texto compara a cibercultura a um ideal antigo (Iluminismo), não descreve uma ruptura com ele. Procure a alternativa que fala de continuidade e compartilhamento, não de isolamento ou negação.',
    alternativas: [
      { letra: 'A', texto: 'A cibercultura é um fenômeno pós-moderno que nega os valores iluministas.' },
      { letra: 'B', texto: 'A cibercultura banalizou a ciência.' },
      { letra: 'C', texto: 'A cibercultura valorizou o isolamento do indivíduo.' },
      {
        letra: 'D',
        texto: 'A cibercultura incorpora valores do Iluminismo ao favorecer o compartilhamento de informação e conhecimento.',
      },
    ],
    gabarito: 'D',
    explicacao:
      'O texto diz o oposto de A (é continuidade dos ideais iluministas, não negação). B não foi dito no texto. C é contrário ao texto, que fala de compartilhamento e comunidades, não isolamento. ' +
      'A ideia central é que a cibercultura não é um fenômeno totalmente novo: é extensão de ideais de 200-300 anos atrás, o que mudou foram os dispositivos de compartilhamento.',
  },
  {
    id: 'etica-3',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'Workshop ENADE - Oficina 2 (a partir de questão real de prova, formato asserção-razão)',
    enunciado:
      'Contexto: linha histórica da educação no Brasil (Escola Novista na Primeira República, reformas Campos/Capanema no período getulista, LDB de 1961, Constituição de 1988 garantindo educação universal no art. 208).\n\n' +
      'Asserção I: a relação entre educação e cidadania se estabelece pela universalização da educação como condição pra consolidar a democracia.\n' +
      'Asserção II: por meio dos poderes executivo e legislativo, o século XX passou a garantir o direito de acesso à educação, inclusive a modalidade EJA.\n\n' +
      'A respeito dessas asserções, assinale a alternativa correta.',
    dica:
      'Cheque se o enunciado menciona "na prática" ou "efetividade real" em algum momento. Se não menciona, a leitura correta é conceitual, e a asserção II justifica normalmente a I.',
    alternativas: [
      { letra: 'A', texto: 'As asserções I e II são verdadeiras, e a II é uma justificativa correta da I.' },
      { letra: 'B', texto: 'As asserções I e II são verdadeiras, e a II não é uma justificativa correta da I.' },
      { letra: 'C', texto: 'A asserção I é verdadeira, e a II é falsa.' },
      { letra: 'D', texto: 'A asserção I é falsa, e a II é verdadeira.' },
      { letra: 'E', texto: 'As asserções I e II são falsas.' },
    ],
    gabarito: 'A',
    explicacao:
      'Pegadinha: na prática a universalização não aconteceu por completo (sucateamento de escolas, analfabetismo funcional), o que tenta empurrar pra "B" (as duas verdadeiras, mas a II não justificando a I). ' +
      'Critério de desempate: como o enunciado não menciona nada sobre "na prática" ou "efetividade real", a leitura é conceitual, não factual. Pela leitura conceitual do texto, a II justifica a I normalmente.',
  },
  {
    id: 'etica-4',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'Workshop ENADE - Oficina 2 (a partir de questão real de prova)',
    enunciado:
      'Dados de desmatamento na Amazônia Legal (IMAZON, 2011): 99 km² em junho/2011 (queda de 42% frente a junho/2010); acumulado de agosto/2010 a junho/2011 de 1.534 km² (alta de 15% frente ao período anterior); ' +
      'Mato Grosso responde por 38%, Pará por 25% e Rondônia por 21% do total desmatado no período. Qual alternativa está correta?',
    dica:
      'Confira cada número contra o texto antes de confiar na alternativa: alguns dados citados nas opções simplesmente não aparecem no texto de referência. Quando a afirmação somar percentuais, faça a conta.',
    alternativas: [
      { letra: 'A', texto: 'Não houve aumento no desmatamento no último ano.' },
      { letra: 'B', texto: 'O Amapá tem alta taxa de desmatamento no período.' },
      { letra: 'C', texto: 'O desmatamento de junho de 2010 foi de 140 km².' },
      { letra: 'D', texto: 'Três estados responderam por 84% do desmatamento no período (Mato Grosso, Pará e Rondônia).' },
    ],
    gabarito: 'D',
    explicacao:
      '38% + 25% + 21% = 84%, batendo com a alternativa D. A é falsa (houve alta de 15% no acumulado). B é falsa (Amapá nem aparece entre os três líderes). ' +
      'C é falsa (esse dado não existe no texto de referência). Lição: some os percentuais do texto quando a alternativa fizer uma afirmação numérica agregada.',
  },
  {
    id: 'etica-5',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 1 (oficial)',
    enunciado:
      'A chance de uma criança de baixa renda ter um futuro melhor está relacionada à escolaridade e à renda dos pais. Nos países ricos, o "elevador social" anda mais rápido; no Brasil, mais devagar. ' +
      'Segundo estudo da OCDE (2018, 30 países), seriam necessárias nove gerações para que descendentes de um brasileiro entre os 10% mais pobres atingissem o nível médio de rendimento do país (só perde pra Colômbia, com 11 gerações). ' +
      'Mais de 1/3 dos que nascem entre os 20% mais pobres no Brasil permanece na base da pirâmide, e só 7% chega aos 20% mais ricos. Filhos de pais na base da pirâmide têm dificuldade de acesso à saúde e maior chance de escola de baixa qualidade, ' +
      'o que limita opções no mercado de trabalho: sobram empregos de baixa remuneração, com pouca chance de crescimento salarial e grande chance de perpetuar o ciclo de pobreza.\n\n' +
      'A partir das informações apresentadas, é correto afirmar que:',
    dica:
      'O texto fala de saúde precária e educação de baixa qualidade travando o acesso a emprego melhor, não de organização social, genética entre gerações ou natalidade.',
    alternativas: [
      { letra: 'A', texto: 'O fator ambiental e o fator demográfico afetam a mobilidade social observada, sendo ela menor nos países que apresentam as maiores taxas de natalidade.' },
      { letra: 'B', texto: 'A baixa organização social dos economicamente menos favorecidos determina a baixa mobilidade social da base para o topo da pirâmide.' },
      { letra: 'C', texto: 'A mobilidade social é caracterizada por um fator ancestral que se revela ao longo das gerações, sendo um limitador da eficácia de políticas públicas de redução das desigualdades sociais.' },
      { letra: 'D', texto: 'A análise de mobilidade social permite a observação de um ciclo vicioso, que se caracteriza por uma subida nas camadas sociais seguida de uma queda, repetindo-se esse ciclo de modo sucessivo.' },
      { letra: 'E', texto: 'A ascensão social depende de fatores viabilizadores que estão fora do alcance das camadas pobres, o que ocasiona conflitos sociais em busca do acesso a tais fatores.' },
    ],
    gabarito: 'E',
    explicacao:
      'O texto liga a baixa mobilidade a fatores concretos fora do alcance dos mais pobres (acesso à saúde, educação de qualidade), que travam a ascensão social: é o que a alternativa E descreve. ' +
      'A fala de natalidade (não mencionada), B culpa a "organização social" dos pobres (o texto aponta causas estruturais, não de organização), C fala de fator "ancestral"/genético (não é isso que o texto descreve), D descreve um ciclo de subida-e-queda que não é o retrato dado (o texto mostra estagnação na base, não oscilação).',
  },
  {
    id: 'etica-6',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 2 (oficial, formato asserção-razão)',
    enunciado:
      'Texto I (infográfico Embrapa): hortaliça "está estragada" se amassada, machucada, quebrada ou sem coloração apropriada; é "feia" (mas própria pro consumo) se o formato foge do padrão ou tem pequena cicatriz superficial.\n\n' +
      'Texto II: na Europa, permite-se comercializar produto de menor valor estético (pepino deformado, cebola pequena), mas não contaminado. No Brasil, o problema vai além da aparência: há hortaliça contaminada, murcha ou machucada chegando às bancas. ' +
      'Não adianta replicar a exigência estética europeia no Brasil (geraria perda ainda na produção). A solução é conscientizar a cadeia produtiva sobre quais aspectos da aparência realmente comprometem a qualidade: quanto maior a exigência por aparência perfeita, maior o desperdício; quanto maior a exigência por ausência de dano real (falta de cuidado/higiene), menor a perda e maior a qualidade da alimentação.\n\n' +
      'Avalie as asserções:\n\n' +
      'I. O texto I sintetiza uma informação principal do texto II, ao apresentar critérios distintivos de alterações visuais que têm efeito puramente estético daquelas que têm implicação na qualidade dos produtos.\n\n' +
      'PORQUE\n\n' +
      'II. O texto II divulga que o aumento das perdas na cadeia produtiva de hortaliças no Brasil é proporcional à elevação de exigências dos consumidores pela aparência de produtos agropecuários.\n\n' +
      'Assinale a opção correta.',
    dica:
      'O texto II descreve essa relação proporcional (mais exigência estética = mais perda) pro contexto europeu, não como um retrato do que já acontece no Brasil. O problema brasileiro descrito é outro: contaminação e falta de higiene, não excesso de exigência estética do consumidor.',
    alternativas: [
      { letra: 'A', texto: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.' },
      { letra: 'B', texto: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.' },
      { letra: 'C', texto: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { letra: 'D', texto: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' },
      { letra: 'E', texto: 'As asserções I e II são proposições falsas.' },
    ],
    gabarito: 'C',
    explicacao:
      'I é verdadeira: o Texto I ("estragada" x "feia") realmente resume a distinção central do Texto II entre alteração que afeta qualidade e alteração puramente estética. ' +
      'II é falsa: o Texto II não afirma que as perdas no Brasil crescem proporcionalmente à exigência estética do consumidor; ele descreve que o problema brasileiro é distinto (contaminação, falta de higiene), não uma relação de proporcionalidade já em curso no país.',
  },
  {
    id: 'etica-7',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 3 (oficial)',
    enunciado:
      'Texto I: na Alemanha nazista, durante a 2ª Guerra, a bicicleta virou empecilho pro carro, forçando espaços exclusivos pra ela (talvez as primeiras ciclovias do mundo). Hoje, bicicleta e ciclovia são alternativa pra melhorar qualidade de vida nas metrópoles.\n\n' +
      'Texto II: charge mostra um ciclista numa ciclofaixa sendo provocado por ocupantes de um carro que passa ao lado, com placas irônicas "CICLOVIAS..." e "CICLOFAIXAS...".\n\n' +
      'Considerando o uso de bicicletas como alternativa pra melhorar a qualidade de vida nas cidades, avalie:\n\n' +
      'I. Como bicicletas ocupam pouco espaço na malha viária, dispensa-se investimento público em ciclovia, priorizando campanha de conscientização de motorista.\n' +
      'II. O uso de bicicleta contribui pra melhorar a qualidade de vida nas metrópoles, pois não emite poluente e proporciona atividade física.\n' +
      'III. A partir da 2ª Guerra, no governo nazista, o uso da bicicleta tornou-se eficaz e passou a prevalecer nas cidades europeias.\n\n' +
      'É correto o que se afirma em:',
    dica: 'O texto conta que na Alemanha nazista o carro tinha prioridade e a bicicleta era vista como empecilho, não que a bicicleta passou a "prevalecer" nas cidades europeias a partir daí.',
    alternativas: [
      { letra: 'A', texto: 'I, apenas.' },
      { letra: 'B', texto: 'II, apenas.' },
      { letra: 'C', texto: 'I e III, apenas.' },
      { letra: 'D', texto: 'II e III, apenas.' },
      { letra: 'E', texto: 'I, II e III.' },
    ],
    gabarito: 'B',
    explicacao:
      'II é a única correta: bike não polui e favorece atividade física, ideia central do texto. I extrapola o texto (que não dispensa investimento em ciclovia, pelo contrário). ' +
      'III inverte o fato histórico: o texto diz que o carro era prioridade e a bike um "empecilho" na Alemanha nazista, não que a bike passou a prevalecer nas cidades europeias a partir dali.',
  },
  {
    id: 'etica-8',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 4 (oficial, formato asserção-razão)',
    enunciado:
      'A Gig Economy (economia dos bicos) é a tendência de contratar freelancer via app (delivery, mobilidade urbana). Pras empresas de tecnologia, os motoristas são autônomos sem vínculo empregatício: sem regulamentação/proteção legal, ' +
      'sem contribuir pra Previdência, sem FGTS/férias/décimo terceiro, e ainda arcam com todo custo da atividade. Motoristas relatam problema de coluna, estresse no trânsito e jornada longa.\n\n' +
      'Avalie as asserções:\n\n' +
      'I. Trabalhadores autônomos informais que atuam em plataforma digital sem vínculo empregatício, desprotegidos de regulamentação/lei trabalhista, compõem a Gig Economy.\n\n' +
      'PORQUE\n\n' +
      'II. Na Gig Economy, os trabalhadores arcam com todos os custos necessários pra desempenhar o trabalho, ganham por produção e enfrentam jornada longa, o que os deixa mais desgastados e com problema de saúde.\n\n' +
      'Assinale a opção correta.',
    dica: 'Pergunte: a asserção II explica POR QUE a Gig Economy é definida daquele jeito na asserção I, ou só descreve mais uma característica separada dela?',
    alternativas: [
      { letra: 'A', texto: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.' },
      { letra: 'B', texto: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.' },
      { letra: 'C', texto: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { letra: 'D', texto: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' },
      { letra: 'E', texto: 'As asserções I e II são proposições falsas.' },
    ],
    gabarito: 'B',
    explicacao:
      'I é verdadeira (é a definição de Gig Economy dada no texto) e II também é verdadeira (descreve consequências reais relatadas pelos motoristas). Mas II não é a razão/justificativa de I: I é uma definição, II é uma consequência/característica adicional, não a causa de a Gig Economy ser definida daquele jeito.',
  },
  {
    id: 'etica-9',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 5 (oficial)',
    enunciado:
      'Em 2017, o Brasil teve média de 5,7 óbitos por suicídio a cada 100 mil habitantes; na população indígena, 15,2 (quase 3x a média nacional), sendo 44,8% desses óbitos indígenas de crianças/adolescentes de 10 a 19 anos. ' +
      'Isso contrasta com o panorama nacional, cujo maior índice de suicídio é entre 15 e 20 anos. Um mapa mostra concentração de casos de suicídio indígena (10-14 anos) sobretudo nas regiões do Acre/sudoeste do Amazonas e do Mato Grosso do Sul, com pontos isolados menores em Tocantins e Pernambuco/Rio Grande do Norte.\n\n' +
      'Avalie:\n' +
      'I. O elevado índice de suicídio entre criança/adolescente indígena evidencia necessidade de ação com foco nos direitos fundamentais desses indivíduos.\n' +
      'II. Os estados do Pará e Tocantins são os que possuem os maiores índices de suicídio indígena de 10 a 14 anos.\n' +
      'III. Os povos das tribos originárias do Brasil não estão amparados por direitos e garantias constitucionais quanto à sua história e preservação cultural.\n' +
      'IV. Ações preventivas na comunidade indígena devem considerar os elementos globais que afetam a população em geral, na faixa de 15 a 20 anos.\n\n' +
      'É correto apenas o que se afirma em:',
    dica: 'O mapa concentra os casos em outras regiões (Acre e Mato Grosso do Sul), não em Pará/Tocantins. E o texto compara o padrão indígena (10-19) como diferente do padrão nacional (15-20), não igual a ele.',
    alternativas: [
      { letra: 'A', texto: 'I.' },
      { letra: 'B', texto: 'II.' },
      { letra: 'C', texto: 'I e III.' },
      { letra: 'D', texto: 'II e IV.' },
      { letra: 'E', texto: 'III e IV.' },
    ],
    gabarito: 'A',
    explicacao:
      'Só I é correta. II é falsa: o mapa concentra os casos no Acre/sudoeste do Amazonas e Mato Grosso do Sul, não em Pará/Tocantins. III é falsa: a Constituição garante direitos aos povos indígenas (ex: art. 231). ' +
      'IV é falsa: o texto justamente distingue o padrão indígena (pico entre 10-19 anos) do padrão nacional (pico entre 15-20), então a prevenção precisa considerar a especificidade indígena, não só os elementos gerais da faixa 15-20.',
  },
  {
    id: 'etica-10',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 6 (oficial, formato asserção-razão)',
    enunciado:
      'A pandemia de Covid-19 intensificou problemas sociais. Nos EUA, a expectativa de vida caiu 1,1 ano em 2020 (nova expectativa: 77,4 anos), a maior queda anual em 40 anos. Pra população negra, a queda foi de 2,1 anos; pra latina, de 3 anos, ' +
      'mesmo os latinos tendo menor incidência de condição crônica de risco pra Covid-19 em relação a brancos e negros.\n\n' +
      'Avalie as asserções:\n\n' +
      'I. O efeito desproporcional da pandemia na expectativa de vida da população negra e latino-americana se relaciona à sua situação de vulnerabilidade social.\n\n' +
      'PORQUE\n\n' +
      'II. Uma hipótese é que a queda de expectativa de vida de negros e latino-americanos se relaciona às suas condições precárias de trabalho, que aumentam a exposição ao contágio.\n\n' +
      'Assinale a opção correta.',
    dica: 'Condição precária de trabalho é um tipo específico de vulnerabilidade social. Veja se uma frase encaixa como razão concreta da outra, mais geral.',
    alternativas: [
      { letra: 'A', texto: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.' },
      { letra: 'B', texto: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.' },
      { letra: 'C', texto: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { letra: 'D', texto: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' },
      { letra: 'E', texto: 'As asserções I e II são proposições falsas.' },
    ],
    gabarito: 'A',
    explicacao:
      'Ambas as asserções são verdadeiras e a II justifica a I: condição precária de trabalho (mais exposição ao contágio) é um mecanismo concreto de como a vulnerabilidade social (I) se traduz na queda de expectativa de vida observada.',
  },
  {
    id: 'etica-11',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 7 (oficial)',
    enunciado:
      'Texto I: em 2009, metade das buscas de saúde na internet era feita pra terceiros, e boa parte de quem buscou mudou o enfoque de cuidado com a própria saúde ou de um parente. ' +
      'Há correlação positiva entre conhecimento sobre doença e adoção de hábito saudável (ex: mais diagnóstico precoce de câncer de mama, menos tabagismo). Mas a divulgação de tema médico é "faca de dois gumes": quem não sabe nada às vezes está mais perto da verdade do que quem tem a mente cheia de informação equivocada.\n\n' +
      'Texto II: cerca de 46% dos usuários de internet no Brasil buscam informação de saúde. Uma pesquisadora da Fiocruz alerta pro perigo do autodiagnóstico e da automedicação, que podem trazer consequência ruim, já que boa parte das buscas não usa critério algum.\n\n' +
      'Avalie:\n' +
      'I. Os textos I e II evidenciam a importância de critério nas buscas por informação de saúde na internet, pois informação errada pode trazer risco por fomentar compreensão equivocada de sintoma/profilaxia.\n' +
      'II. O texto I afirma que a disponibilização de informação de saúde nos meios de comunicação tem contribuído pro esclarecimento da população sobre hábito saudável.\n' +
      'III. No texto II, defende-se o acesso a informação de pesquisa de saúde nos meios de comunicação, pois permite que o indivíduo seja proativo na prevenção de doença.\n\n' +
      'É correto o que se afirma em:',
    dica: 'O texto II é majoritariamente um alerta sobre o perigo do autodiagnóstico, não uma defesa aberta do acesso à informação de saúde.',
    alternativas: [
      { letra: 'A', texto: 'I, apenas.' },
      { letra: 'B', texto: 'III, apenas.' },
      { letra: 'C', texto: 'I e II, apenas.' },
      { letra: 'D', texto: 'II e III, apenas.' },
      { letra: 'E', texto: 'I, II e III.' },
    ],
    gabarito: 'C',
    explicacao:
      'I é verdadeira (os dois textos alertam pra importância de critério). II é verdadeira: o Texto I cita a correlação positiva entre informação e hábito saudável, com exemplos concretos (diagnóstico precoce, menos tabagismo). ' +
      'III é falsa: o Texto II tem tom de alerta (perigo do autodiagnóstico/automedicação), não de defesa irrestrita do acesso à informação de saúde nos meios de comunicação.',
  },
  {
    id: 'etica-12',
    topicoId: 'etica-cidadania-digital',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 8 (oficial)',
    enunciado:
      'Na democracia majoritária, governa-se pra maioria do povo. Na democracia consensual (Arend Lijphart), busca-se governar pro máximo possível de pessoas, com consenso mais amplo sobre o que interessa a todos, ' +
      'exigindo liderança política mais madura tanto no governo quanto na oposição.\n\n' +
      'Avalie:\n' +
      'I. O bem comum a ser estabelecido por um governo democrático nem sempre está associado às opiniões da maioria do povo.\n' +
      'II. A democracia consensual é caracterizada pelo consenso a ser alcançado entre situação e oposição, nas decisões governamentais.\n' +
      'III. Circunstância política de polarização, marcada por alta competitividade/combatividade entre posições divergentes, caracteriza um modelo de democracia majoritária.\n' +
      'IV. Democracia consensual pressupõe que a situação política no poder considere, em suas decisões, as necessidades das minorias, no sentido de governar para todo o povo.\n\n' +
      'É correto apenas o que se afirma em:',
    dica: 'A definição do texto pra democracia consensual é "governar pro máximo possível de pessoas", não especificamente "consenso entre situação e oposição". Uma das afirmações estreita esse conceito de um jeito que o texto não diz.',
    alternativas: [
      { letra: 'A', texto: 'I e II.' },
      { letra: 'B', texto: 'I e IV.' },
      { letra: 'C', texto: 'II e III.' },
      { letra: 'D', texto: 'I, III e IV.' },
      { letra: 'E', texto: 'II, III e IV.' },
    ],
    gabarito: 'D',
    explicacao:
      'I é verdadeira: o bem comum buscado na democracia consensual não é simplesmente a opinião da maioria. III é verdadeira: polarização/combatividade combina mais com o modelo de "governar pra maioria" (majoritário). ' +
      'IV é verdadeira: bate com a definição de "governar pro máximo possível de pessoas", incluindo minoria. II é falsa: o texto define consensual como "governar pro máximo de pessoas", não especificamente como um consenso formal entre situação e oposição.',
  },
]
